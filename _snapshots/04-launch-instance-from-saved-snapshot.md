---
title: Launching Instance From Saved Snapshot
order: 04
duration: 5
---

Once the snatpshot is created, it is saved in the `Images`. You can launch an instance from the saved snapshot.

1. Log on to your [Nectar Dashboard] (https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand-side)
2. Navigate to the `Project | Compute | Images` page.
3. Locate the snapshot image in the list of images and click `Launch` in the `Actions` list. ![The instances page]({{site.baseurl}}/assets/images/snapshots/snapshot-images-page.png)

4. The launching steps are exactly the same as launching a new virtual machine, except that the new instance will already have the operating system settings, configurations and installations of the original instance. Please refer to tutorial [Launching Virtual Machines]({{site.baseurl}}/launching-virtual-machines) for more information. 

**Note**
The flavor of instance must be large enough to fit the image on the primary root disk.
{: .callout-warning}