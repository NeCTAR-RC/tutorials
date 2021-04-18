---
title: Scaling
order: 7
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

To scale up and down, update the `node_count` label in Magnum. For example, to
scale `mycluster` from 1 to 2 nodes, do:

```sh
openstack coe cluster update mycluster replace node_count=2
```


When recovering from an error state, e.g. `UPDATE_FAILED`, the `openstack coe cluster update` may not work:

```sh
openstack coe cluster list
+--------------------------------------+---------------------------+---------+------------+--------------+-----------------+---------------+
| uuid                                 | name                      | keypair | node_count | master_count | status          | health_status |
+--------------------------------------+---------------------------+---------+------------+--------------+-----------------+---------------+
| 59b2f102-aeb4-418c-8caa-4dc5824354bb | mycluster                 | EcoKey  |         14 |            2 | UPDATE_FAILED   | HEALTHY       |
+--------------------------------------+---------------------------+---------+------------+--------------+-----------------+---------------+
```

This can be resolved by instead using the `openstack coe cluster resize` command. The nodegroups should be `default-master` and `default-worker`:

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

The error state should then be rectified on successful update.


## Scaling containers

Scaling up and down the number of containers is a Kubernetes operation that
can be done using the `kubectl` command.  For example, you can change the
number of pods in a replicaset. We will cover this in the High Availability
section.

## More information

For more information, refer to:
- [Magnum scaling
documentation](https://docs.openstack.org/magnum/latest/user/#scaling).

