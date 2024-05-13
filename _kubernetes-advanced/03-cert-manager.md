---
title: Deploying cert-manager and creating a cluster certificate issuer
order: 3
duration: 10
---

In this section, we will deploy [cert-manager](https://cert-manager.io/docs/) using helm.

1. Add cert-manager helm repo and run helm repo update

   ```
   helm repo add jetstack https://charts.jetstack.io
   helm repo update
   ```

2. Install cert-manager using helm

   ```
   helm install cert-manager --namespace cert-manager --create-namespace --set installCRDs=true
   NAME: cert-manager
   LAST DEPLOYED: Wed Apr 24 01:27:17 2024
   NAMESPACE: cert-manager
   STATUS: deployed
   REVISION: 1
   TEST SUITE: None
   NOTES:
   cert-manager v1.14.4 has been deployed successfully!

   In order to begin issuing certificates, you will need to set up a ClusterIssuer
   or Issuer resource (for example, by creating a 'letsencrypt-staging' issuer).

   More information on the different types of issuers and how to configure them
   can be found in our documentation:

   https://cert-manager.io/docs/configuration/

   For information on how to configure cert-manager to automatically provision
   Certificates for Ingress resources, take a look at the `ingress-shim`
   documentation:

   https://cert-manager.io/docs/usage/ingress/

   ```

3. Verify whether cert-manager ingress controller is successfully deployed by checking if cert-manager namespace
is created and all the relevant pods and services are running.

   ```
   kubectl get ns
   NAME          	STATUS   AGE
   cert-manager  	Active   7m45s
   default       	Active   3d14h
   ingress-nginx 	Active   4m29s
   kube-node-lease   Active   3d14h
   kube-public   	Active   3d14h
   kube-system   	Active   3d14h

   ```
    
   ```
   kubectl get all -n cert-manager
   NAME                                        	READY   STATUS	RESTARTS   AGE
   pod/cert-manager-5f8646db6b-fphnb          	1/1 	Running   0      	5m33s
   pod/cert-manager-cainjector-5cf5f57dd7-btlkj   1/1 	Running   0      	5m33s
   pod/cert-manager-webhook-687b7f8b97-hslpj  	1/1 	Running   0      	5m33s

   NAME                       	TYPE    	CLUSTER-IP  	EXTERNAL-IP   PORT(S)	AGE
   service/cert-manager       	ClusterIP   10.254.23.21	<none>    	9402/TCP   5m33s
   service/cert-manager-webhook   ClusterIP   10.254.176.88   <none>    	443/TCP	5m33s

   NAME                                  	READY   UP-TO-DATE   AVAILABLE   AGE
   deployment.apps/cert-manager          	1/1 	1        	1       	5m33s
   deployment.apps/cert-manager-cainjector   1/1 	1        	1       	5m33s
   deployment.apps/cert-manager-webhook  	1/1 	1        	1       	5m33s

   NAME                                             	DESIRED   CURRENT   READY   AGE
   replicaset.apps/cert-manager-5f8646db6b          	1     	1     	1   	5m33s
   replicaset.apps/cert-manager-cainjector-5cf5f57dd7   1     	1     	1   	5m33s
   replicaset.apps/cert-manager-webhook-687b7f8b97  	1     	1     	1   	5m33s

   ```
4. In this tutorial, we’re using Let’s Encrypt as certificate authority, which provides free TLS certificates.
Let's create clusterissuer.yaml using Let's Encrypt [staging environment](https://letsencrypt.org/docs/staging-environment/).

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
               ingress:
           	 class: nginx

   ```
5. Run the kubectl command below to create a cluster certificate issuer.

   ```
   kubectl create -f clusterissuer.yaml
   clusterissuer.cert-manager.io/letsencrypt-staging created
   
   ```

## More information

For more information, refer to:

- [cert-manager](https://cert-manager.io/docs/)
- [Let's Encrypt](https://letsencrypt.org/docs/)
