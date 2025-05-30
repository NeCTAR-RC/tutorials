---
title: Migrating a Normal Instance
order: 02
duration: 10
---
<!-- Need to add links for each step (ie link to backup tutorial) -->


### Steps

*For further background information about instance migration, read this support site [article here.](https://support.ehelp.edu.au/support/solutions/articles/6000246731-migrating-a-normal-instance)*

1. [Back up your files](https://support.ehelp.edu.au/support/solutions/articles/6000085112-backing-up-data).

    You should already have a procedure for making regular backups of your valuable files held on your instances and attached storage.  Before you start the migration, make sure that your backups are up to date.
    {: .callout-primary}

1. Take your instance out of normal service. You are in the best position to know what this will entail.

1. Detach any volumes from the instance. These will need to be migrated separately.

1. Shut down the instance.

1. [Snapshot the instance]({{ site.baseurl }}/snapshots/01-overview).  You should verify that the snapshot has been successfully uploaded to the Image catalog.

1. [Launch new instance from snapshot in target Availability Zone as per the linked document]({{ site.baseurl }}/snapshots/04-launch-instance-from-snapshot). If you run into the [“No valid hosts found” issue](https://support.ehelp.edu.au/support/solutions/articles/6000279599), you could try using a smaller flavor for the new instance, either temporarily (and resize later) or permanently.  Alternatively raise a support ticket.

1. Attach any migrated volumes.  After attaching the volumes, you should verify that the device names ("vdb", "vdc", etcetera) for the volumes are as expected and then mount the volumes’ file systems.

8. Verify the correct operation of the new instance. You are in the best position to know what this will entail.

9. Restore the instance to service.  You are in the best position to know what this will entail.

10. Wait.  It is advisable to leave the old instance in “shutdown” state for a few days, just in case there is a need to “roll back” the migration; see below.

11. [Delete the old instance]({{ site.baseurl }}/changing-instances/05-deleting)

### Rollback

If you perform the migration by following the above steps in the order given, you should be able to “roll back” the migration.

Up to and including step #8, you simply need to restart the old instance and reattach the old volumes to it.

Once you have put the new instance into service (step #8) you may need to take steps to deal with data or database changes made by users since the changeover.  In the worst case, these could be abandoned.

### Note
Once an old instance is deleted (Step #11), it cannot be recovered.
{: .callout-danger}
