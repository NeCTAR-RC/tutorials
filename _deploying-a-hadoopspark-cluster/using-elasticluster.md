---
title: Using Elasticluster
order: 4
duration: 1
---

The following commands are provided as examples of how to use ElastiCluster to create and interact with a simple hadoop/spark cluster. For more information on ElastiCluster, please refer to [Elasticluster docs](https://elasticluster.readthedocs.org/).

Deploy a hadoop/spark cluster on the cloud using the configuration provided:
```
elasticluster start hadoop -n cluster
```

List information about the cluster:
```
elasticluster list-nodes cluster
```

An example of printout is like:
```
Cluster name: cluster
Cluster template: hadoop
Default ssh to node: master001
- master nodes: 1
- worker nodes: 2
```

To login on the frontend node, run the command:
```
elasticluster ssh cluster
```

To upload or download files to the cluster, use the command:
```
elasticluster sftp cluster
 
master nodes:
 
- master001
connection IP: <x.x.x.x>
IPs: <x.x.x.x>
instance id: c000121e-2bc8-4313-985a-8df691bfda53
instance flavor: m3.small
 
worker nodes:
 
- worker001
connection IP: <y.y.y.y>
IPs: <y.y.y.y>
instance id: 7d468acb-ea22-4298-aa37-2ffd4a6a31e3
instance flavor: m3.small
 
- worker002
connection IP: <z.z.z.z.>
IPs: <z.z.z.z.>
instance id: 555ce02f-c689-4833-ab6c-b2b717faff7a
instance flavor: m3.small
```

Grow the cluster to 10 nodes (add another 8 nodes):
```
elasticluster resize cluster -a 8:compute
```

Terminate (destroy) the cluster:
```
elasticluster stop cluster
```

If the deployment is failed during the start phase, you may need to fix the issue and then run the following to continue:
```
elasticluster setup cluster
```
