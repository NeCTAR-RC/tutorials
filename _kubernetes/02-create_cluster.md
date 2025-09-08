---
title: Creating a Cluster
order: 2
duration: 2
---

A Kubernetes Cluster consists of one or more _controller_ nodes, and one or more
_worker_ nodes. A client (you) communicates with _controller_ nodes using the
Kubernetes API to spin up containers. The _worker_ nodes runs these containers.

For production environments, it is strongly recommended to deploy a minimum of three
controller nodes to ensure high availability and fault tolerance. The number of
worker nodes in a production cluster should be determined based on the expected
workload, resource requirements, and scalability needs. For non-production use cases
such as testing or development, a minimal setup with a single controller node
and a single worker node may be sufficient.

In this tutorial we start by creating a cluster consisting of one _controller_
and one _worker_ node.


## Cluster templates

In Magnum, a COE Cluster is created from a Cluster Template. A Cluster Template
allows you to specify various configuration options for the Cluster including:

- The Availability Zone
- The Kubernetes version
- The Nova Flavor size for the nodes in the cluster
- The number of nodes

As the number of configuration options can be overwhelming, Nectar provides
a few default templates to get you started quickly. These templates have names
of the form
`kubernetes-<kubernetes_version>-<availability_zone>-<template_version>`, and
they can be listed by running:

```
openstack coe cluster template list
+--------------------------------------+------------------------------------------+------+
| uuid                                 | name                                     | tags |
+--------------------------------------+------------------------------------------+------+
| a4c63bf1-f418-49dc-a18d-e7f4b80f9f6c | kubernetes-v1.32.8-melbourne-qh2-v5      | None |
| 73470e47-159c-47e9-a93f-3ee7e8bfe9bd | kubernetes-v1.32.8-melbourne-qh2-uom-v5  | None |
| 4b3e793f-8f50-49e0-b146-8b8d0492955d | kubernetes-v1.32.8-monash-01-v5          | None |
| 5c5b0259-c512-4c82-9ecb-084a525df7e5 | kubernetes-v1.32.8-monash-02-v5          | None |
| a62e4990-a676-4083-8b8c-c70503b53635 | kubernetes-v1.32.8-intersect-v5          | None |
| e43885f9-1948-4b69-b259-e9e2c07559d0 | kubernetes-v1.32.8-tasmania-v5           | None |
| 0dcd88f6-947b-4b41-8c84-95ce1806dcae | kubernetes-v1.32.8-auckland-v5           | None |
| 6691a101-b80b-4ec3-901a-ad3217e461ae | kubernetes-v1.32.8-QRIScloud-v5          | None |
| 22286587-87e5-4f63-adfe-a841209339d6 | kubernetes-v1.32.8-swinburne-01-v5       | None |
| 3cb2a780-31ac-475b-8ec6-36715e227e8e | kubernetes-v1.32.8-ardc-syd-1-v5         | None |
| 4aecb0f7-e177-4c73-85ee-15018d6197c6 | kubernetes-v1.32.8-adelaide-v5           | None |
| bca515a3-a8dd-4b81-846a-ab528dc60b96 | kubernetes-v1.32.8-intersect-adelaide-v5 | None |
| 9c7c836e-8347-492b-bfa6-9c8d8323e72e | kubernetes-v1.33.4-melbourne-qh2-v5      | None |
| 8ce9c30e-8eec-46c6-94cd-081bc4859d9a | kubernetes-v1.33.4-melbourne-qh2-uom-v5  | None |
| 4466b438-d356-4577-9e63-f08356f15694 | kubernetes-v1.33.4-monash-01-v5          | None |
| 5685df6c-505d-4413-a062-89c88da14b90 | kubernetes-v1.33.4-monash-02-v5          | None |
| d3a86415-7de5-4cd9-9bce-6ae322446889 | kubernetes-v1.33.4-intersect-v5          | None |
| 21e17dbf-f4d8-4b92-bcb7-7a170ad5a603 | kubernetes-v1.33.4-tasmania-v5           | None |
| 74d05121-8494-4e9a-893f-ed9937188170 | kubernetes-v1.33.4-auckland-v5           | None |
| 98c64e42-1675-4f75-96a6-abd484c5cc47 | kubernetes-v1.33.4-QRIScloud-v5          | None |
| 50a341fd-823e-44ce-86ca-fb18ff787417 | kubernetes-v1.33.4-swinburne-01-v5       | None |
| ccadc0af-e6bf-4b12-b815-be96e69ebda7 | kubernetes-v1.33.4-ardc-syd-1-v5         | None |
| 96af99c5-86a5-4e31-91b1-e54afae5045c | kubernetes-v1.33.4-adelaide-v5           | None |
| 08712317-7757-4db0-8bdf-90a94b41a6ba | kubernetes-v1.33.4-intersect-adelaide-v5 | None |
+--------------------------------------+------------------------------------------+------+
```

