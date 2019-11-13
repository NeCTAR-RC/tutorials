---
title: Create Volume Snapshot
order: 07
duration: 5
---

### Create Volume Snapshot

1. Log on to your [Nectar Dashboard] (https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand-side).
2. Navigate to the `Project | Volumes | Volumes` page
3. Before taking a snapshot, you have to make sure your Volume is not attached to an instance. The volume has to be in the status `Available`.
4. Locate the Volume you want to take a Snapshot. On the right-hand side in the `Actions` list, select `Create Snapshot` from the drop-down box.

![The volume page]({{site.baseurl}}/assets/images/snapshots/snapshot-from-volume-page.png)

5. A window will come up in which you type in a Snapshot name and a description. Confirm by clicking on `Create Volume Snapshot` button.

![The volume dialog]({{site.baseurl}}/assets/images/snapshots/snapshot-volume-dialog.png)

6. You will be redirected to the `Volume Snapshot` page and the snapsht should be appeared in the list.

![The volume dialog]({{site.baseurl}}/assets/images/snapshots/snapshot-volume-snapshot-page.png)

### Create New Volume From Snapshot

If you want to use the snapshot and attach it to an instance, you need to create a new volume from the snapshot.

1. Log on to your [Nectar Dashboard] (https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand-side).
2. Navigate to the `Project | Volumes | Snapshots` page
3. Locate the Snapshot you want to create a Volume. On the right-hand side in the `Actions` list, select `Create Volume`.
4. In the `Create Volume` window, type in the name for the new Volume and a description. Other options should be automatically pre-filled when you select your Sanpshot. 
![The volume dialog]({{site.baseurl}}/assets/images/snapshots/snapshot-volume-snapshot-dialog.png)

5.  After clicking the `Create Volume` button, your new Volume will be created and should appear in the list of your existing Volumes. You may now attach it to an instance and mount it from this instance to access the data.