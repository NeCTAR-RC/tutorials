---
title: Launching an instance from a snapshot
order: 04
duration: 5
---

Once the snapshot has been created, you can launch an instance from it.

Log on to the [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and navigate to `Project`, `Compute`, then `Images` page in the dashboard.

Locate the snapshot image in the list of images and click `Launch` in the `Actions` list.

![The instances page]({{site.baseurl}}/assets/images/snapshots/snapshot-images-page.png)

The launching steps are exactly the same as launching a new virtual machine, except that the new instance will already have the operating system settings, configurations and installations of the original instance.
Please refer to tutorial [Launching Virtual Machines]({{site.baseurl}}/launching-virtual-machines) for more information. 

**Note**  
The flavor of instance must be large enough to fit the image on the primary root disk.
{: .callout-warning}
