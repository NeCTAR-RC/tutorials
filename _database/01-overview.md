---
title: Overview
order: 1
duration: 5
---

 The Nectar Database Service is a Database-as-a-Service (DBaaS) system powered by the Trove OpenStack project. It provides a simple interface to manage databases whilst hiding the underlying infrastructure requirements of configuring and running them. The Nectar Satabase Service offers the benefit of API or web-based access for tasks like creating databases, creating and restoring backups, adding and removing database users, setting configuration parameters and more.

## Database Instance versus Database

The terminology used in the DBaaS domain can be a bit confusing.  The most potentially confusing is that the word "database" is used in different contexts with subtly different meanings.  In this tutorial, we will try to consistently use the following terminology:

- The Nectar Database Service:  This is the OpenStack service that manages and controls Database instances.  It is also commonly refered to as Trove; see above.
- A Database Instance:  This is a virtual machine that has a Datastore installed on it.  It will hold one or more Databases that are stored on its virtual disk drive(s). 
- A Datastore:  This refers to an installation of a relational database product such as MySQL or PostgreSQL.  A Database Instance supports exactly one Datastore.
- A Database.  This is a collection of relational tables and indexes that hold an application's data, together with its schemas, stored procedures and so on.  A Database is held on a Database Instance.

## Available datastores and database flavors

The datastores currently available via the Nectar Database Service are:
- MySQL
- PostgreSQL

**Note**  
MySQL can be automatically upgraded between major versions, but PostgreSQL cannot. If you wish to upgrade your PostgreSQL database to a newer major version, you will need to dump and restore.
{: .callout-warning}

The database flavors currently available are:
- db.small (4GB RAM)
- db.medium (8GB RAM)
- db.large (16GB RAM)

## Database Service Quota

Access to the Nectar database service is governed by its own type of quota, which you must apply for, through the allocation request form in the dashboard.

The allocation form allows you to request quota for `database ram` and `database storage`.  You should also include quota for Object storage to hold database backups. 

## What you'll learn

The basic that you will learn from this tutorial are:

- Launching a MySQL database instance
- Creating and restoring a database backup
- Creating and managing database users
- Accessing a MySQL database using the `mysql` tool

## What you'll need

-  A Nectar allocation with database and object storage quota.  Apply for this via the [Nectar Research Cloud Dashboard](https://dashboard.rc.nectar.org.au/)

**Note**  
It is not possible to do the exercises in this tutorial using a Nectar "project trial".
{: .callout-warning}
