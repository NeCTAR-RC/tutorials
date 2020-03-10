---
title: Heat Template Via CLI
order: 3
duration: 10
---

In this section, we are going to do some exercises to launch template vis command line interface.

### Install Required Packages

```bash
sudo apt update
sudo apt install python3-openstackclient
```

### Setup Credential

Before you can use the OpenStack client, you need to setup credential. Please follow the instruction from this [article](https://support.ehelp.edu.au/support/solutions/articles/6000078065-api).

### Create a new stack

Before creating a new stack, you need to create a template file `template.yml`. Use any editor you like and add the template content from the last section.
When executing the below command, you need to make sure the `template.yml` exists in the current working directory.

```
openstack stack create tutorial2 --template template.yml
+---------------------+---------------------------------------------------------+
| Field               | Value                                                   |
+---------------------+---------------------------------------------------------+
| id                  | 129506cf-1a3b-4126-946a-9963be7c09e5                    |
| stack_name          | tutorial2                                               |
| description         | A simple template to launch Centos and Ubuntu Nodes     |
| creation_time       | 2020-04-08T06:59:43Z                                    |
| updated_time        | None                                                    |
| stack_status        | CREATE_IN_PROGRESS                                      |
| stack_status_reason | Stack CREATE started                                    |
+---------------------+---------------------------------------------------------+
```

### Show Stack
If the above command is successful, you shoud see the below output:
```
openstack stack show 129506cf-1a3b-4126-946a-9963be7c09e5
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| Field                 | Value                                                                                                                                |
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| id                    | 129506cf-1a3b-4126-946a-9963be7c09e5                                                                                                 |
| stack_name            | tutorial2                                                                                                                            |
| description           | A simple template to launch Centos and Ubuntu Nodes                                                                                  |
| creation_time         | 2020-04-08T06:59:43Z                                                                                                                 |
| updated_time          | None                                                                                                                                 |
| stack_status          | CREATE_COMPLETE                                                                                                                      |
| stack_status_reason   | Stack CREATE completed successfully                                                                                                  |
| parameters            | OS::project_id: f9208047db904ee9a083cee03c933a32                                                                                     |
|                       | OS::stack_id: 129506cf-1a3b-4126-946a-9963be7c09e5                                                                                   |
|                       | OS::stack_name: tutorial2                                                                                                            |
|                       | avz: tasmania                                                                                                                        |
|                       | centos_8_image_id: b8994253-1678-4f63-9e9a-57564b074a33                                                                              |
|                       | project_name: tutorial                                                                                                               |
|                       | ssh_key: ming                                                                                                                        |
|                       | ubuntu_1804_image_id: 45225edb-66d8-4fd0-bf41-132a31a18166                                                                           |
|                       |                                                                                                                                      |
| outputs               | []                                                                                                                                   |
|                       |                                                                                                                                      |
| links                 | - href: https://heat.rc.nectar.org.au:8004/v1/f9208047db904ee9a083cee03c933a32/stacks/tutorial2/129506cf-1a3b-4126-946a-9963be7c09e5 |
|                       |   rel: self                                                                                                                          |
|                       |                                                                                                                                      |
| parent                | None                                                                                                                                 |
| disable_rollback      | True                                                                                                                                 |
| notification_topics   | []                                                                                                                                   |
| deletion_time         | None                                                                                                                                 |
| stack_user_project_id | 064fc58fffab4f349be9157415e80ca4                                                                                                     |
| capabilities          | []                                                                                                                                   |
| tags                  | None                                                                                                                                 |
| stack_owner           | None                                                                                                                                 |
| timeout_mins          | None                                                                                                                                 |
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------+
```

### Delete Stack
```
openstack stack delete 129506cf-1a3b-4126-946a-9963be7c09e5
Are you sure you want to delete this stack(s) [y/N]? y
openstack stack show 129506cf-1a3b-4126-946a-9963be7c09e5
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| Field                 | Value                                                                                                                                |
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| id                    | 129506cf-1a3b-4126-946a-9963be7c09e5                                                                                                 |
| stack_name            | tutorial2                                                                                                                            |
| description           | A simple template to boot a cluster of desktops (LoginNode, ManagementNodes and Desktop Nodes)                                       |
| creation_time         | 2020-04-08T06:59:43Z                                                                                                                 |
| updated_time          | 2020-04-08T07:12:16Z                                                                                                                 |
| stack_status          | DELETE_COMPLETE                                                                                                                      |
| stack_status_reason   | Stack DELETE completed successfully                                                                                                  |
| parameters            | OS::project_id: f9208047db904ee9a083cee03c933a32                                                                                     |
|                       | OS::stack_id: 129506cf-1a3b-4126-946a-9963be7c09e5                                                                                   |
|                       | OS::stack_name: tutorial2                                                                                                            |
|                       | avz: tasmania                                                                                                                        |
|                       | centos_8_image_id: b8994253-1678-4f63-9e9a-57564b074a33                                                                              |
|                       | project_name: tutorial                                                                                                               |
|                       | ssh_key: ming                                                                                                                        |
|                       | ubuntu_1804_image_id: 45225edb-66d8-4fd0-bf41-132a31a18166                                                                           |
|                       |                                                                                                                                      |
| outputs               | ''                                                                                                                                   |
|                       |                                                                                                                                      |
| links                 | - href: https://heat.rc.nectar.org.au:8004/v1/f9208047db904ee9a083cee03c933a32/stacks/tutorial2/129506cf-1a3b-4126-946a-9963be7c09e5 |
|                       |   rel: self                                                                                                                          |
|                       |                                                                                                                                      |
| parent                | None                                                                                                                                 |
| disable_rollback      | True                                                                                                                                 |
| notification_topics   | []                                                                                                                                   |
| deletion_time         | 2020-04-08T07:14:02Z                                                                                                                 |
| stack_user_project_id | 064fc58fffab4f349be9157415e80ca4                                                                                                     |
| capabilities          | []                                                                                                                                   |
| stack_owner           | None                                                                                                                                 |
| timeout_mins          | None                                                                                                                                 |
| tags                  | None                                                                                                                                 |
+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------+
```