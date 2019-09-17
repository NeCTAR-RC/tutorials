---
title: Resizing
order: 3
duration: 5
---

One benefit of Virtual Machines over physical ones is that the virtual ones you can actually make bigger. Increasing the number of CPUs, the RAM and the hard drive in your computer was never this easy.

Navigate to the Instances page on your Nectar Dashboard, and select *Resize instance* from the Action Menu of the instance you would like to resize. This will take you to the *Resize Instance dialog* where you can select a new flavour for your instance. 

### 2-step process

The resize action is a 2-step process. When you click the Resize button on the *Resize Instance Dialog* a request for *Migrate/Resize* will be submitted. Your instance page will appear, and will show relevant Status and an Action button asking you to `Confirm Resize/Migrate`. This process typically takes less than a minute. 

**Flavour constraints**
You won't be able to resize your instances beyond your allocated resource quota. There are also some constraints resizing from some instance sizes to others, mostly to do with a flavour's disk space. You can read more about it in the [Resizing documentation](https://support.ehelp.edu.au/support/solutions/articles/6000212271-resizing-nectar-instances) in the Nectar knowledge base.
{: .callout-warning}

![Action Menu Resize]({{ site.baseurl }}/assets/images/changing-instances/action-menu-resize.png)



![Resize Instance Dialog]({{ site.baseurl }}/assets/images/changing-instances/resize-instance-dialog.png)



![Confirm Resize]({{ site.baseurl }}/assets/images/changing-instances/confirm-resize-status.png)

## 