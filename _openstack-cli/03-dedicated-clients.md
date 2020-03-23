---
title: Using dedicated clients
order: 3
duration: 5
---

In some cases a service may not be supported by the unified OpenStack client,
or it is simply recommended to use the dedicated client which supports extra
functionality.

For example, the following services are supported by the OpenStack client, but
it is recommended to use the dedicated client instead:

- `nova` for the Compute service
- `glance` for the Image service
- `swift` for the Object Storage service

Services that require a dedicated client and are not supported by the
unified OpenStack client are:

- `gnocchi` for the Telemetry service
- `murano` for the Application Catalog service

## Installing a dedicated service client

Assuming you set up the `pip` tool from the last step, we can install a client
using the template `python-PROJECTNAMEclient` where `PROJECTNAME` is replaced
by the project name.

For example, to install the `nova` client using pip:

```
pip install python-novaclient
```
