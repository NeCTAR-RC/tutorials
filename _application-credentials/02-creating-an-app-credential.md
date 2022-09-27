---
title: Creating an Application Credential
order: 2
duration: 5
---

1. Logon to your [Nectar Dashboard](https://dashboard.rc.nectar.org.au){:target="_blank"}
   and ensure you're working in the right project (Use the project selector on the top left-hand side).
1. Navigate to the `Identity | Application Credentials` page using the navigation links on the left side of the page.
1. Click the `Create Application Credential` button to open the Create Application Credential dialog.

    ![Create Application Credential dialog]({{ site.baseurl }}/assets/images/application-credentials/app_credential.png)

1. Provide a credential name in the `Name` field.
1. You can leave the `Secret` field blank, and a secure secret will be generated for you.
1. Optionally, provide an expiration date in the `Expiration Date` field.
1. Optionally, select the roles to grant to this application credential.
   Selecting nothing will grant all roles listed. If you have more than one
   role, it's best to limit what you grant here to just what your script
   requires. Usually the `Member` role is enough.
1. Click the `Create Application Credential` button.
1. Click the `Download openrc file` button and the `Download clouds.yaml` button.

    ![Application Credential download dialog]({{ site.baseurl }}/assets/images/application-credentials/secret.png)

1. You can use the downloaded openrc file or clouds.yaml for authentication with your client tools.
