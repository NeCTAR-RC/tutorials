---
title: Creating Envoy GatewayClass and EnovyProxy with a floating IP address
order: 2
duration: 20
---

This section describes the deployment of an Envoy GatewayClass, in which a floating IP is assigned to the EnvoyProxy
loadbalancer, operating under the default Envoy Gateway Controller Namespace Mode. The three steps outlined below serve
as a replacement for Step 5 in the [Installing Envoy Gateway]({{ site.baseurl }}/kubernetes/06-gateway) in Kubernetes tutorial.
Prior to proceeding, users are required to possess adequate privileges to access and operate the Nectar CLI interface.

1. Create a floating IP address via Nectar Openstack CLI interface, the network must be project floating IP network and note down the IP
address for Step 2

   ```
   openstack floating ip create <network>
   ```

   ```
   +---------------------+--------------------------------------+
   | Field               | Value                                |
   +---------------------+--------------------------------------+
   | created_at          | 2025-05-21T05:30:53Z                 |
   | description         |                                      |
   | dns_domain          |                                      |
   | dns_name            |                                      |
   | fixed_ip_address    | None                                 |
   | floating_ip_address | 160.250.232.111                      |
   | ...                 |                                      |
   | updated_at          | 2025-05-21T05:30:53Z                 |
   +---------------------+--------------------------------------+
   ```

1. Create EnvoyProxy and GatewayClass, please use the IP address from step 1 for loadBalancerIP.

   ```
   ---
   apiVersion: gateway.envoyproxy.io/v1alpha1
   kind: EnvoyProxy
   metadata:
     name: proxy
     namespace: envoy-gateway-system
   spec:
     provider:
       type: Kubernetes
       kubernetes:
         envoyService:
           loadBalancerIP: 160.250.232.111 # Your static IP created in step 1
   ---
   apiVersion: gateway.networking.k8s.io/v1
   kind: GatewayClass
   metadata:
     name: eg
   spec:
     controllerName: gateway.envoyproxy.io/gatewayclass-controller
     parametersRef:
       group: gateway.envoyproxy.io
       kind: EnvoyProxy
       name: proxy
       namespace: envoy-gateway-system
   ```

   ```
   kubectl apply -f gateway-class.yaml
   ```

1. Confirm that the gatewayclass and envoyprox are active and operating as expected.

   ```
   kubectl get gatewayclass
   ```

   ```
   NAME    CONTROLLER                                      ACCEPTED   AGE
   envoy   gateway.envoyproxy.io/gatewayclass-controller   True       3d10h
   ```

   ```
   kubectl describe -n envoy-gateway-system envoyproxy proxy
   ```

   ```
   Name:         proxy
   Namespace:    envoy-gateway-system
   Labels:       <none>
   Annotations:  <none>
   API Version:  gateway.envoyproxy.io/v1alpha1
   Kind:         EnvoyProxy
   Metadata:
     Creation Timestamp:  2025-08-30T18:11:35Z
     Generation:          1
     Resource Version:    190185
     UID:                 04316441-73c5-4962-b646-8dd5ad0a1625
   Spec:
     Logging:
       Level:
         Default:  warn
     Provider:
       Kubernetes:
         Envoy Service:
           External Traffic Policy:  Local
           Load Balancer IP:         160.250.232.111
           Type:                     LoadBalancer
       Type:                         Kubernetes
   Events:                           <none>
   ```
Proceed to Step 6 of the [Installing Envoy Gateway]({{ site.baseurl }}/kubernetes/06-gateway) guide to create a Gateway and HTTPRoute.
This step facilitates the successful completion of the tutorial by enabling external access to the httpd service through a NeCTAR floating IP.

## More information

For more information, refer to:

- [Envoy Gateway](https://gateway.envoyproxy.io/)
