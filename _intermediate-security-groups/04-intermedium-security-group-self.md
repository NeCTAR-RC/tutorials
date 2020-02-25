---
title: Allow Connections by Security Groups
order: 4
duration: 5
---

Instead of opening network traffic to a range of IP addresses, You can also allow traffic on Virtual Machines which have a specific security group assigned. This is useful, when you only want to allow traffic to a group of Virtual Machiness. To allow access to the group, you can setup a login virtual machine within the group to allow SSH connections.

 1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Navigate to the `Project | Network | Security Groups` page
3. Click `Manage Rules` in the Actions List for the security group you want to add or delete rules
4. To add a new rule, click the `Add Rule` button.
    ![Security Group Dialog1]({{ site.baseurl }}/assets/images/intermediate-security-groups/security-group3.png)
5. In the `Remote` drop down list, select `Security Group`
6. In the `Security Group`, select a security group
7. Click `Add` button