---
title: Creating an Envoy Gateway with a static IP address
order: 2
duration: 15
---

This section presents the deployment of an Envoy Gateway configured with a static external IP address. The three steps outlined below serve
as a replacement for Step 6 in the [Installing Envoy Gateway]({{ site.baseurl }}/kubernetes/06-gateway) in Kubernetes tutorial.
Prior to proceeding, users are required to possess adequate privileges to access and operate the Nectar CLI interface.

1. Create a floating IP address via Nectar Openstack CLI interface, the network must be project floating IP network and note down the IP
address for Step 2 

   ```
   $ openstack floating ip create <network>

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

2. Create EnvoyProxy and EnvoyGateway, please use the IP address from step 1 for loadBalancerIP.

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
   apiVersion: gateway.networking.k8s.io/v1beta1
   kind: Gateway
   metadata:
     name: gateway
     namespace: envoy-gateway-system
   spec:
     gatewayClassName: eg
     infrastructure:
       parametersRef:
         group: gateway.envoyproxy.io
         kind: EnvoyProxy
         name: proxy
     listeners:
       - name: http
         protocol: HTTP
         port: 80
         allowedRoutes:
           namespaces:
             from: All# Permits routes from any namespace

   ```

   ```
   kubectl apply -f gateway.yaml
   ```

3. Confirm that the gateway uses the Step 1 external IP as its LoadBalancer IP.

   ```
   kubectl get gateway -n envoy-gateway-system
   ```

   ```
   NAME            CLASS   ADDRESS          PROGRAMMED   AGE
   gateway         envoy   160.250.232.111   True        51s
   ```

Please continue to Step 7 of the [Installing Envoy Gateway]({{ site.baseurl }}/kubernetes/06-gateway) guide to complete the tutorial

## More information

For more information, refer to:

- [Envoy Gateway](https://gateway.envoyproxy.io/)
