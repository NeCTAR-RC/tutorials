---
title: Overview
order: 1
duration: 2
---

Volume storage ("volumes") is Nectar's way of providing you with disk space. Volumes  are virtual devices; they can live alongside your virtual machine. A volume's life cycle is independent of a virtual machine, but manipulating data on a volume typically requires that it is *attached* to a virtual machine. An attached volume appears to your operating system as a block storage device and is typically used to hold a file system. It is then mounted into your operating system, making the storage available to your applications. Volumes can be unmounted and detached from a VM and attached to and mounted on another. Data on a volume persists even when you terminate your virtual machine. You can make bootable volumes, you can use volume snapshots and a volume can be transferred to another project.

In this tutorial you will learn the basics on how to use Volume Storage in Nectar. You will require a suitable volume allocation. You will learn to create, attach and detach volumes using the Nectar dashboard. You will use Linux commands to format (if necessary), mount and unmount your volumes, and check your volume's usage.

### What you'll need

- a running instance in a Nectar project
- a volume storage quota allocated in your project

### What you'll learn

- *create*, *attach* and *detach* volumes using the Nectar dashboard.
- the Linux commands to format (if necessary), mount and unmount your volumes
- check your volume's usage.