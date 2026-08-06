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

Worker nodes in a cluster belong to node groups. Every cluster starts with a
`default-worker` node group, which you can scale up and down. You can also
create additional node groups, for example to add workers with a different
flavour, and scale those independently.

### Scaling the default worker node group

To scale up and down, use the `openstack coe cluster resize` command. The
default nodegroup should be `default-worker`:

```sh
openstack coe nodegroup list mycluster
+--------------------------------------+----------------+-----------+--------------------------------------+------------+-----------------+--------+
| uuid                                 | name           | flavor_id | image_id                             | node_count | status          | role   |
+--------------------------------------+----------------+-----------+--------------------------------------+------------+-----------------+--------+
| 5884f8c8-1975-4f7a-9fcd-9d765638d442 | default-master | m3.small  | 7db23d42-5246-4b61-a667-696bb4aa9010 |          1 | CREATE_COMPLETE | master |
| ce7dc214-6dd7-4ddf-b83b-c5f784ae346b | default-worker | m3.small  | 7db23d42-5246-4b61-a667-696bb4aa9010 |          1 | CREATE_COMPLETE | worker |
+--------------------------------------+----------------+-----------+--------------------------------------+------------+-----------------+--------+
```

These can be scaled as so:

```sh
openstack coe cluster resize mycluster --nodegroup default-worker 2
```

### Creating a new node group in the Nectar Dashboard

You can create and scale additional node groups from the Nectar Dashboard.
Go to **Project > Container Infra > Clusters**, click on your cluster and
select the **Node Groups** tab. This lists the node groups in your cluster,
including the `default-worker` node group.

![Node Groups tab showing the default node groups]({{ site.baseurl }}/assets/images/kubernetes/nodegroup-list.png)

1. Click **+ Create Node Group**. In the **Details** step, enter a name for
   the node group, and select a flavour and the initial node count.

   ![Create Node Group dialog, Details step]({{ site.baseurl }}/assets/images/kubernetes/create-nodegroup-step1-details.png)

1. In the **Advanced** step, you can optionally:

   - Tick **Enable Autoscaling** and set a minimum and maximum node count, so
     the node group scales automatically with demand
   - Tick **Boot from volume** to boot the nodes from a volume, and set
     the volume size and type
   - Apply Kubernetes node labels and taints to every node in the node group

   Click **Submit** to create the node group.

   ![Create Node Group dialog, Advanced step]({{ site.baseurl }}/assets/images/kubernetes/create-nodegroup-step2-advanced.png)

Once created, the new node group appears in the Node Groups tab and can be
scaled in the same way as the default worker node group, using the **Actions**
menu in the dashboard or `openstack coe cluster resize` with the
`--nodegroup` option. If autoscaling is enabled, the node count is adjusted
automatically within the minimum and maximum you defined.

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
