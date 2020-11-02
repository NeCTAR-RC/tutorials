---
title: Using the command line tools
order: 4
duration: 45
---

We're now going to use the command line tools to create a simple load-balanced
web server architecture.

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

We start by creating the `loadbalancer` resource first, giving it a name, and the ID of the subnet we created earlier.
```
$ openstack loadbalancer create --name my-loadbalancer --vip-subnet-id <my-subnet id>
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| admin_state_up      | True                                 |
| availability_zone   | melbourne-qh2                        |
| created_at          | 2020-12-18T02:24:10                  |
| description         |                                      |
| flavor_id           | None                                 |
| id                  | ca343084-6a7f-4ec3-a836-a1e05a44ac38 |
| listeners           |                                      |
| name                | my-loadbalancer                      |
| operating_status    | OFFLINE                              |
| pools               |                                      |
| project_id          | c3dbe1f7dfc147768ab26ba9b65c9728     |
| provider            | amphora                              |
| provisioning_status | PENDING_CREATE                       |
| updated_at          | None                                 |
| vip_address         | 192.168.77.119                       |
| vip_network_id      | e7fb27fd-8bde-47be-a9dc-a0d795546f39 |
| vip_port_id         | 5bd024af-8fb6-49e7-b65e-771b64fbcac4 |
| vip_qos_policy_id   | None                                 |
| vip_subnet_id       | 1ff03a76-b20d-4640-b52e-5bb324d65faa |
+---------------------+--------------------------------------+
```

You can use the `show` action to see the provisioning status of our load balancer resource.
Keep trying this command until it shows `ACTIVE` and `ONLINE` statuses.
```
$ openstack loadbalancer show my-loadbalancer
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| admin_state_up      | True                                 |
| availability_zone   | melbourne-qh2                        |
| created_at          | 2020-12-18T02:24:10                  |
| description         |                                      |
| flavor_id           | None                                 |
| id                  | ca343084-6a7f-4ec3-a836-a1e05a44ac38 |
| listeners           |                                      |
| name                | my-loadbalancer                      |
| operating_status    | ONLINE                               |
| pools               |                                      |
| project_id          | c3dbe1f7dfc147768ab26ba9b65c9728     |
| provider            | amphora                              |
| provisioning_status | ACTIVE                               |
| updated_at          | 2020-12-18T02:25:07                  |
| vip_address         | 192.168.77.119                       |
| vip_network_id      | e7fb27fd-8bde-47be-a9dc-a0d795546f39 |
| vip_port_id         | 5bd024af-8fb6-49e7-b65e-771b64fbcac4 |
| vip_qos_policy_id   | None                                 |
| vip_subnet_id       | 1ff03a76-b20d-4640-b52e-5bb324d65faa |
+---------------------+--------------------------------------+
```

Next we create a `listener` resource, which defined the _front-end_ part of the loadbalancer.
In this example, we'll be listening for HTTP connections on port 80.
```
$ openstack loadbalancer listener create --name my-listener --protocol HTTP \
    --protocol-port 80 my-loadbalancer
+-----------------------------+--------------------------------------+
| Field                       | Value                                |
+-----------------------------+--------------------------------------+
| admin_state_up              | True                                 |
| connection_limit            | -1                                   |
| created_at                  | 2020-12-18T02:26:22                  |
| default_pool_id             | None                                 |
| default_tls_container_ref   | None                                 |
| description                 |                                      |
| id                          | a60f76bf-cff2-4a2a-9801-1569c07503f0 |
| insert_headers              | None                                 |
| l7policies                  |                                      |
| loadbalancers               | ca343084-6a7f-4ec3-a836-a1e05a44ac38 |
| name                        | my-listener                          |
| operating_status            | OFFLINE                              |
| project_id                  | c3dbe1f7dfc147768ab26ba9b65c9728     |
| protocol                    | HTTP                                 |
| protocol_port               | 80                                   |
| provisioning_status         | PENDING_CREATE                       |
| sni_container_refs          | []                                   |
| timeout_client_data         | 50000                                |
| timeout_member_connect      | 5000                                 |
| timeout_member_data         | 50000                                |
| timeout_tcp_inspect         | 0                                    |
| updated_at                  | None                                 |
| client_ca_tls_container_ref | None                                 |
| client_authentication       | NONE                                 |
| client_crl_container_ref    | None                                 |
| allowed_cidrs               | None                                 |
| tls_ciphers                 | None                                 |
| tls_versions                |                                      |
| alpn_protocols              |                                      |
+-----------------------------+--------------------------------------+
```

