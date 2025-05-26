---
title: Overview
order: 1
duration: 10
---

This tutorial will show you how to use Kubernetes on the Nectar Research Cloud.

### What you'll learn

- Create a Kubernetes cluster using Magnum
- Administer your newly created Kubernetes cluster
- Create a service using Pods
- Use a ReplicaSet for High Availability
- Scale your cluster
- Create a Ingress to allow external access to your service
- Create a Gateway to allow external access to your service

### What you'll need

- A Nectar project with at least the [Standard Bundle](https://support.ehelp.edu.au/support/solutions/articles/6000271205)
- [Set up the OpenStack Command Line Tool - Tutorial]({{ site.baseurl }}/openstack-cli/01-overview)
- [python-openstackclient](https://pypi.org/project/python-openstackclient/)
- [python-heatclient](https://pypi.org/project/python-heatclient/)
- [python-magnumclient](https://pypi.org/project/python-magnumclient/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)


**kubectl version skew policy**  
kubectl is officially supported within one minor version (older or newer)
of kube-apiserver. If your cluster is running 1.21.1 you should use a kubectl
between 1.20 and 1.22. See the k8s version skew policy [here.](https://kubernetes.io/releases/version-skew-policy/)
{: .callout-warning}


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
