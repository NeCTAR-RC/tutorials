---
title: Overview
order: 1
duration: 5
---

When developing complex application architectures in a cloud environment, orchestration is an important component in helping you provision and manage the resources you need.
The Nectar Research Cloud's orchestration service is a template driven service based on the `Heat` OpenStack project that automates the entire lifecycle of all types of cloud resources and how they work together.

A *template driven service* simply means that you define your application's architecture in a human readable text file (template). In this template, you describe both the infrastructure and the relationships that your application will need to run on the Nectar Research Cloud.


## Orchestration components
- **Stack**: A collection of resources
- **Resources**: Objects that will be created or modified during the orchestration. They can be instances, volumes, security groups, networks and more
- **Parameters**: Input to the template during deployment. For example, if you want to provide the name for an instance, that name could be input as a parameter in the template and changed for each run.
- **Templates**: Defines an orchestration stack with code
- **Output**: Provides information back to user about the created resources


## The Stack Lifecycle
A template is created in a text editor, defining what resources are required. It is then uploaded into the orchestration service, either from the Nectar Dashboard or through a command line tool.

Parameters are provided to the service and once all the required data has been gathered, the stack is created and resources provisioned.

The template and its associated parameters will remain in the orchestration service until the stack is terminated.

At that point all the provisioned infrastructure will be destroyed and all the stacks resources released.


## What you'll learn
This tutorial will provide you with some information about how to:
- Create a template
- Launch and manage cloud resources in a stack
- Use OpenStack CLI commands to manage orchestration stacks

## What you'll need
- A Nectar Research Cloud project with compute and volume storage quota
- OpenStackClient CLI installed on your local computer
