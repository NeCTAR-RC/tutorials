---
title: Before Launching VM
order: 2
duration: 1
---

Before launching your Virtual Machine (VM), there are some key tasks to prepare secure passage while using the Nectar Cloud.

**Understand and use Security groups**

Security groups are important! They tell your VM who can and can't, as well as how someone can access the VM. We have a detailed tutorial for Security Groups, using the Dashboard [here.]({{ sitebase.url }}/sec-groups-101/01-overview)

Be sure to only open the ports you need to use. If only using Secure Shell to access the VM, don't open the Web access ports too!

**Always use Private/Public Keys to authenticate!**

Passwords are easily compromised, and using passwords for authentication are disabled by default on all public nectar standard images. Private/Public keys are used instead to login via SSH. Follow this tutorial [here]({{ sitebase.url }}/keypairs/03-ssh-keygen) to get started with Private keys.

**Encrypt your existing Private keys**

You may have started using the Nectar Cloud and have already generated Private keys without encrypting them with a password. No worries! You can encrypt existing private keys using the Command below in your Command Line software. But make sure you navigate to your .ssh folder first, using the cd command!

```
ssh-keygen -o -p -f yourkeyfilename
```

**Back up your private keys**

You may change computers or should the worst happen lose access to your private keys somehow. If you lose these keys, you lose access to your machine. To protect yourself from getting locked out, keep a backup copy of the keys in a safe place (an external drive or the like).