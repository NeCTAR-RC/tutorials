---
title: Migrating a Volume
order: 03
duration: 1
---
When you migrate an instance from one Availability Zone (AZ) to another, the volumes that it uses need to be migrated as well.  The Nectar federation does not allow a volume in one AZ to be attached to an instance in a different AZ.

### Assumptions

The instructions in this page assume that you understand how to detach and attach volumes, and format new file systems (when required) and unmount and mount file systems, and deal with Linux’s mechanisms for configuring mounts to persist over reboots.  For more information on these topics, please refer to:

* [Nectar Research Cloud Volumes Tutorial]({{ site.baseurl }}/volume-storage)

* Nectar Research Cloud [Volume Storage support article](https://support.ehelp.edu.au/support/solutions/articles/6000216075-persistent-volume-storage)

**Quotas**

All 3 approaches to volume migration require Volume Storage quota in both the old and new AZ’s to hold all of the volumes.  Migration using Volume Backup also requires Object Storage quota to hold the backups.

##### Approach #1 - Discarding and recreating scratch volumes

*You may be using Volume Storage to provide temporary storage for data intensive computations, or local caching for data that is held elsewhere.  If your volume is used in these (or similar) ways, this is a quick way to deal with migration*

**Steps:**
1. While the volume is still attached and mounted, double-check that it does not contain any files that need to be kept.

1. [Unmount and detach old volume]({{ site.baseurl }}/volume-storage/07-unmount-detach)

1. Delete the old volume.  (You could defer this, but there is little point if you already know that doesn’t contain anything of value.)

1. [Create a new empty volume]({{ site.baseurl }}/volume-storage/03-create-attach) in the new Availability zone.  You could create it with a larger or smaller size than the original volume.

1. Attach the new volume to the new instance, format it and mount it.


##### Approach #2 - Using Volume Backup

In some respects, migration using the Volume Backup service is the simplest approach.  Unfortunately, it won’t always work:

Volume Backup may not work for large volumes. The server that performs the backup creates a temporary copy in local disk space before uploading the backup to Object Storage. If the volume is too large, there may not be enough disk space for the temporary copy.  It is not possible to say how large is “too large”, but as a rule of thumb, backups are normally expected to work for volumes with sizes up to 500 GB.

Note that Volume Backup stores the volume backup in Object Storage, and therefore requires sufficient Object Storage quota for the backup.

**Steps:**
1. [Unmount and detach the volume]({{ site.baseurl }}/volume-storage/07-unmount-detach) from the old instance.

1. Use the Volume Backup service to create a volume backup.  Check that the backup has completed successfully.

    Note:  Do not use a Volume Snapshot. You will not be able to create a new volume in the new AZ from the snapshot.
    {: .callout-danger}

1. [Create a new volume]({{ site.baseurl }}/volume-storage/03-create-attach) from the backup in the new AZ

1. [Attach the new volume]({{ site.baseurl }}/volume-storage/03-create-attach) to the new instance.

1. Wait.  It is advisable to keep the old volume for a few days in case it is needed to roll back the migration.

1. Delete old volume and the backup

##### Approach 3 - Copying Data between Volumes

The final approach is to copy the data from one volume to another while they are mounted on instances.  This approach should work in all cases, irrespective of the volume size and location. You can also be selective in the files that you copy, or use this as an opportunity to downsize the volume.

This approach is more involved than the Volume Backup approach, and may take longer  in some circumstances.  The following instructions assume that you are familiar with SSH public key authentication and the way that the “rsync” command works. They also assume that you understand how Linux user accounts (uids) and groups (gids) work.

**Steps:**
1. Ensure that the old volume is attached to the old instance in original Availability Zone.

1. It is advisable to create precautionary [backup of the data](https://support.ehelp.edu.au/support/solutions/articles/6000085112-backing-up-data) in the old volume before you start.

1. Create the new volume in new Availability Zone.  You could create it with a larger or smaller size than the original volume.

1. Attach the new volume to the new instance, format it and mount it.

1. Assuming that you are going to “push” files from the old instance to the new instance, arrange that you have the private key for the new instance’s admin account on the old instance.

1. Use [rsync to copy the data from the old volume to the new volume](https://support.ehelp.edu.au/support/solutions/articles/6000085112-backing-up-data). This could take some time, especially if your volume’s content consists of a huge number of small files.

    *Note:  You need to be careful when running "rsync".  If you get the command line options and arguments incorrect, there is the potential to clobber all of the files in the old volume.*
    {: .callout-warning}

1. [Detach the old volume]({{ site.baseurl }}/volume-storage/07-unmount-detach) from the old instance.

1. Wait.  It is advisable to keep the old volume for a few days in case it is needed to roll back the migration.

1. Delete old volume and (optionally) the precautionary [backup](https://support.ehelp.edu.au/support/solutions/articles/6000085112-backing-up-data).