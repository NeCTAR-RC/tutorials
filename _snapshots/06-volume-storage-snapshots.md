---
title: Snapshots for volume storage
order: 06
duration: 5
---

### What is a volume snapshot?

A volume snapshot creates a copy of the state of a volume.
It is similar to taking a snapshot of an instance in that it creates an image which you can then use as a base for new volumes.

This is not necessarily the most ideal form to _backup_ a volume, as each snapshot takes up significant disk quota, the same size of your Volume even if the Volume still has lots of free space on it.

For example, if you have a 100GB volume, but only use 1GB data on it, they your Snapshot will still be 100GB. Also, you have limited quota available specifically for Snapshots. However, it is  still option to take a Snapshot of particular state of the volume and to easily create a new volume from it at a later time.

**Note**  
The original volume that a snapshot was based on must still exist, or you will be unable to restore it. In fact, OpenStack does not let you delete volumes that have _depending snapshots_. This is different to backups, which alternatively, can exist independently of the volume.
{: .callout-warning}


