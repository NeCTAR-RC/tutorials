---
title: Migrating a Boot Volume
order: 06
duration: 10
---
<!-- Need to add links for each step (ie link to backup tutorial) -->

*This approach is straight-forward, but it will only work when both the origin and destination Availability Zones support the Volume backup service.  In addition, the instance’s boot volume must not be too large for Volume backup to work*.

For further information regarding migrating boot volumes, [visit the support site here](https://support.ehelp.edu.au/support/solutions/articles/6000246737-migrating-a-boot-from-volume-instance). 

**Steps:**
1. Shut down the old instance.

2. Create a Volume backup for the instance’s volume.

3. Create a new Volume in the new Availability Zone from the backup.

4. Launch a new “boot from volume” instance from the new volume.

5. Verify that the instance is working properly.

6. Wait.  It is advisable to keep the old instance for a few days in case you need to roll back the migration.

7. Delete the old instance, old volume and snapshot, and volume backup.


##### Migrating using volume to image upload 

*This approach is also straight-forward, but it only works up to a certain size of volume.  (Temporary disk space is used on the infrastructure server to hold the image before it is uploaded. If a volume is too large, there won’t be enough space and the operation will fail.)*

**Steps:**
1. Shut down the old instance

2. Upload an Image from the instance’s volume.

3. Launch a new instance from the Image in the new AZ.  This could be a boot-from-volume instance, or a regular instance if the Image is 30GB or less.

4. Verify that the instance is working properly.

5. Wait.  It is advisable to keep the old instance for a few days in case you need to roll back the migration.

6. Delete the old instance, old volume and volume snapshot, and temporary volume.