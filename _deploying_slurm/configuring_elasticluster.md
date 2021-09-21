---
title: Configuring ElastiCluster
order: 3
duration: 1
---

Create template configuration files for ElastiCluster:
```
elasticluster list-templates 1> /dev/null 2>&1
```


Create SSH key for the cluster:
```
ssh-keygen -t rsa -b 4096 -f ~/elasticluster/id_rsa
```


Edit the ElastiCluster configuration file (~/.elasticluster/config). A sample configuration file compatible with the Nectar Cloud is provided below:

*Note: we only verify and support to deploy the slurm cluster on ubuntu 18.04 image.*

```
[cloud/openstack]
provider=openstack
identity_api_version=3
auth_url=https://keystone.rc.nectar.org.au:5000/v3
project_name=<openstack_project_name>
username=<openstack_username>
password=<openstack_password>
availability_zone=<openstack_availability_zone>
 
[login/ubuntu]
image_user=ubuntu
image_sudo=True
user_key_name=elasticluster
user_key_private=~/elasticluster/id_rsa
user_key_public=~/elasticluster/id_rsa.pub
 
[cluster/slurm]
cloud=openstack
login=ubuntu
setup=slurm
security_group=default
image_id=1180cff1-df91-490c-92b0-2f5ee35bf2f3
flavor=m3.small
frontend_nodes=1
compute_nodes=2
ssh_to=frontend
network_ids=2c0d7721-429d-4b26-8873-d393b09cb1b3
 
[setup/slurm]
provider=ansible
master_groups=slurm_master
worker_groups=slurm_worker
```

