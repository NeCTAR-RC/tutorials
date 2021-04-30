---
title: Accessing a Database Instance
order: 3
duration: 10
---

In this section, we will learn to use MySQL client to access the database we created in the previous section.

If you followed the instructions exactly the Database instance name and the (initial) database name should be "tutorial", and the MySQL user name for connecting should be "admin".  (Hopefully you can remember the password that you used.)

**Note**
Analogous procedures would be used for accessing a PostreSQL database, but the details will be different.
{: .callout-warning}

## Installation

You should install the MySQL Client for your platform.
MySQL provide a [getting started guide](https://dev.mysql.com/doc/mysql-getting-started/en/) if you're unsure, but for those running on Ubuntu, it can be as simple as:

```
sudo apt update
sudo apt install mysql-client
```

## Connect to database

Before we can connect to the database, we need to find out the host name of the database instance.  One way to do this is to look it up via the Dashboard:

1. Navigate to the `Project` / `Database` / `Instances` page
1. Find the Database instance called "tutorial" in the list, and click on the link.
1. In the `Overview` tab, look for the `Host` field in the `Connection Information` section.

## Login to the database

Assuming that the hostname for your database is "gk5sdnjwfry.db.cloud.edu.au", the following command should give you an interactive MySQL connection.

```
mysql -u admin -p -h gk5sdnjwfry.db.cloud.edu.au
```

You will be prompted for the password.  After entering the correct password you will be connected to the database instance.

**Note**
The `Connection Information` that you saw above also gives example commands.
{: .callout-warning}

## Show databases and use database

Just as an example, run the following commands against your `tutorial` Database instance.

```
mysql>SHOW DATABASES;
mysql>Use tutorial;
mysql>SHOW TABLES;
```

The first command will list all databases created so far.

The second command selects the "tutorial" database.

The third command lists any tables that have been created in the "tutorial".  (At this stage, we would expect there to be none.) 

To find out more about the mysql client, you could try the [MySQL official tutorial](https://dev.mysql.com/doc/refman/8.0/en/tutorial.html).

## Connecting to the database from an application

If you intend to use a Database instance to hold an application's back-end database, you should refer to the application documentation for details on configuring the database connection.

If you intend to use a Database instance in some application code that you are developing, you should find and read relevant documentation on the web.  Note that the details vary from one programming language to another.  Indeed, for some programming languages there are multiple libraries for database access.

When configuring a connection, the details you need should be as above: the Database instance host, the database account name and password, and relevant the database name.  (If you need a port number, it will be listed in the `Connection Information`.)
