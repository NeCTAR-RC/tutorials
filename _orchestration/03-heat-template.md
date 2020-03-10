---
title: Heat Template
order: 3
duration: 20
---

### Template Format

Heat is modelled after Amazon's CloudFormation service, and endeavours to maintain some degree of compatibility with this service. Hence Heat supports two different template formats:

- JSON based implementation that mimics then Amazon specification
- YAML based native OpenStack implementation termed `HOT`

It is recommended to use the `HOT` format.

### Template Sections

A Heat template is divided into several sections. These are the sections that will typically appear in a Heat template:

- `heat_template_version`: A field that allows you to specify which version of Heat the template was written for (optional)
- `description`: A field that allows you to describe the intent of the template to a human audience (optional)
- `parameters`: The specification of any arguments that the user might be required to provide (optional)
- `resources`: The specification of the OpenStack resources that are to be created (mandatory)
- `outputs`: Any expected values that are to be returned once the template has been processed (optional)

### Template Example

In the following example, we are going to present a template that will install the Apache web server on a single Ubuntu instance. To find more template examples to you can visit [Nectar sample template repository](https://github.com/NeCTAR-RC/heat-templates).

```bash
heat_template_version: 2014-10-16

description: A NeCTAR sample template that installs Apache on a single Ubuntu instance using the AWS::EC2::Instance resource type.

parameters:
  key_name:
    type: string
    description: Name of an existing KeyPair to enable SSH access to the instances
  instance_type:
    type: string
    description: The NeCTAR flavour the webserver is to run on
    default: m2.xsmall
    constraints:
      - allowed_values: [m2.xsmall, m2.small, m1.small]
    description: Must be a valid NeCTAR flavour, limited to the smaller ones available
    image_name:
      type: string
      description: Name of the image to use for the instance to be created
      default: 'Ubuntu 14.04'
      constraints:
        - allowed_values: [ 'Ubuntu 14.04', 'Ubuntu 15.04' ]
      description: The version of Ubuntu to be launched

resources:
  web_security_group:
    # Use this when we do not have Neutron networking.
    # http://docs.openstack.org/developer/heat/template_guide/cfn.html#AWS::EC2::SecurityGroup
  type: AWS::EC2::SecurityGroup
  properties:
    GroupDescription: Web server access rules.
    SecurityGroupIngress:
      - { IpProtocol: icmp, FromPort: '-1', ToPort: '-1', CidrIp : 0.0.0.0/0 }
      - { IpProtocol: tcp, FromPort: '22', ToPort: '22', CidrIp: 0.0.0.0/0 }
      - { IpProtocol: tcp, FromPort: '80', ToPort: '80', CidrIp: 0.0.0.0/0 }
      - { IpProtocol: tcp, FromPort: '443', ToPort: '443', CidrIp: 0.0.0.0/0 }

  apache_server:
    # http://docs.openstack.org/developer/heat/template_guide/cfn.html#AWS::EC2::Instance
    type: AWS::EC2::Instance
    # A deletion policy of Retain will leave this instance behind when this template is torn down.
    # deletion_policy: Retain
    metadata:
      AWS::CloudFormation::Init:
        config:
          packages:
            apt:
              apache2: []
          services:
            systemd:
              apache2: { enabled: 'true', ensureRunning: 'true' }
    properties:
      ImageId:
        Fn::Select:
          - { get_param: image_name }
          -
            'Ubuntu 14.04': 2a882d9c-3185-414c-9683-a4646b5c785e
            'Ubuntu 15.04': 2ae1042a-8f8d-4f40-95c7-6d1e611714be
      InstanceType: { get_param: instance_type }
      KeyName: { get_param: key_name }
      SecurityGroups: [ { get_resource: web_security_group } ]
      # the following is written to /var/lib/cloud/data/cfn-userdata
      # note the call to cfn-init which causes the AWS::CloudFomration::Init to be actioned
      UserData:
        str_replace:
          template: |
            #!/bin/bash -v
            /usr/bin/cfn-init
            /opt/aws/bin/cfn-signal -e 0 -r "Apache server setup complete" 'WaitHandle'
          params:
            WaitHandle: { get_resource: wait_handle }

  # http://docs.openstack.org/developer/heat/template_guide/cfn.html#AWS::CloudFormation::WaitConditionHandle
  wait_handle:
    type: 'AWS::CloudFormation::WaitConditionHandle'

  # http://docs.openstack.org/developer/heat/template_guide/cfn.html#AWS::CloudFormation::WaitCondition
  wait_condition:
    type: AWS::CloudFormation::WaitCondition
    depends_on: apache_server
    properties:
      Handle: { get_resource: wait_handle }
      Count: 1
      # we'll give it 10 minutes
      Timeout: 600

outputs:
  instance_ip:
    description: The IP address of the deployed instance
    value: { get_attr: [apache_server, PublicIp] }

  website_url:
    description: URL for Apache server
    value:
      list_join: ['', ['http://', get_attr: [apache_server, PublicIp]]]

  ssh_command:
    description: SSH command for the newly created instance (assuming your key is in ~./ssh/).
    value:
      str_replace:
        template: ssh ec2-user@host -i ~/.ssh/key.pem
        params:
          host: { get_attr: [apache_server, PublicIp] }
          key: { get_param: key_name }
```

- The first line of a YAML template should list a version indicator. If not present, Heat will assume that the file adheres to the most recent specification
   
- Description is optional section that allows you to provide a description of the template

- Parameters is an optional section that allows you to specify any input parameters that might be required when the configuration described in the template is built. Each parameter is in its own nested block, with the name appearing in the first line, and its attributes as further nested elements

    - type is a mandatory element for a parameter that can be one of: string, number, json or comma delimited list
    - description is an optional attribute that provided guidance to people using the template
    - default is an optional attribute that provides a default value for the parameter
    - constraints is an optional attribute that set allowed values

- Resources is a mandatory section that defines the resources that the application will need. Each resource is in its own nested block, with the name appearing in the first line, and attributes as further nested elements. Type defines the OpenStack resource to be built. The complete list supported can be found in the [Heat Template Guide](https://docs.openstack.org/heat/latest/template_guide/). The `web_security_group` resource type builds a security group. Each resource has its own attribute set. The `apache_server` resource type builds an instance with apache installed

    - The `AWS::CloudFormation::Init` section provides instructions as to what should be done on the instance once it has booted
    - `Fn::Select` is a function that will select an item from a list
    - `get_param` is a function that returns the value of the named parameter that was set by the user
    - The Heat manual contains a complete list of built in functions Currently NeCTAR supports releases up to Juno
    - UserData is a mechanism by which information can be passed to an instance at launch time. Typically this will be either a a shell script or a configuration file
    - Note that the chosen image for the instance must have the cloudinit packaged installed for AWS::CloudFormation::Init to work
    - `wait_handle` and `wait_condition`resource types will notify the heat engine when the software is fully installed on the instance

- The outputs will show once the heat engine has finished building the template
 
Please visit [Template Code](https://raw.githubusercontent.com/NeCTAR-RC/heat-templates/master/juno/Ubuntu/apache_single_instance_aws.yaml) to get a the complete template code.
