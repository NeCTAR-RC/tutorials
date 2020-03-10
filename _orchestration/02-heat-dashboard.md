---
title: Launch Virtual Machine Via Dashboard
order: 2
duration: 15
---

In this section, we are going to launch 2 virtual machines using Heat template via Nectar Dashboard

### Start a New Stack 

We will use the below template to launch a new stack and the Heat template creates one Centos virtual machine and twos Ubuntu virtual machines. The availability zone is Tasmania and you need to replace the `<key pair name>` to be your private key name.

```
heat_template_version: 2014-10-16
description: "A simple template to launch Centos and Ubuntu Nodes"

parameters:
  ubuntu_1804_image_id:
    type: string
    label: Image ID
    description: Ubuntu 18.04 Image
    default: 45225edb-66d8-4fd0-bf41-132a31a18166
  centos_8_image_id:
    type: string
    label: Image ID
    description: Centos 8 Image
    default: b8994253-1678-4f63-9e9a-57564b074a33
  ssh_key:
    type: string
    default: <key pair name>
  avz:
    type: string
    default: tasmania
  project_name:
    type: string
    default: tutorial

resources:
  CentosServer:
    type: "OS::Nova::Server"
    properties:
      name: centosNode
      availability_zone: { get_param: avz }
      flavor: m3.small
      image: { get_param: centos_8_image_id }
      key_name: { get_param: ssh_key }
      security_groups: [ default, ssh]
      networks: [{"allocate_network": "auto"}]
      metadata:
        project_name: { get_param: project_name }

  UbuntuNodes:
    type: "OS::Heat::ResourceGroup"
    properties:
      count: 2
      resource_def:
        type: "OS::Nova::Server"
        properties:
          availability_zone: { get_param: avz }
          flavor: m3.small
          image: { get_param: ubuntu_1804_image_id }
          key_name: { get_param: ssh_key }
          name: ubuntunode%index%
          security_groups: [ default, ssh ]
          networks: [{"allocate_network": "auto"}]
          metadata:
            project_name: { get_param: project_name }
```

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side).
1. Navigate to the `Project | Orchestration | Stacks` page
1. Click the `Launch Stack` button to start the Launch Dialog
![Launch dialog 1 from the stack page]({{ site.baseurl }}/assets/images/orchestration/heat-template1.png)
1. Select `Direct Input` from the `Template Source` list. Copy and paste the above template into the text field.
1. Click `Next` button. In the `Launch Stack` dialog, enter tutorial in `Stack Name`
![Launch dialog 2 from the stack page]({{ site.baseurl }}/assets/images/orchestration/heat-template2.png)
1. Tick `Rollback On Failure`
1. Provide a password 123456 in `Password for user`
1. Click `Launch` button
1. The creation process will take a while. Please check the `Status` until it shows `Create Complete`