For the _backend_ part, we create a pool by specifiying the protocol, the loadbalancing algorithm and the listener from the previous step.
```
$ openstack loadbalancer pool create --name my-pool --lb-algorithm ROUND_ROBIN \
    --listener my-listener --protocol HTTP
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| admin_state_up       | True                                 |
| created_at           | 2020-12-18T02:26:29                  |
| description          |                                      |
| healthmonitor_id     |                                      |
| id                   | d2bb8946-f73c-498b-954a-c7f95d2bafd9 |
| lb_algorithm         | ROUND_ROBIN                          |
| listeners            | a60f76bf-cff2-4a2a-9801-1569c07503f0 |
| loadbalancers        | ca343084-6a7f-4ec3-a836-a1e05a44ac38 |
| members              |                                      |
| name                 | my-pool                              |
| operating_status     | OFFLINE                              |
| project_id           | c3dbe1f7dfc147768ab26ba9b65c9728     |
| protocol             | HTTP                                 |
| provisioning_status  | PENDING_CREATE                       |
| session_persistence  | None                                 |
| updated_at           | None                                 |
| tls_container_ref    | None                                 |
| ca_tls_container_ref | None                                 |
| crl_container_ref    | None                                 |
| tls_enabled          | False                                |
| tls_ciphers          | None                                 |
| tls_versions         |                                      |
+----------------------+--------------------------------------+
```

A healthcheck is essential to ensure that connections are not directed to backend members that are not responding,
so for this example, we'll create one to check the path `/healthcheck` of our application to ensure it's working.
```
$ openstack loadbalancer healthmonitor create --delay 3
    --max-retries 3 --timeout 3 --type HTTP --url-path /healthcheck my-pool
```

Create a security group and rule to allow port 80, which will allow communication between the loadbalancer and our server instances.
```
$ openstack security group create my-demo
$ openstack security group rule create --remote-ip 0.0.0.0/0 --protocol tcp --dst-port 80 my-demo
```

This is an example boot script that our instances will use for the purpose of this demo.
It installs the Apache web server and generates a couple of files which are served by Apache.
Save this file as `my-script.sh` so we can provide it to the next command.
```sh
#!/bin/sh
apt-get update
apt-get -y install apache2
echo "<html>\n<body>\nI am <b>$(hostname)</b>\n</body>\n</html>" > /var/www/html/index.html
echo 'OK' > /var/www/html/healthcheck
```

Create two identical servers, which will become our backend application servers.
You can optionally provide your keypair here so that you may be able to SSH to these servers later if you need to.
```
$ openstack server create \
    --availability-zone melbourne-qh2 \
    --flavor t3.xsmall \
    --image 'NeCTAR Ubuntu 20.04 LTS (Focal) amd64' \
    --key-name <your key> \
    --security-group my-demo \
    --network my-network \
    --user-data my-script.sh \
    --min 2 --max 2 \
    my-server
```

After a short amount of time, we should see our instances become `ACTIVE`.
```
$ openstack server list | grep my-network
| 5bb99d05-8be4-475d-be99-e6d010e8b6fa | my-server-1 | ACTIVE | my-network=192.168.77.16 |
| 2d18a885-b10d-45cc-aa51-73f777c2e1c6 | my-server-2 | ACTIVE | my-network=192.168.77.17 |
```

Add our members to the pool. We need to provide the private subnet ID we created earlier,
the IP addresses of our application server, the port the application is running on and the pool.
```
$ openstack loadbalancer member create --subnet-id <my-subnet id> \
    --address <my-server-1 ip> --protocol-port 80 my-pool
$ openstack loadbalancer member create --subnet-id <my-subnet id> \
    --address <my-server-2 ip> --protocol-port 80 my-pool
```

The last step is to create a new floating IP to provide a public endpoint for our loadbalancer.
```
$ openstack floating ip create melbourne
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| created_at          | 2020-12-18T03:09:25Z                 |
| description         |                                      |
| dns_domain          | None                                 |
| dns_name            | None                                 |
| fixed_ip_address    | None                                 |
| floating_ip_address | 103.6.252.98                         |
| floating_network_id | e48bdd06-cc3e-46e1-b7ea-64af43c74ef8 |
| id                  | 8381a16a-940d-4b7f-977f-46ab78269608 |
| name                | 103.6.252.98                         |
| port_details        | None                                 |
| port_id             | None                                 |
| project_id          | c3dbe1f7dfc147768ab26ba9b65c9728     |
| qos_policy_id       | None                                 |
| revision_number     | 0                                    |
| router_id           | None                                 |
| status              | ACTIVE                               |
| subnet_id           | None                                 |
| tags                | []                                   |
| updated_at          | 2020-12-18T03:09:25Z                 |
+---------------------+--------------------------------------+
```

Attach the floating IP to the load balancer.
```
$ openstack floating ip set --port <loadbalancer_vip_network_id> <floating ip>
```

Now you should be able to put that floating IP address into your web browser, or use something like cURL to test.

```
curl http://[floating ip]/
<html>
<body>
I am <b>my-server-1</b>
</body>
</html>
```

Success!

