---
title: Overview
order: 1
duration: 1
---

By default, all instances in Nectar Research Cloud are created with a public IP address and they are publicly accessible from the Internet. This is useful if you need to access your instance from anywhere in the Internet, but it does leave it open to exploit attempts. In particular, automated scripts that scan ranges of addresses looking for insecure servers to compromise.

### Shared Responsibility Model

Nectar follows the shared responsibility model for security. That is, Nectar will make a best effort attempt to look after the security of the cloud
and you will look after the security of the instances, images, applications and content that you put onto the Research Cloud. In another words, Nectar will look after the infrastructure, and you will look after the stuff that you put up into your instances. This means that you have a fair amount of responsibility.

In this tutorial, we are going to do some exercises to protect your instance against the majority of the automated attacks. The steps below are what is recommended as the best "bang-for-buck" security controls - low effort controls that provide reasonable good protection against most attacks.


### What you'll learn

- Tight up SSH security
- Enable automatic updates
- Subscribe to security announcements for your instance
- Check Security Log
- Encrypt files

### What you'll need

- A running Nectar instance with ubuntu 18.04 or above.
