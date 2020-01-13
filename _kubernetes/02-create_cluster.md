---
title: Create Cluster
order: 2
duration: 2
---

A Kubernetes Cluster consist of one or more _master_ nodes, and one or more
_worker_ nodes. A client (you) communicates with _master_ nodes using the
Kubernetes API to spin up containers. The _worker_ nodes runs these containers.

In this tutorial we start by creating a cluster of one _master_ and one _worker_
node.

## Cluster templates

In Magnum, a COE Cluster is created via a Cluster Template. A Cluster Template
allows you to specify options for setting up the Clusters. Some of the options
include:

- Availability Zone
- Kubernetes version
- Nova Flavor size for the nodes in the cluster
- Glance Image for the nodes
- Number of nodes

As the amount of options can be overwhelming, Nectar provides a few default
templates to get you started quickly. These templates are in the format
`kubernetes-<az>-version`, and they can be viewed by doing:

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

You can also create your own templates for custom options. Use `$ openstack coe
cluster template show f561d9ee-0893-46ec-b723-a918d3ca58ce` to see options for
the template, and make sure you copy all the values accordingly.

Note that options `cloud_provider_tag` and `kube_tag` are highly dependent on
the current version of the COE driver in Magnum, and the latest versions might
not be supported in Magnum yet.

## Create a Cluster

Using the python command line client

1. Choose a Cluster Template to create your Cluster from.

1. Create the Cluster

    ```
    $ openstack coe cluster create --cluster-template kubernetes-melbourne-v1.14.6 \
    --keypair jake mycluster
    Request to create cluster 84091b19-fd32-4197-a92e-71838d0502c2 accepted
    ```

1. List clusters in your project. Wait for your cluster to reach the
   `CREATE_COMPLETE` status. This may take up to 15 minutes.

    ```
	$ openstack coe cluster list
	+--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
	| uuid                                 | name                 | keypair        | node_count | master_count | status          | health_status |
	+--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
    | 84091b19-fd32-4197-a92e-71838d0502c2 | mycluster            | jake           |          1 |            1 | CREATE_COMPLETE | None          |
	+--------------------------------------+----------------------+----------------+------------+--------------+-----------------+---------------+
    ```

