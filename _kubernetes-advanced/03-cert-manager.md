---
title: Deploying cert-manager and creating a cluster certificate issuer
order: 3
duration: 20
---

In this section, [cert-manager](https://cert-manager.io/docs/) will be deployed using Helm to enable HTTPS
communication for applications hosted within a Kubernetes cluster.

1. Add cert-manager Helm repo and run helm repo update

   ```
   helm repo add jetstack https://charts.jetstack.io
   helm repo update
   ```

1. Deploy cert-manager with Gateway API Controllers feature enabled using Helm

   ```
   helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace \
   --set config.apiVersion="controller.config.cert-manager.io/v1alpha1" \
   --set config.kind="ControllerConfiguration" \
   --set config.enableGatewayAPI=true \
   --set crds.enabled=true

   NAME: cert-manager
   LAST DEPLOYED: Mon Jul  7 04:46:31 2025
   NAMESPACE: cert-manager
   STATUS: deployed
   REVISION: 1
   TEST SUITE: None
   ...
   Learn more in the [1.18 release notes](https://cert-manager.io/docs/releases/release-notes/release-notes-1.18).

   cert-manager v1.18.2 has been deployed successfully!

   ...
   For information on how to configure cert-manager to automatically provision
   Certificates for Ingress resources, take a look at the `ingress-shim`
   documentation:

   https://cert-manager.io/docs/usage/ingress/

   ```

1. Verify whether cert-manager is successfully deployed by verifying if cert-manager namespace
is created and all the relevant pods and services are running.

   ```
   kubectl get namespace
   ```

   ```
   NAME                                STATUS   AGE
   calico-apiserver                    Active   97d
   calico-system                       Active   98d
   ...
   capo-system                         Active   97d
   cert-manager                        Active   3m9s
   default                             Active   98d
   envoy-gateway-system                Active   3d22h
   ...
   openstack-system                    Active   98d
   tigera-operator                     Active   98d

   ```

   ```
   kubectl get all -n cert-manager
   ```

   ```
   NAME                                           READY   STATUS    RESTARTS   AGE
   pod/cert-manager-bd5bbf49d-9hlxl               1/1     Running   0          110s
   pod/cert-manager-cainjector-65967ff5cc-5jm2q   1/1     Running   0          110s
   pod/cert-manager-webhook-7c665868cb-rcvjl      1/1     Running   0          110s

   NAME                              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)            AGE
   service/cert-manager              ClusterIP   172.30.151.189   <none>        9402/TCP           110s
   service/cert-manager-cainjector   ClusterIP   172.26.171.191   <none>        9402/TCP           110s
   service/cert-manager-webhook      ClusterIP   172.27.198.20    <none>        443/TCP,9402/TCP   110s

   NAME                                      READY   UP-TO-DATE   AVAILABLE   AGE
   deployment.apps/cert-manager              1/1     1            1           110s
   deployment.apps/cert-manager-cainjector   1/1     1            1           110s
   deployment.apps/cert-manager-webhook      1/1     1            1           110s

   NAME                                                 DESIRED   CURRENT   READY   AGE
   replicaset.apps/cert-manager-bd5bbf49d               1         1         1       110s
   replicaset.apps/cert-manager-cainjector-65967ff5cc   1         1         1       110s
   replicaset.apps/cert-manager-webhook-7c665868cb      1         1         1       110s

   ```

1. Let’s Encrypt is used as the certificate authority, providing free TLS certificates. The clusterissuer.yaml
configuration file is then created using Let’s Encrypt [staging environment](https://letsencrypt.org/docs/staging-environment/).

   ```
   apiVersion: cert-manager.io/v1
   kind: ClusterIssuer
   metadata:
     name: letsencrypt-staging
     namespace: cert-manager
   spec:
     acme:
        server: https://acme-staging-v02.api.letsencrypt.org/directory
        email: <your project bot email address>
        privateKeySecretRef:
          name: letsencrypt-staging
        solvers:
           - http01:
               gatewayHTTPRoute:
                 parentRefs:
                   - name: gateway
                     namespace: default
                     kind: Gateway

   ```

   ```
   kubectl create -f clusterissuer.yaml
   ```

   ```
   clusterissuer.cert-manager.io/letsencrypt-staging created

   ```

1. Update the gateway.yaml file in Step 6 of the [Installing Envoy Gateway]({{ site.baseurl }}/kubernetes/06-gateway) in
Kubernetes tutorial to incorporate the certificate. The HTTP01 ACME challenge requires an active HTTP listener on port 80
to ensure the initial challenge request can be successfully completed.

   ```
   ---
   apiVersion: gateway.networking.k8s.io/v1
   kind: Gateway
   metadata:
     name: gateway
     namespace: default
     annotations:
       cert-manager.io/cluster-issuer: letsencrypt-staging
   spec:
     gatewayClassName: eg
     listeners:
       - name: http
         protocol: HTTP
         port: 80
         hostname: <your domain name>.cloud.edu.au
         allowedRoutes:
           namespaces:
             from: All
       - name: https
         protocol: HTTPS
         port: 443
         hostname: <your domain name>.cloud.edu.au
         tls:
           mode: Terminate
           certificateRefs:
             - kind: Secret
               group: ""
               name: example-tls
         allowedRoutes:
           namespaces:
             from: All

   ```

   ```
   kubectl apply -f gateway.yaml

   ```

1. Update the httpd-route.yaml file in Step 7 of the [Installing Envoy Gateway]({{ site.baseurl }}/kubernetes/06-gateway) in
Kubernetes tutorial. To allow for the HTTP01 ACME challenge, a valid route to the HTTP server is necessary to successfully
process the initial challenge request. All other HTTP traffic is subsequently redirected to HTTPS.

   ```
   ---
   apiVersion: gateway.networking.k8s.io/v1
   kind: HTTPRoute
   metadata:
     name: http-redirect
     namespace: default
   spec:
     parentRefs:
       - name: gateway
         namespace: default
         sectionName: http
     rules:
       - filters:
           - type: RequestRedirect
             requestRedirect:
               statusCode: 301
               scheme: https
   ---
   apiVersion: gateway.networking.k8s.io/v1
   kind: HTTPRoute
   metadata:
     name: https-route
     namespace: default
   spec:
     parentRefs:
       - name: gateway
         sectionName: https
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

1. Verify whether Envoy Gateway can direct the HTTPS requests to the correct backend service.

   ```
   curl -k https://160.250.232.111
   or
   curl -k https://<your domain name>.cloud.edu.au
   ```

   ```
   <!DOCTYPE html>
   <html>
     <head><title>Welcome to HTTPD</title></head>
     <body><h1>Hello from HTTPD!</h1></body>
   </html>

   ```

## More information

For more information, refer to:

- [cert-manager](https://cert-manager.io/docs/)
- [Let's Encrypt](https://letsencrypt.org/docs/)
