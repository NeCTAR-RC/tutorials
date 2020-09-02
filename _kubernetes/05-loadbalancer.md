---
title: Creating a Loadbalancer
order: 5
duration: 10
---

In the previous section we created a pod running an nginx webserver. Now
we need a way of to make the webserver accessible from the Internet. In the
Nectar Cloud, we can do this by creating a load balancer.

A load balancer has a public (floating) IP. Client accessing via this public IP
are redirected to one or more private addresses within the cluster.

(Note that a Magnum cluster is configured with 2 loadbalancers for cluster
management.  The loadbalancer we will be creating here is for a different
purpose.)

1. Create a yaml file to describe the configuration for your load
balancer. Save the following as `nginxservice.yaml`.

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

1. Create the loadbalancer using the yaml file:

   ```
   kubectl apply -f nginxservice.yaml
   ```

1. Run the following to see the details of the loadbalancer, and wait until
   the output shows `EXTERNAL-IP` as populated.

   ```
   kubectl get services
   ```

1. Now we need to allow network traffic to reach the loadbalancer.  If you
   do not already have a security group in your Nectar project to allow
   HTTP traffic, do the following:

   ```
   openstack security group create http
   openstack security group rule create --protocol tcp --dst-port 80 http
   ```

   Note that the above security group will allow access from all IP addresses
   on the internet.  (It is using the default network range `0.0.0.0/0`.)

1. Apply the security group to the load balancer.  The following code snippet
   provides a simple way to do it.

   ```
   EXTERNAL_IP=`kubectl get service nginxservice -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`
   PORT_ID=`openstack floating ip list --floating-ip-address $EXTERNAL_IP -c Port -f value`
   openstack port set --security-group http $PORT_ID
   ```

### More information

This is what we just did:

1. We started an external `LoadBalancer` service in Kubernetes, and directed it
   at the `nginx` pod that we created previously.

1. Kubernetes understands that it has to create this loadbalancer (externally)
   by calling out to the OpenStack Octavia loadbalancer provider.

1. The `cloud-provider-openstack` plugin in Kubernetes requests Openstack
   to create the Openstack resources to make it all work, namely: a
   floating ip address, and a load balancer, pool listener and
   members.

1. You see the loadbalancer from the Kubernetes perspective by running
   `kubectl get services`

1. You can see the resources from the Openstack perspective using the
   `openstack` command line too; e.g. `openstack floating ip list`,
   `openstack loadbalancer list` and so on.

For more information, refer to:

- [OpenStack Cloud Provider](https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#openstack)
