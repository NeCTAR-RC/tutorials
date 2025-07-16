---
title: Scaling
order: 4
duration: 10
---

In the context of Magnum and Kubernetes, there are two types of scaling:

1. Scaling nodes

1. Scaling containers

## Scaling nodes

For redundancy and to increase the number of resources available to your
cluster, you can scale up the number of nodes (instances). You can also scale
them down.

- When you scale up, Magnum creates a new Nova instance and adds it to the
   cluster

- When you scale down, Magnum deletes a node in the cluster. Pods might be
   deleted without draining, so it is a good idea to build your services
   to automatically recover from the loss of a node

To scale up and down, use the `openstack coe cluster resize` command. The
default nodegroup should be `default-worker`:

```sh
openstack coe nodegroup list mycluster
+--------------------------------------+----------------+-----------+------------------+------------+---------------+--------+
| uuid                                 | name           | flavor_id | image_id         | node_count | status        | role   |
+--------------------------------------+----------------+-----------+------------------+------------+---------------+--------+
| 5884f8c8-1975-4f7a-9fcd-9d765638d442 | default-master | r3.small  | fedora-coreos-32 |          2 | UPDATE_FAILED | master |
| ce7dc214-6dd7-4ddf-b83b-c5f784ae346b | default-worker | r3.small  | fedora-coreos-32 |         14 | UPDATE_FAILED | worker |
+--------------------------------------+----------------+-----------+------------------+------------+---------------+--------+
```

These can be scaled as so:

```sh
openstack coe cluster resize mycluster --nodegroup default-worker 16
```

## Scaling containers

Adjusting the number of running containers is a standard operation in Kubernetes
and can be performed using the `kubectl` command-line tool. For instance, you can
scale the number of Pods in a Deployment using `kubectl`.

```sh
kubectl scale deployment <deployment-name> --replicas=<number> -n <namespace>
```

## More information

For more information, refer to:
- [Magnum scaling
documentation](https://docs.openstack.org/magnum/latest/user/#scaling).

