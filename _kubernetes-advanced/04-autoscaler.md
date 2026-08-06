---
title: Deploy a Kubernetes cluster with autoscaling
order: 4
duration: 30
---

In this section, we will deploy a kubernetes cluster with the [Cluster Autoscaler](https://cluster-api.sigs.k8s.io/tasks/automated-machine-management/autoscaling)
feature enabled. With autoscaling, Magnum automatically adds worker nodes when
your workloads need more resources, and removes them again when they are no
longer required, within a minimum and maximum node count that you define.

## Creating an autoscaling cluster using the command line

The steps below use the OpenStack command line to enable autoscaling on the
`default-worker` node group at cluster creation, by passing the
`auto_scaling_enabled`, `min_node_count` and `max_node_count` labels.

1. Create a Kubernetes cluster with autoscaling enabled

   ```
   openstack coe cluster create --cluster-template \
   kubernetes-v1.35.4-ardc-syd-1-calico-v2 --master-count 1 --node-count 1 \
   --labels auto_scaling_enabled=true,min_node_count=1,max_node_count=3 \
   --keypair <project key> mycluster
   Request to create cluster cae2a382-26a5-438d-bbdc-e694249bbede accepted
   ```

1. Verify status of autoscaling label

   ```
   openstack coe cluster show mycluster -c labels_added
   ```

   ```
   +--------------+--------------------------------------------------------------------------------+
   | Field        | Value                                                                          |
   +--------------+--------------------------------------------------------------------------------+
   | labels_added | {'auto_scaling_enabled': 'true', 'min_node_count': '1', 'max_node_count': '3'} |
   +--------------+--------------------------------------------------------------------------------+
   ```

1. Verify that the cluster has been created successfully

   ```
   openstack coe cluster list
   ```

   ```
   +--------------------------------------+-----------+---------+------------+--------------+--------------------+---------------+
   | uuid                                 | name      | keypair | node_count | master_count | status             | health_status |
   +--------------------------------------+-----------+---------+------------+--------------+--------------------+---------------+
   | cae2a382-26a5-438d-bbdc-e694249bbede | mycluster | xxxxxx  |          1 |            1 | UPDATE_COMPLETE    | HEALTHY       |
   +--------------------------------------+-----------+---------+------------+--------------+--------------------+---------------+
   ```

## Creating an autoscaling cluster using the Nectar Dashboard

You can also create the cluster using the Nectar Dashboard, as described in
[Creating a Cluster]({{ site.baseurl }}/kubernetes/02-create-cluster). The
dashboard cluster-creation dialog does not enable autoscaling on the
`default-worker` node group. To use autoscaling on any cluster, add a node
group with **Enable Autoscaling** ticked, as described in
[Scaling]({{ site.baseurl }}/kubernetes/04-scaling). If you need the
`default-worker` node group itself to autoscale, use the command line method
above.

## Deploying an application and testing autoscaling

1. Download the kubeconfig file and verify the cluster nodes using kubectl in accordance with the [Administering a Cluster]({{ site.baseurl }}/kubernetes/03-administer-cluster) in Kubernetes tutorial

1. Deploy an application - nginx.yaml

   ```
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: nginx-deployment
   spec:
     selector:
       matchLabels:
         app: nginx
     replicas: 3
     template:
       metadata:
         labels:
           app: nginx
       spec:
         containers:
         - name: nginx
           image: nginx:1.14.2
           ports:
           - containerPort: 80
   ```

   ```
   kubectl apply -f nginx.yaml
   ```

1. Deploy application and validate the deployment

   ```
   kubectl get deployments
   ```

   ```
   NAME               READY   UP-TO-DATE   AVAILABLE   AGE
   nginx-deployment   3/3     3            3           8m44s
   ```

   ```
   kubectl get pods
   ```

   ```
   NAME                               READY   STATUS    RESTARTS   AGE
   nginx-deployment-d556bf558-7phtc   1/1     Running   0          9m11s
   nginx-deployment-d556bf558-98d68   1/1     Running   0          9m11s
   nginx-deployment-d556bf558-shqt2   1/1     Running   0          9m11s
   kubectl get nodes
   NAME                                                STATUS   ROLES           AGE   VERSION
   mycluster-l76uten6iljx-control-plane-xlmq4          Ready    control-plane   42m   v1.35.4
   mycluster-l76uten6iljx-default-worker-4dqrj-cwmjq   Ready    <none>          39m   v1.35.4
   ```

1. Scaling up the nginx application deployment

   The number of NGINX web server replicas deployed must be carefully adjusted based on the configuration of the Kubernetes worker nodes.
   For example, in a cluster where each worker node is configured with 4 vCPUs and 8 GB of memory (m3.medium), a larger number of replicas may be
   required to saturate available resources and trigger the provisioning of additional nodes.

   ```sh
   kubectl scale deployment --replicas=120 nginx-deployment
   ```

   ```
   deployment.apps/nginx-deployment scaled
   ```

   ```
   kubectl get deployments
   ```

   ```
   NAME               READY     UP-TO-DATE   AVAILABLE   AGE
   nginx-deployment   101/120   120          101         14m
   ```

   ```
   kubectl get deployments
   ```

   ```
   NAME               READY     UP-TO-DATE   AVAILABLE   AGE
   nginx-deployment   120/120   120          120         20m
   ```

   ```
   os coe cluster list
   +--------------------------------------+-----------+---------+------------+--------------+-----------------+---------------+
   | uuid                                 | name      | keypair | node_count | master_count | status          | health_status |
   +--------------------------------------+-----------+---------+------------+--------------+-----------------+---------------+
   | cae2a382-26a5-438d-bbdc-e694249bbede | mycluster | xxxxxx  |          2 |            1 | CREATE_COMPLETE | HEALTHY       |
   +--------------------------------------+-----------+---------+------------+--------------+-----------------+---------------+
   ```

   ```
   kubectl get nodes
   ```

   ```
   NAME                                                STATUS   ROLES           AGE   VERSION
   mycluster-l76uten6iljx-control-plane-xlmq4          Ready    control-plane   51m   v1.35.4
   mycluster-l76uten6iljx-default-worker-4dqrj-br8p9   Ready    <none>          66s   v1.35.4
   mycluster-l76uten6iljx-default-worker-4dqrj-cwmjq   Ready    <none>          48m   v1.35.4
   ```

1. Scaling down the nginx application deployment

   ```sh
   kubectl scale deployment --replicas=2 nginx-deployment
   ```

   ```
   deployment.apps/nginx-deployment scaled
   ```

   ```
   kubectl get deployments
   ```

   ```
   NAME               READY   UP-TO-DATE   AVAILABLE   AGE
   nginx-deployment   2/2     2            2           37m
   ```

   ```
   kubectl get nodes
   ```

   ```
   NAME                                                STATUS   ROLES           AGE   VERSION
   mycluster-l76uten6iljx-control-plane-xlmq4          Ready    control-plane   100m   v1.35.4
   mycluster-l76uten6iljx-default-worker-4dqrj-cwmjq   Ready    <none>          97m    v1.35.4
   os coe cluster list
   +--------------------------------------+-----------+---------+------------+--------------+-----------------+---------------+
   | uuid                                 | name      | keypair | node_count | master_count | status          | health_status |
   +--------------------------------------+-----------+---------+------------+--------------+-----------------+---------------+
   | cae2a382-26a5-438d-bbdc-e694249bbede | mycluster | xxxxxx  |          1 |            1 | CREATE_COMPLETE | HEALTHY       |
   +--------------------------------------+-----------+---------+------------+--------------+-----------------+---------------+
   ```

Note: Please allow several minutes for the scale-down process to complete, as the typical duration ranges between 7 and 10 minutes.
## More information

For more information, refer to:
- [Cluster Autoscaler](https://cluster-api.sigs.k8s.io/tasks/automated-machine-management/autoscaling)
