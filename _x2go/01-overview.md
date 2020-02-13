---
title: Overview
order: 1
duration: 5
---

A remote desktop is a service that allows a user to access and view an operating system's graphical desktop environment that is running on another computer in another geographical location. In this tutorial, the remote desktop runs in a Nectar virtual machine. The access occurs via the network connection and enables users to interact with the system as if they were physically at their own computer.

In a remote desktop setup, the local computer receives a copy of the desktop image from the remote computer updated regularly or when a change is detected. The local computer's keyboard and mouse inputs are transferred to the remote computer, where the remote desktop software implements the instructions accordingly.

Virtual machines running in the Nectar Cloud can be accessed via a remote desktop service, which allows users to access the virtual machines through a desktop GUI rather than a traditional command line console.

There are many desktop environments available for linux such as KDE, MATE, GNONE, Cinnanmon, Budgie, Xfce and so on. In this tutorial, MATE is used to demo the setup process. Protocols for remote desktop used to enable communication between local computer and remote computer include Remote Desktop Protocol (RDP), virtual network computing (VNC) and NX technology.

Access virtual machine through a remote desktop provides many benefits over traditional local computer access:

1. Enables running GUI applications such as Matlab in the Nectar Cloud 
2. Allowing users to access a graphical user interface from anywhere
3. Easy to share data and to collaborate among users
4. More storage options and larger disk size
5. More reliable computer system that offers 24 hours access
6. Better technical supports as the virtual machine can be easily accessed by a system administrator

In this tutorial, you will walk through the setup procedure to install remote desktop on a virtual machine and to setup x2go to access the remote desktop. 

**Cloud One**
This tutorial is part of the Nectar Cloud One curriculum. You should be familiar with the basics of virtual machine and know how to launch and access a virtual machine in Nectar Cloud. If you think you need help with any of that, you should complete [Cloud Start tutorial](/cloud-starter/01-overview) before you start here.
{: .callout-warning}


### What you'll learn

- Install remote desktop in a virtual machine
- Install and setup x2go in a virtual machine
- Install and setup x2go client to access a remote desktop

### What you'll need

- A running virtual machine with Ubuntu 18.04 or above
- Terminal Software