### Cluster template details

Templates are in the format
`kubernetes-<kubernetes_version>-<availability_zone>-<template_version>`. Here
are more details on what part of the name means.

*`kubernetes_version`* - Nectar will provide at least one template per Kubernetes minor version.
  - For Kubernetes v1.32, the template provided will install version v1.32.8
  - For Kubernetes v1.33, the template provided will install version v1.33.4

*`availability_zone`* - Nectar will provide defaults for each availability zone. This includes:
  - DNS servers
  - CIDR for nodes to reduce clashes in RFC1918 addresses for each institution

*`template_version`* - Nectar may occassionally update Glance images or
supporting software that is preinstalled for a cluster. When this happens,
Nectar will push out a new cluster template version.

```
openstack coe cluster template show 98c64e42-1675-4f75-96a6-abd484c5cc47 --max-width 132
+-----------------------+----------------------------------------------------------------------------------------------------------+
| Field                 | Value                                                                                                    |
+-----------------------+----------------------------------------------------------------------------------------------------------+
| insecure_registry     | -                                                                                                        |
| labels                | {'container_infra_prefix': 'registry.rc.nectar.org.au/nectarmagnum/', 'availability_zone': 'QRIScloud',  |
|                       | 'control_plane_availability_zone': 'QRIScloud', 'csi_cinder_availability_zone': 'QRIScloud',             |
|                       | 'octavia_provider': 'ovn', 'octavia_lb_algorithm': 'SOURCE_IP_PORT', 'capi_helm_chart_version':          |
|                       | '0.15.0-nectar.2'}                                                                                       |
| updated_at            | 2025-09-03T01:00:24+00:00                                                                                |
| floating_ip_enabled   | False                                                                                                    |
| fixed_subnet          | -                                                                                                        |
| master_flavor_id      | m3.small                                                                                                 |
| uuid                  | 98c64e42-1675-4f75-96a6-abd484c5cc47                                                                     |
| no_proxy              | -                                                                                                        |
| https_proxy           | -                                                                                                        |
| tls_disabled          | False                                                                                                    |
| keypair_id            | -                                                                                                        |
| public                | True                                                                                                     |
| http_proxy            | -                                                                                                        |
| docker_volume_size    | -                                                                                                        |
| server_type           | vm                                                                                                       |
| external_network_id   | QRIScloud                                                                                                |
| cluster_distro        | ubuntu                                                                                                   |
| image_id              | 9df2abf5-9752-44a1-9aca-ed36f853a951                                                                     |
| volume_driver         | -                                                                                                        |
| registry_enabled      | False                                                                                                    |
| docker_storage_driver | overlay2                                                                                                 |
| apiserver_port        | -                                                                                                        |
| name                  | kubernetes-v1.33.4-QRIScloud-v5                                                                          |
| created_at            | 2025-09-02T04:24:48+00:00                                                                                |
| network_driver        | calico                                                                                                   |
| fixed_network         | -                                                                                                        |
| coe                   | kubernetes                                                                                               |
| flavor_id             | m3.small                                                                                                 |
| master_lb_enabled     | True                                                                                                     |
| dns_nameserver        | 202.158.207.1,202.158.207.2                                                                              |
| hidden                | False                                                                                                    |
| tags                  | -                                                                                                        |
+-----------------------+----------------------------------------------------------------------------------------------------------+
```

You can create your own templates with custom options.  Use `openstack coe
cluster template show <id>` on one of the default templates to see the
template options that are appropriate to the AZ that you intend to use.  We
strongly recommend that you copy all properties and values from the latest
version of the default template, apart from those that you specifically
want to change.


## Create a Cluster

Using the `openstack` command line client

1. Choose a Cluster Template to create your Cluster from.

1. Create the Cluster. Note, we are using the `uuid` from our cluster template list as the value for our template, and you need to input the name of your own `keypair`.

   ```
   openstack coe cluster create --cluster-template 98c64e42-1675-4f75-96a6-abd484c5cc47 \
   --keypair mykey mycluster
   Request to create cluster 7f4a506e-6d6a-4713-9d35-917d3e33096f accepted
   ```

1. List the clusters in your project, and wait for your cluster to reach the
   `CREATE_COMPLETE` status. This could take up to 15 minutes.

   ```
   openstack coe cluster list
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   | uuid                                 | name                 | keypair        | node_count | master_count | status          | health_status |
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   | 7f4a506e-6d6a-4713-9d35-917d3e33096f | mycluster            | mykey          |          1 |            1 | CREATE_COMPLETE | HEALTHY       |
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   ```

**Not recommended for Production**  
This example uses your personal credentials, which may not be desirable in a
production cluster. This cluster will not have valid credentials to create new
resources like Volumes when the creator leaves the project. To prevent this
from happening, you should use a [Robot
account](https://support.ehelp.edu.au/support/solutions/articles/6000164448-robot-accounts).
{: .callout-warning}
