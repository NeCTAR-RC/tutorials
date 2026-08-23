---
title: Access Object Storage using rclone
order: 5
duration: 15
---

### What is rclone

"Rclone is a command-line program to manage files on cloud storage. It is a
feature-rich alternative to cloud vendors' web storage interfaces. Over 70
cloud storage products support rclone including S3 object stores, business
and consumer file storage services, as well as standard transfer protocols."

In other words, rclone is a "swiss army knife" file transfer tool, like
`rsync` but for cloud storage.  It has native support for OpenStack Swift,
which makes it a great fit for Nectar Object Storage.  Being a command-line
tool, it is well suited to scripting and automating transfers, and it works
just as well on a Nectar virtual machine as it does on your desktop or
laptop machine.

### Installation

Rclone can be downloaded and installed from the
[rclone website](https://rclone.org/downloads/), which has packages for
Linux, macOS and Windows.

If you're on Ubuntu Linux, you can install the package version of rclone:

```
sudo apt update
sudo apt install rclone
```

Note that the packaged version may be older than the version available from
the rclone website.

### Openstack Credentials

Before you can connect to your Nectar object storage containers using
rclone, you need to know your Nectar account name and OpenStack
password.  If you don't have these, follow the
[Setting up your credentials]({{ site.baseurl }}/openstack-cli/04-credentials)
tutorial first.  Alternatively, you can use an application credential;
see the [Using an Application Credential](#using-an-application-credential)
section below.

You will also need to know your Nectar project name, which is shown in the
top left of the [Nectar Dashboard](https://dashboard.rc.nectar.org.au).

### Setup

Rclone stores "storage provider" configuration information as named
"remotes" in its configuration file.  You can create a remote using the
interactive `rclone config` command, but it is quicker to add it to the
configuration file directly.

Run the following command to find where rclone expects its configuration
file:

```
rclone config file
```

Edit the configuration file (e.g. `~/.config/rclone/rclone.conf` on Linux)
and add the following section, filling in your own project name, account
name and OpenStack password:

```
[nectar]
type = swift
auth = https://identity.rc.nectar.org.au/
auth_version = 3
domain = Default
tenant = <project-name>
tenant_domain = default
user = <openstack-user>
key = <openstack-password>
```

For example, the `tenant` and `user` lines might look like:

```
tenant = myproject
user = myemail@myuniversity.edu.au
```

**Protect your configuration file**  
Your OpenStack password is stored in plain text in the rclone configuration
file, so make sure it is not readable by other users.  Rclone can also
encrypt its configuration file; see `rclone config` for details.
{: .callout-warning}

### Using an Application Credential

Instead of your account name and OpenStack password, you can authenticate
rclone with an application credential.  This is a better option for
scripted or unattended transfers: an application credential is tied to a
single project, can be limited to certain roles, can be given an expiry
date, and can be revoked at any time without affecting your other tools.

Follow the [Application Credentials tutorial]({{ site.baseurl }}/application-credentials)
to create one, then use its ID and secret in your rclone configuration:

```
[nectar]
type = swift
auth = https://identity.rc.nectar.org.au/
auth_version = 3
application_credential_id = <application-credential-id>
application_credential_secret = <application-credential-secret>
```

Note that no user, project or domain settings are needed, because an
application credential is tied to the project it was created in.

### Using an authentication file

If you have already set up an OpenStack authentication file, either the
password-based file from the
[OpenStack CLI tutorial]({{ site.baseurl }}/openstack-cli/04-credentials)
or the openrc file downloaded when creating an application credential,
you can instead tell rclone to use the environment variables from your
sourced authentication file by using this minimal configuration:

```
[nectar]
type = swift
env_auth = true
```

### Using rclone

Rclone refers to your storage using the `<remote>:<container>/<path>`
syntax, where the remote is the name we configured above (`nectar`).

To verify that your configuration works, list the containers in your
project:

```
rclone lsd nectar:
```

Create a new container:

```
rclone mkdir nectar:my-container
```

Copy a local file into the container:

```
rclone copy myfile.dat nectar:my-container
```

List the objects in the container:

```
rclone ls nectar:my-container
```

Copy an entire local directory into the container, and then back again:

```
rclone copy mydata/ nectar:my-container/mydata
rclone copy nectar:my-container/mydata mydata-restored/
```

Rclone can also synchronise a local directory to a container, making the
destination identical to the source:

```
rclone sync mydata/ nectar:my-container/mydata
```

**Take care with sync**  
The `rclone sync` command deletes files in the destination that are not
present in the source.  Use the `--dry-run` option first to see what it
would do.
{: .callout-warning}

### Upload performance

Rclone's Swift backend uploads each file as a single stream, without any
concurrency within a file.  Uploads of large files can therefore be
noticeably slower than other tools, such as the Swift command line
client, which upload the segments of a large file in parallel.

If upload performance matters, for example when transferring large
datasets, we recommend using rclone with the S3 API instead.  Rclone's
S3 backend supports concurrent multipart uploads, and is covered in the
[next page]({{ site.baseurl }}/object-storage/06-object-storage-s3) of
this tutorial.

To find more information about how to use rclone, please see the
[rclone documentation](https://rclone.org/docs/), and in particular the
[rclone Swift documentation](https://rclone.org/swift/).
