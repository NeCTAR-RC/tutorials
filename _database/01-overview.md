---
title: Overview
order: 1
duration: 5
---

 The Nectar database service is a Database-as-a-Service (DBaaS) system powered by the Trove OpenStack project. It provides a simple interface to manage databases whilst hiding the underlying infrastructure requirements of configuring and running them. The Nectar database service offers the benefit of API or web-based access for tasks like creating databases, creating and restoring backups, adding and removing database users, setting configuration parameters and more.


## Available datastores and flavors

The datastores currently available are:
- MySQL
- PostgreSQL


**Note**  
MySQL can be automatically upgraded between major versions, but PostgreSQL cannot. If you wish to upgrade your PostgreSQL database to a newer major version, you will need to dump and restore.
{: .callout-warning}

The flavors currently available are:
- db.small (2 virtual CPU cores, 4GB RAM)


## Database Service Quota

Access to the Nectar database service is governed by its own type of quota, which you must apply for, through the allocation request form in the dashboard.

The allocation form allows you to request quota for `database servers` and `database storage`.

## What you'll learn

- Launch a MySQL database instance
- Create database backup
- Create database user
- Access MySQL database

## What you'll need

-  You need to apply for database quota from the [Nectar Research Cloud Dashboard](https://dashboard.rc.nectar.org.au/)
