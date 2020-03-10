---
title: Create a template
order: 2
duration: 15
---

In this section, we are going to create an orchestration template.

## Getting started

It can be tricky to write a template from scratch, so we've created a [repository of examples](https://github.com/NeCTAR-RC/heat-templates) that covers lots of common scenarios that you can use to get started.

In this tutorial, we're going to start with the `basic_server.yaml` template found in our examples respository, which is listed here.

```yaml
heat_template_version: 2014-10-16

description: A simple template for launching a server instance.

parameters:
  key_name:
    type: string
    description: Keypair for SSH access
    constraints:
      - custom_constraint: nova.keypair
        description: Must be an existing keypair
  flavor:
    type: string
    description: Flavor
    default: t3.xsmall
    constraints:
      - custom_constraint: nova.flavor
        description: Must be an existing flavor
  image:
    type: string
    description: Image ID or name
    default: NeCTAR Ubuntu 18.04 LTS (Bionic) amd64
  availability_zone:
    type: string
    description: Availability Zone

resources:
  basic_secgroup:
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

  basic_server:
    # https://docs.openstack.org/heat/latest/template_guide/openstack.html#OS::Nova::Server
    type: OS::Nova::Server
    properties:
      key_name: { get_param: key_name }
      image: { get_param: image }
      flavor: { get_param: flavor }
      availability_zone: { get_param: availability_zone }
      security_groups:
        - { get_resource: basic_secgroup }
      networks:
        - allocate_network: auto
```

You should download a copy of the [basic_server.yaml template](https://raw.githubusercontent.com/NeCTAR-RC/heat-templates/master/basic_server.yaml)
for use in the next sections of this tutorial.

This example contains two sections that we'll explore in more detail; `parameters` and the `resources`.

## Parameters

Parameters aren't strictly necessary, but they do help in making your templates more reusable.
By defining parameters, you can avoid having to create multiple copies of your template when you simply want to provide different options.

In this example we have four parameters defined; `key_name`, `flavor`, `image` and `availability_zone` which are all defined as `string` types.

The `flavor` and `image` parameters have defaults provided, which means that they can be optionally overridden when launching the stack.
For example, if you wanted to use a flavor other than the default `t3.xsmall`, you might provide the alternative `m3.medium` when launching.

The `key_name` and `availability_zone` parameters don't have defaults, so you would be required to provide values for these when launching your stack.

## Resources

In this example we have two resources; `basic_secgroup` and `basic_server` for provisioning a security group with some rules and a virtual machine instance respectively.

If you look at the `basic_server` resource, it has some properties whose values are provided through functions; `get_param` and `get_resource`.

These functions are known as intrinsic functions, which perform special actions. In this case, the `get_param` function is used to fetch the value from given parameters
and the `get_resource` function is used to fetch a resource.

In our template, the `get_resource` function will get the ID of the `basic_secgroup` resource and pass it through to the `security_groups` property of our `basic_server`.

This not only ensures that the instance will have our defined security group applied to it, but will also indicate to the orchestration engine that the `basic_server`
resource depends on the `basic_secgroup` resource and thus the engine will create the security group resource first.
