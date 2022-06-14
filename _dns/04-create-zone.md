---
title: Create a Zone
order: 4
duration: 3
---

If you have your own domain from a registrar that you would like to bring
to the Nectar DNS service, you can do it either from the Dashboard, or by
using the CLI tool.

From the Dashboard, you can navigate to `Project` / `DNS` / `Zones`, and then
choose the `Create Zone` button, or if you'd prefer, the CLI command is

```
openstack zone create --email <your email> <your domain>.
+----------------+--------------------------------------+
| Field          | Value                                |
+----------------+--------------------------------------+
| action         | CREATE                               |
| attributes     |                                      |
| created_at     | 2022-06-01T06:25:34.000000           |
| description    | None                                 |
| email          | <your email>                         |
| id             | 68952d0d-e62e-40de-8080-b4654f5f4a21 |
| masters        |                                      |
| name           | <your zone>.                          |
| pool_id        | 794ccc2c-d751-44fe-b57f-8894c9f5c842 |
| project_id     | 7d23aeae28fc4105812ba5d51687b87f     |
| serial         | 1654064734                           |
| status         | PENDING                              |
| transferred_at | None                                 |
| ttl            | 3600                                 |
| type           | PRIMARY                              |
| updated_at     | None                                 |
| version        | 1                                    |
+----------------+--------------------------------------+
```

After a moment, your zone status should become `ACTIVE`. At this point
you can start to create records.

**NOTE:** 
Ensure you add a trailing dot (.) to the end of your zone when using the
Dashboard or CLI, otherwise you'll receive a ValueError.
{: .callout-warning}
