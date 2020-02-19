---
title: Use Credentials in CLI
order: 4
duration: 5
---

To use application credential to run OpenStack CLI commands, set up your environment likes below:

```bash
OS_AUTH_URL=https://keystone.rc.nectar.org.au:5000/v3/
OS_AUTH_TYPE=v3applicationcredential
OS_APPLICATION_CREDENTIAL_ID=<credential id>
OS_APPLICATION_CREDENTIAL_SECRET=<credential secret>
```

It is recommended that you unset all other OS_* environment variables as these can cause problems.

For more details about application credentials, or for information about how to use application credentials in the python-keystoneclient API, please see OpenStack's [Application Credentials User Guide](https://docs.openstack.org/keystone/queens/user/application_credentials.html).