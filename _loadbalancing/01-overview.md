---
title: Overview
order: 1
duration: 1
---

The Nectar Research Cloud supports Load Balancer-as-a-Service (LBaaS) for
projects.

Conceptually, a load balancer is a service that accepts client requests
and then directs those requests on to servers within a pool that are able to
satisfy that request.

When building scalable web architectures, load balancing are especially useful
for fault tolerance by mitigating bottlenecks by allowing the load to spread
across multiple backend servers and to be able to direct the requests to only
servers that are deemed as *healthy*.

In this tutorial, we will explore the Nectar Research Cloud's **Load Balancer
service** and create a simple, scalable web architecture.

**Advanced networking concepts**  
This tutorial relies on pre-requisite knowledge of some advanced networking
concepts. It is highly recommended that you complete the
[Advanced Networking]({{site.baseurl}}/advanced-networking) tutorial before
this one.
{: .callout-warning}

If you wish to use the Load Balancing service, you'll need to apply for
`Load Balancer` and `Floating IP` quota for your project. This can be done
through the Nectar Research Cloud Dashboard, under the Allocations section for
either new projects or as an amendment of requirements for existing projects.

### What you'll learn

- Concepts of load balancing
- How to create a simple, scalable web architecture

### What you'll need

- A project with `Load Balancer` and `Floating IP` quota
- OpenStack command line tools installed for your platform 
