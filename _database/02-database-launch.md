---
title: Launch and backup a MySQL database instance
order: 2
duration: 15
---

### Launch a MySQL database

1. Log on to your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
1. Navigate to the `Project | Database | Instances` page
1. Click the `Launch Instance` button to start the Create Database Instance Dialog.
1. Select Tasmania in `Availability Zone` drop dwon list and enter Tutorial in the `Instance Name`.  Enter 5s GB in `Volume Size` field.  Select the latest of version of MySQL in the `Datastore` drop down list.
![Database instance dialog details tab]({{ site.baseurl }}/assets/images/database/create-database1.png)
1. Click the `Initialize Databases` tab. Enter a tutorial in the `Initial Databases` field. Enter admin in `Initial Admin User` field. Enter 123456 in the `Password` field.
![Database instance dialog initialize tab]({{ site.baseurl }}/assets/images/database/create-database2.png)
1. Click `Launch` button.
1. Wait until the building process is finished and you should see the database instance is listed under `Project|Database|Instances`
![Database instance list page]({{ site.baseurl }}/assets/images/database/create-database4.png)

### Create a backup

1. Navigate to the `Project | Database | Instances` page 
![Database instance list page]({{ site.baseurl }}/assets/images/database/create-database4.png)
1. Find the database instance `tutorial` and click the `Create Backup` button to start the `Backup Database` Dialog.
1. Enter tutorial_backup in `Name` field and select tutorial in `Database Instance` dropdwon list.
![Database backup dialog]({{ site.baseurl }}/assets/images/database/create-backup1.png)
1. Click `Backup` button.
1. Wait until the building process is finished and you should see the database backup is listed under `Project|Database|Backups`.
![Database backup list page]({{ site.baseurl }}/assets/images/database/create-backup2.png)