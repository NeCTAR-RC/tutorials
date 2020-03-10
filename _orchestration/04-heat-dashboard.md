---
title: Heat Dashboard
order: 4
duration: 15
---

### Start a New Stack 

We will use the below template to launch a new stack and the template creates one Centos node and 2 Ubuntu nodes.
```bash
heat_template_version: 2014-10-16
description: "A simple template to boot a cluster of desktops (LoginNode, ManagementNodes and Desktop Nodes)"

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

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Navigate to the `Project | Orchestration | Stacks` page
3. Click the `Launch Stack` button to start the Launch Dialog

    ![Launch dialog 1 from the stack page]({{ site.baseurl }}/assets/images/orchestration/heat-template1.png)

4. Select a template input from `Template Source`. There are three options: File, Direct Input and URL. If you already have a template file prepared, select option `File`. You can also direct input your template or get a template file from URL

5. If you want to provide parameters to the template, you can do it via the `Environment Source`. Select a environment file or direcit input your parameters

    ```bash
      parameters:
        ssh_key: <key name>
        ubuntu_1804_image_id: <image id>
        centos_8_image_id: <image id>
        avz: tasmania
         project_name: <project name>
    ```

6. Click `Next` button. In the `Launch Stack` dialog, enter a name in `Stack Name`

    ![Launch dialog 2 from the stack page]({{ site.baseurl }}/assets/images/orchestration/heat-template2.png)

7. Tick `Rollback On Failure`
8. Provide a password in `Password for user`
9. Change Parameter values if the defaults are not desired
10. Click `Launch` button
11. The creation process will take a while. Please check the `Status` until it shows `Create Complete`
12. If the creation process is failed, you can check the error message and modfiy your template accordingly

### Change Template in a Stack

1. In the `Stack` page, Click `Change Stack Template` from the action list

    ![Launch dialog 3from the stack page]({{ site.baseurl }}/assets/images/orchestration/heat-template3.png)

2. Provide a new template and click `Next` button
3. Provide a new password and click `Launch` button