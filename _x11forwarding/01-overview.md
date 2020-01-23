---
title: Overview
order: 1
duration: 5
---

Users can connect to Nectar virtual machine using a variety of SSH (Secure Shell) clients and most of these terminals are text based. If you need to use some GUI applications on your virtual machine, you need to use SSH clients with X11 forwarding enabled.

X11 is a software package and network protocol that lets you interact locally, using your personal computer's display, mouse and keyboard, with the graphical user interface of an application running on a virtual machine.  X11 forwarding allows user to start up applications on remote virtual machine but forward the graphical display to your local machine. The connection between your device  and virtual machine is secured via SSH connection.

**Cloud One**  
This tutorial is part of the Nectar Cloud One curriculum. You should be familiar with the basics of launching and accessing a virtual machine in Nectar Cloud. If you think you need help with any of that, you should complete [Cloud Start tutorial]({{site.baseurl}}/cloud-starter/) before you start here.
{: .callout-warning}

### What you'll learn

- Configure virtual machine to enable X11 forwarding
- Install X server
- Access graphical application via SSH

### What you'll need

- A running virtual machine with Ubuntu 18.04 or above installed
