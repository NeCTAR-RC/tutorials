---
title: Creating a Web Service
order: 4
duration: 10
---

In this section, you will learn how to run a web server (nginx) using
Kubernetes.

We assume that you have a working cluster, and working kubectl
configurations as set up in previous sections of this Tutorial.

1. Check that your Cluster is working

   ```
   kubectl get nodes
   ```

1. Start a webserver container image.  We are using nginx as an example here:

   ```
   kubectl run --generator=run-pod/v1 nginx --image nginx
   ```

   If you have used `docker run` before, this command should look familiar.
   It starts a _pod_ with a nginx image.  (We will explain what a pod is at the
   end of this section.)

1. Check that your pod has started up and is running:

   ```
   kubectl get pods
   ```

1. Check the details of your pod:

    ```
    kubectl describe pod/nginx
    ```

1. Although the pod is now working, we still need to set up access from the
   Internet.  This is covered in the next section.

## More information

In this section we requested Kubernetes to run an `nginx` image.  When
we did this, Kubernetes performed the following (simplifed) steps:

1. It fetched the image from DockerHub, based on the given image name; i.e.
   [https://hub.docker.com/nginx](https://hub.docker.com/nginx)

1. It created a container with the image

1. It created a pod and placed the container inside it

1. Finally, it scheduled the pod to run on a free node in the cluster

Terminology: a _pod_is the smallest deployable unit of computing that you
can create and manage in Kubernetes.  A pod holds one (or more) _containers_.

For more detailed information, please refer to:

- [Pods
  overview](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)
