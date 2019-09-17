---
title: Rebuilding
order: 4
duration: 8
---

You can *Rebuild* an instance. This means that your instance will retain its flavour, volume attachments and IP-address, but it will have a new image applied to it. 

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