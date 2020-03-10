---
title: Using the command line tools
order: 3
duration: 15
---

In this section, we are going to work with orchestration stacking using the command line.

## Requirements

To use the orchestration command line tool, you'll need:
* The OpenStackClient and python-heatclient tools
* Your OpenStack CLI credentials loaded in your environment
* Volume storage quota

**Setting up your environment**  
If you haven't set these up previously, you should follow the [OpenStack CLIs](https://tutorials.rc.nectar.org.au/openstack-cli) tutorial first,
which will guide you through the process of setting up your credentials and installing the command line tools.
{: .callout-warning}

**Volume storage quota**  
This example requires you to have volume storage quota assigned to your project, or the stack will fail to launch.
{: .callout-danger}


## Preparing the template

Like we did in the previous section, we're going to launch another stack.
This time, however, we're going to create some volume storage attached to an instance and do it via the CLI.

We're going to use the [server_with_new_volume.yaml template](https://raw.githubusercontent.com/NeCTAR-RC/heat-templates/master/server_with_new_volume.yaml)
from our [examples repository](https://github.com/NeCTAR-RC/heat-templates), which you'll want to download to your computer.

The template looks like this:

```yaml
heat_template_version: 2018-08-31

description: >
  This template shows how to create a server instance and a volume attached to it

parameters:
  key_name:
    type: string
    description: Name of an existing key pair to enable SSH access to the server
    constraints:
      - custom_constraint: nova.keypair

  flavor:
    type: string
    description: The flavor of server to create
    default: t3.xsmall
    constraints:
      - custom_constraint: nova.flavor

  image:
    type: string
    description: ID or name of the image to use for the server
    default: NeCTAR Ubuntu 18.04 LTS (Bionic) amd64

  availability_zone:
    type: string
    description: The Nectar availability zone

  volume_size:
    type: number
    description: Size of the volume to be created.
    default: 1


resources:
  my_secgroup:
    # https://docs.openstack.org/heat/latest/template_guide/openstack.html#OS::Neutron::SecurityGroup
    type: OS::Neutron::SecurityGroup
    properties:
      rules:
        - remote_ip_prefix: 0.0.0.0/0
          protocol: icmp
        - remote_ip_prefix: 0.0.0.0/0
          protocol: tcp
          port_range_min: 22
          port_range_max: 22

  my_server:
    # https://docs.openstack.org/heat/latest/template_guide/openstack.html#OS::Nova::Server
    type: OS::Nova::Server
    properties:
      key_name: { get_param: key_name }
      image: { get_param: image }
      flavor: { get_param: flavor }
      availability_zone: { get_param: availability_zone }
      security_groups:
        - { get_resource: my_secgroup }
      networks:
        - allocate_network: auto

  my_volume:
    # https://docs.openstack.org/heat/latest/template_guide/openstack.html#OS::Cinder::Volume
    type: OS::Cinder::Volume
    properties:
      size: { get_param: volume_size }
      availability_zone: { get_param: availability_zone }

  my_volume_attachment:
    # https://docs.openstack.org/heat/latest/template_guide/openstack.html#OS::Cinder::VolumeAttachment
    type: OS::Cinder::VolumeAttachment
    properties:
      volume_id: { get_resource: my_volume }
      instance_uuid: { get_resource: my_server }
```

Compared to the template from earlier in this tutorial, this template includes a parameter and two new resources
which will be used for provisioning a volume and attaching it to the server.

## Launching the stack

With the OpenStackClient installed, we're able to now launch the stack.

In this example, we're creating our server with the keypair `mykey` and at the `melbourne-qh2` availability zone,
along with a 2GB volume attached to it.

```
$ openstack stack create --template server_with_new_volume.yaml \
    --parameter key_name=mykey \
    --parameter availability_zone=melbourne-qh2 \
    --parameter volume_size=2 \
    mystack2

+---------------------+-------------------------------------------------------------------------------+
| Field               | Value                                                                         |
+---------------------+-------------------------------------------------------------------------------+
| id                  | 2ea2e063-f9b2-4bf3-8ad7-cf99b9ea60cb                                          |
| stack_name          | mystack2                                                                      |
| description         | This template shows how to create a server instance and a volume attached to  |
|                     | it                                                                            |
| creation_time       | 2020-10-27T03:10:11Z                                                          |
| updated_time        | None                                                                          |
| stack_status        | CREATE_IN_PROGRESS                                                            |
| stack_status_reason | Stack CREATE started                                                          |
+---------------------+-------------------------------------------------------------------------------+
```

The stack will now be created.


### Show the stack

After a small amount of time, the stack status should transition from `CREATE_IN_PROGRESS` to
`CREATE_COMPLETE`.

We can check on the progress by using the `openstack stack show` command.

```
$ openstack stack show mystack2
+-----------------------+------------------------------------------------------------------------------+
| Field                 | Value                                                                        |
+-----------------------+------------------------------------------------------------------------------+
| id                    | 2ea2e063-f9b2-4bf3-8ad7-cf99b9ea60cb                                         |
| stack_name            | mystack2                                                                     |
| description           | This template shows how to create a server instance and a volume attached to |
|                       | it                                                                           |
|                       |                                                                              |
| creation_time         | 2020-10-27T03:10:11Z                                                         |
| updated_time          | None                                                                         |
| stack_status          | CREATE_COMPLETE                                                              |
| stack_status_reason   | Stack CREATE completed successfully                                          |
| parameters            | OS::project_id: abcdeff7dfc147768ab26ba9b65c9728                             |
|                       | OS::stack_id: 2ea2e063-f9b2-4bf3-8ad7-cf99b9ea60cb                           |
|                       | OS::stack_name: mystack2                                                     |
|                       | availability_zone: melbourne-qh2                                             |
|                       | flavor: t3.xsmall                                                            |
|                       | image: NeCTAR Ubuntu 18.04 LTS (Bionic) amd64                                |
|                       | key_name: mykey                                                              |
|                       | volume_size: '2'                                                             |
|                       |                                                                              |
| outputs               | - description: IP address of the server instance                             |
|                       |   output_key: server_ip                                                      |
|                       |   output_value: 115.146.86.12                                                |
|                       |                                                                              |
| links                 | - href: https://heat.rc.nectar.org.au:8004/v1/c3dbe1f7dfc147768ab26ba9b65c97 |
|                       | 28/stacks/mystack2/2ea2e063-f9b2-4bf3-8ad7-cf99b9ea60cb                      |
|                       |   rel: self                                                                  |
|                       |                                                                              |
| deletion_time         | None                                                                         |
| notification_topics   | []                                                                           |
| capabilities          | []                                                                           |
| disable_rollback      | True                                                                         |
| timeout_mins          | None                                                                         |
| stack_owner           | None                                                                         |
| parent                | None                                                                         |
| stack_user_project_id | c66b32027e0944d995635b628a443a12                                             |
| tags                  | None                                                                         |
+-----------------------+------------------------------------------------------------------------------+
```

### Deleting the stack

Now our tutorial is finished, it's time to clean up by using the `openstack stack delete` command.

```
$ openstack stack delete mystack2
Are you sure you want to delete this stack(s) [y/N]? y
```

The orchestation engine will now begin to delete all the resources it provisioned.
