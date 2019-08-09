---
title: Frequently asked questions
order: 11
duration: 5
---

**Q: I want a private network for my instances to communicate with each other but I want to use classic networking for outside communication. How do I do that?**

A: When creating the subnet, ensure you disable the gateway otherwise you will have two default routes in your instance and you may not be able to communicate with it. When launching an instance, add both Classic Provider and your private network to the list.



**Q: I have a private network with more than one subnet. How do I connect my instance to more than one subnet from the same network? Only the first subnet is connected.**

A: When launching an instance, OpenStack will only connect your first subnet of your private network to your instance. To connect more subnets, please create a port for the additional subnets (Network -> Networks -> {Your Private Network} -> Ports -> Create Port) by selecting "Subnet" under "Specify IP address or subnet" and selecting your additional subnet under "Subnet". All other fields can be left blank. After this, you can attach this subnet to your instance (Compute -> Instances -> Attach Interface) by selecting "by Port" under" The way to specify an interface" and selecting your newly created port.



**Q: I want a private network for my instances to communicate with each other but I also want to be able to communicate with RDS storage from my instance in Queensland. How do I do that?**

A: You can launch an instance with the private network only, wait for instance to boot then from the Dashboard attach the Classic Provider interface (Instance Actions -> Attach Interface -> ...), then detach the public port from the instance (Instance Actions -> Detach Interface -> 203.101.xxx.xxx). Inside the instance, configure the second interface to use DHCP and reboot your instance. You should then have your private network alongside the qld-data network. You can also add the qld-data network by using the following command:

```
nova interface-attach --net-id=00691b0f-69c3-444b-85ea-262dd6909052 <instance_id>
```



**Q: How do I create multiple networks that communicate with each other?**

A: There are two ways to approach this: a) one network, multiple subnets within one network or b) multiple networks, one subnet per each network. Option b) is recommended because option a) does not allow the user to use the Dashboard to attach a second subnet to an instance, only the first. Option b) involves creating multiple networks, one subnet for every network, a virtual router, then attaching every subnet to the router. The virtual router will automatically route between the subnets attached to it. When creating instances / attaching networks to existing instances, you can select the network which contains the desired subnet from the list (which is not an available function if using option a)). If you are using option b) and you need to attach a second subnet to an instance, you can do so using the following commands:

- create a port on the desired subnet

```bash
$ neutron port-create --fixed-ip subnet_id=<subnet_id> <network_id>
```
- attach the port to instance

```bash
$ nova interface-attach --port-id <port_id> <instance_id>
```

- or create a new instance with it

```bash
$ openstack server create \
   --flavor <flavor> \
   --image <image> \
   --key-name <key> \
   --security-group ssh_icmp_http_https \
   --availability-zone QRIScloud \
   --nic port-id=<port_id>
   <instance_name>
```


**Q: Can I associate a floating IP from Availability Zone "A" to an instance in Availability Zone "B"?**

A: Yes! As long as the external network of your router belongs to the same Availability Zone as the Floating IP, the instance that is connected to this router via a network can have the Floating IP associated with it. Otherwise, you will get an error.
