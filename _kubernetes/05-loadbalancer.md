---
title: Creating a Loadbalancer
order: 5
duration: 10
---

In the previous section we created a pod running an nginx webserver. Now
we need a way to make the webserver accessible from the Internet. In the
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
       run: webserver
     type: LoadBalancer
   ```

1. Create the loadbalancer using the yaml file:

   ```
   $ kubectl apply -f nginxservice.yaml
   service/nginxservice created
   ```

1. Run the following to see the details of the loadbalancer, and wait until
   the output shows `EXTERNAL-IP` as populated.

   ```
   $ kubectl get services
   NAME           TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
   nginxservice   LoadBalancer   10.254.210.248   103.6.252.244   80:31086/TCP   5m
   ```

   Tip: If you use the `-w` flag with any `kubectl get` command, it will watch for changes
   from the server and print out status updates as they happen.

1. Verify that the webserver is accessible.  From your browser, visit the IP
   in the `EXTERNAL-IP` field. You should see the default nginx page.

### More information

This is what we just did:

1. We started an external `LoadBalancer` service in Kubernetes, and directed it
   at the `webserver` pod that we created previously.

1. Kubernetes created the loadbalancer (externally) by calling out to the
   OpenStack loadbalancer provider plugin.

1. The plugin sent Openstack requests to create the resources to make it all
   work, namely: a floating ip address, a security group, and a load balancer,
   pool listener and members.

1. We observed what had been set up:

   - You can see the loadbalancer from the Kubernetes perspective by running
     `kubectl get services`

   - You can also see the resources from the Openstack perspective using the
     `openstack` command line; e.g. `openstack floating ip list`,
     `openstack loadbalancer list` and so on.

1. Finally, we checked that the loadbalancer was working using a web browser.

For more information, refer to:

- [OpenStack Cloud Provider](https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#openstack)
