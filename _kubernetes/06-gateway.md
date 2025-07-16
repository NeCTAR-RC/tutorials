---
title: Installing Envoy Gateway
order: 6
duration: 25
---

In this section, we will install a [Gateway API](https://kubernetes.io/docs/concepts/services-networking/gateway/) implementation
based on Envoy Gateway. Envoy Gateway is an extension that introduces custom API resources to support advanced traffic management
within a Kubernetes environment. Specifically, it enables features such as traffic splitting, rate limiting, and observability.

In this tutorial, we are creating a webserver deployment and use the Envoy Gateway API to direct traffic based on URL path.

1. Create a Web service deployment

   ```
   ---
   apiVersion: v1
   kind: ConfigMap
   metadata:
     name: httpd-html
   data:
     index.html: |
       <html>
         <head><title>Welcome to HTTPD</title></head>
         <body><h1>Hello from HTTPD!</h1></body>
       </html>
   ---
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: httpd-backend
   spec:
     replicas: 1
     selector:
       matchLabels:
         app: httpd-backend
     template:
       metadata:
         labels:
           app: httpd-backend
       spec:
         containers:
           - name: httpd
             image: httpd:latest
             ports:
               - containerPort: 80
             volumeMounts:
               - name: html-volume
                 mountPath: /usr/local/apache2/htdocs/
         volumes:
           - name: html-volume
             configMap:
               name: httpd-html

   ```

   ```
   kubectl apply -f web-server.yaml
   ```

2. Create a service to the httpd-backend web deployment.

   ```
   ---
   apiVersion: v1
   kind: Service
   metadata:
     name: httpd-service
   spec:
     type: ClusterIP
     ports:
       - port: 80
         targetPort: 80
     selector:
       app: httpd-backend

   ```

   ```
   kubectl apply -f httpd-backend.yaml
   ```

3. Install the Gateway API CRDs and Envoy Gateway.

   ```
   helm install eg oci://docker.io/envoyproxy/gateway-helm -n envoy-gateway-system --create-namespace
   ```

4. Please wait for Envoy Gateway to become available.

   ```
   kubectl wait --timeout=5m -n envoy-gateway-system deployment/envoy-gateway --for=condition=Available
   ```

   ```
   deployment.apps/envoy-gateway condition met

   ```
 
   ```
   kubectl get all -n envoy-gateway-system
   ```

   ```
   NAME                                 READY   STATUS    RESTARTS   AGE
   pod/envoy-gateway-56dff69df6-xspzp   1/1     Running   0          34s

   NAME                    TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                                   AGE
   service/envoy-gateway   ClusterIP   172.31.191.184   <none>        18000/TCP,18001/TCP,18002/TCP,19001/TCP   34s

   NAME                            READY   UP-TO-DATE   AVAILABLE   AGE
   deployment.apps/envoy-gateway   1/1     1            1           34s

   NAME                                       DESIRED   CURRENT   READY   AGE
   replicaset.apps/envoy-gateway-56dff69df6   1         1         1       34s

   ```

5. Create a cluster-scoped GatewayClass which is not tied to any namespace.

   ```
   ---
   apiVersion: gateway.networking.k8s.io/v1
   kind: GatewayClass
   metadata:
     name: eg
   spec:
     controllerName: gateway.envoyproxy.io/gatewayclass-controller

   ```

   ```
   kubectl apply -f gateway-class.yaml
   ```

6. Define a basic Gateway configuration that includes a listener configured to accept HTTP traffic.

   ```
   ---
   apiVersion: gateway.networking.k8s.io/v1beta1
   kind: Gateway
   metadata:
     name: gateway
     namespace: envoy-gateway-system
   spec:
     gatewayClassName: eg
     listeners:
       - name: http
         protocol: HTTP
         port: 80
      allowedRoutes:
        namespaces:
          from: All

   ```

   ```
   kubectl apply -f gateway.yaml
   ```

7. Define a HTTPRoute so the httpd-backend deployments could be exposed externally.

   ```
   ---
   apiVersion: gateway.networking.k8s.io/v1beta1
   kind: HTTPRoute
   metadata:
     name: httpd-route
     namespace: envoy-gateway-system
   spec:
     parentRefs:
       - name: gateway
     rules:
       - matches:
           - path:
               type: PathPrefix
               value: /
         backendRefs:
           - name: httpd-service
             port: 80

   ```

   ```
   kubectl apply -f httpd-route.yaml
   ```

8. Wait till the Envoy Gateway for httpd-backend becomes ready.

   ```
   kubectl get svc -n envoy-gateway-system
   ```

   ```
   NAME                                   TYPE           CLUSTER-IP       EXTERNAL-IP       PORT(S)                                   AGE
   envoy-default-httpd-gateway-f91e69e6   LoadBalancer   172.28.137.43    160.250.232.111   80:30583/TCP                              88s

   ```

9. Verify whether Envoy Gateway can direct the HTTP requests to the correct backend Service

   ```
   $ curl http://160.250.232.111
   <!DOCTYPE html>
   <html>
     <head><title>Welcome to HTTPD</title></head>
     <body><h1>Hello from HTTPD!</h1></body>
   </html>

   ```

## More information

For more information, refer to:

- [Envoy Gateway](https://gateway.envoyproxy.io/)
