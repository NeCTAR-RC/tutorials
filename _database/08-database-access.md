---
title: Access The Database
order: 8
duration: 10
---

In this section, we are going to do some exercises to use MySQL client to access the databases we created from previous sections. The database name is tutorial_cli and password is 123456.

### Installation

```
sudo apt updte
sudo apt install mysql-client-core-5.7
```

### Connect to database

Before connect to database, we need to find out the host name o the database instance. Use commands `trove list` and `trove show`.

```
trove list

| ID                                   | Name                 | Datastore | Datastore Version | Status | Flavor ID                            | Size | Region    |
+--------------------------------------+----------------------+-----------+-------------------+--------+--------------------------------------+------+-----------+
| 5de589ae-195e-4859-ae6f-8bd014094bd3 | tutorial             | MySQL     | 8.0-12            | ACTIVE | 325c919d-b523-4960-968c-f2baffafff94 |   10 | Melbourne |
| 7f465a9e-92ec-48d7-81a2-85264e7b5c95 | my-database-instance | MySQL     | 8.0-12            | ACTIVE | 325c919d-b523-4960-968c-f2baffafff94 |    1 | Melbourne |
+--------------------------------------+----------------------+-----------+-------------------+--------+--------------------------------------+------+-----------+
trove show 5de589ae-195e-4859-ae6f-8bd014094bd3
+-------------------+--------------------------------------+
| Property          | Value                                |
+-------------------+--------------------------------------+
| configuration     | 013aec9f-2d9e-495e-98a1-36d9cdebf1be |
| created           | 2020-03-25T05:41:46                  |
| datastore         | MySQL                                |
| datastore_version | 8.0-12                               |
| flavor            | 325c919d-b523-4960-968c-f2baffafff94 |
| hostname          | gk5sdnjwfry.db.cloud.edu.au          |
| id                | 5de589ae-195e-4859-ae6f-8bd014094bd3 |
| name              | tutorial                             |
| region            | Melbourne                            |
| status            | ACTIVE                               |
| updated           | 2020-03-26T02:20:00                  |
| volume            | 10                                   |
| volume_used       | 0.14                                 |
+-------------------+--------------------------------------+

mysql -u tutorial_cli -p -h gk5sdnjwfry.db.cloud.edu.au
```

### Show databases and use database

After entering password, you are not connected to the database instance. Use below commands to use tutorial_cli database.

```bash
mysql>SHOW DATABASES;
mysql>Use tutorial_cli;
mysql>SHOW TABLES;
```

To find out more about mysql client, please go to this [Tutorial](https://dev.mysql.com/doc/refman/8.0/en/tutorial.html).