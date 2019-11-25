---
title: Overview
order: 1
duration: 4
---

Security Groups are Nectar's way of specifying what network traffic can reach into -and out of- your Virtual Machine (VM). By default a VM brought up in the Nectar Research Cloud can reach out to the world via the network, but the world can’t reach in.

You need to specify any network traffic to be allowed to reach the VM via the Rules in a Security Group.

Security groups can be applied to VMs at launch and can be applied or removed at any other time in the VMs life. 

**Cloud Starter**<br/>This tutorial is part of the Nectar Cloud Starter curriculum. Only the *bare essentials* of security groups are discussed here. For more in depth review see the Nectar [Security Group documentation](https://support.ehelp.edu.au/support/solutions/articles/6000055387).
{: .callout-warning}

### What you'll learn

- Create a basic security group and a rule, for `ssh`
- Apply a Security Group during Launch or on an already running instance

### What you'll need

- An account on the Nectar Research Cloud
