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
| 33bb5cb9-0412-4da6-8009-fc5744d28941 | kubernetes-melbourne-v1.23.8         | None |
| 22b7cb4a-4425-40ee-8354-383fe9119837 | kubernetes-melbourne-qh2-uom-v1.23.8 | None |
| 287c9a1f-b0bd-471c-9bf8-80960d55170d | kubernetes-monash-01-v1.23.8         | None |
| bf002770-6a59-4a2e-88a9-c69434a3bba0 | kubernetes-monash-02-v1.23.8         | None |
| 2d58291c-2aec-484a-a652-f23fb78bd1af | kubernetes-intersect-v1.23.8         | None |
| e11a4ef3-063a-4df4-bc2f-bb66d0873fc5 | kubernetes-tasmania-v1.23.8          | None |
| e05591e9-4320-4ee0-b9a2-55f76f0db28c | kubernetes-auckland-v1.23.8          | None |
| abf5b520-125a-45d4-be87-5daa0a7564d5 | kubernetes-QRIScloud-v1.23.8         | None |
| 5da5a489-a5cb-460a-b7d0-c270033824d0 | kubernetes-ardc-mel-1-v1.23.8        | None |
| fcace136-a6d7-41e5-b746-9a5ead67d769 | kubernetes-swinburne-01-v1.23.8      | None |
| 6c2b353b-75b9-4472-b798-b2a7101c522b | kubernetes-melbourne-qh2-v1.25.9     | None |
| c8e79fba-038f-424b-b9cb-7d254037da9f | kubernetes-melbourne-qh2-uom-v1.25.9 | None |
| 1f3b1f01-baa7-46f0-b3a2-1206ca9f6201 | kubernetes-monash-01-v1.25.9         | None |
| 33b19432-647d-429d-ae25-5be2e19ffca3 | kubernetes-monash-02-v1.25.9         | None |
| cd7bb7f1-00dc-4e82-acec-8c3f8fcfc6d8 | kubernetes-intersect-v1.25.9         | None |
| 350e57f1-a610-41e6-a10a-bf8417010760 | kubernetes-tasmania-v1.25.9          | None |
| a73458a3-8e68-440d-99de-fedaff0b8266 | kubernetes-auckland-v1.25.9          | None |
| cafb7e88-a548-47a4-af7a-9360561a1cee | kubernetes-QRIScloud-v1.25.9         | None |
| 01cff241-342e-4605-be22-40ea80ff4fd7 | kubernetes-swinburne-01-v1.25.9      | None |
| 5e1b17b4-fa4f-46df-b3c3-676049c8c8f7 | kubernetes-ardc-mel-1-v1.25.9        | None |
+--------------------------------------+--------------------------------------+------+
```

Version numbers change, and it is advisable to use the latest
version (unless you hear otherwise).  You can examine any of these
templates by running `openstack coe cluster template show <id>`.

```
$ openstack coe cluster template show cafb7e88-a548-47a4-af7a-9360561a1cee --max-width 132
+-----------------------+----------------------------------------------------------------------------------------------------------+
| Field                 | Value                                                                                                    |
+-----------------------+----------------------------------------------------------------------------------------------------------+
| insecure_registry     | -                                                                                                        |
| labels                | {'container_infra_prefix': 'registry.rc.nectar.org.au/nectarmagnum/', 'master_lb_floating_ip_enabled':   |
|                       | 'true', 'cinder_csi_enabled': 'true', 'docker_volume_type': 'standard', 'ingress_controller': 'octavia', |
|                       | 'container_runtime': 'containerd', 'containerd_version': '1.6.20', 'containerd_tarball_sha256':          |
|                       | '1d86b534c7bba51b78a7eeb1b67dd2ac6c0edeb01c034cc5f590d5ccd824b416', 'kube_tag': 'v1.25.9',               |
|                       | 'flannel_tag': 'v0.21.5', 'cloud_provider_tag': 'v1.25.5', 'cinder_csi_plugin_tag': 'v1.25.5',           |
|                       | 'k8s_keystone_auth_tag': 'v1.25.5', 'octavia_ingress_controller_tag': 'v1.25.5', 'coredns_tag':          |
|                       | '1.10.1', 'csi_snapshotter_tag': 'v6.2.1', 'csi_attacher_tag': 'v4.2.0', 'csi_resizer_tag': 'v1.7.0',    |
|                       | 'csi_provisioner_tag': 'v3.4.1', 'csi_node_driver_registrar_tag': 'v2.8.0', 'availability_zone':         |
|                       | 'QRIScloud'}                                                                                             |
| updated_at            | -                                                                                                        |
| floating_ip_enabled   | False                                                                                                    |
| fixed_subnet          | -                                                                                                        |
| master_flavor_id      | m3.small                                                                                                 |
| uuid                  | cafb7e88-a548-47a4-af7a-9360561a1cee                                                                     |
| no_proxy              | -                                                                                                        |
| https_proxy           | -                                                                                                        |
| tls_disabled          | False                                                                                                    |
| keypair_id            | -                                                                                                        |
| public                | True                                                                                                     |
| http_proxy            | -                                                                                                        |
| docker_volume_size    | -                                                                                                        |
| server_type           | vm                                                                                                       |
| external_network_id   | QRIScloud                                                                                                |
| cluster_distro        | fedora-coreos                                                                                            |
| image_id              | fedora-coreos-37                                                                                         |
| volume_driver         | cinder                                                                                                   |
| registry_enabled      | False                                                                                                    |
| docker_storage_driver | overlay2                                                                                                 |
| apiserver_port        | -                                                                                                        |
| name                  | kubernetes-QRIScloud-v1.25.9                                                                             |
| created_at            | 2023-06-07T03:11:12+00:00                                                                                |
| network_driver        | flannel                                                                                                  |
| fixed_network         | -                                                                                                        |
| coe                   | kubernetes                                                                                               |
| flavor_id             | m3.small                                                                                                 |
| master_lb_enabled     | True                                                                                                     |
| dns_nameserver        | 8.8.8.8                                                                                                  |
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

Note that options `cloud_provider_tag` and `kube_tag` are highly dependent on
the current version of the COE driver in Magnum.  The latest versions might
not be supported in the Nectar Magnum service yet.

## Create a Cluster

Using the `openstack` command line client

1. Choose a Cluster Template to create your Cluster from.

1. Create the Cluster. Note, we are using the `uuid` from our cluster list as the value for our template, and you need to input the name of your own `keypair`.

   ```
   $ openstack coe cluster create --cluster-template cafb7e88-a548-47a4-af7a-9360561a1cee \
   --keypair pc-key mycluster
   Request to create cluster 2444b7b8-364f-4577-a935-04bb437f780d accepted
   ```

1. List the clusters in your project, and wait for your cluster to reach the
   `CREATE_COMPLETE` status. This could take up to 15 minutes.

   ```
   $ openstack coe cluster list
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   | uuid                                 | name                 | keypair        | node_count | master_count | status          | health_status |
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   | 2444b7b8-364f-4577-a935-04bb437f780d | mycluster            | pc-key         |          1 |            1 | CREATE_COMPLETE | HEALTHY       |
   +--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
   ```
