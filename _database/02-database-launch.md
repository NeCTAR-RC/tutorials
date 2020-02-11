---
title: Launching a database instance
order: 2
duration: 30
---


### Create Configuration Group

If you want to setup configuration parameters for a database, you can create a configuration group. 

1. Log on to your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Navigate to the `Project | Database | Configuration Groups` page 
3. Click the `Create Configuration Group` button to start the Create Configuration Group Dialog

    ![Create configuration group dialog1]({{ site.baseurl }}/assets/images/database/create-config-group1.png)

4. Enter a name in `Name` field and a description in `Description` field. Select `MySQL` or `PostgreSQL` in the `Datastore`.
5. Click `Create Configuration Group` button.

    ![Create configuration group dialog2]({{ site.baseurl }}/assets/images/database/create-config-group2.png)

### Add Configuration Parameters

1. Go the `Configuration Groups` page.
2. Click the `configuration group name` which you want to add parameters.
3. Click `Add Parameter` button.

    ![Create configuration group dialog3]({{ site.baseurl }}/assets/images/database/create-config-group3.png)
    
4. Choose a parameter from the `Name` list and set a `value`. Then, click `Add Parameter` button.

    ![Create configuration group dialog4]({{ site.baseurl }}/assets/images/database/create-config-group4.png)


### Create Database Instance

1. Log on to your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Navigate to the `Project | Database | Instances` page 
3. Click the `Launch Instance` button to start the Create Database Instance Dialog.
4. Select a `Availability Zone` and Enter a `Instance Name`.  Enter `Volume Size` in GB.  Select a `Datastore` such as MySQL-5.7-10.

    ![Create database instance dialog1]({{ site.baseurl }}/assets/images/database/create-database-instance1.png)

5. Click the `Initialize Databases` tab. Enter a database name you want to create in `Initial Databases`. Multiple databases can be separated by a comma. Provider a database user name in `Initial Admin User`. Enter a password and IP address in `Allowed Host` (optional) if you want to allow the user to connect to from this host only.

6. Click 'Advanced' tab. If you have created a configuration group, you select it from `Configuration Group`. If you want to create a database instance based on a backup, you can select `Restore from Backup` in `Source for Initial State`. If you want to create an database instance based on an existing database instance, you can select  `Replicate from Instance` in `Source for Initial State`.

    ![Create database instance dialog3]({{ site.baseurl }}/assets/images/database/create-database-instance3.png)

7. Click `Launch` button.

### Create Backup

1. Log on to your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side).
2. Navigate to the `Project | Database | Instances` page 
3. Find the database instance you want to create a backup and Click the `Create Backup` button to start the `Backup Database` Dialog.
4. Enter a backup name in `Name` and enter some descriptive text in `Description`. 
5. Click `Backup` button.