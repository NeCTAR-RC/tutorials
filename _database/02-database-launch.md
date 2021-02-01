---
title: Launch and backup a MySQL database instance
order: 2
duration: 15
---

## Launch a MySQL database

1. Log on to the [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
1. Navigate to the `Project` / `Database` / `Instances` page
1. Click the `Launch Instance` button to start the Create Database Instance dialog.
1. Select the appropriate Availability Zone from drop down list and supply the name `tutorial` for the `Instance Name` field. Select the latest of version of MySQL in the `Datastore` drop down list.
![Database instance dialog details tab]({{ site.baseurl }}/assets/images/database/create-database1.png)
1. Click the `Initialize Databases` tab. Enter tutorial in the `Initial Databases` field. Enter admin in `Initial Admin User` field. Enter a strong password in the `Password` field.
![Database instance dialog initialize tab]({{ site.baseurl }}/assets/images/database/create-database2.png)

**Note**  
Ideally, for security reasons, you should provide a specific host IP address in
the `Allowed Host` field to limit access to your database instance or launch
your database instance on a private network. See the
[Advanced Networking]({{site.baseurl}}/advanced-networking)
tutorial for more information.
{: .callout-danger}

1. Click `Launch` button.
1. Once the building process is finished, you should see your instance become `Active`. It is now ready to use.
![Database instance list page]({{ site.baseurl }}/assets/images/database/create-database4.png)

## Create a backup

1. Navigate to the `Project` / `Database` / `Instances` page
![Database instance list page]({{ site.baseurl }}/assets/images/database/create-database4.png)
1. Find the database instance `tutorial` and click the `Create Backup` button to start the `Backup Database` Dialog.
1. Enter tutorial_backup in `Name` field and select tutorial in `Database Instance` dropdown list.
![Database backup dialog]({{ site.baseurl }}/assets/images/database/create-backup1.png)
1. Click `Backup` button.
1. Wait until the backup process is finished and you should see the database backup is listed under `Project` / `Database` / `Backups`.
![Database backup list page]({{ site.baseurl }}/assets/images/database/create-backup2.png)

**Note**
Database backups are stored in Nectar object storage.  Your Nectar project will need object storage quota sufficient to hold the backups.
