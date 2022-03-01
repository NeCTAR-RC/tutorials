---
title: While using the VM
order: 3
duration: 1
---

While using your VM, you should be aware of the following:

**Note**  
Depending on what you are using the Cloud for, only some of these may apply.
{: .callout-info}

**User account permissions**

When creating user accounts or adjusting file permissions, only grant the necessary permissions required. You can refer to the various online guides available for this works on the operating system you choose.


**Completing Admin tasks**

Add the term sudo to commands when you need to complete administrative tasks. For example, this vim software installation command in Ubuntu:
```
sudo apt-get install python3-matplotlib
```

**Don't allow users to login with abolustely all the powers!**

Root user priviledges give someone all the super administrative power on the computer, they could perform operations as any user, change configurations, open any files on the system and so on. Thus, we *disable root user login*. This comes disabled on official Nectar images by default. If you are using a non official image, then you must disable this yourself. The procedure can vary between operating systems, you can refer to online information to sort.

**Keep your software and apps updated**

Updates are important, as they can provide patches to security issues that have been discovered.
*Ubuntu/Debian:*
```
sudo apt dist-upgrade
sudo apt-get upgrade
```

*Centos/Fedora:*
```
yum update
yum upgrade
```

**Remove the default**

When installing apps, sometimes they come with default accounts, disable or remove these. Refer to the instructions for the specific app you are using to do this.

**Protect against attacks**

When using Secure Shell to access your VM, unfortunately there will be those "bad folks" who try to compromise your machine and access your data, by constantly pinging your VM for an SSH attack. To prevent this, SSH attack banning tools can be installed These come installed on Nectar images by default. If not using our official image, refer to the relevant operating system documentation available.

**Use encryption for communication**

Where possible encrypt any communications made, especially if using web services on your VM. For example, you can get free encyrption certificates via Let's Encrypt. We have a [full article here](https://support.ehelp.edu.au/support/solutions/articles/6000217026-enabling-https-on-your-nectar-instance) to explain, and how to connect it to a web server. In addition, if you are hosting a sensitive/private content on a dashboard or portal, ensure this is requires login credentials to view this content. The method to do this, will vary on the applications you are using.

**Scanning your VM**

It's great to get someone else to check your VM, for things you may not be aware of to look for. Some institutions offer security scanning services, check with your local IT team.