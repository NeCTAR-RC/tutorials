---
title: Overview
order: 1
duration: 1
---

This tutorial will show you how to use Kubernetes on the Nectar Research Cloud.

### What you'll learn

- Create a Kubernetes cluster using Magnum
- Create a service using Pods
- Create a Loadbalancer to allow external access to your service
- Use a ReplicaSet for High Availability
- Scale your cluster
- Use Cinder volumes for storage

### What you'll need

- A project with the following quotas:

    - 1 x Subnet
    - 1 x Floating IP
    - 3 x Loadbalancer
    - 3 x m3.small Compute

- [python-openstackclient](https://pypi.org/project/python-openstackclient/)
- [python-heatclient](https://pypi.org/project/python-heatclient/)
- [python-magnumclient](https://pypi.org/project/python-magnumclient/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Magnum

Magnum is the project for the Container Orchestration Engine (COE) Service in
OpenStack.  In the Nectar context, the only COE framework that is tested and
supported is Kubernetes, so this tutorial will only cover topics that are
related to Kubernetes.


## Kubernetes Tutorial

Kubernetes has an extensive [documentation
site](https://kubernetes.io/docs/concepts/), which covers many of the 
concepts that we will be covering, often in greater depth than we do here.

The purpose of this tutorial is not to replace Kubernetes documention.
Rather we aim to show you how to quickly set up a Kubernetes cluster on
the Nectar Research Cloud, and how to integrate Kubernetes with native
OpenStack services like Cinder.

This tutorial uses the Openstack command-line tools rather than the
"Project > Container Infra" dashboard panels.
