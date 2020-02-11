---
title: Using Python Client
order: 7
duration: 20
---

Besides the Nectar Cloud Dashboard, you can also use python client `trove` to create and manage databases. The below assumes you use Ubuntu 18.04 or above.

### Installation

You can use the below scripts to install troveclient on Ubuntu 18.04 or above.

```bash
apt install python-pip
pip install python-troveclient
```

### Setup Credential

Before you can use the trove client, you need to setup credential.

1. Log on to your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Click your `email address` on the top right corner to open a drop down list and then click `OpenStack RC File` to download the RC file for authentication
3. From the same drop down list and click `Settings`
4. Navigate to the `Settings | Reset Password
    ![Database log]({{ site.baseurl }}/assets/images/database/reset-password-database.png)
5. Click `Reset Password` button to get a new password. Please record the password as it will be used later.
6. Source the downloaded RC file and enter the recorded password.
    ```bash
    $ source project_name.sh
    $ Please enter your OpenStack Password for project
    $ Enter Password
    ```

### Lists Available Command Options and Subcommands

At any time, you can use the Trove command line help for more information about the options available:

```bash
$ trove --help
``` 

### Help for Subcommands

```
$ trove help <subcommand>
```

### Create Database Instance

The following example will create a small MySQL 5.7 database instance, with a 10GB volume in the tasmania availability zone:

```bash
trove create my-database-instance db.small --datastore MySQL --datastore_version 5.7 --size 10 --availability_zone tasmania
```

### Lists all the instances
 
```bash
$ trove list
```
 
### Show Details of a Database Instance
 
```bash
$ trove show <database_instance_id>
```
 
### Upgrade Database Version

```bash
trove upgrade <database_instance_id> <database version>
```
 
### Create Backup

```bash
$ trove backup-create <instance_id> <backup_name>
``` 

### Check Database Service Quota

```bash
$ trove limit-list
```

### Create New Database
```bash
trove database-create <database_instance_id> <database_name>
```

### Create Database Users

Users are managed on a per instance basis, meaning that they are instance specific.

Within an instance, you are free to change user names and passwords, the host that you can connect from, and to even delete users. You can also grant and revoke user access to particular databases on the instance.

By default users added to an instance database will be granted full permissions.

Usernames and passwords are restricted by the underlying database.

A user can be limited to access the databases on a database instance from only a given host. The `--host` parameter only accept IPv4 address and if set to the symbol % (the default), it allows the user to connect to the database from any host. 

To create a user for a database instance:
```bash
trove user-create <database_instance_id> <new_db_user> <my_db_password>
```

If you don't specify the database when creating a user, then the user will have no access to any of the databases on the instance.


