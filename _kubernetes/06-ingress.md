---
title: Creating an Ingress
order: 6
duration: 15
---

In this section, we will create an [Ingress]. Octavia, the OpenStack
LoadBalancer service, is able to work as a backend for ingress provider.

For this tutorial, we will create two webservers, and use the Ingress to
redirect traffic to them depending on URL path.

1. Firstly, let us create the two webservers

   ```
   kind: Pod
   apiVersion: v1
   metadata:
     name: apple-app
     labels:
       app: apple
   spec:
     containers:
       - name: apple-app
         image: hashicorp/http-echo
         args:
           - "-text=apple"
   ---
   kind: Service
   apiVersion: v1
   metadata:
     name: apple-service
   spec:
     selector:
       app: apple
     ports:
       - port: 5678 # Default port for image
     type: NodePort
   ```

   ```
   kind: Pod
   apiVersion: v1
   metadata:
     name: banana-app
     labels:
       app: banana
   spec:
     containers:
       - name: banana-app
         image: hashicorp/http-echo
         args:
           - "-text=banana"
   ---
   kind: Service
   apiVersion: v1
   metadata:
     name: banana-service
   spec:
     selector:
       app: banana
     ports:
       - port: 5678 # Default port for image
     type: NodePort
   ```

2. Secondly, create the Ingress.

   ```
   apiVersion: networking.k8s.io/v1beta1
   kind: Ingress
   metadata:
     name: basic-ingress
     annotations:
       kubernetes.io/ingress.class: "openstack"
       octavia.ingress.kubernetes.io/internal: "false"
     labels:
       ingress: basic-ingress
   spec:
     rules:
     - http:
         paths:
           - path: /apple
             backend:
               serviceName: apple-service
               servicePort: 5678
           - path: /banana
             backend:
               serviceName: banana-service
               servicePort: 5678
   ```

3. Wait till the Ingress becomes ready. You can see the creation events by doing

   ```
   kubectl describe ingress/basic-ingress
   ```

4. You can also the check the OpenStack Loadbalancer providing the backend to this ingress by doing

   ```
   openstack loadbalancer list
   ```

5. When the Ingress has been created, you should be able to see an IP associated
   with it. For example:

   ```
   $ kubectl get ingress/basic-ingress
   NAME            HOSTS   ADDRESS         PORTS   AGE
   basic-ingress   *       103.6.252.178   80      14m
   ```

6. Verify the Ingress is redirecting to the correct Service

   ```
   $ curl http://103.6.252.178/apple
   apple
   $ curl http://103.6.252.178/banana
   banana
   ```

[Ingress]: https://kubernetes.io/docs/concepts/services-networking/ingress/
