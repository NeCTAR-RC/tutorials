---
title: Using the command line
order: 9
duration: 15
---

In this section, we are going to use the Openstack command line tool to create and manage the database instances.

## Requirements

To use the command line tool, you'll need:
* The OpenStackClient and python-troveclient tools installed
* Your OpenStack API credentials set up in your environment

**Setting up your credentials**  
If you haven't set these up previously, you should follow the [OpenStack CLIs](https://tutorials.rc.nectar.org.au/openstack-cli) tutorial first,
which will guide you through the process of setting up your credentials and installing the command line tools.
{: .callout-warning}


## List all database instances

```
$ openstack database instance list
+--------------------------------------+----------+-----------+-------------------+--------+--------------------------------------+------+-----------+
| ID                                   | Name     | Datastore | Datastore Version | Status | Flavor ID                            | Size | Region    |
+--------------------------------------+----------+-----------+-------------------+--------+--------------------------------------+------+-----------+
| 5de589ae-195e-4859-ae6f-8bd014094bd3 | tutorial | MySQL     | 8.0-12            | ACTIVE | 325c919d-b523-4960-968c-f2baffafff94 |   10 | Melbourne |
+--------------------------------------+----------+-----------+-------------------+--------+--------------------------------------+------+-----------+
```

## Get latest MySQL datastore versions

```
$ openstack datastore version list MySQL
+--------------------------------------+--------+
| ID                                   | Name   |
+--------------------------------------+--------+
| 058fdeaa-ac3b-4881-a2f5-56a3aba468ef | 8.0-17 |
| 21551ca0-d09b-4f4f-a2c4-dc5c64c7c50c | 5.7-18 |
+--------------------------------------+--------+
```
Note: older versions will not be displayed

## Create a new database instance

Execute the below command to create a MySQL database instance, with a 1GB volume:

This will use the default MySQL version and only allow access from 192.168.1.0/24

```
$ openstack database instance create --flavor db3.small --datastore MySQL --size 1 --availability_zone melbourne-qh2 --allowed-cidr 192.168.1.0/24 my-database-instance
+-------------------+--------------------------------------+
| Property          | Value                                |
+-------------------+--------------------------------------+
| allowed_cidrs     | ['192.168.1.0/24']                   |
| created           | 2020-03-27T00:58:13                  |
| datastore         | MySQL                                |
| datastore_version | 8.0-17                               |
| flavor            | 325c919d-b523-4960-968c-f2baffafff94 |
| hostname          | kwnl2vj7lhc.db.cloud.edu.au          |
| id                | 7f465a9e-92ec-48d7-81a2-85264e7b5c95 |
| name              | my-database-instance                 |
| region            | Melbourne                            |
| status            | BUILD                                |
| updated           | 2020-03-27T00:58:13                  |
| volume            | 1                                    |
+-------------------+--------------------------------------+

$ openstack database instance list
+--------------------------------------+----------------------+-----------+-------------------+--------+--------------------------------------+------+-----------+
| ID                                   | Name                 | Datastore | Datastore Version | Status | Flavor ID                            | Size | Region    |
+--------------------------------------+----------------------+-----------+-------------------+--------+--------------------------------------+------+-----------+
| 5de589ae-195e-4859-ae6f-8bd014094bd3 | tutorial             | MySQL     | 8.0-12            | ACTIVE | 325c919d-b523-4960-968c-f2baffafff94 |   10 | Melbourne |
| 7f465a9e-92ec-48d7-81a2-85264e7b5c95 | my-database-instance | MySQL     | 8.0-17            | BUILD  | 325c919d-b523-4960-968c-f2baffafff94 |    1 | Melbourne |
+--------------------------------------+----------------------+-----------+-------------------+--------+--------------------------------------+------+-----------+
```

## Show details of a database instance

```
$ openstack database instance show 7f465a9e-92ec-48d7-81a2-85264e7b5c95
+-------------------+--------------------------------------+
| Property          | Value                                |
+-------------------+--------------------------------------+
| allowed_cidrs     | ['192.168.1.0/24']                   |
| created           | 2020-03-27T00:58:13                  |
| datastore         | MySQL                                |
| datastore_version | 8.0-17                               |
| flavor            | 325c919d-b523-4960-968c-f2baffafff94 |
| hostname          | kwnl2vj7lhc.db.cloud.edu.au          |
| id                | 7f465a9e-92ec-48d7-81a2-85264e7b5c95 |
| name              | my-database-instance                 |
| region            | Melbourne                            |
| status            | ACTIVE                               |
| updated           | 2020-03-27T00:58:27                  |
| volume            | 1                                    |
| volume_used       | 0.13                                 |
+-------------------+--------------------------------------+
```

