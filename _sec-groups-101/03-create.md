---
title: Create a Security Group
order: 3
duration: 4
---

You can create Security Groups on the Nectar Dashboard `Security Groups` page, so if you're not already there:

1. Navigate to `Project | Network | Security Groups` in the navigation panel on the left hand side.
2. Click the button **+** Create Security Group
3. Give your Security Group a meaningful **Name** and optionally a **Description**. For the purpose of this tutorial we recommend the name `ssh`
4. click Create Security Group to finalise this step. 

**Unique Names**<br/>
Although you can use duplicate names for Security Groups, it will make your life harder if you do so. We recommend you don't.
{: .callout-danger}

You have now created a Security Group and you are ready to configure it with the right Rules. 

### Manage Rules

1. Click the "Manage Rules" option on the Action Menu button for the group you created above. 
   Two Egress rules should be visible. To add the `ssh` rule
2. Click the **+** Add Rule button.

In the Add Rule dialog, select the Rule SSH in the **Rule** selector.

**SSH is special**<br/>
Because the SSH rule is a very commonly used rule, it is preconfigured in Nectar. You'll see that the Add Rule dialog changes to show fewer fields upon selecting the SSH rule. 
{: .callout-warning}

Just click the Add button to complete this step. You have created a Security Group and configured it with the `ssh` rule. 