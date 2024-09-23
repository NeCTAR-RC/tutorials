---
title: Launch Instance
order: 05
duration: 5
---

You are now ready to Launch your instance! Click the blue launch instance button.

![launch button]({{ site.baseurl }}/assets/images/launching-virtual-machines/launch_button.jpg.png)

Your instance will now be built according to the configuration options we just set. The **Instances** page will list your instance' details, along with some status information.

**Note:**  
The screenshot depicts multiple instances in the list, but you will only have one in your list.
{: .callout-warning}

![Launch Building]({{ site.baseurl }}/assets/images/launching-virtual-machines/launch_spawning.png)



Once the Status becomes **Active** your instance is ready.

![Launch success]({{ site.baseurl }}/assets/images/launching-virtual-machines/launch_success.png)



You have now successfully launched a Virtual Machine using the Nectar Research Cloud dashboard; Nectar has given your instance an IP address, that you will need to connect to your instance.

**Note**  
If using the QCIF Availability Zone, you will have two IP addresses, one that says `QLD` and the other `QLD data`. The `QLD data` network is to allow an instance to access QRIScloud's RDS collections. Only instances which are permitted to access these collections need to configure and use the QLD data IP address. A typical Virtual Machine setup does not need to use this, only the `QLD` IP address is required.
{: .callout-warning}

**High five!**

![High Five]({{ site.baseurl }}/assets/images/launching-virtual-machines/high-five.png)


