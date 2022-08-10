---
title: Backup and Restore a Database Instance
order: 4
duration: 10
---

In this lesson, we will learn how to backup a Database Instance, and then restore it.

**Note**  
The Database backups are saved to Nectar's Object Storage Service, so you will need sufficient Object Storage quota to cover all of the backups that you intend to keep.
{: .callout-warning}

## Create a Database Backup

1. Navigate to the `Project` / `Database` / `Instances` page
![instance page]({{ site.baseurl }}/assets/images/database/backup.png)
1. Find the database instance `tutorial` and click the `Create Backup` button to start the `Backup Database` Dialog.
1. Enter tutorial_backup in `Name` field and select tutorial in `Database Instance` dropdown list.
![Database backup dialog]({{ site.baseurl }}/assets/images/database/backup2.png)
1. Click `Create Backup` button.
1. Wait until the backup process is finished and you should see the database backup is listed under `Project` / `Database` / `Backups`.
![Database backup list page]({{ site.baseurl }}/assets/images/database/backup_complete.png)

## Restore a Database Backup

The way to restore a Backup is to create a new Database Instance with the Backup as its initial state.  You can do this by following the steps for Launching a database (from the previous lesson), with one additional step:

1. Navigate to the `Project` / `Database` / `Instances` page
1. Click the `Launch Instance` button to start the Create Database Instance dialog.
1. Select the appropriate Availability Zone from drop down list, enter the `Instance Name`, and select the database version from the `Datastore` dropdown.
1. Click the `Initialize Databases` tab and enter the `Initial Databases`, `Initial Admin User`, `Password` and `Allowed Host` fields.
1. Click the `Advanced` tab and select `Restore from Backup` as the `Source for initial state`.  Then select the name of the Backup that you want to use from the `Backup Name` pulldown list.
1. Click the `Launch` button.  A new Database Instance will be created and populate from the Backup that you provided.

You can also initiate a Database restore by going to the `Project` / `Database` / `Backups` page, and running the `Restore Backup` action.  This starts the `Launch Instance` dialog (as above) with many of the fields pre-propulated from the Backup's metadata.
