---
title: OpenStack CLI
order: 5
duration: 15
---

An alternative to using the Nectar Research Cloud Dashboard to manage your security groups is to use the OpenStack CLI, which can be particularly useful when scripting.

**OpenStack CLI**  
To use the OpenStack CLI, you'll need to install them and set up your credentials. See the [OpenStack CLI]({{ site.baseurl }}/openstack-cli/) tutorial to get started.
{: .callout-warning}

### Available Security Group Commands

```
openstack security group create  Create a new security group
openstack security group delete  Delete security group(s)
openstack security group list  List security groups
openstack security group rule create  Create a new security group rule
openstack security group rule delete  Delete security group rule(s)
openstack security group rule list  List security group rules
openstack security group rule show  Display security group rule details
openstack security group set  Set security group properties
openstack security group show  Display security group details
openstack security group unset  Unset security group properties
```

### List All Security Groups

```
openstack security group list
```

### List Security Group Rules

```
openstack security group rule list <security group id>
```

### Show Security Group Rule Details

```
openstack security group rule show <rule id>
```

### Create New Security Group Rules

```
security group rule create <security group id> --remote-ip <ip address> --dst-port <port> --protocol <protocol>
```

### Remove Security Group Rule

```
openstack security group rule delete <rule id>
```

### Remove Security Group

```
openstack security group delete <security group id>
```
