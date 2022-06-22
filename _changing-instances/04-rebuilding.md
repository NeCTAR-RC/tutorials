---
title: Rebuilding
order: 4
duration: 8
---

You can *rebuild* an instance. This means that your instance will retain its flavour, volume attachments and IP address, but it will have a new image applied to it.

**Warning**  
The *Rebuild* action erases all data on your instance primary and ephemeral drive (if it has one), including installed software, configuration settings and user data.
{: .callout-danger}

**Manage your data**  
Before *rebuilding* your instance, you should manage your data. You should store your valuable data on persistent storage, e.g. [Nectar Volume Storage](https://support.ehelp.edu.au/support/solutions/articles/6000216075-persistent-volume-storage), [Nectar Object Storage]({{ site.baseurl }}/object-storage) or to your local workstation.
{: .callout-warning}

![Action Menu Rebuild]({{ site.baseurl }}/assets/images/changing-instances/rebuild-dropdown.png)

![Rebuild Dialog]({{ site.baseurl }}/assets/images/changing-instances/rebuild-instance-dialog.png)

![Rebuild Status]({{ site.baseurl }}/assets/images/changing-instances/rebuild-status.png)

**Warning: Remote Host Identification Changed**  
If you use *Rebuild* and then reconnect to your instance using SSH you will typically receive a `REMOTE HOST IDENTIFICATION HAS CHANGED!` warning. This is expected behaviour after a *rebuild* as SSH detects a fingerprint that is different from when you previously connected to this address.
{: .callout-danger}

When you receive the `REMOTE HOST IDENTIFICATION HAS CHANGED!` warning, SSH typically suggests how you can resolve this situation, but this depends on a combination of ssh-client, terminal software and operating system. SSH keeps track of computers that you have previously connected to using the `.ssh/known_hosts` file. If a computer that SSH has previously connected to returns a different fingerprint than it did in the past, SSH will refuse to connect (or display a stern warning). If you have just rebuilt your VM, it will have generated itself a different SSH *host key* and will throw this warning.

To resolve this situation, and allow SSH to connect to your rebuilt instance, you will have to use a command to forget the old instance' fingerprint. You can do this as below (remember to fill in the hostname or IP address of your instance):

```
$ ssh-keygen -R [hostname or IP address]
```

To make things easy as well as secure, SSH typically includes these instructions in its warning message.
