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
+--------------------------------------+------------------------------+
| uuid                                 | name                         |
+--------------------------------------+------------------------------+
...
| 2a43e6a7-7df3-4b74-b4f7-2b6991f356bc | kubernetes-tasmania-v1.14.6  |
| 15d21331-df0f-4440-acfa-50567ec7ac2e | kubernetes-auckland-v1.14.6  |
| a8580ef7-9202-4392-b911-b4e3dc4047c6 | kubernetes-QRIScloud-v1.14.6 |
| 270612dc-59be-4de0-a722-9afdd61b815e | kubernetes-melbourne-v1.14.6 |
| b1bf5e12-0d69-46c0-87f5-4f6d878c773a | kubernetes-monash-01-v1.14.6 |
| 2c80ce78-8077-42ca-8b07-e45d9c4063d4 | kubernetes-monash-02-v1.14.6 |
...
+--------------------------------------+------------------------------+
```

Note that the version numbers change, and it is advisable to use the latest
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

