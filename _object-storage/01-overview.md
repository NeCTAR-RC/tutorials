---
title: Overview
order: 1
duration: 2
---

### What is Object Storage

Object Storage is not a traditional file system or real time data storage system. It is designed for mostly static data that can be retrieved, leveraged, and then updated if necessary. It is independent of a virtual machine and can be updated and used without having any virtual machine running. The storage is designed to be redundant and scalable and objects are written to multiple hardware devices in the data centre to ensure integrity, and great performance.

### Why do you need Object Storage?

You have a dataset comprised of 2GB files that you read in and analyse many times, but in general it doesn't change. Or you want to access and share your data across multiple virtual machines in Nectar cloud. Those are a couple examples that are perfect for `Object Storage`.

In general, the object store is great for data you write once and read many times, but not suitable for applications like databases. You can access the object store from anywhere on the Internet,and data from `Object Storage` can be transferred to and from your `Virtual Machine` with a variety of http capable tools.

Object Storage has the following features which are quite different from the traditional file systems:

- Access via API at application level, rather than via OS at file system level. This means block level access is not possible and interaction can only occur via a single API end point.
- Access via HTTPS to allow external data access
- No directory tree. Object Storage uses a flat structure and objects are stored in containers.
- Metadata lives directly with object.
- Scalability. Object Storage systems have mechanisms to check file consistency and handle failed drives, bit-rot, server and cabinet failures, etc. These features allow the system to automatically replicate data as needed to retain the desired number of replicas, which results in extremely high durability and availability of data.
- Cost. Object Storage systems are designed to run on commodity hardware, it is cheaper compared to block or file storage.

**Important Considerations**
Object storage is not a filesystem, So you cannot rename objects and modify objects. Objects cannot be locked. There is no mechanism to perform operation in an atomic way. If locking is required, an external object locking mechanism or cooperation between all clients are needed. 
{: .callout-warning}

**Cloud Two**
This tutorial is part of the Nectar Cloud Two curriculum. You should be familiar with the Nectar Cloud Starter and Cloud One curriculum. If you think you need help with any of that, you should complete Cloud Starter and Cloud One tutorials before you start here.
{: .callout-warning}

### What you'll learn

- Use Object Storage via Nectar Cloud Dashboard
- Setup sftp-cloudfs server to access Object Storage
- Use Swift Python Client to access Object Storage

### What you'll need

- a running virtual machine with ubuntu 18.04 or above installed
- [Terminal software](https://support.ehelp.edu.au/support/solutions/articles/6000223964-terminal-software)
-  Nectar project with approved Object Storage quota
