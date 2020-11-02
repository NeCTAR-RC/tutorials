---
title: Using the command line tools
order: 4
duration: 15
---

We're now going to use the command line tools to create a simple load-balanced
web server architecture,

## Requirements

To use the command line tools, you'll need:
* The OpenStackClient and python-octaviaclient tools
* Your OpenStack CLI credentials loaded in your environment

**Setting up your environment**  
If you haven't set these up previously, you should follow the [OpenStack CLIs](https://tutorials.rc.nectar.org.au/openstack-cli) tutorial first,
which will guide you through the process of setting up your credentials and installing the command line tools.
{: .callout-warning}

**Quota for cloud resources**  
This example requires you to have quota for several different types of
resources. If you don't already, you'll need quota for Compute instances and
cores, Networks, Routers, Floating IPs and Load Balancers for your project.
{: .callout-danger}

## Setting up the private network

Firstly, we're going to set up a new private network to use and create a new
router for external access.

Create a new network called `my-network`

```
$ openstack network create my-network
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| availability_zone_hints   |                                      |
| availability_zones        |                                      |
| created_at                | 2020-11-02T05:01:38Z                 |
| description               |                                      |
| dns_domain                | None                                 |
| id                        | e7fb27fd-8bde-47be-a9dc-a0d795546f39 |
| ipv4_address_scope        | None                                 |
| ipv6_address_scope        | None                                 |
| is_default                | False                                |
| is_vlan_transparent       | None                                 |
| mtu                       | 9000                                 |
| name                      | my-network                           |
| port_security_enabled     | True                                 |
| project_id                | c3dbe1f7dfc147768ab26ba9b65c9728     |
| provider:network_type     | None                                 |
| provider:physical_network | None                                 |
| provider:segmentation_id  | None                                 |
| qos_policy_id             | None                                 |
| revision_number           | 1                                    |
| router:external           | Internal                             |
| segments                  | None                                 |
| shared                    | False                                |
| status                    | ACTIVE                               |
| subnets                   |                                      |
| tags                      |                                      |
| updated_at                | 2020-11-02T05:01:38Z                 |
+---------------------------+--------------------------------------+
```

Create a subnet for our network using the `192.168.77.0/24` private IP range
and attach it to our new network.

```
$ openstack subnet create --network my-network --subnet-range 192.168.77.0/24 my-subnet 
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| allocation_pools     | 192.168.77.2-192.168.77.254          |
| cidr                 | 192.168.77.0/24                      |
| created_at           | 2020-11-02T05:03:03Z                 |
| description          |                                      |
| dns_nameservers      |                                      |
| dns_publish_fixed_ip | None                                 |
| enable_dhcp          | True                                 |
| gateway_ip           | 192.168.77.1                         |
| host_routes          |                                      |
| id                   | 1ff03a76-b20d-4640-b52e-5bb324d65faa |
| ip_version           | 4                                    |
| ipv6_address_mode    | None                                 |
| ipv6_ra_mode         | None                                 |
| name                 | my-subnet                            |
| network_id           | e7fb27fd-8bde-47be-a9dc-a0d795546f39 |
| prefix_length        | None                                 |
| project_id           | c3dbe1f7dfc147768ab26ba9b65c9728     |
| revision_number      | 0                                    |
| segment_id           | None                                 |
| service_types        |                                      |
| subnetpool_id        | None                                 |
| tags                 |                                      |
| updated_at           | 2020-11-02T05:03:03Z                 |
+----------------------+--------------------------------------+
```

Create a new router

```
$ openstack router create my-router
+-------------------------+--------------------------------------+
| Field                   | Value                                |
+-------------------------+--------------------------------------+
| admin_state_up          | UP                                   |
| availability_zone_hints | None                                 |
| availability_zones      | None                                 |
| created_at              | 2020-11-02T05:04:24Z                 |
| description             |                                      |
| external_gateway_info   | None                                 |
| flavor_id               | None                                 |
| id                      | d1e7bf3a-98a9-4673-bcc2-208bd4a283e2 |
| name                    | my-router                            |
| project_id              | c3dbe1f7dfc147768ab26ba9b65c9728     |
| revision_number         | 0                                    |
| routes                  |                                      |
| status                  | ACTIVE                               |
| tags                    |                                      |
| updated_at              | 2020-11-02T05:04:24Z                 |
+-------------------------+--------------------------------------+
```

List the available external networks so we can choose the right one for our
project:
```
$ openstack network list --no-share --external
+--------------------------------------+-----------+---------------------------------------+
| ID                                   | Name      | Subnets                               |
+--------------------------------------+-----------+---------------------------------------+
| 058b38de-830a-46ab-9d95-7a614cb06f1b | QRIScloud | 24f7fa26-8f43-4b65-9bdf-91f99b5ae9fe  |
| 24dbaea8-c8ab-43dc-ba5c-0babc141c20e | tasmania  | cf44c9ed-9e8b-47d8-bbc9-847801f1b3ca  |
| 5174d796-116a-47b4-afe4-1bc7ac1ea5fb | swinburne | c9fd590c-ac4e-407d-b229-effe50d7d6f2  |
| 60e0be0e-5021-4574-8650-dbf92e1a9cfe | auckland  | 83d40c4f-543a-45ea-8a5b-a22a0c56b7b0  |
| e201aa30-59aa-4475-b25e-0e4696782fd7 | monash    | 2c6beaf0-f9d2-4f00-be3c-be15519a728d  |
| e48bdd06-cc3e-46e1-b7ea-64af43c74ef8 | melbourne | 0f7520e4-1777-468a-9047-0a87a13e178a, |
|                                      |           | b4771a97-bfb8-4e48-89af-10cf88e63a7f  |
+--------------------------------------+-----------+---------------------------------------+
```

In this example, we're going to use the `melbourne` external network for our router, but
you should choose the network that is appropriate for your project.
```
$ openstack router set --external-gateway melbourne my-router
```

Link the router to our subnet
```
$ openstack router add subnet my-router my-subnet
```

## Create a load balancer
