---
title: Application Credential Via Dashboard
order: 2
duration: 5
---

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Click your `email address` in the top right corner and click `Settings` in the drop down list 
3. Navigate to the `Identity | Application Credentials` page
4. Click the `Create Application Credential` button to start the Launch Dialog

    ![Launch dialog1 from the Application Credentials ]({{ site.baseurl }}/assets/images/application-passwords/app-credential-dashboard1.png)

5. Provide a credential name in the `Name` field.
6. Provide your own secret, or one will be generated for you.
7. Provide a expiration date in the `Expiration Date` field. 
8. Select a one or more roles for this application credential.
9. Click `Create Application Credential` button.
10. Click `Download openrc file` button and `Download clouds.yaml` button.

    ![Launch dialog2 from the Application Credentials ]({{ site.baseurl }}/assets/images/application-passwords/app-credential-dashboard2.png)
    
 11. You can use the downloaded openrc file or clouds.yaml for authentication  with your client tools. 