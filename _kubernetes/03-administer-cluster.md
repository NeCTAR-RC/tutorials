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

Magnum used to ship its own [Web UI Dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/), with Magnum installing it by default. This is now deprecated and no-longer maintained, but `headlamp` is now the recommended default for this. 

`Headlamp` gives you a browser-based view of your cluster's pods, deployments, services, logs and more. It's useful when you'd rather click around than memorise `kubectl` commands.

Follow these steps to access it.

1. Install Headlamp into your cluster. The Headlamp project provides a ready-to-use manifest.

   ```
   kubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/headlamp/main/kubernetes-headlamp.yaml
   ```

2. Deploy it and wait for it to rollout.

   ```
   kubectl rollout status deployment/headlamp -n kube-system --timeout=120s
   ```

3. Create a service account that Headlamp will use to authenticate you.

   ```
   kubectl -n kube-system create serviceaccount headlamp-admin
   ```
   
4. Give it cluster-admin rights. (For a real production cluster you'd want to scope this down — see the [Headlamp RBAC docs](https://headlamp.dev/docs/latest/installation/) — but cluster-admin is fine for    this tutorial.)

    ```
    kubectl create clusterrolebinding headlamp-admin \
    --clusterrole=cluster-admin \
    --serviceaccount=kube-system:headlamp-admin
    ```

5. Get the dashboard token. Run the following code, and copy the resulting output to your clipboard

   ```
   kubectl create token headlamp-admin -n kube-system
   ```

6. Forward the Headlamp service to the local machine.

   ```
   kubectl port-forward -n kube-system service/headlamp 8080:80
   Forwarding from 127.0.0.1:8080 -> 4466
   Forwarding from [::1]:8080 -> 4466
   ```

7. Using a browser, visit the dashboard URL, and login using the token from step 5. The URL is
   [http://localhost:8080](http://localhost:8080)
