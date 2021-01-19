---
title: Deleting
order: 5
duration: 6
---

By now you will have recognised a pattern in how to perform actions on your instances via the Nectar dashboard. We will perform one more: *Deleting*. When you are finished using your instance, or you are otherwise ready to throw it away, you can just Delete your instance using the Instance Action Menu. There's more info in the knowledge base about actions you can perform via the [Instance Action Menu Button](https://support.ehelp.edu.au/support/solutions/articles/6000184172-instance-action-menu-button).

**Warning**  
Deleting is irrevocable. Deleting erases all data on your instance primary and ephemeral drive (if it has one), including installed software, configuration settings and user data. 
{: .callout-danger}

**Manage your data**  
Before *deleting* your instance, you should manage your data. You should store your valuable data on persistent storage, e.g. [Nectar Volume Storage](https://support.ehelp.edu.au/support/solutions/articles/6000216075-persistent-volume-storage), [Nectar Object Storage]({{ site.baseurl }}/object-storage) or to your local workstation.
{: .callout-warning}

![Action Menu Delete]({{ site.baseurl }}/assets/images/changing-instances/action-menu-delete.png)



### Security Groups and Keypairs

Security Groups and Keypairs that were applied to your instance, are not deleted. They will be retained in your Nectar Project and Nectar Account respectively, for use with your next instance.
