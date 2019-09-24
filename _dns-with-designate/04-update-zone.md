---
title: Update a Zone
order: 4
duration: 3
---

You can update the description of your zone by navigating to **Project -> DNS
-> Zones**, then selecting **Update** from the zone actions list. If you need
to update other zone settings please email
[support@nectar.org.au](mailto:support@nectar.org.au).

![Update Zone]({{ site.baseurl }}/assets/images/dns-with-designate/dns-update-zone.png)

To show the current zone settings and update the zone description using the
OpenStack command line:

```
$ openstack zone show <zone id>
+----------------+----------------------------+
| Field          | Value                      |
+----------------+----------------------------+
| action         | NONE                       |
| attributes     |                            |
| created_at     | 2018-10-26T04:45:07.000000 |
| description    | None                       |
| email          | support@nectar.org.au      |
| id             | <zone id>                  |
| masters        |                            |
| name           | qcif-test.cloud.edu.au.    |
| pool_id        | <pool id>                  |
| project_id     | <project id>               |
| serial         | 1566546364                 |
| status         | ACTIVE                     |
| transferred_at | None                       |
| ttl            | 3600                       |
| type           | PRIMARY                    |
| updated_at     | 2019-08-23T07:46:09.000000 |
| version        | 591                        |
+----------------+----------------------------+
$ openstack zone set --description "My zone description" <zone id>
+----------------+----------------------------+
| Field          | Value                      |
+----------------+----------------------------+
| action         | UPDATE                     |
| attributes     |                            |
| created_at     | 2018-10-26T04:45:07.000000 |
| description    | My zone description        |
| email          | support@nectar.org.au      |
| id             | <zone id>                  |
| masters        |                            |
| name           | qcif-test.cloud.edu.au.    |
| pool_id        | <pool id>                  |
| project_id     | <project id>               |
| serial         | 1568949376                 |
| status         | PENDING                    |
| transferred_at | None                       |
| ttl            | 3600                       |
| type           | PRIMARY                    |
| updated_at     | 2019-09-20T03:16:16.000000 |
| version        | 592                        |
+----------------+----------------------------+
```
