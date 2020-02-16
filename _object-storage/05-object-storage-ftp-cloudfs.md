---
title: Setting up a sftp-cloudfs proxy service
order: 5
duration: 15
---

## What is sftp-cloudfs

sftp-cloudfs is a SFTP server that acts as a proxy to Object Storage.  It
allows you to use any SFTP client to upload/download files or create
containers.  To see more information, please go to the
[sftp-cloudfs website](https://github.com/Memset/sftpcloudfs).

## Installation and setup

sftp-cloudfs is developed and tested in Ubuntu and Debian Linux, and made
available via the Ubuntu and Debian package managers.  On these systems,
it can be installed by running the following command.


```
sudo apt install sftpcloudfs
```

Other Linux distributions do not directly support sftp-cloudfs.  However,
if you know what you are doing it can be installed from the
[source project](https://github.com/memset/sftpcloudfs) on Github or
by using `pip`.

### Configuration

The default configuration file is located at `/etc/sftpcloudfs.conf`.  To
use sftpcloudfs with Nectar object storage, the following lines in the
configuration file need to be changed.  (This will require root access.)
  
```shell
host-key-file = /etc/ssh/ssh_host_rsa_key
bind-address = 0.0.0.0
auth-url = https://keystone.rc.nectar.org.au:5000/v3/
keystone-auth = yes
keystone-auth-version = 3.0
keystone-region-name = Melbourne
keystone-tenant-separator =  :
```

### Security Group changes

The sftp-cloudfs service defaults to using port 8022:

- The standard port for the SSH / SCP / SFTP protocols is port 22, but
  that will usually be bound to your system's SSH service.
- Port 8022 is in the range that can be bound by a non-privileged
  application.

Assuming that you run sftp-cloudfs on a Nectar virtual machine (instance),
you will need to update the instance's Security Group so that port 8022
is accessible from the IP addresses or networks where will be running
the SFTP client.

### Running the sftp-cloudfs service

The executable for sftp-cloudfs is installed as `/usr/local/bin/sftpcloudfs`.

To see what options are available, you can run:
```
sftpcloudfs --help
```

Assuming that the configuration file contains all of the required details,
you can start the SFTP server you can typically just run:
```
sftpcloudfs
```

## Using the sftp-cloudfs proxy

### Openstack Credentials

Before you can connect to your object storage containers via sftp-cloudfs,
you need to know your Openstack account name and password.  Please refer
to the previous lesson for details.

### Connecting to the SFTP proxy

Once you have your credentials, you can use any SFTP client to connect to
your SFTP proxy service.  You need to provide your Nectar credentials as
well as the name of the Nectar project that owns the object storage you
are trying to access.

Different SFTP clients have different ways of asking for the connection
details, and we cannot cover all of them.  However the information that
you need to supply is as follows:

- The username: `<project_name>:<account_name>` where `<project_name>` is
  the Nectar project name, and `<account_name>` is your Openstack password.
  For example: `dhd-sandpit:davey.crocket@unimelb.edu.au`
- The password: your Openstack password.
- The SFTP server: the hostname or ip address of the virtual machine running
  your sftp-cloudfs proxy.
- The port number: 8022.  Note that this is not the default STFP port.

You can then use the SFTP client's commands (or GUI) to upload and download
files, create containers and folders and so on.

## Security Considerations

Access between your SFTP client and the SFTP service uses an SSH channel.

Access between the SFTP service and the Nectar Object Storage service uses
HTTPS.

Your OpenStack credentials are passed through the proxy, and the authentication
and access control decisions are made on the Openstack side.

The security concerns with using sftp-cloudfs are as follows:

- You need to store your Openstack password securely.  (But this is not
  specific to this application.)

- If someone is able to compromise the virtual machine where you are running
  the proxy, they could intercept your Nectar Openstack password.  It may
  therefore be preferable to install and run the proxy on your own desktop
  or laptop.

- The proxy allows anyone who has access to port 8022 to try to guess your
  credentials.  So it is *advisable* to restrict access to the IP / port
  to trusted hosts and / or only run the proxy when you *need to* use it.

