---
title: Administering a Cluster
order: 3
duration: 5
---

## Creating the kubectl config

[kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) is the command
line client used to control a kubernetes cluster. Kubernetes uses a separate
authentication mechanism from OpenStack (Keystone). Since OpenStack already
knows who we are, we can use it to generate a kubectl config file that
includes credentials to authenticate us to Kubernetes.

1. Create a new directory and `cd` to it;

   ```
   mkdir mycluster
   cd mycluster
   ```

1. Use the `openstack` tool to generate the config file for kubectl:

   ```
   $ openstack coe cluster config mycluster
   export KUBECONFIG=/home/jake/temp/coe/mycluster/config
   ```

1. Set the KUBECONFIG environment variable used by copy-and-pasting
   the `export KUBECONFIG=...` line output by the above to the shell prompt:
   ```
   $ export KUBECONFIG=/home/jake/temp/coe/mycluster/config
   $ echo $KUBECONFIG
   /home/jake/temp/coe/mycluster/config
   ```

## Using kubectl


1. Use kubectl to see if all your service pods in kubernetes are set up
   correctly. All the pods in the `kube-system` namespace should have status
`Running`. For example:

   ```
   $ kubectl get all --all-namespaces
   NAMESPACE     NAME                                           READY   STATUS    RESTARTS   AGE
   kube-system   pod/coredns-6fc5967489-sdgcx                   1/1     Running   0          2m30s
   kube-system   pod/coredns-6fc5967489-w4959                   1/1     Running   0          35m
   kube-system   pod/heapster-7f4df8c8cf-sjxxd                  1/1     Running   0          35m
   kube-system   pod/k8s-keystone-auth-dggn4                    1/1     Running   0          35m
   kube-system   pod/kube-dns-autoscaler-86c44cb799-rsstj       1/1     Running   0          35m
   kube-system   pod/kube-flannel-ds-amd64-knvfb                1/1     Running   0          3m21s
   kube-system   pod/kube-flannel-ds-amd64-z462l                1/1     Running   0          35m
   kube-system   pod/kubernetes-dashboard-dbc7c4fff-p46fj       1/1     Running   0          35m
   kube-system   pod/npd-7mlhg                                  1/1     Running   0          2m41s
   kube-system   pod/openstack-cloud-controller-manager-kjzlf   1/1     Running   0          35m

   NAMESPACE     NAME                           TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                  AGE
   default       service/kubernetes             ClusterIP   10.254.0.1       <none>        443/TCP                  35m
   kube-system   service/heapster               ClusterIP   10.254.241.90    <none>        80/TCP                   35m
   kube-system   service/kube-dns               ClusterIP   10.254.0.10      <none>        53/UDP,53/TCP,9153/TCP   35m
   kube-system   service/kubernetes-dashboard   ClusterIP   10.254.111.120   <none>        443/TCP                  35m

   NAMESPACE     NAME                                                DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                     AGE
   kube-system   daemonset.apps/k8s-keystone-auth                    1         1         1       1            1           node-role.kubernetes.io/master=   35m
   kube-system   daemonset.apps/kube-flannel-ds-amd64                2         2         2       2            2           beta.kubernetes.io/arch=amd64     35m
   kube-system   daemonset.apps/npd                                  1         1         1       1            1           <none>                            35m
   kube-system   daemonset.apps/openstack-cloud-controller-manager   1         1         1       1            1           node-role.kubernetes.io/master=   35m

   NAMESPACE     NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
   kube-system   deployment.apps/coredns                2/2     2            2           35m
   kube-system   deployment.apps/heapster               1/1     1            1           35m
   kube-system   deployment.apps/kube-dns-autoscaler    1/1     1            1           35m
   kube-system   deployment.apps/kubernetes-dashboard   1/1     1            1           35m

   NAMESPACE     NAME                                             DESIRED   CURRENT   READY   AGE
   kube-system   replicaset.apps/coredns-6fc5967489               2         2         2       35m
   kube-system   replicaset.apps/heapster-7f4df8c8cf              1         1         1       35m
   kube-system   replicaset.apps/kube-dns-autoscaler-86c44cb799   1         1         1       35m
   kube-system   replicaset.apps/kubernetes-dashboard-dbc7c4fff   1         1         1       35m
   ```

## Using the web interface

Magnum also sets up the Kubernetes [Web
UI](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)
by default. Follow these steps to access it.

1. Create a clusterrolebinding for the `kubernetes-dashboard` service account

   ```
   kubectl create clusterrolebinding kubernetes-dashboard --clusterrole=cluster-admin --serviceaccount=kubernetes-dashboard:kubernetes-dashboard
   ```

1. Get the dashboard token.  Run the following code, and copy the resulting
   output to your clipboard

   ```
   kubectl create token kubernetes-dashboard -n kubernetes-dashboard
   ```

1. Use kubectl to create a web proxy

   ```
   $ kubectl proxy
   Starting to serve on 127.0.0.1:8001
   ```

1. Using a browser, visit the dashboard URL. The URL is
   [http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:443/proxy/](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:443/proxy/)

1. Select the `token` option, and paste the token you copied into the field
   provided. Click login and you should be taken to an overview of your cluster.
