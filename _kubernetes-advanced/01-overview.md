---
title: Overview
order: 1
duration: 10
---

---
This tutorial will show you how to use Kubernetes on the ARDC Nectar Research Cloud. You will
learn the minimum application requirements for a Kubernetes cluster on Nectar.

### What you'll learn

- Build a sample website infrastructure
- Deploy Ingress-Nginx using Helm
- Deploy cert-manager using Helm

### What you'll need, a working Kubernetes cluster and Helm application.

- A Kubernetes cluster set up using Magnum. See [Kubernetes]({{ site.baseurl }}/kubernetes/01-overview) on
how to set up a Kubernetes Cluster on Nectar Cloud.

- [helm](https://helm.sh/docs/intro/install/)



**kubectl version skew policy** 
kubectl is officially supported within one minor version (older or newer)
of kube-apiserver. If your cluster is running 1.28.7 you should use a kubectl
between 1.27 and 1.29. See the k8s version skew policy [here.](https://kubernetes.io/releases/version-skew-policy/).
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
Rather we aim to show you how to integrate some advanced features on a  Kubernetes cluster on
the Nectar Research Cloud.

This tutorial uses Linux command-line tools rather than the "Project > Container Infra" dashboard panels.
