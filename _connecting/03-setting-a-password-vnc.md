---
title: Setting a user password for VNC
order: 3
duration: 3
---

In the next section, we'll connect to our instance using the web-based `vnc`-console.

The `vnc`-console cannot use keypairs, so Nectar only provides the `vnc`-console in the secure trusted location of the Nectar dashboard. *That location is secure enough to access your instance using a password*.

Nectar preconfigured images, such as the Ubuntu image we used to launch our instance, do not have a password preconfigured on the default user account. So we need to set one ourselves. We'll use our `sudo` privileges (this allows for administrator priviledges) to change the password on the ubuntu account as below.

**Note:**  
You must be logged into your instance via SSH to first set the password.
{: .callout-warning}

```
$ sudo passwd ubuntu
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

We do have some [advice on passwords](https://support.ehelp.edu.au/support/solutions/articles/6000213823-passwords).

**Important**  
Password authentication and SSH don't mix well these days on the Internet. Automated entry attempts on well-known user accounts with well-known or stolen passwords occur continuously. Virtual machines based on Nectar official images are preconfigured to disable SSH password authentication to prevent this type of unauthorised access. You should not change this. Remember, for SSH we use our Public/Private Key Pair instead for authentication.
{: .callout-danger}

 **Leave SSH password authentication disabled**  
We're serious.
{: .callout-danger}

For more practical security guidelines and see the [security administration checklist](https://support.ehelp.edu.au/support/solutions/articles/6000091906-security-administration-checklist) in the Nectar knowledge base

**Great Work!**  
With a password in place on our `ubuntu` account we're ready to use the Nectar web-based `vnc`-console.
{: .callout-success}
