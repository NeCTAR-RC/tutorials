---
title: High Availability
order: 7
duration: 10
---

High availability is about implementing your service in such a way that
it will continue to work in the face of the failure of various components.
It also helps you to perform upgrades while minimizing service interruption.

One of the Kubernetes features that can be used in a highly available
service is the ReplicaSet.

## Creating ReplicaSet

In the following example, we are going to create a ReplicaSet

1. First, delete the pod we previously created

    ```
    kubectl delete pod nginx
    ```

1. Try to refresh the page at `EXTERNAL IP` of the loadbalancer service. It
   should fail because the pod has already been deleted.

1. Create a replicaset. Save the following yaml as `nginxreplica.yaml`, and
   create it using `kubectl apply -f nginxreplica.yaml`

    ```
    apiVersion: apps/v1
    kind: ReplicaSet
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      replicas: 2
      selector:
        matchLabels:
          run: nginx
      template:
        metadata:
          labels:
            run: nginx
        spec:
          containers:
          - name: nginx
            image: nginx
    ```

1. This should create a replicaset of 2 identical pods. Show the pods

    ```
    $ kubectl get pods
    NAME          READY   STATUS    RESTARTS   AGE
    nginx-qxch4   1/1     Running   0          20m
    nginx-wjxmm   1/1     Running   0          20m
    ```

1. Browse to the page at `EXTERNAL IP` of the loadbalancer service. It should
   now be working. As we created pods in the replicaset with the same label as
the previous single pod (`run=nginx`), the loadbalancer knows how to find them.

## Delete a pod

1. Select a pod to be deleted and show the pods again.

	```
	$ kubectl delete pod nginx-qxch4
	pod "nginx-qxch4" deleted
	$ kubectl get pods
	NAME          READY   STATUS              RESTARTS   AGE
	nginx-vdhrn   0/1     ContainerCreating   0          5s
	nginx-wjxmm   1/1     Running             0          48m
	```
	You can see that Kubernetes will recreate a pod to ensure the number of
replicas stay the same as what was defined.

1. The nginx web page should continue working with one pod down.

## Scaling up pods

You can also scale up the number of pods by editing the replicaset config file.

1. Edit `nginxreplica.yaml` and change replicas from `2` to `3`

1. Submit the new config

    ```
    kubectl apply -f nginxreplica.yaml
    ```

1. Show the pods. You should see a new container being created. E.g.

	```
	$ kubectl get pods
	NAME          READY   STATUS              RESTARTS   AGE
	nginx-6d7xj   1/1     Running             0          4m15s
	nginx-hz4dx   0/1     ContainerCreating   0          2s
	nginx-sj6f5   1/1     Running             0          4m15s
	```

## More information

For more information, refer to:

- [ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)
