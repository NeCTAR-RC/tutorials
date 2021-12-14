---
title: OpenStack Client
order: 2
duration: 5
---

OpenStackClient is a command-line client for OpenStack that brings the command set for many services (for example, Compute, Identity, Image, Object Storage and others) together in a single shell with a uniform command structure.

The recommended method of installation is by using `pip`, but you can also install from a Linux distribution's package manager (e.g. apt with Ubuntu), but you may not get the latest version.


## Install the OpenStack Client with pip

Begin by installing the `pip` package for your operating system.

### Linux
Depending on your distrubution, the package installation method will vary.

For `Ubuntu` or `Debian`, the pip package could be installed by:
```
sudo apt install python-dev python3-pip
```

For `Red Hat Enterprise Linux`, `CentOS` or `Fedora`:
```
yum install python-devel python3-pip
```

### Mac OS
Mac OS users can use the `easy_install` tool:

```
easy_install pip
```

### Microsoft Windows
Ensure that you have enabled Windows Subsystem for Linux by typing `bash` in your Windows Terminal or Powershell first.

**Pre-req check**  
If you have not installed Windows Subsystem for Linux yet, go back to the [Overview page]({{sitebase.url}}/openstack-cli/01-overview) and do that now.
{: .callout-warning}

Now you can simply run the linux based command, and it will complete the install:

```
sudo apt install python-dev python3-pip
```

### Finally, install the OpenStack client package:
Once `pip` is set up, you can install the client package with:
```
pip install python-openstackclient
```

## Alternative: Install the OpenStack client package for your Linux distribution
It is only recommended to use this method if you are using the latest version
of your Linux distribution.

For `Ubuntu` or `Debian`, the OpenStack client package could be installed by:
```
apt install python3-openstackclient
```
