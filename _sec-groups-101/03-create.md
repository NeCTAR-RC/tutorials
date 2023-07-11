---
title: Create a Security Group
order: 3
duration: 4
---

You can create Security Groups on the Nectar Dashboard `Security Groups` page, so if you're not already there:

1. Navigate to `Project` / `Network` / `Security Groups` in the navigation panel on the left hand side.
![menu-selector]({{ site.baseurl }}/assets/images/sec-groups-101/sec-groups-menu.png)
2. Click the button **+** Create Security Group.
![create-button]({{ site.baseurl }}/assets/images/sec-groups-101/create_sec_group.png)
3. Give your Security Group a meaningful **Name** and optionally a **Description**. For the purpose of this tutorial we recommend the name SSH.
4. click Create Security Group to finalise this step.
![name + button]({{ site.baseurl }}/assets/images/sec-groups-101/create-dialog.png)

**Unique Names**  
Although you can use duplicate names for Security Groups, it will make your life harder if you do so. We recommend you don't.
{: .callout-danger}

You have now created a Security Group and you are ready to configure it with the right Rules.

### Manage Rules

1. After clicking the create security group button above, you will automatically see the rules for this group.
   Two Egress rules should be visible.
   ![name + button]({{ site.baseurl }}/assets/images/sec-groups-101/egress-rules.png)
   Egress means traffic/data sent out of our virtual machine. What we are concerned with, is who is trying to come in. So to allow our own connections, we need to add an Ingress rule for SSH access.
2. To add the SSH rule, click the **+** Add Rule button.
![name + button]({{ site.baseurl }}/assets/images/sec-groups-101/add-rules.png)

3. In the Add Rule dialog, select the Rule SSH in the **Rule** selector.
![dropdown]({{ site.baseurl }}/assets/images/sec-groups-101/ssh-dropdown.png)
4. A value now needs to be entered in the CIDR field. The CIDR value will specify a range of IP addresses that will be permitted to access (in this case) the SSH port. In effect it allows or blocks SSH access to the VM. For this example we will use 0.0.0.0/0, which allows all IP addresses to attempt to connect. You can also restrict access to a public or private address range or even to a single IP address. More information about CIDRs, their syntax and what they mean can be found [here.]({{ site.baseurl }}/intermediate-security-groups/03-remote-ip-range)
![cidr-range]({{ site.baseurl }}/assets/images/sec-groups-101/sec-groups.png)
5. Click the Add button. You have created a Security Group and configured it with the SSH rule.

**SSH is special**  
Because the SSH rule is a very commonly used rule, it is preconfigured in Nectar. You'll see that the Add Rule dialog changes to show fewer fields upon selecting the SSH rule.
{: .callout-info}