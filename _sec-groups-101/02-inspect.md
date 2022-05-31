---
title: Inspect your Security Groups
order: 2
duration: 3
---

Access to Nectar Research Cloud resources is organised in *projects* and there are a few different types of them. If you're reading this, it is likely that you are using a *personal trial* (or *pt-*) project. If this is the case you probably already have some pre-configured security groups.

If you're in a project with other users, then it is possible that they have already created Security Groups and Rules.

With the steps below you'll inspect your existing Security Groups and Rules.



1. Logon to your Nectar Dashboard at [https://dashboard.rc.nectar.org.au](https://dashboard.rc.nectar.org.au/)
2. Ensure the Project Selector (top left hand side of the page) indicates the project you want to work in:

   ![Project Selector]({{ site.baseurl }}/assets/images/sec-groups-101/project-selector.png)
3. Navigate to `Project` / `Network` / `Security Groups` in the navigation panel on the left hand side.
   ![menu-selector]({{ site.baseurl }}/assets/images/sec-groups-101/sec-groups-menu.png)

You will now see a list of the Security Groups that are available in your project.

**SSH group**
By the end of this tutorial you need to have a Security Group that will allow you to connect to an instance using SSH.
{: .callout-warning}

If you see a group that is named `ssh` or similar, then

1. Click the `Manage Rules` option in the Action Menu button beside this group

![menu-selector]({{ site.baseurl }}/assets/images/sec-groups-101/manage-rules-ssh.png)

A list of `Rules` is displayed that are part of this Security Group.

If your Security Group contains this rule, then your project is all set for launching an instance and connecting via SSH. The next two sections are optional for you, but we do recommend you give them a go: there is every chance that at some stage in your Nectar career you'll use your skills in creating and adjusting *security groups* and their *rules*.

![ssh rule]({{ site.baseurl }}/assets/images/sec-groups-101/ssh-rule.png)

If you didn't find a group named `ssh` or similar, or didn't find a group containing the the ssh-ingress rule as above, then you should proceed with the next two sections, where you'll learn how to Create a Security Group and Create an ssh rule.
