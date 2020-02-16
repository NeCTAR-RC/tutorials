---
title: Access Object Storage via the sftp-cloudfs
order: 3
duration: 15
---

### What is sftp-cloudfs

sftp-cloudfs is a sftp server acting as a proxy to Object Storage. You can use any sftp client to upload/download files or create containers. To see more information, please go to [sftp-cloudfs website](https://github.com/Memset/sftpcloudfs).

By default, sftp-cloudfs server will bind to port 8022 which allow to be run as a non-root users. You need to make sure a proper securty group is assigned to the Virtual Machine to open the required port.

sftp-cloudfs is developed and tested in Ubuntu and Debian Linux and we will use Virtual Machine with Ubuntu 19.04 to demonstrate.  Login to your Virtual Machine.

### Install

```bash
sudo apt install sftpcloudfs
```

### Setup

The default configuration file is located at `/etc/sftpcloudfs.conf`and the below are the relevant lines required to change.

```shell
host-key-file = /etc/ssh/ssh_host_rsa_key
bind-address = 0.0.0.0
auth-url = https://keystone.rc.nectar.org.au:5000/v3/
keystone-auth = yes
keystone-auth-version = 3.0
keystone-region-name = Melbourne
keystone-tenant-separator =  :
```

### How to use sftp-cloudfs

After the installation is completed, a file located at `/usr/local/bin/sftpcloudfs` should be created which can be used like this:

Usage: sftpcloudfs [options]

To see what options are available, you can execute:
```bash
sftpcloudfs --help
```

to start the SFTP server:
```bash
sftpcloudfs
```
## Set up Login Credentials

Before you can connect, you neeed to setup the login details.

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Click your email address on the top left cornor and and click `Settings` in the same drop down menu get into the `Settings` page. Then click the `Reset Password` item to get your password.

    ![User Settings Page2]({{ site.baseurl }}/assets/images/object-storage/object-storage-swift-python-client2.png)


### Connect to SFTP Server
Once you have obtained your password, you can use any sftp client to connect to the sftp server. To connect, you need to have the following information:

username: project_name:email
password: password
server: ip address of your virtual machine