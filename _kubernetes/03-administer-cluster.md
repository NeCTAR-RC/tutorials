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

Magnum used to ship its own [Web UI Dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/), with Magnum installing it by default. This is now deprecated and no-longer maintained, `headlamp` is now the recommended application for this.

`Headlamp` gives you a browser-based view of your cluster's pods, deployments, services, logs and more.

Installation instructions can be found on the [Headlamp](https://headlamp.dev/docs/latest/installation/in-cluster/) site.

## Upgrading a cluster

You can upgrade your cluster to a newer Kubernetes version from the Nectar
Dashboard. The upgrade is a rolling upgrade, meaning nodes are replaced one at
a time so your cluster keeps running while it upgrades.

1. Go to **Project > Container Infra > Clusters**. Find your cluster in the
   list, open the dropdown menu next to **Manage Node Groups** and select
   **Rolling Cluster Upgrade**.

   ![Cluster actions menu with Rolling Cluster Upgrade]({{ site.baseurl }}/assets/images/kubernetes/upgrade-cluster-step1-menu.png)

1. In the **Rolling Cluster Upgrade** dialog, select the Kubernetes version to
   upgrade to and click **Submit**. For example, a cluster running v1.34.7 can
   be upgraded to 1.35.4.

   ![Rolling Cluster Upgrade dialog with Kubernetes Version selection]({{ site.baseurl }}/assets/images/kubernetes/upgrade-cluster-step2-version.png)

The cluster status changes to `UPDATE_IN_PROGRESS` while nodes are replaced,
and returns to `UPDATE_COMPLETE` when the upgrade has finished. You can watch
the nodes being replaced with `kubectl get nodes`.

**Upgrade one version at a time**  
Kubernetes control plane upgrades on Nectar must proceed through each
nominated release in order; skipping versions is not supported.
{: .callout-warning}
