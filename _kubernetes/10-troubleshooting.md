---
title: Troubleshooting
order: 10
---

## Web UI not working

Sometimes [flannel](https://coreos.com/flannel/docs/latest/), the overlay
network between the pods, does not work properly when first booted. This can
cause the Web UI to not work.

You can fix this by either:

1. Deleting all flannel pods. Kubernetes will create new ones.
   ```
   kubectl -n kube-system delete pod -l app=flannel
   ```

or

1. Restarting flannel on the affected node. Find the node running dashboard, you
   might want to `grep` for `Node:` if the output is too verbose.

   ```
   kubectl -n kube-system describe pod -l k8s-app=kubernetes-dashboard
   ```

1. Use `kubectl describe` on each of the flannel pods until you find the one that
   is running on the same node.

1. Delete that pod. Kubernetes will create a new one in its place.
