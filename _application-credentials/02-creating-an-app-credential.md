---
title: Creating an Application Credential
order: 2
duration: 5
---

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au){:target="_blank"} and ensure you're working in the right project (Use the project selector on the top left-hand side).
1. Navigate to the `Identity | Application Credentials` page using the navigation links on the left side of the page.
1. Click the `Create Application Credential` button to start the Launch Dialog.

    ![Launch dialog1 from the Application Credentials ]({{ site.baseurl }}/assets/images/application-credentials/app-credential-dashboard1.png)

1. Provide a credential name in the `Name` field.
1. You can leave the `Secret` field blank, and a secure secret will be generated for you.
1. Provide an expiration date in the `Expiration Date` field.
1. Select only the roles that are required for the script that will use for this application credential. Usually `Member` is enough.
1. Click `Create Application Credential` button.
1. Click `Download openrc file` button and `Download clouds.yaml` button.

    ![Launch dialog2 from the Application Credentials ]({{ site.baseurl }}/assets/images/application-credentials/app-credential-dashboard2.png)

1. You can use the downloaded openrc file or clouds.yaml for authentication with your client tools.
