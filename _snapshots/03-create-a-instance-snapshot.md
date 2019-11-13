---
title: Creating an Instance Snapshot
order: 03
duration: 5
---

1. Log on to your [Nectar Dashboard] (https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand-side).
2. Navigate to the `Project | Compute | Instances` page
3. It is not necessary, but good practice, to `Pause Instance` from the `Actions` drop down list before making a snapshot.
4. Locate the instance you wish to copy and click the `Create Sanpshot` button on the right hand side of an instance from the `Actions` drop down list to start the Snapshot Dialog.
![The instances page]({{site.baseurl}}/assets/images/snapshots/snapshot-from-instances-page.png)

5. Once the Snapshot Dialog is poped out, enter a descriptive name for the Sanpshot. Then Click `Create Snapshot` button to submit the request.
![Snapshot Dialog]({{site.baseurl}}/assets/images/snapshots/snapshot-instance-dialog.png)

6. You will be redirected to the `Images` tab, which shows all you Images and Snapshots. To see your Snapshot, you need to select the name as a filter in the `Search` bar and type in the name of the Snapshot.
![Snapshot Image Dialog]({{site.baseurl}}/assets/images/snapshots/snapshot-from-images-page.png)

**Note**
It will take some time to create the Snapshot. The snapshotted image will be save in hte `Project -> Compute -> Images` section.
Instance Sanphsots do not include the state of the secondary ephemeral disk, or of any volumes, even if they are currently mounted.
It is possibile to take a snapshot while an instance is currently running. In most cases, these should be no problem. However, if the instance is running and programs are writing on the file system, the resulting Snapshot may be inconsistent. There are a few options to prevent this inconsistency from happening. You can run `sync` before starting Snapshot and use a `file system freeze` utility which block programs writing on the filesysten. The easiest option is probably to pause or shut down the instance before Snapshotting. 
 {: .callout-warning}