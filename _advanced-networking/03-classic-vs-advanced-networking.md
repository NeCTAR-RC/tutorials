---
title: Classic vs. Advanced Networking
order: 3
duration: 3
---

### Classic Networking:

Compute instances are assigned a fixed IP address and are connected directly to the internet via a public network located at the instance’s availability zone.
 ![img]({{ site.baseurl }}/assets/images/advanced-networking/classic-network.png)


### Advanced Networking

Compute instances are attached to a private network that is attached to a virtual router. The router is connected to the internet via a public IP address. Internet traffic can flow from the private network through the router to the public internet.

![img]({{ site.baseurl }}/assets/images/advanced-networking/simple-private-network.png)
