---
title: Overview
order: 1
duration: 5
---

### What is the Nectar database service

 The Nectar database service is a Database-as-a-Service (DBaaS) system powered by the Trove OpenStack project. It provides a simple interface to manage databases whilst hiding the underlying infrastructural requirements of configuring and running them. The Nectar database service offers the benefit of API or web based access for tasks like creating databases, creating and restoring backups, adding and removing database users, setting configuration parameters and more.
 
 The Nectar database service offers:
 
 - MySQL nad PostgreSQL datastore support
 - All user and database related operations: For instance, it allows you to add users and databases to your instance through the Trove API and dashboard
 - Database backups, stored in Nectar obect storage. Both incremental and non-incremental backups are supported
 - Setup configuration parameters

### Available datastores and flavors

The datastores currently available are:

- MySQL, version  5.7-20 and 8.0-12
- PostgreSQL - 9.6-14 and 11.3-10

Note: MySQL can be automatically upgraded between major versions, but PostgreSQL cannot. If you wish to upgrade your PostgreSQL database to a newer major version, you will need to dump and restore.

The flavors currently available are:

- db.small (2 virtual CPU cores, 4GB RAM)


### Database Service Quota

Access to the Nectar database service is governed by its own type of quota, which you must apply for, through an allocation request from in the dashboard.

The allocation form allows you to request quota for `database servers` and `database storage`.

You can apply for specific quota for either servers or storage, or both, depending on your requirements. If you don't specify storage, we'll allocate 10GB per server you request. If you request database storage, but don't specifically request any servers, we'll allocate you two.

### What you'll learn

- Launch and upgrade a database instance
- Create backup
- Access database

### What you'll need

-  sufficient database service quota
