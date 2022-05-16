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
- The Glance Image for the nodes
- The number of nodes

As the number of configuration options can be overwhelming, Nectar provides
a few default templates to get you started quickly. These templates have
names of the form `kubernetes-<az>-version`, and they can be listed by
running:

```
$ openstack coe cluster template list
+--------------------------------------+--------------------------------------+------+
| uuid                                 | name                                 | tags |
+--------------------------------------+--------------------------------------+------+
| 34539368-9cd4-4978-900f-86065c74d104 | kubernetes-melbourne-v1.17.11        | None |
| c03db765-181a-4faa-b27b-680dff776afa | kubernetes-auckland-v1.17.11         | None |
| 7af8258c-83ab-4753-8b5e-42a9a378ddc7 | kubernetes-swinburne-v1.17.11        | None |
| 08498a89-71f8-4cfa-b0f1-d039b2ed7b36 | kubernetes-melbourne-v1.21.1         | None |
| 360151fc-34d9-46fc-b383-ebecce787060 | kubernetes-melbourne-qh2-uom-v1.21.1 | None |
| 0bb3dc9a-cb0e-45c3-b8db-9f07d4b921aa | kubernetes-monash-01-v1.21.1         | None |
| 9825fae6-509f-4012-bb25-5fb9f55bec8b | kubernetes-monash-02-v1.21.1         | None |
| d0f7dc3e-0ca2-4d17-85c5-5d264cc81333 | kubernetes-intersect-v1.21.1         | None |
| 3b359e20-8256-4769-a9a3-8982b28c0509 | kubernetes-tasmania-v1.21.1          | None |
| 11a3e615-68e5-4e89-b11a-d1974ea89613 | kubernetes-auckland-v1.21.1          | None |
| a732bc27-0fa0-44f8-a5b0-53134074947f | kubernetes-QRIScloud-v1.21.1         | None |
| efae014a-3190-4411-b28b-7e10512c6741 | kubernetes-swinburne-01-v1.21.1      | None |
+--------------------------------------+--------------------------------------+------+
```

Version numbers change, and it is advisable to use the latest
version (unless you hear otherwise).  You can examine any of these
templates by running `openstack coe cluster template show <id>`.

```
$ openstack coe cluster template show a8580ef7-9202-4392-b911-b4e3dc4047c6
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                 | Value                                                                                                                                                                                    |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| insecure_registry     | -                                                                                                                                                                                        |
| labels                | {'container_infra_prefix': 'docker.io/nectarmagnum/', 'cloud_provider_tag': 'v1.14.0', 'kube_tag': 'v1.14.6', 'master_lb_floating_ip_enabled': 'true', 'availability_zone': 'QRIScloud'} |
| updated_at            | -                                                                                                                                                                                        |
| floating_ip_enabled   | False                                                                                                                                                                                    |
| fixed_subnet          | -                                                                                                                                                                                        |
| master_flavor_id      | m3.small                                                                                                                                                                                 |
| uuid                  | a8580ef7-9202-4392-b911-b4e3dc4047c6                                                                                                                                                     |
| no_proxy              | -                                                                                                                                                                                        |
| https_proxy           | -                                                                                                                                                                                        |
| tls_disabled          | False                                                                                                                                                                                    |
| keypair_id            | -                                                                                                                                                                                        |
| public                | True                                                                                                                                                                                     |
| http_proxy            | -                                                                                                                                                                                        |
| docker_volume_size    | -                                                                                                                                                                                        |
| server_type           | vm                                                                                                                                                                                       |
| external_network_id   | QRIScloud                                                                                                                                                                                |
| cluster_distro        | fedora-atomic                                                                                                                                                                            |
| image_id              | fedora-atomic-latest                                                                                                                                                                     |
| volume_driver         | cinder                                                                                                                                                                                   |
| registry_enabled      | False                                                                                                                                                                                    |
| docker_storage_driver | overlay                                                                                                                                                                                  |
| apiserver_port        | -                                                                                                                                                                                        |
| name                  | kubernetes-QRIScloud-v1.14.6                                                                                                                                                             |
| created_at            | 2020-01-07T01:54:24+00:00                                                                                                                                                                |
| network_driver        | flannel                                                                                                                                                                                  |
| fixed_network         | -                                                                                                                                                                                        |
| coe                   | kubernetes                                                                                                                                                                               |
| flavor_id             | m3.small                                                                                                                                                                                 |
| master_lb_enabled     | True                                                                                                                                                                                     |
| dns_nameserver        | 8.8.8.8                                                                                                                                                                                  |
| hidden                | False                                                                                                                                                                                    |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

You can create your own templates with custom options.  Use `openstack coe
cluster template show <id>` on one of the default templates to see the
template options that are appropriate to the AZ that you intend to use.  We
strongly recommend that you copy all properties and values from the latest
version of the default template, apart from those that you specifically
want to change.

Note that options `cloud_provider_tag` and `kube_tag` are highly dependent on
the current version of the COE driver in Magnum.  The latest versions might
not be supported in the Nectar Magnum service yet.

## Create a Cluster

Using the `openstack` command line client

1. Choose a Cluster Template to create your Cluster from.

1. Create the Cluster. Note, we are using the `uuid` from our cluster list as the value for our template, and you need to input the name of your own `keypair`.

   ```
   $ openstack coe cluster create --cluster-template 2c80ce78-8077-42ca-8b07-e45d9c4063d4 \
   --keypair jake mycluster
   Request to create cluster 84091b19-fd32-4197-a92e-71838d0502c2 accepted
   ```

1. List the clusters in your project, and wait for your cluster to reach the
   `CREATE_COMPLETE` status. This could take up to 15 minutes.

   ```
   $ openstack coe cluster list
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   | uuid                                 | name                 | keypair        | node_count | master_count | status          | health_status |
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   | 84091b19-fd32-4197-a92e-71838d0502c2 | mycluster            | jake           |          1 |            1 | CREATE_COMPLETE | None          |
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   ```