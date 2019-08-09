---
title: Overview
order: 1
duration: 3
---

In the past, compute instances on the Nectar Research cloud were limited to a single network configuration referred to as Classic Networking. Each compute instance was attached to the public internet via a single network interface and assigned a fixed publicly routable IP address. Compute instances in the QRIScloud availability zone had an additional non-routed network interface (qld-data network) for communicating with RDS storage.

With the introduction of Advanced Networking, users of the Nectar Research Cloud now have the ability to create private networks within their respective projects (subject to quota allowance). Private networks are completely isolated and are unique to the project in which they are created. Each private network can span supporting sites across the Nectar Research Cloud, meaning that compute instances from multiple availability zones can be connected together over a private link; mitigating the need for network traffic to travel over the public internet. Advanced Networking also allows the use of Floating IP addresses. Floating IP addresses are IP addresses dedicated to a project (subject to quota allowance) and can be attached to an instance that is part of a private network in order to create a public presence for that instance. Because Floating IP addresses are dedicated to a project, it makes it possible to maintain a public IP address for an instance after termination. Each private network can contain multiple private subnets. Networks can be created and manipulated using the Network submenu from the Nectar dashboard or using the python OpenStack client.

Instances belonging to a project with a private network can have a network interface created and attached to that private network and assigned a private IP address from a network subnet. Multiple network interfaces can be attached to a single instance. While these interfaces can be a mix of classic networking and private network interfaces, it is recommended that only one routed network is attached to an instance.

### What you'll learn

- Create a Private Network
- Create a Router
- Obtain, attach and re-attach floating IP-Addresses

### What you'll need

- Understanding of networking and routing
- Access to a Nectar Project with an allocation for Networks, Routers and Floating IP-addresses 
- Access to- and understanding of the `openstack` and `neutron` CLI interfaces.
