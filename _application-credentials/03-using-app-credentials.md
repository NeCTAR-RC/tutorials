---
title: Using Application Credentials
order: 3
duration: 5
---

### Setting up the OpenStack client

This section builds on the setup done in the [OpenStack CLI tutorial]({{site.baseurl}}/openstack-cli/){:target="_blank"}.
You should complete at least the OpenStack client install steps from there so your
environment is ready for the steps below.

### Using the openrc file

Find where you downloaded the openrc file after generating it in the dashboard,
then use `cat` to show the contents of the `app-cred-<name>-openrc.sh` file in
your terminal.

```
$ cd ~/Downloads/
$ cat app-cred-tutorial-openrc.sh
#!/usr/bin/env bash

export OS_AUTH_TYPE=v3applicationcredential
export OS_AUTH_URL=https://keystone.rc.nectar.org.au:5000/v3/
export OS_IDENTITY_API_VERSION=3
export OS_REGION_NAME="Melbourne"
export OS_INTERFACE=public
export OS_APPLICATION_CREDENTIAL_ID=9524a12e3e8f4651b6a956ef143699e8
export OS_APPLICATION_CREDENTIAL_SECRET=<redacted>
```

This should look familiar if you've used the OpenStack CLI before, but there are
some differences from an openrc file that uses regular password authentication:

- The `OS_AUTH_TYPE` is `v3applicationcredential`.
- Instead of `OS_USERNAME` and `OS_PASSWORD`, `OS_APPLICATION_CREDENTIAL_ID` and `..._SECRET` are used.
- No project name or ID is specified - this is because an application credential is always tied to
  the particular project you created it in.

Before using your openrc file, it is recommended that you unset all other OS_* environment variables as these
can cause the authentication process to fail. You can either start a clean shell, or use the following one-liner:

```
$ for v in $(env | grep -E '^OS_' | sed 's/=.*//'); do unset $v; done
```

Then just source the openrc file:

```
$ source app-cred-tutorial-openrc.sh
```

Now you can run OpenStack client commands as usual. For example, to list the instances in your project:

```
$ openstack server list
+-------------------------+---------------+--------+-----------------------+-------------------------+-----------+
| ID                      | Name          | Status | Networks              | Image                   | Flavor    |
+-------------------------+---------------+--------+-----------------------+-------------------------+-----------+
| 8e9ea68d...71ce46bfdc50 | test2-s...    | ACTIVE | private=10.0.0.80     | fedora-atomic-latest    | m3.small  |
| 6745e9a1...ce3f01357a4c | test2-t...    | ACTIVE | private=10.0.0.142    | fedora-atomic-latest    | m3.xsmall |
+-------------------------+---------------+--------+-----------------------+-------------------------+-----------+
```


### Using the clouds.yaml file

The OpenStack client will automatically read the contents of your `clouds.yaml` file if it is located in your current working directory. You just need to tell the client which set of credentials from the file to use. In the case of your downloaded file, there will be just one set of credentials under the `openstack` key:

```
$ cd <location where you downloaded the clouds.yaml>
$ cat clouds.yaml
clouds:
  openstack:
    auth:
      <...your application credentials...>
```

To tell the client to use the credentials under `openstack`, set the OS_CLOUD environment variable to `openstack`:

```
export OS_CLOUD=openstack
```

Then you can run commands as normal:

```
$ openstack keypair list
+--------+-------------------------------------------------+
| Name   | Fingerprint                                     |
+--------+-------------------------------------------------+
| key1   | 91:67:69:a1:83:23:21:41:2f:7d:8a:b4:d6:e0:d5:9a |
+--------+-------------------------------------------------+
```


### More information

For more details about application credentials, or for information about how to use application credentials in the python-keystoneclient API, please see OpenStack's [Application Credentials User Guide](https://docs.openstack.org/keystone/train/user/application_credentials.html){:target="_blank"}.
