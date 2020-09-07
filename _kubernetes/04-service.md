---
title: Creating a Web Service
order: 4
duration: 10
---

In this section, you will learn how to run a web server (nginx) using
Kubernetes.

A Pod is the smallest deployable unit of computing that you
can create and manage in Kubernetes.  A Pod holds one (or more) _containers_.
For more detailed information, refer to the
[Pods overview](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)
in the Kubernetes documentation.

The following steps show how to create a Pod in Kubernetes that runs a single
Nginx container. We assume that you have a working cluster, and working kubectl
configurations as set up in previous sections of this tutorial.


## Creating a Pod

1. Create a new Pod called `webserver` using a webserver container image. We are using nginx as an example here:

   ```
   $ kubectl run --generator=run-pod/v1 --image=nginx webserver
   pod/webserver created
   ```

   If you have used `docker run` before, this command should look familiar.
   It starts a Pod with an nginx image.

1. Check that your Pod has started up and is running:

   ```
   $ kubectl get pods
   NAME        READY   STATUS              RESTARTS   AGE
   webserver   0/1     ContainerCreating   0          5s
   ```

   Initially the status will show `ContainerCreating`.
   After a few seconds you should see the status change to `Running`:

   ```
   $ kubectl get po
   NAME        READY   STATUS    RESTARTS   AGE
   webserver   1/1     Running   0          21s
   ```

1. Check the details of your Pod:

   ```
   $ kubectl describe pod webserver
   Name:         webserver
   Namespace:    default
   Node:         kube-t7qvtfd34sbg-minion-0/10.0.0.80
   <...snipped...>
   Events:
     Type    Reason     Age    From                                   Message
     ----    ------     ----   ----                                   -------
     Normal  Scheduled  3m10s  default-scheduler                      Successfully assigned default/webserver to kube-t7qvtfd34sbg-minion-0
     Normal  Pulling    3m8s   kubelet, kube-t7qvtfd34sbg-minion-0  Pulling image "nginx"
     Normal  Pulled     3m     kubelet, kube-t7qvtfd34sbg-minion-0  Successfully pulled image "nginx"
     Normal  Created    3m     kubelet, kube-t7qvtfd34sbg-minion-0  Created container webserver
     Normal  Started    3m     kubelet, kube-t7qvtfd34sbg-minion-0  Started container webserver
   ```

1. Set up direct access to the Pod using the `port-forward` command:

   ```
   $ kubectl port-forward pod/webserver 8000
   Forwarding from 127.0.0.1:8000 -> 80
   Forwarding from [::1]:8000 -> 80
   ```
   You can now make requests to the running Pod by visiting port 8000 in a web
   browser on your local machine: [http://localhost:8000](http://localhost:8000){:target="_blank"}.
   You should see the default "Welcome to nginx!" page.


## More information

In this section we requested Kubernetes to run an `nginx` image.  When
we did this, Kubernetes performed the following (simplifed) steps:

1. The Kubernetes master scheduled the pod to run on a free node in the cluster

1. The node started a pod

1. The node fetched the image from Docker Hub, based on the given image name; i.e.
   [https://hub.docker.com/nginx](https://hub.docker.com/nginx)

1. The node created a container with the image and started it inside the pod


## Next steps

Although the `port-forward` command is useful for testing out your pods,
it requires access to the Kubernetes API. This is not available to the regular
users who will access your service. In the next section we will set up access to
your Pod from the Internet by setting up a load balancer.

