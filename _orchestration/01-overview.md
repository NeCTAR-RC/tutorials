---
title: Overview
order: 1
duration: 2
---

In Cloud environment, orchestration is an important component. It is the process to manage Infrastructure in an automated fashion. In OpenStack, Heat is the program dedicated to orchestration. It is a template driven service that automates the management of the entire lifecycle of your virtual machines in the Nectar Research Cloud.

A `template driven service` simply means that you define your application's requirements in a human readable text file the template. In this template, you describe both the infrastructure and its relationships that your application will need to run on the Nectar Research Cloud.

Heat then uses this template to provision the required infrastructure and manage the lifecycle of your infrastructure from start to finish.

As part of the life cycle management, the Heat service supports both scaling on demand and the freeing up of infrastructure once the application is finished.

Heat integrates well with configuration management tools, such as Chef and Puppet. Thus the Heat service offers executable documentation of your application's deployment and lifecycle, making your deployments repeatable and reliable. The net effect is to limit human error and to save you time. Thus saving you money.

### What you'll learn

- Create Heat template
- Launch and manage virtual machine using template
- Head OpenStack CLI commands

### What you'll need

- Virtual Machine with Ubuntu 18.04 or above installed
- SSH Terminal Software