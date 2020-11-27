---
title: Networking Concepts
order: 3
duration: 8
---

To make use of Advanced Networking you should be at least familiar the Networking concepts listed below. 

[IPv4 Address](https://en.wikipedia.org/wiki/IP_address) - A 32 bit number that represents a computer connected to a network, such as the public internet or a private local network. IPv4 addresses usually displayed in human readable format as 4 numbers between 0-255 separated by a dot.

*Example 1*: `192.168.0.1`
{: .callout-primary}

[Subnet](https://en.wikipedia.org/wiki/Subnetwork) - A logical subdivision of a network. A subnet contains a certain amount of IP addresses depending on its size (IP addresses ending in 0 and 255 are reserved). Computers in the same subnet do not need to use a router to communicate. Think of subnets as streets - each street has a set of houses (IPv4 addresses) belonging to it. On the public internet, street names are unique however in private networks they are not. In fact, there are 3 subnets that are reserved specifically for use in private networks, and NeCTAR strongly encourages using those subnets when creating Private Networks. Subnets can be expressed using a network address and a subnet mask or using CIDR notation.

*Example 2:* `192.168.100.0,255.255.255.0` is a subnet expressed using a network address and a subnet mask. This subnet contains the following usable IP addresses: `192.168.100.1` -> `192.168.100.254`
{: .callout-primary}

*Example 3:* `192.168.100.0/24` is a subnet equivalent to Example 2, expressed using CIDR notation. CIDR notation uses a slightly different way to define the subnet mask. `255.255.255.0` converted to binary is `11111111.11111111.11111111.00000000` and 24 simply dictates the numbers of 1's on the left.
{: .callout-primary}

*Example 4:* `10.0.0.0/8`, `172.16.0.0/12` and `192.168.0.0/16` are subnets reserved for use in private networks containing 16777214, 1048574 and 65,534 usable IP addresses respectively.
{: .callout-primary}

[Router](https://en.wikipedia.org/wiki/Router_(computing)) - A device that routes network traffic between subnets so that machines on different subnets are able to communicate. Routers generally do this by doing lookups in the router's routing table.

[Routing table](https://en.wikipedia.org/wiki/Routing_table) - A list stored on a computer or a routing device that contains routes which the computer or routing device is aware of.

Route - a rule which contains the next routing device to send a packet to so that it gets forwarded to its destination outside of the local subnet. Routes are specified based on destination network. In OpenStack Private Networks, "Route", "Static Route" and "Host Route" are used interchangeably.

[Gateway (Default Route)](https://en.wikipedia.org/wiki/Default_gateway)- a route which is taken by default if the routing table does not contain a route for a particular destination. This is the "else clause" of routing.

[NAT (Network Address Translation)](https://en.wikipedia.org/wiki/Network_address_translation) - a method of remapping a source or destination address in a network packet to a different address as the packet passes through a router. NAT allows multiple computers on a private network to simultaneously communicate with computers on the internet. NAT is commonly a feature of routers.

[Network Interface (Port)](https://en.wikipedia.org/wiki/Port_(computer_networking)) - point of interconnection between a computer and a network. Interfaces can be physical: in the form of a computer network card; or virtual: in the form of a connection between an instance and a virtual OpenStack router.

[DNS (Domain Name System)](https://en.wikipedia.org/wiki/Domain_Name_System) - A protocol for translating domains into IP addresses. 

For example, [www.nectar.org.au](http://www.nectar.org.au/) is translated to `180.235.129.121` by a DNS Server.
{: .callout-primary}

[DNS Server (Name Server)](https://en.wikipedia.org/wiki/Name_server) - A service which utilises the DNS protocol to translate domains into IP addresses. 

There are many free public DNS servers, such as `8.8.8.8` and `8.8.4.4`.
{: .callout-primary}

[DHCP (Dynamic Host Configuration Protocol)](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) -  a protocol for dynamically assigning IP addresses and routing information on a subnet. If a DHCP service is not present on a subnet, then an IP address and a subnet has to be manually set on each computer (static IP). If a DHCP service is present on a subnet, then the DHCP server decides what IP address (dynamic IP) to distribute to computers as they join the network. A DHCP allocation pool is a range of IP addresses that can be distributed to computers on the network.

[Private Network](https://en.wikipedia.org/wiki/Private_network) - A private subnet or subnets that are commonly used in local area networks. A private subnet is only able to communicate with public subnets via a router that performs Source NAT (SNAT). Typically, the router replaces the private source IP address with the address of the router, however, in the case of an OpenStack floating IP the private address is replaced with either the floating IP address, or if no floating IP is attached, the address of the external network attached to the virtual router.

[Network Packet](https://en.wikipedia.org/wiki/Network_packet) - A formatted unit of data sent over the Internet. Communication between computers is achieved by sending/receiving one or more packets.
