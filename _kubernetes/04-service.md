---
title: Service
order: 4
duration: 10
---

In this section, you will learn to run a web server (nginx) using Kubernetes.

To being, you should already have a working cluster from previous steps

1. Check that you cluster is working

   ```
   kubectl get nodes
   ```

1. Start a container image. We use nginx as an example

   ```
   kubectl run --generator=run-pod/v1 nginx --image nginx
   ```

   If you have use `docker run` before this command should look familiar. This
starts a _pod_ with a nginx image. We go into detail what is a pod at the end of
this section.

1. Check that your pod has started up and is running

   ```
   kubectl get pods
   ```

1. Check the details of your pod by doing

    ```
    kubectl describe pod/nginx
    ```

1. Now that you have a pod working, we need a way of getting to it from the
   Internet. We will cover this in the next section.

## More information

In this section we requested Kubernetes to run an `nginx` image. Kubernetes did
the following (simplifed):

1. Fetched the image from DockerHub, based on the name. i.e.
   [https://hub.docker.com/nginx](https://hub.docker.com/nginx)

1. Created a container with the image

1. Created a pod and placed the container inside it

1. Scheduled the pod to a free node

On Kubernetes, the smallest runnable unit is a _pod_, which holds
one (or more) _containers_.

For more information, refer to:

- [Pods
  overview](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)
