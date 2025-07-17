---
title: Creating a Cluster
order: 2
duration: 2
---

A Kubernetes Cluster consists of one or more _master_ nodes, and one or more
_worker_ nodes. A client (you) communicates with _master_ nodes using the
Kubernetes API to spin up containers. The _worker_ nodes runs these containers.

In this tutorial we start by creating a cluster consisting of one _master_
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

+--------------------------------------+-----------------------------------------+
| uuid                                 | name                                    |
+--------------------------------------+-----------------------------------------+
| ...                                  |                                         |
| c97af609-18e9-4581-98d3-37a1ddaeee6e | kubernetes-v1.29.9-melbourne-qh2-v1     |
| 5eee3a21-4f11-43c0-ab77-d2337b4e3eeb | kubernetes-v1.29.9-melbourne-qh2-uom-v1 |
| 463239ad-ede9-43a6-814d-d277fdb798fc | kubernetes-v1.29.9-monash-01-v1         |
| dd0b1285-fccd-4b60-8f68-36e7b3d412a9 | kubernetes-v1.29.9-monash-02-v1         |
| 9e371110-03e0-4874-a710-02ec4ee4ee4b | kubernetes-v1.29.9-intersect-v1         |
| a6cab55a-1a71-4233-bc92-d658bf75762a | kubernetes-v1.29.9-tasmania-v1          |
| bac1d480-49af-47d6-8dd8-c7ff43ea820d | kubernetes-v1.29.9-auckland-v1          |
| 119a2d68-89ff-403f-9a68-ac6ebf2abd70 | kubernetes-v1.29.9-QRIScloud-v1         |
| 5b6d6790-1a2c-4dfa-bb31-0fea286b982f | kubernetes-v1.29.9-swinburne-01-v1      |
| 6a9343d5-c98b-465b-9af8-18307305494c | kubernetes-v1.30.5-melbourne-qh2-v1     |
| c9c1eb96-b893-4e56-a943-170eafcb9b84 | kubernetes-v1.30.5-melbourne-qh2-uom-v1 |
| 32ef6d5f-12e3-462a-8b63-273dfb340055 | kubernetes-v1.30.5-monash-01-v1         |
| ae7bf373-e393-47b8-9a98-fd832b9b094c | kubernetes-v1.30.5-monash-02-v1         |
| 813a5f4d-f3f8-458e-815b-ac0adfcd461b | kubernetes-v1.30.5-intersect-v1         |
| 16fecb3e-03b6-4e01-86ac-9132cb0ac4c2 | kubernetes-v1.30.5-tasmania-v1          |
| 410c24c4-8346-4958-9f27-16542e99292b | kubernetes-v1.30.5-auckland-v1          |
| b3212707-bca9-4a44-914b-a265f0c20b04 | kubernetes-v1.30.5-QRIScloud-v1         |
| 86000f3e-1c2b-4986-ae31-6ec6315183d5 | kubernetes-v1.30.5-swinburne-01-v1      |
| c1a2dfe9-bb8c-4bce-82ea-75562e9265c6 | kubernetes-v1.31.1-melbourne-qh2-v1     |
| 4af680cb-5c6a-4063-ab1c-5842a1ad8352 | kubernetes-v1.31.1-melbourne-qh2-uom-v1 |
| d820f32f-25f4-4ac0-96c8-423772c9ea0a | kubernetes-v1.31.1-monash-01-v1         |
| 05d989e6-128c-464f-8fb5-85f12a0faf53 | kubernetes-v1.31.1-monash-02-v1         |
| 251bcd23-e4c4-4425-b21f-1c7691c39271 | kubernetes-v1.31.1-intersect-v1         |
| 4a1cbaf1-df4c-410c-8906-3aaf5f809032 | kubernetes-v1.31.1-tasmania-v1          |
| 518cc7c1-eacd-4106-864c-0bb320f2ed90 | kubernetes-v1.31.1-auckland-v1          |
| 6a469735-a5e9-4f19-8432-d09b37453ddf | kubernetes-v1.31.1-QRIScloud-v1         |
| 9dceade0-b0b7-435b-a2ca-f6e63da9e1fa | kubernetes-v1.31.1-swinburne-01-v1      |
| ...                                  |                                         |
+--------------------------------------+-----------------------------------------+
```


### Cluster template details

Templates are in the format
`kubernetes-<kubernetes_version>-<availability_zone>-<template_version>`. Here
are more details on what part of the name means.

*`kubernetes_version`* - Nectar will provide at least one template per Kubernetes minor version.
  - For Kubernetes v1.30, the template provided will install version v1.30.5
  - For Kubernetes v1.31, the template provided will install version v1.31.1

*`availability_zone`* - Nectar will provide defaults for each availability zone. This includes:
  - DNS servers
  - CIDR for nodes to reduce clashes in RFC1918 addresses for each institution

*`template_version`* - Nectar may occassionally update Glance images or
supporting software that is preinstalled for a cluster. When this happens,
Nectar will push out a new cluster template version.

```
openstack coe cluster template show 6a9343d5-c98b-465b-9af8-18307305494c --max-width 132
+-----------------------+----------------------------------------------------------------------------------------------------------+
| Field                 | Value                                                                                                    |
+-----------------------+----------------------------------------------------------------------------------------------------------+
| insecure_registry     | -                                                                                                        |
| labels                | {'container_infra_prefix': 'registry.rc.nectar.org.au/nectarmagnum/', 'availability_zone': 'melbourne-   |
|                       | qh2', 'control_plane_availability_zone': 'melbourne-qh2', 'csi_cinder_availability_zone': 'melbourne-    |
|                       | qh2', 'octavia_provider': 'ovn', 'octavia_lb_algorithm': 'SOURCE_IP_PORT', 'capi_helm_chart_version':    |
|                       | '0.10.1-nectar.3', 'fixed_subnet_cidr': '192.168.10.0/24'}                                               |
| updated_at            | -                                                                                                        |
| floating_ip_enabled   | False                                                                                                    |
| fixed_subnet          | -                                                                                                        |
| master_flavor_id      | m3.small                                                                                                 |
| uuid                  | 6a9343d5-c98b-465b-9af8-18307305494c                                                                     |
| no_proxy              | -                                                                                                        |
| https_proxy           | -                                                                                                        |
| tls_disabled          | False                                                                                                    |
| keypair_id            | -                                                                                                        |
| public                | True                                                                                                     |
| http_proxy            | -                                                                                                        |
| docker_volume_size    | -                                                                                                        |
| server_type           | vm                                                                                                       |
| external_network_id   | melbourne                                                                                                |
| cluster_distro        | ubuntu                                                                                                   |
| image_id              | 839bd3d9-92a5-4b67-ab51-b727937fc41d                                                                     |
| volume_driver         | -                                                                                                        |
| registry_enabled      | False                                                                                                    |
| docker_storage_driver | overlay2                                                                                                 |
| apiserver_port        | -                                                                                                        |
| name                  | kubernetes-v1.30.5-melbourne-qh2-v1                                                                      |
| created_at            | 2024-10-02T05:59:39+00:00                                                                                |
| network_driver        | calico                                                                                                   |
| fixed_network         | -                                                                                                        |
| coe                   | kubernetes                                                                                               |
| flavor_id             | m3.small                                                                                                 |
| master_lb_enabled     | True                                                                                                     |
| dns_nameserver        | 128.250.201.5,128.250.66.5                                                                               |
| hidden                | True                                                                                                     |
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
   openstack coe cluster create --cluster-template 6a9343d5-c98b-465b-9af8-18307305494c \
   --keypair mykey mycluster
   Request to create cluster 2444b7b8-364f-4577-a935-04bb437f780d accepted
   ```

1. List the clusters in your project, and wait for your cluster to reach the
   `CREATE_COMPLETE` status. This could take up to 15 minutes.

   ```
   openstack coe cluster list
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   | uuid                                 | name                 | keypair        | node_count | master_count | status          | health_status |
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   | 2444b7b8-364f-4577-a935-04bb437f780d | mycluster            | mykey          |          1 |            1 | CREATE_COMPLETE | HEALTHY       |
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   ```

**Not recommended for Production**  
This example uses your personal credentials, which may not be desirable in a
production cluster. This cluster will not have valid credentials to create new
resources like Volumes when the creator leaves the project. To prevent this
from happening, you should use a [Robot
account](https://support.ehelp.edu.au/support/solutions/articles/6000164448-robot-accounts).
{: .callout-warning}
