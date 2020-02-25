---
title: Set up Credentials
order: 3
duration: 5
---

Before you can start to use the OpenStack client, you need to setup the username and password.

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)

2. Click your email address on the top left corner and click `OpenStack RC File` to download the authentication file. Save the file into your computer, where you want to run your OpenStack client.

    ![User Settings Page1]({{ site.baseurl }}/assets/images/openstack-cli/openstack-cli-1.png)

3. Click `Settings` in the same drop down menu get into the `Settings` page. Then click the `Reset Password` item to get your password.

    ![User Settings Page2]({{ site.baseurl }}/assets/images/openstack-cli/openstack-cli-2.png)


4. Execute the below command with your authentication file and type in the password when it prompts.

    ```bash
    source project_name.sh
    ```

Now you can proceed to the next section to see how to use the OpenStack client.