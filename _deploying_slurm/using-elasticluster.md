---
title: Using Elasticluster
order: 04
duration: 1
---

The following commands are provided as examples of how to use ElastiCluster to create and interact with a simple Slurm cluster. For more information on ElastiCluster, please refer to [the documentation here](https://elasticluster.readthedocs.org/).

Deploy a Slurm cluster on the cloud using the configuration provided:
```
elasticluster start slurm -n hpc1
```

List information about the cluster:
```
elasticluster list-nodes hpc1
```

*An example of output is:*
```
Cluster name: hpc1
Cluster template: slurm
Default ssh to node: frontend001
- compute nodes: 2
- frontend nodes: 1
```

To login on the frontend node, run the command:
```
  elasticluster ssh hpc1
```

To upload or download files to the cluster, use the command:
```
  elasticluster sftp hpc1

compute nodes:

  - compute001
    connection IP: <x.x.x.x>
    IPs: <x.x.x.x>
    instance id: <uuid>
    instance flavor: m3.small
 
  - compute002
    connection IP: <x.x.x.x>
    IPs: <x.x.x.x>
    instance id: <uuid>
    instance flavor: m3.small

frontend nodes:

  - frontend001
    connection IP: <x.x.x.x>
    IPs: <x.x.x.x>
    instance id: <uuid>
    instance flavor: m3.small

```

Grow the cluster to 10 nodes (add another 8 nodes):
```
elasticluster resize hpc1 -a 8:compute
```

Terminate (destroy) the cluster:
```
elasticluster stop hpc1
```

If the deployment fails during the start phase, you may need to fix the issue and then run the following to continue:
```
elasticluster setup hpc1
```

Some NeCTAR images are set to update packages on first boot, if you are using an image that does this the initial setup phase will fail with:
```
Could not get lock /var/lib/dpkg/lock-frontend - open (11: Resource temporarily unavailable)"
```

If this happens you just need to wait for a minute for the updates to complete and run:

```
elasticluster setup hpc1
```

to finalise the setup of Slurm itself.
