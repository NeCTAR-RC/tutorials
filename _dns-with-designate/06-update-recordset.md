---
title: Update a Record Set
order: 6
duration: 3
---

Apart from being easier to remember than IP addresses, DNS records can also be
updated if the IP address of your instance changes. This may happen when an
instance is deleted and a new instances is launched as a replacement. You can
change the IP address using the dashboard under **Project -> DNS -> Zones**.
Click the required zone from the list of zones, select the **Record Sets** tab,
then the **Update** action for the required record set. The Update Record Set
form will open so your can change the record set.

![Update Record Set]({{ site.baseurl }}/assets/images/dns-with-designate/dns-update-rs.png)

You can change the IP address of the DNS record in the **Records** field. In
this example we set the new IP address to 203.101.225.248. If you want to
change the record name, you need to delete the record then create a new record
with the required name.

To update an existing DNS record using the OpenStack command line, get the id
of the required record set:

```
$ openstack recordset list qcif-test.cloud.edu.au.
+----------+---------------------------------+------+-----------------+--------+--------+
| id       | name                            | type | records         | status | action |
+----------+---------------------------------+------+-----------------+--------+--------+
| ...      |                                 |      |                 |        |        |
| <rec id> | my-name.qcif-test.cloud.edu.au. | A    | 203.101.225.247 | ACTIVE | NONE   |
| ...      |                                 |      |                 |        |        |
+----------+---------------------------------+------+-----------------+--------+--------+
```

Use the record set id to update the DNS record:

```
$ openstack recordset set --records 203.101.225.248 <zone id> <rec id>
+-------------+---------------------------------+
| Field       | Value                           |
+-------------+---------------------------------+
| action      | UPDATE                          |
| created_at  | 2019-08-23T05:34:59.000000      |
| description | None                            |
| id          | <rec id>                        |
| name        | my-name.qcif-test.cloud.edu.au. |
| project_id  | <project id>                    |
| records     | 203.101.225.248                 |
| status      | PENDING                         |
| ttl         | 3600                            |
| type        | A                               |
| updated_at  | 2019-08-23T07:46:04.000000      |
| version     | 2                               |
| zone_id     | <zone id>                       |
| zone_name   | qcif-test.cloud.edu.au.         |
+-------------+---------------------------------+
```

Check the record set update is complete using:

```
$ openstack recordset show <zone id> <rec id>
```
