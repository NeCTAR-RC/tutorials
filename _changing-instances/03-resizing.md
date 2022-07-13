---
title: Resizing
order: 3
duration: 5
---

One benefit of Virtual Machines over physical ones is that the virtual ones you can actually make bigger. Increasing the number of CPUs, the RAM and the hard drive in your computer was never this easy.

You can resize your instance in 2 ways, via the **Nectar Dashboard**, or using the **Command Line**.

### 2-step process using the Dashboard.

To *resize* an instance, navigate to the Instances page on your Nectar Dashboard, and select *Resize instance* from the Action Menu of the instance you would like to resize. This will take you to the *Resize Instance dialog* where you can select a new flavour for your instance.

The resize action is a 2-step process. When you click the Resize button on the *Resize Instance Dialog* a request for *Migrate/Resize* will be submitted. Your instance page will appear, and will show relevant Status and an Action button asking you to `Confirm Resize/Migrate`. This process typically takes less than a minute.

**Flavour constraints**  
You won't be able to resize your instances beyond your allocated resource quota. There are also some constraints resizing from some instance sizes to others, mostly to do with a flavour's disk space. You can read more about it in the [Resizing documentation](https://support.ehelp.edu.au/support/solutions/articles/6000212271-resizing-nectar-instances) in the Nectar knowledge base.
{: .callout-warning}

![Action Menu Resize]({{ site.baseurl }}/assets/images/changing-instances/resize-dropdown.png)



![Resize Instance Dialog]({{ site.baseurl }}/assets/images/changing-instances/resize-menu.png)



![Confirm Resize]({{ site.baseurl }}/assets/images/changing-instances/confirm-resize.png)

### 2 step process using Command Line

You can also use the OpenStack command line tools to resize your instances. If you're not familiar with the OpenStack command line you can get started using our tutorial [here.]({{ site.baseurl }}/openstack-cli/01-overview)


Use the following command to perform a resize:

```
nova resize --poll <instance> <new-flavor>
```

You can use either the **instance name** or **instance ID** for `<instance>`.


The same rules apply as for resizing through the dashboard; you may refer to the [support site page](https://support.ehelp.edu.au/a/solutions/articles/6000212271) to seek valid entries for `<new-flavor>`.

Resizing from the command line also requires confirmation, like in the dashboard approach above. In fact, you can use the dashboard to confirm a resize that was started from the command line; conversely, you can use the command line to confirm a resize initiated from the dashboard.

To proceed with confirmation:

```
nova resize-confirm <instance>
```

On the other hand, if you have changed your mind, you can discard the resize and retain the instance in its current flavor like so:

```
nova resize-revert <instance>
```

