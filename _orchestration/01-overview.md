---
title: Overview
order: 1
duration: 2
---

In Cloud environment, orchestration is an important component. It is the process to manage Infrastructure in an automated fashion. In OpenStack, Heat is the program dedicated to orchestration. It is a template driven service that automates the management of the entire life cycle of your virtual machines in the Nectar Research Cloud.

A `template driven service` simply means that you define your application's requirements in a human readable text file the template. In this template, you describe both the infrastructure and its relationships that your application will need to run on the Nectar Research Cloud.

Heat uses this template to provision the required infrastructure and manage the life cycle of your infrastructure from start to finish.

As part of the life cycle management, the Heat service supports both scaling on demand and the freeing up of infrastructure once the application is finished.

Heat integrates well with configuration management tools, such as Chef and Puppet. Thus the Heat service offers executable documentation of your application's deployment and life cycle, making your deployments repeatable and reliable. The net effect is to limit human error and to save you time. Thus saving you money.

### Heat Terms

- Resources: Objects that will be created or modified during the orchestration. They can be instances, volumes, security groups, network and more
- Stack: a collection of resources
- Parameters: input to the template during deployment. For example, if you want to provide the name for an instance, that name could be input as a parameter in the template and change during each run time.
- Templates: it defines a stack and describe the stack with code
- Output: It provides information back to user
 
### The Stack Life cycle

A template is created, using a standard text editor (such as Brackets). It is then uploaded into the OpenStack Heat service, either by means of the Heat command line client, or the Horizon dashboard.

If uploaded via the command line client, the engine expects any mandatory parameters to be provided as arguments added at the point the template was uploaded.

If, however, uploaded via the dashboard, then the dashboard will create an input wizard that will step the person who uploaded the template through the process of entering the required parameter values.

Once all the required data has been gathered the stack is then provisioned and launched.

The template and its associated parameters will remain in the Heat database until such time as the engine is instructed to destroy the stack.

At that point all the provisioned infrastructure will be destroyed, its resources released, and then the template and its parameters will be removed from the Heat database.

In this tutorial, we are going to do some exercises to use Heat template to launch and manage virtual machines.

### What you'll learn

- Create Heat template
- Launch and manage virtual machine using template
- Heat OpenStack CLI commands

### What you'll need

- Virtual Machine with Ubuntu 18.04 or above installed
- SSH Terminal Software