## Update the instances firewall to only allow certain IP addresses

```
$ openstack database instance update --allowed-cidr 192.168.1.0/24 --allowed-cidr 10.0.0.0/24 7f465a9e-92ec-48d7-81a2-85264e7b5c95
$ openstack database instance show 7f465a9e-92ec-48d7-81a2-85264e7b5c95
+-------------------+--------------------------------------+
| Property          | Value                                |
+-------------------+--------------------------------------+
| allowed_cidrs     | ['192.168.1.0/24', '10.0.0.0/24']    |
| created           | 2020-03-27T00:58:13                  |
| datastore         | MySQL                                |
| datastore_version | 8.0-17                               |
| flavor            | 325c919d-b523-4960-968c-f2baffafff94 |
| hostname          | kwnl2vj7lhc.db.cloud.edu.au          |
| id                | 7f465a9e-92ec-48d7-81a2-85264e7b5c95 |
| name              | my-database-instance                 |
| region            | Melbourne                            |
| status            | ACTIVE                               |
| updated           | 2020-03-27T00:58:27                  |
| volume            | 1                                    |
| volume_used       | 0.13                                 |
+-------------------+--------------------------------------+

```

## Create and list a backup

```
$ openstack database backup create 7f465a9e-92ec-48d7-81a2-85264e7b5c95 tutorial_backup2
+-------------------+--------------------------------------+
| Property          | Value                                |
+-------------------+--------------------------------------+
| created           | 2020-03-27T02:49:25                  |
| datastore         | MySQL                                |
| datastore_version | 8.0-17                               |
| description       | None                                 |
| id                | 092e35ec-b034-473d-ba33-1676cf378bbe |
| instance_id       | 7f465a9e-92ec-48d7-81a2-85264e7b5c95 |
| locationRef       | None                                 |
| name              | tutorial_backup2                     |
| parent_id         | None                                 |
| size              | None                                 |
| status            | NEW                                  |
| updated           | 2020-03-27T02:49:25                  |
+-------------------+--------------------------------------+

$ openstack database backup list
+--------------------------------------+--------------------------------------+------------------+-----------+-----------+---------------------+
| ID                                   | Instance ID                          | Name             | Status    | Parent ID | Updated             |
+--------------------------------------+--------------------------------------+------------------+-----------+-----------+---------------------+
| 3d9b2cdc-0182-4154-994d-35e48574cd41 | 5de589ae-195e-4859-ae6f-8bd014094bd3 | tutorial_backup  | COMPLETED | None      | 2020-03-25T10:33:19 |
| 092e35ec-b034-473d-ba33-1676cf378bbe | 7f465a9e-92ec-48d7-81a2-85264e7b5c95 | tutorial_backup2 | COMPLETED | None      | 2020-03-27T02:49:31 |
+--------------------------------------+--------------------------------------+------------------+-----------+-----------+---------------------+
```

## Create and list a database
```
$ openstack database db create 5de589ae-195e-4859-ae6f-8bd014094bd3 tutorial_cli
$ openstack database db list 5de589ae-195e-4859-ae6f-8bd014094bd3
+--------------+
| Name         |
+--------------+
| tutorial     |
| tutorial_cli |
| tutorial_new |
+--------------+
```

## Create a database user
In this exercise, we are going to create a new user `tutorial_cli_user` for the newly created database `tutorial_cli`.

```
$ openstack database user create 5de589ae-195e-4859-ae6f-8bd014094bd3 tutorial_cli_user 123456 --databases tutorial_cli
$ openstack database user list 5de589ae-195e-4859-ae6f-8bd014094bd3
+-------------------+------+--------------+
| Name              | Host | Databases    |
+-------------------+------+--------------+
| admin             | %    | tutorial     |
| tutorial_cli_user | %    | tutorial_cli |
| tutorial_renamed  | %    | tutorial     |
+-------------------+------+--------------+
```

## More information

You can get a list of the available `datastore` and `database` commands by runnin `openstack help datastore` or `openstack help database`.

To get help on a specific command, give the full command to `database help`; e.g. `openstack help database user create`.  This will give a synopsis of the command along with the documentation of the options and arguments.

It is also possible to interact with the Database service programatically; e.g. using the `python-troveclient` libraries or by sending requests to the web APIs.

