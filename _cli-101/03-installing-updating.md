---
title: Installing and Updating software
order: 3
duration: 20
---

### Elevating privileges using `sudo`

For some actions on your instance, including installing and updating software, you need system administrator privileges, also known as *root*, *root*-privileges, *superuser*-privileges or *sudo*-privileges. The default user accounts on Nectar images are all configured to have *sudo*-privileges. To demonstrate, run the following command:

```bash
ubuntu@myinstance:~$ apt update #attempt to check for software updates
```



you should get errors similar to these:

```bash
Reading package lists... Done
E: Could not open lock file /var/lib/apt/lists/lock - open (13: Permission denied)
E: Unable to lock directory /var/lib/apt/lists/
W: Problem unlinking the file /var/cache/apt/pkgcache.bin - RemoveCaches (13: Permission denied)
W: Problem unlinking the file /var/cache/apt/srcpkgcache.bin - RemoveCaches (13: Permission denied)
```



To perform the `apt update` action we need to *elevate* to *sudo*-privileges. We can do this using the `sudo` utility command. From `man sudo`:

```
DESCRIPTION
	sudo allows a permitted user to execute a command as the superuser
```



The correct way then to execute the `apt update`, using the `sudo` elevation command is (output truncated below):

```bash
ubuntu@myinstance:~$ sudo apt update

Get:1 ...
...
...
Fetched 4591 kB in 8s (571 kB/s)
Reading package lists... Done
Building dependency tree
Reading state information... Done
3 packages can be upgraded. Run 'apt list --upgradable' to see them.
```



In summary: the default accounts on Nectar images have administrator privileges aka *sudo*-privileges. You access the *sudo*-privileges by prefixing your commands with `sudo` utility command. 

### Updating installed software

In the section above you learnt about admin-privileges and `sudo`. You are now ready to update the software installed on your machine. 

Ubuntu and debian machines come with the `apt` (**a**dvanced **p**ackage **t**ool) package manager software. The command you used above check whether any of the packages you have installed need updating. The command to apply any of those updates is separate and very similar. You will see them side by side often, so here they are side-by-side. Note that the upgrade command as shown is interactive: you need to answer the question/s it asks. (Output truncated below).

```bash
$ sudo apt update
...
$ sudo apt upgrade
Reading package lists... Done
Building dependency tree
Reading state information... Done
Calculating upgrade... Done
The following packages will be upgraded:
  base-files libinput-bin libinput10
3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 157 kB of archives.
After this operation, 0 B of additional disk space will be used.
Do you want to continue? [Y/n] y
...
```



Your instance will now show you a lot of logging information about the software it is downloading and upgrading. These upgrades often include security-related upgrades to your software and operating system. You should run an `apt update` and `apt upgrade` regularly. 

### Installing new software

Installing new software, much like updating existing software, uses both `sudo` and `apt`.Try this example (output truncated below):

```bash
$ sudo apt install fortune-mod
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following additional packages will be installed:
  fortunes-min librecode0
Suggested packages:
  fortunes
The following NEW packages will be installed:
  fortune-mod fortunes-min librecode0
0 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.
Need to get 621 kB of archives.
After this operation, 2131 kB of additional disk space will be used.
Do you want to continue? [Y/n]
...
```



After you have installed `fortune-mod` your instance has gained the powers of *interesting adage* and *random epigram*.
From `man fortune`:

```bash
NAME
   fortune - print a random, hopefully interesting, adage
DESCRIPTION
   When fortune is run with no arguments it prints out a random epigram. 
```



Try it:

```bash
$ fortune
```

If you would like to see the next few *random epigrams* from `fortune`, but you would not like to retype the command, you can use the up-arrow while at your command prompt. The up-arrow navigates to the previous commands in your command history. 

**Installing software** The basic `apt` way of installing software is not the only way to install software. You'll find installation instructions for your software from your vendors and repositories. 
{: .callout-warning}