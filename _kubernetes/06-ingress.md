---
title: Creating an Ingress
order: 6
duration: 15
---

In this section, we will create an [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)
based on ingress-nginx which is an Ingress controller for Kubernetes using NGINX as a reverse
proxy and load balancer.

In this tutorial, we are creating two webserver deployments, and use the
Ingress to redirect traffic to them depending on URL path.


1. Firstly, install the latest ingress-nginx controller version available on GitHub.

   ```
   kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.9.6/deploy/static/provider/aws/deploy.yaml
   ```

2. Secondly, run the following to list the details of the ingress-nginx ingress controller pods and services, wait until the output
   shows `EXTERNAL-IP` as populated.

   ```
   kubectl get all -n ingress-nginx
   ...
   NAME                                         TYPE           CLUSTER-IP      EXTERNAL-IP       PORT(S)                      AGE
   service/ingress-nginx-controller             LoadBalancer   10.254.167.36   130.194.251.159   80:32306/TCP,443:32266/TCP   2m58s
   service/ingress-nginx-controller-admission   ClusterIP      10.254.37.77    <none>            443/TCP                      2m58s

   NAME                                       READY   UP-TO-DATE   AVAILABLE   AGE
   deployment.apps/ingress-nginx-controller   1/1     1            1           2m58s
   ...
   job.batch/ingress-nginx-admission-patch    1/1           59s        2m58s
   ```

3. Create two webserver deployments

   ```
   ---
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: apple-deployment
   spec:
     selector:
       matchLabels:
         app: apple
     replicas: 2
     template:
       metadata:
         labels:
           app: apple
       spec:
         containers:
         - name: apple
           image: hashicorp/http-echo
           args:
           - "-text=apple"
           ports:
           - containerPort: 5678
   ---
   kind: Service
   apiVersion: v1
   metadata:
     name: apple-service
   spec:
     selector:
       app: apple
     ports:
       - port: 80
         targetPort: 5678 # Default port for image
   ```

   ```
   ---
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: banana-deployment
   spec:
     selector:
       matchLabels:
         app: banana
     replicas: 2
     template:
       metadata:
         labels:
           app: banana
       spec:
         containers:
         - name: echo1
           image: hashicorp/http-echo
           args:
           - "-text=banana"
           ports:
           - containerPort: 5678
   ---
   kind: Service
   apiVersion: v1
   metadata:
     name: banana-service
   spec:
     selector:
       app: banana
     ports:
       - port: 80
         targetPort: 5678 # Default port for image
   ```

4. Let us create Ingress so apple and banana deployments could be exposed externally.

   ```
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: fruit-ingress
   spec:
     ingressClassName: "nginx"
     rules:
     - http:
         paths:
         - path: "/apple"
           pathType: Prefix
           backend:
             service:
               name: apple-service
               port:
                 number: 80
         - path: "/banana"
           pathType: Prefix
           backend:
             service:
               name: banana-service
               port:
                 number: 80
   ```

5. Wait till the Ingress becomes ready. You can see the creation events by doing

   ```
   kubectl describe ingress/fruit-ingress
   ```

6. Verify whether Nginx Ingress can redirect the HTTP requests to the correct backend Service

   ```
   $ curl http://130.194.251.159/apple
   apple

   $ curl http://130.194.251.159/banana
   banana
   ```


## More information

For more information, refer to:

- [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)
