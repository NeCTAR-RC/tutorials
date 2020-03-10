---
title: Heat Template Via CLI
order: 5
duration: 10
---

### Install Required Packages

```bash
sudo apt update
sudo apt install python3-openstackclient
```

### Set up Login Credentials

Before you can start, you need to setup the login details.

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Click your email address on the top left corner and click `OpenStack RC File` to download the authentication file. Save the file into your computer.

    ![User Settings Page1]({{ site.baseurl }}/assets/images/orchestration/orchestration-swift-python-client1.png)

3. Click `Settings` in the same drop down menu get into the `Settings` page. Then click the `Reset Password` item to get your password.

    ![User Settings Page2]({{ site.baseurl }}/assets/images/orchestration/orchestration-swift-python-client2.png)


4. Execute the below command with your authentication file and type in the password when it prompts.

    ```bash
    source project_name.sh
    ```
    
### Available Commands

```bash
openstack stack abandon  Abandon stack and output results
openstack stack adopt    Adopt a stack
openstack stack cancel   Cancel current task for a stack
openstack stack check    Check a stack
openstack stack create   Create a stack
openstack stack delete   Delete stack(s)
openstack stack environment show  Show a stack's environment
openstack stack event list  List events
openstack stack event show  Show event details
openstack stack export   Export stack data json
openstack stack failures list  Show information about failed stack resources
openstack stack file list  Show a stack's files map
openstack stack hook clear  Clear resource hooks on a given stack
openstack stack hook poll  List resources with pending hook for a stack
openstack stack list    List stacks
openstack stack output list  List stack outputs
openstack stack output show  Show stack output
openstack stack resource list  List stack resources
openstack stack resource mark unhealthy  Set resource's health
openstack stack resource metadata  Show resource metadata
openstack stack resource show  Display stack resource
openstack stack resource signal  Signal a resource with optional data
openstack stack resume   Resume a stack
openstack stack show     Show stack details
openstack stack snapshot create  Create stack snapshot
openstack stack snapshot delete  Delete stack snapshot
openstack stack snapshot list  List stack snapshots
openstack stack snapshot restore  Restore stack snapshot
openstack stack snapshot show  Show stack snapshot
openstack stack suspend  Suspend a stack
openstack stack template show  Display stack template
```
 
### List Stacks

```bash
openstack stack list
```

### Show Stack

```bash
openstack stack show <stack id>
```

### Create New Stack

```bash
openstack stack create <stack name>  --template <template>
```

### Delete Stack

```bash
openstack stack delete <stack id>
```