---
title: Availability and quota
order: 2
duration: 3
---


Advanced Networking is available in a number of Nectar Availability Zones. Before you can use private networking you'll need to have quota in place for *Private Networks*, *Routers* and *floating IP Addresses*

### Availability

Advanced networking is available at the following sites:

- Melbourne
- QRIScloud
- Tasmania
- Auckland

### Requesting Quota

To request private networking / floating IP resources, please ask for an amendment to your allocation and fill in the "Advanced Networking" section.

Note:

1. If you want to just implement a private network for your instances, you need to request quotas for a private network *and* a router.
2. If you want to use floating IPs, you need to request quotas for each floating IP *and also* for at least one private network *and* one router.

You can confirm your floating IP quota in the Project -> Overview section of the Dashboard:

![img]({{ site.baseurl }}/assets/images/advanced-networking/floating-ips-quota-dashboard.png) 

You can confirm your current network quotas by running the following command using the Python Neutron CLI:

```console
neutron quota-show
+---------------------+-------+
| Field               | Value |
+---------------------+-------+
| floatingip          | 30    |
| network             | 20    |
| port                | -1    |
| rbac_policy         | 10    |
| router              | 20    |
| security_group      | 60    |
| security_group_rule | 300   |
| subnet              | 50    |
| subnetpool          | 0     |
+---------------------+-------+
```

note: -1 denotes unlimited


