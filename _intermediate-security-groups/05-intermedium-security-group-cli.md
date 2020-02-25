---
title: OpenStack CLI
order: 5
duration: 15
---

Instead of using the Nectar Research Cloud Dashboard to manage your security groups, you can also use OpenStack CLI, if you need it in your scripts.

### Install the OpenStack client

```bash
apt update
apt install python-openstackclient
```

### Set up Login Credentials

Before you can start using the openstack client, you need to setup the login details.

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Click your email address on the top right corner and click `OpenStack RC File` to download the authentication file. Save the file into your computer.

    ![User Settings Page1]({{ site.baseurl }}/assets/images/intermediate-security-groups/security-group-swift-python-client1.png)

3. Click `Settings` in the same drop down menu get into the `Settings` page. Then click the `Reset Password` item to get your password.

    ![User Settings Page2]({{ site.baseurl }}/assets/images/intermediate-security-groups/security-group-swift-python-client2.png)


4. Execute the command below with your authentication file and type in the password when it prompts.

    ```bash
    source project_name.sh

### Available Security Group Commands

```bash
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

```bash
openstack security group list
```

### List Security Group Rules

```bash
openstack security group rule list <security group id>
```

### Show Security Group Rule Details

```bash
openstack security group rule show <rule id>
```

### Create New Security Group Rules

```bash
security group rule create <security group id> --remote-ip <ip address> --dst-port <port> --protocol <protocol>
```
### Remove Security Group Rule

```bash
openstack security group rule delete <rule id>
```

### Remove Security Group

```bash
openstack security group delete <security group id>
```