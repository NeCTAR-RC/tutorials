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

List our available external networks
```
$ openstack network list --no-share --external
```

Use the `melbourne` external network for our router
```
$ openstack router set --external-gateway melbourne my-router
```

Link the router to the subnet
```
$ openstack router add subnet my-router my-subnet
```
