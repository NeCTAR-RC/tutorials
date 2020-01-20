---
title: Volume
order: 8
duration: 10
---

Volumes are one of the ways you can store data. Magnum allows Kubernetes to
use Cinder Volumes as Kubernetes Volumes, so that you can store data
persistently.

## Create Volume

1. To use a volume, it must first be created in cinder. Replace
   `--availability-zone` in the following example.

    ```
    $ openstack volume create --availability-zone melbourne-qh2 --size 1 mystorage
    +---------------------+--------------------------------------+
    | Field               | Value                                |
    +---------------------+--------------------------------------+
    | attachments         | []                                   |
    | availability_zone   | melbourne-qh2                        |
    | bootable            | false                                |
    | consistencygroup_id | None                                 |
    | created_at          | 2020-01-06T22:49:23.000000           |
    | description         | None                                 |
    | encrypted           | False                                |
    | id                  | 827fd40d-6a00-4faa-ab94-f5e7be92c5d1 |
    | multiattach         | False                                |
    | name                | mystorage                            |
    | properties          |                                      |
    | replication_status  | None                                 |
    | size                | 1                                    |
    | snapshot_id         | None                                 |
    | source_volid        | None                                 |
    | status              | creating                             |
    | type                | melbourne                            |
    | updated_at          | None                                 |
    | user_id             | 4aa047f1d39e462eb7493b1892cbd7aa     |
    +---------------------+--------------------------------------+
    ```

1. Create the following as `nginxcinder.yaml`. Replace `volumeID` with the
   volume ID from the previous command

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
		  cinder:
			# Enter the volume ID below
			volumeID: 827fd40d-6a00-4faa-ab94-f5e7be92c5d1
			fsType: ext4
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
	kubectl exec -it nginxcinder -- /bin/bash
	```

1. Use the following command to create the default index page.

	```
	echo "THIS IS MY PAGE" > /usr/share/nginx/html/index.html
	```

## Redirect loadbalancer

Direct your loadbalancer our new pod. We can do this easily by updating the label

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
		#run: nginx
		app: nginxcinder
	  type: LoadBalancer
	```

1. Run `kubectl apply -f nginxservice.yaml`

1. Refresh the URL pointing to your loadbalancer. You should now see your custom page

1. If you delete the pod and recreate it, the same content should still be available.

	```
	kubectl delete pod nginxcinder
	kubectl apply -f nginxcinder.yaml
```

## More information

For more information, refer to:

- [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/)
