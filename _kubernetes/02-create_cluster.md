---
title: Creating a Cluster
order: 2
duration: 2
---

A Kubernetes Cluster consist of one or more _master_ nodes, and one or more
_worker_ nodes. A client (you) communicates with _master_ nodes using the
Kubernetes API to spin up containers. The _worker_ nodes runs these containers.

In this tutorial we start by creating a cluster consisting of one _master_
and one _worker_ node.

## Cluster templates

In Magnum, a COE Cluster is created from a Cluster Template. A Cluster Template
allows you to specify various configuration options the Cluster.  These
include:

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
+--------------------------------------+------------------------------+
| uuid                                 | name                         |
+--------------------------------------+------------------------------+
| f561d9ee-0893-46ec-b723-a918d3ca58ce | kubernetes-melbourne-v1.14.6 |
| bce4a43f-b5d3-467d-ab5a-820270ec0c32 | kubernetes-tasmania-v1.14.6  |
| a8f01986-cda5-494b-8f10-fe7124340c2f | kubernetes-auckland-v1.14.6  |
| 4f4e6a2c-b024-4bd5-9e32-6689718cf55f | kubernetes-QRIScloud-v1.14.6 |
+--------------------------------------+------------------------------+
```

You can examine any of these templates by running:

```
$ openstack coe cluster template show b41e674c-2ddc-4b7d-a975-746323ad0a7b
+-----------------------+--------------------------------------+
| Field                 | Value                                |
+-----------------------+--------------------------------------+
| insecure_registry     | -                                    |
| labels                | {'availability_zone': 'QRIScloud'}   |
| updated_at            | -                                    |
| floating_ip_enabled   | True                                 |
| fixed_subnet          | -                                    |
| master_flavor_id      | m3.xsmall                            |
| uuid                  | b41e674c-2ddc-4b7d-a975-746323ad0a7b |
| no_proxy              | -                                    |
| https_proxy           | -                                    |
| tls_disabled          | False                                |
| keypair_id            | -                                    |
| public                | False                                |
| http_proxy            | -                                    |
| docker_volume_size    | -                                    |
| server_type           | vm                                   |
| external_network_id   | qld                                  |
| cluster_distro        | fedora-atomic                        |
| image_id              | fedora-atomic-latest                 |
| volume_driver         | -                                    |
| registry_enabled      | False                                |
| docker_storage_driver | overlay                              |
| apiserver_port        | -                                    |
| name                  | kubernetes-queensland                |
| created_at            | 2019-07-17T03:06:06+00:00            |
| network_driver        | flannel                              |
| fixed_network         | -                                    |
| coe                   | kubernetes                           |
| flavor_id             | m3.small                             |
| master_lb_enabled     | False                                |
| dns_nameserver        | 1.1.1.1                              |
| hidden                | False                                |
+-----------------------+--------------------------------------+
```

You can create your own templates with custom options.  Use `openstack coe
cluster template show <id>` on one of the default templates to see the
template options that are appropriate to the AZ you will be using.  We
strongly recommend that you copy all properties and values from the latest
default template, apart from those that you want to change.

Note that options `cloud_provider_tag` and `kube_tag` are highly dependent on
the current version of the COE driver in Magnum.  The latest versions might
not be supported in the Nectar Magnum service yet.

## Create a Cluster

Using the `openstack` command line client

1. Choose a Cluster Template to create your Cluster from.

1. Create the Cluster

    ```
    $ openstack coe cluster create --cluster-template kubernetes-melbourne-v1.14.6 \
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

