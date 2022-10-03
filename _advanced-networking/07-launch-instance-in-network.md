---
title: Launch instance in your new network
order: 7
duration: 6
---

Step 5. Attach a private network to a new instance:

In order for a compute instance to communicate on a private network it must be attached to an interface on that network. This section describes attaching a private network to an instance at instance launch time. If you already have a running instance, please see Section: Making Changes, Heading: Attaching network interface to existing compute instance.

Step 5a. From within the Launch Instance window in the dashboard select the Networking tab. Add your Private Network to Selected Networks using the + or - buttons or by dragging and dropping. We will remove the Classic Provider network in this example as we intend to use floating IP's for inbound communications and we do not require the qld-data network for communicating with RDS storage:

![img]({{ site.baseurl }}/assets/images/advanced-networking/HNsna0V3jdhxAnJetmhAYcK1nmstpzcz7g.png)

Step 5b. In the Availability Zone tab, ensure you select the Availability Zone that is local to the external network to which you connected your router:

![img]({{ site.baseurl }}/assets/images/advanced-networking/df1pXR227TyS5afj7bq3EyJw2Eranc3QDw.png)

If you use the OpenStack CLI, you can use the `--nic net-id=<NETWORK_ID>` flag when launching. For example:

```
openstack network list #Find the network UUID which we want to use when launching new instance

+--------------------------------------+-----------------------------------+----------------------------------------------------------------------------+
| ID                                   | Name                              | Subnets                                                                    |
+--------------------------------------+-----------------------------------+----------------------------------------------------------------------------+
| 00000000-0000-0000-0000-000000000000 | Classic Provider                  |                                                                            |
| 24dbaea8-c8ab-43dc-ba5c-0babc141c20e | tasmania                          | cf44c9ed-9e8b-47d8-bbc9-847801f1b3ca                                       |
| 058b38de-830a-46ab-9d95-7a614cb06f1b | QRIScloud                         | 24f7fa26-8f43-4b65-9bdf-91f99b5ae9fe                                       |
| e48bdd06-cc3e-46e1-b7ea-64af43c74ef8 | melbourne                         | b4771a97-bfb8-4e48-89af-10cf88e63a7f                                       |
| 00691b0f-69c3-444b-85ea-262dd6909052 | qld-data                          | 5783e74d-6e00-4815-a9c8-c0c54cdcf9fa                                       |
| 7b90b4df-5e64-4e50-8abd-1e1339f092fa | qh2-uom                           | 21a2e78b-483b-48a8-9bd9-770ea196acfd, d81ce7b8-c9d5-4385-b2bf-d620c59fe76f |
| 96d5e661-cdb6-4ecf-9a38-b0edda961fad | noblepark                         | fcd0ed12-d7c2-43d7-b9bd-556260072361                                       |
| e93c9d65-878a-4760-9111-c73f79115161 | queensberry                       | 25347767-e846-4e35-b60e-28931b5bdc7b, 9e354233-41b6-4437-98b1-5c4ab49d2a8a |
| 56c84852-e8b1-49f7-be67-bc0cfaec4188 | intersect-02                      | 67ab51f2-d046-42b1-9197-2b1d8ed2c5a7                                       |
| 9a284788-c0dd-4c5d-bc45-4425ad078737 | nci                               | b7e9dffe-6009-4e53-a550-5b2c19a2ac79                                       |
| e3573b3f-db78-4ab9-938f-542f7c94d0a0 | pawsey-01                         | 6af9d7da-6d48-4f6b-a255-0bd6d903ed6a                                       |
| 283e92a3-40dc-482f-bb94-9f4632c0190b | qld                               | 700efd32-2c0a-4292-a0d9-a83a1bb6fa52                                       |
| 915a3d96-693d-4c9d-a2ef-04996ab085d3 | monash-02                         | 2bdd914a-6e5f-4f34-ae19-f881be8be295                                       |
| 78dacb06-1162-454d-850c-78afd2033a38 | monash-03-internal                | 72b4520a-9e68-4b50-8e83-bb14f3443c63                                       |
| eb33feb8-027d-4d5d-8eab-69d3d6c08666 | intersect-01                      | 05341f20-ae8b-4670-9df7-171aada556db                                       |
| c9cbd99b-b6b3-49b9-b2b3-108dde0cdda6 | monash-01                         | 91bf744e-b79a-4bc5-8722-fe3569add0c0                                       |
| f0c86d08-d45b-45c4-9216-b8abd6bc133c | qh2-uom-internal                  | bc63c260-b2f6-4d57-ba03-f8fd89a35d8f                                       |
| 09ff5a87-2d4a-4e57-a474-f2d2d688bb48 | My First Network                  | 3b27e01c-d69d-4ae6-be9e-c3b61ce93b93                                       |
| 8c6b8b1f-2610-4b26-9b27-cd6db8aca397 | tas                               | 9df63d68-7a3e-4ef8-9d6b-67ae4b74c509                                       |
| 71a08d91-ea37-4e2a-834e-0b158f08a351 | tas-s                             | dc38a998-57f9-49c0-8ee3-2681afedfbd2                                       |
| bda5ae9f-e56c-43b5-a327-a81672247436 | as-tn                             | 24b0228b-341d-4ece-8450-183627affb8e                                       |
| b2719045-2cd1-4290-9ca8-9055b9df9df4 | sa-citywest                       | 03292ee8-0ae4-4d18-9c8c-708c9ecdeb09                                       |
| cba46835-45b7-43c0-a616-365302c3a634 | asm-priv-test                     | 284f4ea3-c4e9-4951-8cf1-8651a3fdc8aa                                       |
| 4d0fbec6-f9a4-4d39-9225-082716c64008 | monash-03-public                  | 8bb4e24c-538d-4604-9128-b7aab6afaaa7                                       |
+--------------------------------------+-----------------------------------+----------------------------------------------------------------------------+

openstack server create \
--flavor m2.small \
--image c8663e68-921c-4e0a-9048-d9e042a4b41f \
--key-name dl-desktop \
--security-group ssh_icmp_http_https \
--availability-zone QRIScloud \
--nic net-id=00000000-0000-0000-0000-000000000000 --nic net-id=09ff5a87-2d4a-4e57-a474-
f2d2d688bb48 \
test-instance-classic-and-private-net
```

You can refer to the **Network -> Network Topology** tab for a visual representation:

![img]({{ site.baseurl }}/assets/images/advanced-networking/kfxghe6tFQg2OxjPDwH6Zl-SxOfx0HClRA.png)
