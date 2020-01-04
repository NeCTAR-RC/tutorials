---
title: Overview
order: 1
duration: 1
---

This tutorial will show you how to use Kubernetes on Nectar Research Cloud.

### What you'll learn

- Create a Kubernetes cluster using Magnum
- Create a service using Pods
- Create a Loadbalancer to allow external access to your service
- Use a ReplicaSet for High Availability
- Scale your cluster
- Use Cinder volumes for storage

### What you'll need

- A project with the following quotas:

    - 1 x Network
    - 1 x Subnet
    - 1 x Floating IP
    - 3 x m3.small Compute

- [python-openstackclient](https://pypi.org/project/python-openstackclient/)
- [python-heatclient](https://pypi.org/project/python-heatclient/)
- [python-magnumclient](https://pypi.org/project/python-magnumclient/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Magnum

Magnum is the project for Container Orchestration Engine (COE) Service in OpenStack. It
enables you to deploy different COE such as Kubernetes, Docker Swarm and Apache
Mesos.

For the purpose of this tutorial, we will only be using Kubernetes, which is
tested and supported by Nectar. There are no restriction on using other COEs,
however they are unsupported at this point.

## Kubernetes Tutorial

Kubernetes has a great [documentation
site](https://kubernetes.io/docs/concepts/), which will cover many of the same
concepts as what we have here.

The purpose of this tutorial is not to replicate what Kubernetes have, but to
show how you can use Nectar Research Cloud to set up a Kubernetes cluster
quickly, and how to integrate native OpenStack service like Cinder into
Kubernetes.
