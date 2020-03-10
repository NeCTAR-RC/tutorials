---
title: Heat Concepts
order: 2
duration: 10
---

### Heat Terms

- Resources: Objects that will be created or modified during the orchestration. They can be instances, volumes, security groups, network and more
- Stack: a collection of resources
- Parameters: input to the template during deployment. For example, if you want to provide the name for an instance, that name could be input as a parameter in the template and change during each run time.
- Templates: it defines a stack and describe the stack with code
- Output: It provides information back to user
 
### The Stack Lifecycle

A template is created, using a standard text editor (such as Brackets). It is then uploaded into the OpenStack Heat service, either by means of the Heat command line client, or the Horizon dashboard.

If uploaded via the command line client, the engine expects any mandatory parameters to be provided as arguments added at the point the template was uploaded.

If, however, uploaded via the dashboard, then the dashboard will create an input wizard that will step the person who uploaded the template through the process of entering the required parameter values.

Once all the required data has been gathered the stack is then provisioned and launched.

The template and its associated parameters will remain in the Heat database until such time as the engine is instructed to destroy the stack.

At that point all the provisioned infrastructure will be destroyed, its resources released, and then the template and its parameters will be removed from the Heat database.