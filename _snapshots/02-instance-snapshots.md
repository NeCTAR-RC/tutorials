---
title: Instance Snapshots
order: 02
duration: 5
---

### What is Instance Snapshots

You may want to copy the state of your instance at a particular time and use it later to boot a new instance. Copies of instances are called Snapshots. 

Instance Snapshots only copies data from the primary root disk of your instance, not from the secondary 'ephemeral' storage or mounted volume storages.

**Note**
The primary root disk is small (5-30GB) and is not suitable for storing significant data. Creating a snapshot of your instance is preserving the instance set-up such as software installation, configurations and profiles. If you have large data on 'ephemeral' storage or mounted volume storages, please refer to back up data tutorial.
{: .callout-warning}
 
### Why You Need Snapshots

There are five main reasons you would take a snaphost of your instance:

1. To back-up the instance and you can restore an instance from the snapshot
2. To copy the set-up of an instance and create a template image which can be used to launch instances that are already set-up
3. To relaunch an instance as a new instance with a different flavor (increate or reduce numbe of CPUs) or in a different Availability Zone.
4. To Share the set-up of an instance with other users. You need to make sure the proper permission is set for the snapshot image.
5. To use the snapshot as a base image to create volume storages which can be used to launch an instance.