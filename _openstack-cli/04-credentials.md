---
title: Setting up your credentials
order: 4
duration: 5
---

Before you can start to use the OpenStack client, you need to setup your OpenStack credentials.

These credentials are different to the login you use for the dashboard.

Log on to on the [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure
you're working in the right project (Use the project selector on the top left-hand side).

Click your email address on the top left corner and click `OpenStack RC File` to
download the authentication file. Save the file into your computer, where you
want to run your OpenStack client.

![User Settings Page1]({{ site.baseurl }}/assets/images/openstack-cli/openstack-cli-1.png)

The RC file contains all the settings required for authentication, except for your password.

**Your OpenStack password**  
If you have already generated an OpenStack password and have it stored,
you may not want to skip this next step and use your existing password.
{: .callout-warning}

Click `Settings` in the same drop down menu get into the `Settings` page.
Then click the `Reset Password` item to get your password.

![User Settings Page2]({{ site.baseurl }}/assets/images/openstack-cli/openstack-cli-2.png)

Execute the below command with your authentication file and type in the password when it prompts.


```
source project_name.sh
```

Now you can proceed to the next section to see how to use the OpenStack client.
