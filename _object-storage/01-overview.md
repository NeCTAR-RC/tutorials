---
title: Overview
order: 1
duration: 10
---

### What is Object Storage

Object Storage is an alternative file storage system that is designed
primarily for storing static data.  Objects (i.e. files) are created or
updated in object storage using a `PUT` action, and can subsequently be
retrieved using a `GET` action.

Unlike other storage systems, object storage is independent of virtual
machines and operating system type.  You can GET and PUT files from
anywhere with network access using a range of tools.  This includes
web browsers (via the Dashboard) and multi-platform desktop tools such
as Cyberduck.

Nectar Object storage is designed to be robust, redundant and scalable.  Object
replicas are stored on multiple hardware devices to protect against data
loss due to storage media failure.  High availability is achieved by
storing replicas of each object in multiple (geographically separated) data
centres.

### Use-cases for Object Storage

In general, object storage is suitable for data consisting of large files
that you write once and read (potentially) many times.  Here are a couple
of scenarios that are a "good fit" for Object Storage:

- You have a dataset (or datasets) composed of many large static files
  that you want to analyse one at a time.  You don't have enough file
  system space to hold them all.
- You have a large amount of data in the form of large static files that
  needs to be accessed from multiple Nectar virtual machines, or from external
  systems.
- You need somewhere to store daily backups of a database or file system, or
  to archive log files.

By contrast, object storage is not suitable for applications where the same
files need to be modified repeatedly, or modified in place.  For example
object storage is not suitable for holding an active database or an active
log file.  It is also not performant for applications where the data is
organized as lots of small files, unless you "zip" or "tar" up the files and
upload an archive.

### Object Storage is not file system storage

Object Storage is different from traditional and distributed file systems
in a number of respects:

- Access to objects at the application level is via an third-party API
  library, rather than via the local operating system's file system libraries.
- Conventional file system functionality such as "random access" I/O,
  "append", file locking and atomic operations are not available.
- File systems do not need to be "mounted".  Access to data is via HTTPS
  requests to the object storage service.
- There is no directory tree.  Object storage provides a flat structure
  where objects are stored in containers.
- Object metadata is stored on the object servers and accessed without the
  benefit of any file system level caching.  This means that operations that
  scan to find objects with particular metadata characteristics are slow
  compared with a typical file system.
- Scalability. Object storage systems have characterisics that mean
  that they can scale up in capacity virtually indefinitely.
- Low cost. Object Storage systems are designed to run on commodity hardware,
  making them significanlty cheaper compared to block storage (e.g. volume
  storage) or remote or distributed file system technology (e.g. NFS, GPFS,
  Lustre, GlusterFS and so on).

While it is possible to use FUSE technology to present object storage as a
file system, performance will be poor.  This approach is not recommended.

## Object Storage is not backed up

This might seem to contradict what we said said above robustness and
redundancy, Object Storage is not backed up.  You do not need to worry
about data loss due to media (i.e. disk) failures.  However, there is no
protection against loss due to human error.  For example, if you (or your
application) were to accidentally delete or replace an object, the
original data will would gone forever.  There would be no possibility
of getting it back from (say) a backup tape, and the chances of a replica
still existing would be vanishly close to zero.

Hence, it is not wise to store the *only* copy of your valuable data in
Nectar Object Storage.

**Cloud Two**
This tutorial is part of the Nectar Cloud Two curriculum.  We assume that
you are familiar with the Nectar Cloud Starter and Cloud One curriculum.
If not, you should complete the Cloud Starter and Cloud One tutorials
before you continue here.
{: .callout-warning}

### What you'll learn

- How to use Object Storage via the Nectar Cloud Dashboard
- How to use the Swift command line client to access Object Storage
- How to use Cyberduck to access Object Storage
- How to setup sftp-cloudfs proxy server for accessing Object Storage

### What you'll need

- A Nectar project with some Object Storage quota
- A Nectar virtual machine with Ubuntu 18.04 or above installed
- [Terminal software](https://support.ehelp.edu.au/support/solutions/articles/6000223964-terminal-software)
