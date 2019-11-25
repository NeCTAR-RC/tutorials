---
title: Rebuilding
order: 4
duration: 8
---

You can *Rebuild* an instance. This means that your instance will retain its flavour, volume attachments and IP-address, but it will have a new image applied to it. The astute observer will start to recognise a bit of a pattern; something to do with the Instances page on your Nectar Dashboard and performing some sort of action on your instance from the Action Menu. 

**Warning** 
The *Rebuild* action erases all data on your instance primary and ephemeral drive (if it has one), including installed software, configuration settings and user data. 
{: .callout-danger}

**Manage your data**
Before *rebuilding* your instance, you should manage your data. You should store your valuable data on persistent storage, e.g. [Nectar Volume Storage](https://support.ehelp.edu.au/support/solutions/articles/6000216075-persistent-volume-storage) or [File Shares](https://support.ehelp.edu.au/support/solutions/articles/6000183607-nectar-shared-filesystem-service), or [your institution storage](https://support.ehelp.edu.au/support/solutions/articles/6000136764-introduction-to-rds-participating-nodes) options or your local machine.
{: .callout-warning}

![Action Menu Rebuild]({{ site.baseurl }}/assets/images/changing-instances/action-menu-rebuild.png)

![Rebuild Dialog]({{ site.baseurl }}/assets/images/changing-instances/rebuild-dialog.png)

![Rebuild Status]({{ site.baseurl }}/assets/images/changing-instances/rebuild-status.png)

**Warning: Remote Host Identification Changed**<br/>
If you use *Rebuild* and then reconnect to your instance using `ssh` you will typically receive a `REMOTE HOST IDENTIFICATION HAS CHANGED!`-warning. This is expected behaviour after a *Rebuild* as `ssh` detects a materially different computer using an old IP-address. 
{: .callout-danger}

When you receive the `REMOTE HOST IDENTIFICATION HAS CHANGED!`-warning ssh typically suggests how you can resolve this situation, but this depends on a combination of ssh-client, terminal software and operating system and possibly your computer's mood. `ssh` keeps track of computers that you have previously connected to using the `.ssh/known_hosts`-file. If a computer that `ssh` has previously connected to looks materially different now than  it did in the past, `ssh` will refuse to connect (or display a stern warning). If you have just rebuilt your VM, then your VM will look materially different, and ssh will throw this warning.

To resolve this situation, and allow `ssh` to connect to your rebuilt instance, you will have to use a command to forget the old instance' fingerprint. You can do this as below (remember to fill in the ip-address of your instance):

```bash
$ ssh-keygen -R [your-ip-address]
```

To make things easy as well as secure, `ssh` typically includes these instructions in its warning message. 