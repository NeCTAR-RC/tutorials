---
title: Update your linux
order: 3
duration: 5
---

### Enable auto updates

It is an important part of keeping systems secure to apply updates on a frequent basis. By default, updates are applied manually and require user
intervention. In this exercise, we are going enable automatic upgrade in Ubuntu 18.04 or above.


1. In your SSH terminal, execute the below command.
```
$ sudo dpkg-reconfigure unattended-upgrades
```
2. In the pop out dialog, choose `yes` and enter.
![Auto upgrade pop out window]({{ site.baseurl }}/assets/images/security-discussion/security-auto-update.png)


### Upgrade installed software packages

Another good practice to do for security is to keep your installed software up to date. In this exercise, we are going to upgrade instance. Note, please snapshot your instance to backup your data before upgrading in case if the upgrade fails. 

1. Execute the command `sudo apt-get upgrade`.
```
$ sudo apt-get upgrade
```