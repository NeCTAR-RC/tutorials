---
title: Volume
order: 9
duration: 10
---

Volumes are one of the ways you can store data. Magnum allows Kubernetes to
use Cinder Volumes as Kubernetes Volumes, so that you can store data
persistently.

## Create a StorageClass

1. Create a default
   [StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/).
You only need to do this once per cluster. This defines which availability zone
you want to create volumes in. Remember to replace `<availability-zone>` with
the availability zone where you have volume quota. Create the following as
`storageclass.yaml`.

   ```
   apiVersion: storage.k8s.io/v1
   kind: StorageClass
   metadata:
     name: default
     annotations:
       storageclass.kubernetes.io/is-default-class: "true"
   parameters:
     availability: <availability-zone>
   provisioner: cinder.csi.openstack.org
   ```

1. Apply the yaml

   ```
   kubectl apply -f storageclass.yaml
   ```


## Create a PersistentVolumeClaim

1. Create a
   [PersistentVolumeClaim](https://kubernetes.io/docs/concepts/storage/persistent-volumes/).
On Nectar Cloud, this creates a volume backed by Cinder. Create the following as
`myvol.yaml`.

   ```
   kind: PersistentVolumeClaim
   apiVersion: v1
   metadata:
     name: myvol
     namespace: default
   spec:
     accessModes:
     - ReadWriteOnce
     resources:
       requests:
         storage: 3Gi
   ```

1. Apply the yaml

   ```
   kubectl apply -f myvol.yaml
   ```


## Create a Pod

1. Create a nginx Pod that uses the PVC as a persistent volume. Create the
   following as `nginxcinder.yaml`.

   ```
   apiVersion: v1
   kind: Pod
   metadata:
     name: nginxcinder labels:
       app: nginxcinder
   spec:
     containers:
       - name: nginxcinder
         image: nginx
         volumeMounts:
           - name: html-volume
             mountPath: "/usr/share/nginx/html"
     volumes:
       - name: html-volume
         persistentVolumeClaim:
           claimName: myvol
   ```

1. Apply the yaml

   ```
   kubectl apply -f nginxcinder.yaml
   ```

## Writing index page for nginx

In the previous example, we have mounted a blank new volume to our pod.

Now, we want to write data to volume for nginx to service.

1. Open up a shell to the pod

   ```
   kubectl exec -it pod/nginxcinder -- /bin/bash
   ```

1. Use the following command to create the default index page.

   ```
   root@nginxcinder:/# echo "THIS IS MY PAGE" > /usr/share/nginx/html/index.html
   ```

1. Exit the pod cli

   ```
   root@nginxcinder:/# exit
   ```

## Redirect loadbalancer

Direct your loadbalancer our new pod. We can do this easily by updating the label.

1. Edit `nginxservice.yaml` and make the following changes

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
       #run: webserver
       app: nginxcinder
     type: LoadBalancer
   ```

1. Run `kubectl apply -f nginxservice.yaml`

1. Refresh the URL pointing to your loadbalancer. You should now see your custom page

## Checking for persistency

1. If you delete the pod and recreate it, the same content should still be
   available. This shows that the volume is not tied to the lifetime of the pod.

   ```
   kubectl delete pod nginxcinder
   kubectl apply -f nginxcinder.yaml
   ```

## More information

For more information, refer to:

- [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/)
