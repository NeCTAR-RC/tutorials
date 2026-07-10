---
title: Accessing Object Storage via the S3 API
order: 6
duration: 15
---

### What is the S3 API

S3 is the object storage API popularised by Amazon Web Services.  It has
become the de facto standard interface for object storage, and is
supported by a huge range of tools, applications and software libraries.

Nectar Object Storage provides an S3-compatible API alongside the Swift
API covered in the earlier pages of this tutorial.  Authentication is
handled by the Nectar identity service (Keystone), using EC2-style
credentials that you create in your Nectar project.

**Same storage, two APIs**  
The S3 API is another way of accessing the same Nectar Object Storage.
S3 buckets correspond to the Swift containers in your project, so data
you upload via one API is accessible via the other.
{: .callout-info}

### Creating EC2 Credentials

The S3 API does not use your OpenStack username and password directly.
Instead, it uses EC2-style credentials, which consist of an access key
and a secret key, tied to your user and project.

To create EC2 credentials, you use the OpenStack command line client.
If you don't have it set up, follow the
[OpenStack CLI tutorial]({{ site.baseurl }}/openstack-cli) first, making
sure you have sourced your authentication file for the right project.

Create a new EC2 credential:

```
openstack ec2 credentials create
```

The output will include the two values you need, `access` and `secret`:

```
+------------+----------------------------------+
| Field      | Value                            |
+------------+----------------------------------+
| access     | ef1f1c199dca4c3b9b52e5ee34b71549 |
| project_id | 0123456789abcdef0123456789abcdef |
| secret     | 3d3e9e295b2d47b9a58f6e91b7f31c78 |
| ...        | ...                              |
+------------+----------------------------------+
```

Copy the access and secret values and save them in a safe place, such as
a password manager.

You can list your existing EC2 credentials at any time:

```
openstack ec2 credentials list
```

**Keep your secret key secret**  
Anyone who has your access and secret keys can read and write data in
your project's S3 storage.  If you think your keys have been exposed,
delete them with `openstack ec2 credentials delete <access-key>` and
create a new pair.
{: .callout-warning}

### Using the S3 API with rclone

The [rclone tutorial]({{ site.baseurl }}/object-storage/05-object-storage-rclone)
covered installing rclone and using it with Swift.  Using it with the S3
service just requires a different remote configuration.

Edit your rclone configuration file (see `rclone config file` for its
location) and add the following section, filling in your access and
secret keys:

```
[nectar_s3]
type = s3
provider = Other
endpoint = https://object-store.rc.nectar.org.au
access_key_id = <access-key>
secret_access_key = <secret-key>
```

**Remote naming**  
We use an underscore rather than a hyphen in the remote name, because
rclone configuration values can be overridden with environment variables
(e.g. `RCLONE_CONFIG_NECTAR_S3_ACCESS_KEY_ID`) and hyphens are not valid
in environment variable names.
{: .callout-info}

You can now use the same rclone commands as in the previous page, with
S3 buckets corresponding to your Swift containers:

```
rclone mkdir nectar_s3:my-bucket
rclone copy myfile.dat nectar_s3:my-bucket
rclone ls nectar_s3:my-bucket
rclone lsd nectar_s3:
```

Unlike rclone's Swift backend, the S3 backend supports concurrent
multipart uploads, which can make a big difference when uploading large
files.  You can tune this with the `--s3-upload-concurrency` and
`--s3-chunk-size` options, for example:

```
rclone copy mydata/ nectar_s3:my-bucket --s3-upload-concurrency 8 --s3-chunk-size 16M
```

Alternatively, you can set these permanently in the remote's
configuration by adding `upload_concurrency = 8` and `chunk_size = 16M`
lines to the `[nectar_s3]` section.

### Using the S3 API with other tools

Most tools and libraries that speak S3 will work with the Nectar S3
service.  You just need to provide your access and secret keys, and
override the default (Amazon) endpoint with the Nectar endpoint.

For example, with the [AWS command line client](https://aws.amazon.com/cli/),
run `aws configure` to store your access and secret keys, then pass the
Nectar endpoint on the command line:

```
aws --endpoint-url https://object-store.rc.nectar.org.au s3 ls
aws --endpoint-url https://object-store.rc.nectar.org.au s3 cp myfile.dat s3://my-bucket/
```

Graphical tools work too.  For example, in Cyberduck you can open a new
connection using the `Amazon S3` profile, with the server set to
`object-store.rc.nectar.org.au` and your access and secret keys as the
username and password.

Note that not every S3 feature is available; for details of what is
supported, see the
[Swift S3 API compatibility documentation](https://docs.openstack.org/swift/latest/s3_compat.html).
