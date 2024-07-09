---
title: Creating an Ingress with availability zone set
order: 2
duration: 10
---

In this section, we will deploy an [Igress-Nginx controller](https://kubernetes.io/docs/concepts/services-networking/ingress/)
using helm.

1. To have the loadbalancer launched in a specific Nectar availability zone, we need to create an ingress-nginx values.yaml file with specified Nectar
availability zone annotation. The example below shows how to deploy the ingress-nginx loadbalancer in AZ monash-02.

   ```
   controller:
     Service:
       annotations:
         loadbalancer.openstack.org/availability-zone: monash-02
   ```

2. Add Ingress-Nginx helm repo and run helm repo update

   ```
   helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
   helm repo update
   ```

3. Install Ingress-Nginx using helm with values.yaml file created in step 1

   ```
   helm install ingress-nginx -f values.yaml ingress-nginx/ingress-nginx --namespace ingress-nginx --create-namespace
   Release "ingress-nginx" has been upgraded. Happy Helming!
   NAME: ingress-nginx
   LAST DEPLOYED: Wed Apr 24 01:16:40 2024

   … a few more lines of output …

   If TLS is enabled for the Ingress, a Secret containing the certificate and key must also be provided:

     apiVersion: v1
     kind: Secret
     metadata:
       name: example-tls
       namespace: foo
     data:
       tls.crt: <base64 encoded cert>
       tls.key: <base64 encoded key>
     type: kubernetes.io/tls

      ...
      NAME                                         TYPE           CLUSTER-IP      EXTERNAL-IP       PORT(S)                      AGE
      service/ingress-nginx-controller             LoadBalancer   10.254.167.36   130.194.251.159   80:32306/TCP,443:32266/TCP   2m58s
      service/ingress-nginx-controller-admission   ClusterIP      10.254.37.77    <none>            443/TCP                      2m58s

      NAME                                       READY   UP-TO-DATE   AVAILABLE   AGE
      deployment.apps/ingress-nginx-controller   1/1     1            1           2m58s
      ...
      job.batch/ingress-nginx-admission-patch    1/1           59s        2m58s
   ```

4. Verify whether Ingress-Nginx ingress controller is successfully deployed by checking if `ingress-nginx` namespace is created
and `EXTERNAL-IP` of `service/ingress-nginx-controller` is populated.

   ```
   kubectl get ns
   NAME          	STATUS   AGE
   default       	Active   3d14h
   ingress-nginx 	Active   4m29s
   kube-node-lease   Active   3d14h
   kube-public   	Active   3d14h
   kube-system   	Active   3d14h

   ```

   ```
   kubectl get all -n ingress-nginx
   NAME                                        	READY   STATUS	RESTARTS   AGE
   pod/ingress-nginx-controller-7854678f64-7bfdk   1/1 	Running   0      	21h

   NAME                                     	TYPE       	CLUSTER-IP  	EXTERNAL-IP   	PORT(S)                  	AGE
   service/ingress-nginx-controller         	LoadBalancer   10.254.251.41   130.194.250.107   80:30502/TCP,443:31959/TCP   21h
   service/ingress-nginx-controller-admission   ClusterIP  	10.254.75.111   <none>        	443/TCP                  	21h

   NAME                                   	READY   UP-TO-DATE   AVAILABLE   AGE
   deployment.apps/ingress-nginx-controller   1/1 	1        	1       	21h

   NAME                                              	DESIRED   CURRENT   READY   AGE
   replicaset.apps/ingress-nginx-controller-7854678f64   1     	1     	1   	21h

   ```

## More information

For more information, refer to:

- [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)
