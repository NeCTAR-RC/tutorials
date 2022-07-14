---
title: Create and Attach
order: 3
duration: 4
---

### Create a volume

You can see your project's volume storage allocation on the `Project` / `Compute` / `Overview` page on your Nectar dashboard, e.g.

![Volume allocation on Nectar Dashboard Overview]({{ site.baseurl }}/assets/images/volume-storage/volume-quota-overview.jpg)



To create a volume

- On your Nectar [Dashboard](https://dashboard.rc.nectar.org.au/);
- navigate to `Volumes | Volumes`;
- click the `+ Create Volume` button;
- give your volume a meaningful name and description;
- specify a '`Volume Source` to determine how the volume will be built;
- specify the size of the volume in GB;
- enter an `Availability Zone` (this must be the same availability zone as any instance it will be attached to);
- click `Create Volume` button.

When selecting Image for Volume Source, you will be able to select an image from the image catalog. This is useful for creating bootable volumes.

When selecting Volume for Volume Source, you will be able to select from the existing volumes in your project.

### Attach a volume

You can attach the volume created earlier to a running virtual machine. See the below instruction:

- On your Nectar [Dashboard](https://dashboard.rc.nectar.org.au/);
- navigate to `Volumes | Volumes`;
- from the ActionMenu for the Volume, select `Manage Attachments`
- in the Attach to Instance section of the `Manage Volume Attachments` dialog, select the instance to attach your volume to.
- click `Attach Volume` button

Nectar will now attach your volume to the selected instance. When this is complete your volume (on the `Volumes | Volumes` page) will show a value in the Attached To column similar to `/dev/vdc on acme_vm` in the example screenshot below.

![Volume attached to instance]({{ site.baseurl }}/assets/images/volume-storage/volumes-page-attached.jpg)

