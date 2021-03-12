---
title: High Availability
order: 8
duration: 10
---

High availability is about implementing your service in such a way that
it will continue to work in the face of the failure of various components.
It also helps you to perform upgrades while minimizing service interruption.

One of the Kubernetes features that can be used in a highly available
service is the Deployment. A Deployment is a template for creating a Pod,
and Kubernetes handles creating and destroying Pods according to the details
in the template, such as the number of pods to create (so-called "replicas").


## Creating a Deployment

In the following example, we are going to create a Deployment.

1. First, delete the pod we previously created.

   ```
   $ kubectl delete pod webserver
   pod "webserver" deleted
   ```

1. Try to refresh the page at `EXTERNAL IP` of the loadbalancer service. It
should fail because the pod has already been deleted.

   ```
   $ kubectl get service
   NAME           TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
   nginxservice   LoadBalancer   10.254.210.248   103.6.252.244   80:31086/TCP   67m
   ```

   You can also examine the endpoints that the service has discovered. These are the IPs
   of the Pods where the service is forwarding incoming requests. There should be no endpoints
   since we just deleted the `webserver` Pod.

   ```
   $ kubectl get endpoints
   NAME           ENDPOINTS         AGE
   nginxservice   <none>            69m
   ```

1. Create a deployment. Save the following yaml as `deployment.yaml`, and
create it using `kubectl apply -f deployment.yaml`.

   ```
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     labels:
       run: webserver
     name: webserver
   spec:
     replicas: 2
     selector:
       matchLabels:
         run: webserver
     template:
       metadata:
         labels:
           run: webserver
       spec:
         containers:
         - image: nginx
           name: nginx
   ```

   Note that we're specifying `replicas: 2` here, to say we want two
   pods to be running in this deployment.

1. Check the status of the new deployment, it may take a little while for
   both pods to become ready (the `2/2` under `READY`).

   ```
   $ kubectl get deployment
   NAME        READY   UP-TO-DATE   AVAILABLE   AGE
   webserver   2/2     2            2           66s
   ```

1. Show the pods themselves.

   ```
   kubectl get pods
   NAME                         READY   STATUS    RESTARTS   AGE
   webserver-56f66697cc-b8gvq   1/1     Running   0          106s
   webserver-56f66697cc-h4stn   1/1     Running   0          106s
   ```

1. Browse to the page at `EXTERNAL IP` of the loadbalancer service. It should
now be working. As we created pods in the deployment with the same label as
the previous single pod (`run=webserver`), the loadbalancer knows how to find them.

   ```
   $ kubectl get service
   NAME           TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
   nginxservice   LoadBalancer   10.254.210.248   103.6.252.244   80:31086/TCP   67m
   ```

   If you check the endpoints again, you can see the IPs of the Pods
   that were discovered by the service.
   ```
   $ kubectl get endpoints
   NAME           ENDPOINTS                       AGE
   nginxservice   10.100.1.31:80,10.100.1.32:80   67m
   ```


## Delete a pod

1. Select a pod to be deleted and show the pods again.

   ```
   $ kubectl delete po webserver-56f66697cc-h4stn
   pod "webserver-56f66697cc-h4stn" deleted

   $ kubectl get pods
   NAME                         READY   STATUS              RESTARTS   AGE
   webserver-56f66697cc-b8gvq   1/1     Running             0          2m35s
   webserver-56f66697cc-n8vdf   0/1     ContainerCreating   0          3s
   ```
   You can see that Kubernetes has created a new pod to ensure that there are
   two replicas.

1. The nginx web page should continue working even with one pod down.


## Scaling up pods

You can also scale up the number of pods by editing the deployment config file.

1. Edit `deployment.yaml` and change replicas from `2` to `3`

1. Submit the new config

   ```
   kubectl apply -f deployment.yaml
   ```

1. Show the pods. You should see a new container being created. E.g.

   ```
   $ kubectl get po
   NAME                         READY   STATUS              RESTARTS   AGE
   webserver-56f66697cc-b8gvq   1/1     Running             0          5m52s
   webserver-56f66697cc-n8vdf   1/1     Running             0          3m20s
   webserver-56f66697cc-rqzj7   0/1     ContainerCreating   0          4s
   ```

1. You can also scale the deployment using the `kubectl scale` command. Here we scale
   back down to two replicas, and one of the three existing pods will be deleted.

   ```
   $ kubectl scale deployment webserver --replicas=2
   deployment.extensions/webserver scaled

   $ kubectl get po
   NAME                         READY   STATUS    RESTARTS   AGE
   webserver-56f66697cc-b8gvq   1/1     Running   0          10m
   webserver-56f66697cc-n8vdf   1/1     Running   0          7m33s
   ```


## More information

For more information, refer to:

- [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
