---
title: Overview
order: 1
duration: 3
---

A common requirement when setting up a Nectar project is to handle scripted tasks such as automated instance launching, snapshots and backups. To make these scripts functional you will need valid credentials in order to talk to the relevant OpenStack APIs. One way to do this is to use your personal Nectar credentials. However, there are security and other concerns with embedding personal credentials into scripts, especially when you want to share your scripts with others.

`Application Credentials` are designed to solve the above problem. Users can use this facility to create their own OpenStack credentials for authorizing scripted tasks that access specific services. These credentials may be created for specific tasks and/or services and may be revoked individually by the user who created them. They can also be created to expire after a period and will be automatically invalidated if the user's access is removed. This makes them relatively safe to embed into scripts.

**Cloud Two**
This tutorial is part of the Nectar Cloud Two curriculum. You should be familiar with the Nectar Cloud Starter and Cloud One curriculum. If you think you need help with any of that, you should complete Cloud Starter and Cloud One tutorials before you start here.

### What you'll learn

- Create an application credential
- Use the credential to run OpenStack CLI commands

### What you'll need

- a running virtual machine with ubuntu 18.04 or above installed
