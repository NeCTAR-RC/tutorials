---
title: OpenStack Client Installation
order: 2
duration: 5
---

### install using Pip

Currently, the OpenStack client does not support Python 3.

`MacOS`

```bash
easy_install pip
pip install python-openstackclient
```

`Ubuntu or Debian`

```bash
apt install python-dev python-pip
pip install python-openstackclient
```

### install using Package
Debian and Ubuntu have client packages that can be installed without pip.

```bash
apt install python-openstackclient
```

### install individual OpenStack clients
If you want to install an individual service client because some commands are not available in OpenStack client. You can use the `pip install` command, replace the `PROJECT` name in the command using the list below.

- barbican - Key Manager Service API
- ceilometer - Telemetry API
- cinder - Block Storage API and extensions
- cloudkitty - Rating service API
- designate - DNS service API
- fuel - Deployment service API
- glance - Image service API
- gnocchi - Telemetry API v3
- heat - Orchestration API
- magnum - Container Infrastructure Management service API
- manila - Shared file systems API
- mistral - Workflow service API
- monasca - Monitoring API
- murano - Application catalog API
- neutron - Networking API
- nova - Compute API and extensions
- sahara - Data Processing API
- senlin - Clustering service API
- swift - Object Storage API
- trove - Database service API