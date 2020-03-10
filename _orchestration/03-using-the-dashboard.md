---
title: Using the dashboard
order: 2
duration: 10
---

In this section, we are going to create our orchestration stack using the Nectar Research Cloud dashboard.

## Creating the stack

1. From the [Nectar Dashboard](https://dashboard.rc.nectar.org.au), navigate to the `Project` / `Orchestration` / `Stacks` page.
1. Click the `Launch Stack` button to start the Launch dialog.
![Select template dialog]({{ site.baseurl }}/assets/images/orchestration/dashboard-select-template.png)
1. Ensure the `Template Source` field is set to `File`, then click the `Choose File` button to select the `basic_template.yaml` file from the previous page.
1. Click `Next` button and provide a name in the the `Stack Name` field.
![Launch stack dialog]({{ site.baseurl }}/assets/images/orchestration/dashboard-launch-stack.png)
1. Provide an Availability Zone in the field that you have access to.
1. Choose a flavor, image and an SSH key for the `key name` field.
1. Click `Launch` button.

The orchestration service will now create the resources defined in the template and the `Status` column in the `Stacks` table should show `Complete` once it's done.

If you navigate to the `Project` / `Compute` / `Instances` page and you should now see your compute instance running.

From the Instance Actions menu, if you choose the `Edit Security Groups` item, you should see that the orchestation engine has also created a new security group
and applied it to your instance.

## Deleting the stack

From the `Project` / `Orchestration` / `Stacks` page, select the tickbox to the left of your running stack and choose the `Delete Stacks` button.
The orchestration engine will clean the resources in the reverse order, ready for us to use the command line tools in the next section.
