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
   openstack coe cluster config mycluster
   export KUBECONFIG=/home/jake/temp/coe/mycluster/config
   ```

1. Set the KUBECONFIG environment variable used by copy-and-pasting
   the `export KUBECONFIG=...` line output by the above to the shell prompt:

   ```
   export KUBECONFIG=/home/jake/temp/coe/mycluster/config
   echo $KUBECONFIG
   /home/jake/temp/coe/mycluster/config
   ```

## Using kubectl


1. Use kubectl to see if all your service pods in kubernetes are set up
   correctly. All the pods in the `kube-system` namespace should have status
`Running`. For example:

   ```
   kubectl get all --all-namespaces
   ```

   ```
   NAMESPACE                NAME                                                                 READY   STATUS      RESTARTS       AGE
   calico-apiserver         pod/calico-apiserver-79dbf75bfc-997sh                                1/1     Running     0              45d
   calico-apiserver         pod/calico-apiserver-79dbf75bfc-wjqsz                                1/1     Running     0              45d
   calico-system            pod/calico-kube-controllers-5c7ffcfbf9-q75rz                         1/1     Running     0              45d
   calico-system            pod/calico-node-49dsv                                                1/1     Running     2 (45d ago)    45d
   calico-system            pod/calico-node-q69tj                                                1/1     Running     0              45d
   calico-system            pod/calico-typha-6c874f96b5-7w7pv                                    1/1     Running     0              45d
   calico-system            pod/csi-node-driver-hl9jm                                            2/2     Running     0              45d
   calico-system            pod/csi-node-driver-jqwrv                                            2/2     Running     0              45d
   kube-system              pod/coredns-7c65d6cfc9-fzqmp                                         1/1     Running     0              45d
   kube-system              pod/coredns-7c65d6cfc9-n7l9p                                         1/1     Running     0              45d
   [output truncated]
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
   kubectl proxy
   Starting to serve on 127.0.0.1:8001
   ```

1. Using a browser, visit the dashboard URL. The URL is
   [http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:443/proxy/](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:443/proxy/)

1. Select the `token` option, and paste the token you copied into the field
   provided. Click login and you should be taken to an overview of your cluster.
