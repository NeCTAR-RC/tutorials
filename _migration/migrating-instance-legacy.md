---
title: Migrating an Instance with Legacy Flavours
order: 04
duration: 10
---

*The following procedure can be used if your existing m1 or m2 instance has an ephemeral file system, AND you need to keep the data in it.*

Further contextual information can be found on the [Nectar Support site](https://support.ehelp.edu.au/support/solutions/articles/6000246733-migrating-instances-with-legacy-flavors). 

**Steps:**
1. [Back up your files](https://support.ehelp.edu.au/support/solutions/articles/6000085112-backing-up-data).  You should already have a procedure for making regular backups of your valuable files held on your instances and attached storage.  Before you start the migration, make sure that your backups are up to date.

1. Take your instance out of normal service.  You are in the best position to know what this will entail.

1. Unmount and detach any volumes from the instance.  These will need to be migrated separately; see “Migrating a volume”.

1. Shut down the instance. 

1. [Snapshot the instance]({{ site.baseurl }}/snapshots/01-overview).  You should verify that the snapshot has been successfully uploaded to the Image catalog.

1. [Launch new instance]({{ site.baseurl }}/snapshots/04-launch-instance-from-snapshot) from snapshot in target Availability Zone. If you run into the [“No valid hosts found”](https://support.ehelp.edu.au/support/discussions/topics/6000060776) issue, you could try using a smaller flavor for the new instance, either temporarily (and resize later) or permanently.  Alternatively raise a [support ticket](support.ehelp.edu.au).

1. If you have decided that you need a volume to replace the ephemeral file system:

    * [Create a new empty volume and attach it to the new instance](https://tutorials.rc.nectar.org.au/volume-storage/03-create-attach).

    * Format the volume and mount it.

1. Restart the old instance, but do not restart user-facing services.

1. Use [rsync to copy the files from the old instance’s ephemeral file system](https://support.ehelp.edu.au/support/solutions/articles/6000085112-backing-up-data) to the new instance.  The target location for the copied files on the new instance is up to you. Depending on the circumstances, you could copy some or all of the files into the new instance’s root file system.

1. Shutdown the old instance once more.

1. Attach any other migrated volumes.  After attaching the volumes, you should verify that the device names (“vdb”, “vdc”, etcetera) for the volumes are as expected and then mount the volumes’ file systems.

1. Verify the correct operation of the new instance. You are in the best position to know what this will entail.

1. Restore the instance to service.  You are in the best position to know what this will entail.

1. Wait.  It is advisable to keep the old volume for a few days in case it is needed to roll back the migration.

1. [Delete the old instance](https://tutorials.rc.nectar.org.au/changing-instances/05-deleting)