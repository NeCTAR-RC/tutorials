---
title: Loadbalancer
order: 5
duration: 10
---

In the previous section we created a pod running nginx. Now we need a way of
getting to it from the Internet. In Nectar Cloud, we can do this by creating a
load balancer.

A load balancer has a public (floating) IP. Client accessing via this public IP
are redirected to one or more private addresses within the cluster.

1 Use the following yaml to create your load balancer. Save it as
`nginxservice.yaml`.

    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: nginxservice
    spec:
      ports:
      - port: 80
        targetPort: 80
        protocol: TCP
      selector:
        run: nginx
      type: LoadBalancer
    ```

1. Run it as

   ```
   kubectl apply -f nginxservice.yaml
   ```

1. See the details of the loadbalancer. Wait until `EXTERNAL-IP` is populated.

   ```
   kubectl get services
   ```

1. Now we need to allow traffic to the loadbalancer. If you do not have a
   security group allow HTTP traffic, do the following

   ```
   openstack security group create http
   openstack security group rule create --ingress --dst-port 80 http
   ```

1. Apply the security group to the load balancer. Use the following code snippet
   to do this easily

   ```
   EXTERNAL_IP=`kubectl get service nginxservice -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`
   PORT_ID=`openstack floating ip list --floating-ip-address $EXTERNAL_IP -c Port -f value`
   openstack port set --security-group http $PORT_ID
   ```

### More information

Here is what we just did:

1. We created a pod in kubernetes with label `nginx`

1. We started an external `LoadBalancer` service in Kubernetes, and directed it
   at the pod

1. Kubernetes understands that it has to create this loadbalancer (externally)
   by calling out to the OpenStack Neutron provider.

1. The `cloud-provider-openstack` plugin in Kubernetes then create the different
   pieces that makes it all work, namely floating ip, load balancer, pool,
listener and members. These are all OpenStack resources (not k8s). It mirrors
these to the `LoadBalancer` service you see in Kubernetes when you do a `kubectl
get services`.

1. The plugin configs all of them and get the floating IP to be displayed in
   `kubectl get services`

1. This is an external load balancer (external to kubernetes), and is created in
   Neutron. You can see the loadbalancer in Neutron by doing
   ```
   neutron lbaas-loadbalancer-list
   ```

For more information, refer to:

- [OpenStack Cloud Provider](https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#openstack)
