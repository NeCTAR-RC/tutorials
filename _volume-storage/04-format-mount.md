---
title: Format and Mount
order: 4
duration: 5
---

**Warning**  Formatting a device/volume erases all existing data on a device, if a file system already exists on the target device/volume. If you need to retain the data on your volume, you should skip to the `mount` section below.
{: .callout-danger}

You can verify the device name that your attached volume will have in your instance in the Attached To column on the `Volumes | Volumes` page on your Nectar dashboard. 

In your instance you can see the attached Volume as a Block Device using the lsblk (list block devices) command. 

```bash
$ lsblk
NAME   MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda    252:0    0  10G  0 disk
└─vda1 252:1    0  10G  0 part /
vdb    252:16   0  60G  0 disk /mnt
vdc    252:32   0  65G  0 disk
```

Depending on how you created your volume, it may not have a file system and you need to create one before mounting, i.e. format the device. The exact format command syntax is dependent on the virtual machine's operating system and the type of file system you need. The example below formats the volume attached as `/dev/vdc`' in the Ubuntu-based instance using the `ext4` filesystem. 

```bash
$ sudo mkfs -t ext4 /dev/vdc
```

To make your volume/device available to the operating system you need to mount it on a directory called a mount point. You can mount your device using an *in-memory-only mount*, but the mount will be lost upon rebooting your instance. We recommend you configure the mounting of your device/volume filesystem persistently using the configuration file `/etc/fstab`. In both examples we will create a mount point called `/pvol`.

### In memory only 

You can use below commands to create a mount point called `/pvol` and  to mount the device `/dev/vdc` at that mount point.

```bash
$ sudo mkdir /pvol
$ sudo mount /dev/vdc /pvol -t auto
```

### Using /etc/fstab 

 To ensure that your Volume is remounted after a reboot of your instance, you should configure it in the file `/etc/fstab`. 

First create the mount point `/pvol` using:

```bash
$ sudo mkdir /pvol
```

Then use a text editor to add the following line to `/etc/fstab`, where `/dev/vdc` is the device you're mounting and `/pvol` is the its target mount point.

```bash
/dev/vdc  /pvol    auto    defaults,nofail   0  2
```

After adjusting the `/etc/fstab` file you need to initiate any changes. Use the mount all command:

```bash
$ sudo mount --all
```

You may have to change ownership or write privileges to enable writing to the ephemeral storage, using chown, chgrp or chmod, e.g.

```bash
$ sudo chown ubuntu:ubuntu /pvol
```

\*\*\* your use-case or operating system may require different details or a different approach than this example. 