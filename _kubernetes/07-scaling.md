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

```
openstack coe cluster update mycluster replace node_count=2
```

## Scaling containers

Scaling up and down the number of containers is a Kubernetes operation that
can be done using the `kubectl` command.  For example, you can change the
number of pods in a replicaset. We will cover this in the High Availability
section.

## More information

For more information, refer to:
- [Magnum scaling
documentation](https://docs.openstack.org/magnum/latest/user/#scaling).

