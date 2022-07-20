---
title: Unmount and Detach
order: 7
duration: 3
---

You can use the `umount` command (note the spelling of the `umount` command) to unmount your device from its mount point (here `/pvol`). E.g.

```
$ sudo umount /pvol
```

You can use the Nectar dashboard to detach a Volume from an instance. Navigate to the Volumes page, and use the action menu for the particular Volume to show the `Manage Attachments` dialog. (Alternatively you can use the action menu of the instance on the Compute / Instances page)

![Manage Volume Attachements]({{ site.baseurl }}/assets/images/volume-storage/manage-volume-attachments-detach.jpg)

**Detach then Delete!**  
Volumes must be detached before deletion.
{: .callout-info}