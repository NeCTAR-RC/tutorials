---
title: Access Object Storage via the sftp-cloudfs
order: 5
duration: 15
---

### What is sftp-cloudfs

sftp-cloudfs is a SFTP server that acts as a proxy to Object Storage.  It
allows you to use any SFTP client to upload/download files or create
containers.  To see more information, please go to the
[sftp-cloudfs website](https://github.com/Memset/sftpcloudfs).

By default, the sftp-cloudfs service binds to port 8022 so that it can be
started by a non-root user.  Assuming that you run sftp-cloudfs on a Nectar
virtual machine (instance), you will need to create and attach an appropriate
Security Group to the instance to make the port accessible.

### Installation

sftp-cloudfs is developed and tested in Ubuntu and Debian Linux, and made
available via the Ubuntu and Debian package managers.  On these systems,
it can be installed by running the following command.


```bash
sudo apt install sftpcloudfs
```

Other Linux distributions do not directly support sftp-cloudfs.  However,
if you know what you are doing it can be installed from the
[source project](https://github.com/memset/sftpcloudfs) on Github or
by using `pip`.

### Setup

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

### How to use sftp-cloudfs

The executable for sftp-cloudfs is installed as `/usr/local/bin/sftpcloudfs`.

To see what options are available, you can run:
```bash
sftpcloudfs --help
```

Assuming that the configuration file contains all of the required details,
you can start the SFTP server you can typically just run:
```bash
sftpcloudfs
```

## Openstack Credentials

Before you can connect to your object storage containers via sftp-cloudfs,
you need to know your Openstack account name and password.  (The password is
NOT the password that you use to login to the Nectar Dashboard.  Rather
is normally generated using the Dashboard.)

**Your OpenStack password**
If you have already generated and saved your OpenStack password you can
skip this next step.  Note that when you generate it, the previous version
will stop working.
{: .callout-warning}


1. Log on to your [Nectar Dashboard](https://dashboard.rc.nectar.org.au).

2. Your Nectar account name is shown in the top right of the Dashboard:
   it is typically your email address.

3. Use the pulldown menu next to your account name to select the `Settings`
   page.

4. In the `Settings` menu, click the `Reset Password` menu item.

5. In the `Reset Menu Form` page, click the `Reset Password` button.

6. Copy and paste the password, and save it in a safe place.  (If you have
   a "key ring" or "password safe" application on your desktop, that would
   be place to save the password.

    ![User Settings Page2]({{ site.baseurl }}/assets/images/object-storage/object-storage-swift-python-client2.png)

Note that the Openstack password applies to all projects that you are a
member of, including your "project trial" if it is still active.

### Connecting to the SFTP Server

Once you have your credentials, you can use any sftp client to connect to the
sftp proxy server that you just set up.  To connect, you need to provide
the your Nectar account name and password as well as the name of the
Nectar project that the object storage containers are associated with.

Different SFTP clients have different ways of asking for the connection
details, and we cannot cover all of them.  However the information that
you need to supply is as follows:

- the username: project_name:account_name
- password: password
- server: the hostname or ip address of the virtual machine running
  your sftp-cloudfs service
- port: 8022

You can then use the SFTP client's commands (or GUI) to upload and download
files, create containers and folders and so on.

### Security Considerations

Access between your SFTP client and the SFTP service uses an SSH channel.

Access between the SFTP service and the Nectar Object Storage service uses
HTTPS.

Your OpenStack credentials are passed through the proxy, and the authentication
and access control decisions are made on the Openstack side.

The security concerns with using sftp-cloudfs are:

- You need to store your Openstack password securely.

- If someone is able to compromise the virtual machine where you are running
  the proxy, they could intercept your Nectar Openstack password.  It may
  therefore be preferable to install and run the proxy on your own desktop
  or laptop.

