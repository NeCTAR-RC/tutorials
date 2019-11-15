---
title: Instance snapshots
order: 02
duration: 5
---

### What are instance snapshots?

You may want to copy the state of your instance at a particular time and use it later to boot a new instance.
These copies are known as **snapshots**. 

Instance snapshots only copy data from the primary root disk of your instance, not from the secondary _ephemeral_ storage or mounted volume storage.

**Note**  
The primary root disk is generally small (10 to 30GB in size) and is not suitable for storing significant amounts of data.
Creating a snapshot of your instance is preserving the instance state such as software installation, configurations and profiles.
If you have large data on *ephemeral* storage, you will need to back this up separately. Volumes can also be snapshotted, but must be done though the Volume service.
{: .callout-warning}
 
### Why you need snapshots

There are five main reasons you would take a snaphost of your instance:

* To backup the instance and allow you to restore an instance from the snapshot.
* To copy the set-up of an instance and create a template image which can be used to launch instances that are already configured.
* To re-launch an instance as a new instance with a different flavor (increase or reduce the number of VCPUs) or launch in a different Availability Zone.
* To share the set-up of an instance with other users. You need to ensure proper permissions are set for the snapshot image.
* To use the snapshot as a base image to create a volume which can be used to launch an instance.
