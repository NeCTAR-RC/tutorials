---
title: Snapshots for Volume Storages
order: 06
duration: 5
---

### What is a Volume Snapshot

A Volume Snapshot creates a copy of the state of a Volume. It is similar to take a Snapshot of an instance in that it creates an Image of which you can then create new Volumes. This is not necessarily the most ideal form to `Backup` a volume, because each Snapshot takes up `significant disk quota` the same size of your Volume even if the Volume still has lots of free space on it.  For example, if you have a 100GB volume, but only use 1GB data on it, they your Snapshot will still be 100GB. Also, you have limited quota available specifically for Snapshots. However, it is  still option to take a Snapshot of particular state of the volume and to easily create a new volume from it at a later time.

**Note**
The original Volume on which the Snapshot was based must still exist, or the Snapshots of it become useless. OpenStack does not let you delete Volumes which have `depending Snapshots`. So you have to be aware that the Snapshots are only usable while you keep your Volume in existence. This is different to Backups, which survive the deletion of volumes.
 {: .callout-warning}


