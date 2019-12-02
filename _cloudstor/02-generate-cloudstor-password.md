---
title: Generate App Password
order: 2
duration: 5
---
To connect your Nectar instance to your AARNet CloudStor account your instance has to authenticate to CloudStor on your behalf. Your instance will do this by submitting a username and a password. A CloudStor App-password

**Red Flag** Do not use your main CloudStor 'Sync Password' for this purpose. The password will be saved to a file on your instance harddrive. 
{: .callout-danger}

You have to generate the Application Specific *App Password* in your CloudStor account. It is a generated, strong password that only serves for a single application to access your CloudStor account. 

In the steps below you'll generate an App password in your CloudStor account, in preparation for mounting your CloudStor account in your Nectar instance.

1. Go to [CloudStor Dashboard](https://cloudstor.aarnet.edu.au/) and your university or institution. The login process is via Australian Access Federation (AAF), similar to Nectar Cloud Dashboard login.
   
1. Click the `Settings` icon on the top right hand side to get into the `Settings` page. Then click `Security` menu item on the left hand side. 
   
   ![CloudStor Setting Page]({{site.baseurl}}/assets/images/cloudstor/cloudstor-app-password1.png)
   
   
   ![CloudStor Setting Page]({{site.baseurl}}/assets/images/cloudstor/cloudstor-app-password2.png)
   
3. On the App passwords page, type in an app name (a good choice is the name of your Nectar Virtual Machine) and click `Create new app password` button. Then (temporarily) save the username and the generated password on your local computer. You need this username and password during the setup of CloudStor in the next section.
   
   ![CloudStor App Password Page]({{site.baseurl}}/assets/images/cloudstor/cloudstor-app-password-generated.png)



You're now setup with a CloudStor App Password specifically for your Nectar Instance. In the next section you'll learn how to mount your CloudStor account in your Nectar instance. 

