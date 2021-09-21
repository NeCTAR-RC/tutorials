---
title: Configuring Elasticluster
order: 2
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

*Note: we only verify and support to deploy the hadoop/spark cluster on ubuntu 18.04 image.*

```
[cloud/openstack]
provider=openstack
identity_api_version=3
auth_url=https://keystone.rc.nectar.org.au:5000/v3
project_name=<project>
username=<username>
password=<pasword>
availability_zone=<az>

[login/ubuntu]
image_user=ubuntu
image_sudo=True
user_key_name=elasticluster
user_key_private=~/elasticluster/id_rsa
user_key_public=~/elasticluster/id_rsa.pub

[cluster/hadoop]
cloud=openstack
login=ubuntu
setup=hadoop
security_group=default
image_id=1180cff1-df91-490c-92b0-2f5ee35bf2f3
flavor=m3.small
master_nodes=1
worker_nodes=2
ssh_to=master
network_ids=2c0d7721-429d-4b26-8873-d393b09cb1b3

[setup/hadoop]
provider=ansible
master_groups=hadoop_master
worker_groups=hadoop_worker
```

*Note: we can get the image_id and network_id through openstack cli commands
```
openstack image list --name "NeCTAR Ubuntu 18.04 LTS (Bionic) amd64"

openstack network show <network name>
```
