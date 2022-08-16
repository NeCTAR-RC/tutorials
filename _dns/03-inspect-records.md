---
title: Inspect Zones and Recordsets
order: 3
duration: 3
---

A default DNS zone based on the allocation project name is provisioned for all
new Nectar allocations and for amended allocations. You can check that your
project has the default zone using the Nectar dashboard, by navigating to
**Project -> DNS -> Zones**.

**What is the Default Zone?**  
The default zone for a project is in the form `<project-name>.cloud.edu.au.`.
{: .callout-info}

**No DNS for PT's**  
Project trials (PT's) do not have a DNS zone.  You need an allocation in order to use Nectar DNS.
{: .callout-info}

![Zones]({{ site.baseurl }}/assets/images/dns/dns-zone-tab.png)

To list your DNS zones using the OpenStack command line:
```
$ openstack zone list
+-----------+-------------------------+---------+----------+--------+--------+
| id        | name                    | type    |   serial | status | action |
+-----------+-------------------------+---------+----------+--------+--------+
| <zone id> | myproject.cloud.edu.au. | PRIMARY | <serial> | ACTIVE | NONE   |
+-----------+-------------------------+---------+----------+--------+--------+
```

If the default zone is not listed, your project was created before the Nectar
DNS service was available. Please email
[support@nectar.org.au](mailto:support@nectar.org.au) requesting that the
default zone be added to your project.

To view the DNS record sets defined for a zone, click the zone name then the
**Record Sets** tab. Each zone has two *Nameserver* records that are
provisioned with the zone. You can add can update or delete record sets that
you have created.

![Record Sets]({{ site.baseurl }}/assets/images/dns/dns-record-set-tab.png)

To list your DNS record sets using the OpenStack command line, first use the
`openstack zone list` command to lookup the required `<zode id>`, then use:

```
$ openstack recordset list <zone id>
+-----------+---------------------------------+------+-----------------------------------------------------------------------------+--------+--------+
| id        | name                            | type | records                                                                     | status | action |
+-----------+---------------------------------+------+-----------------------------------------------------------------------------+--------+--------+
| <rec id1> | myproject.cloud.edu.au.         | SOA  | ns1.rc.nectar.org.au. support.nectar.org.au. 1566546364 3590 600 86400 3600 | ACTIVE | NONE   |
| <rec id2> | myproject.cloud.edu.au.         | NS   | ns2.rc.nectar.org.au.                                                       | ACTIVE | NONE   |
|           |                                 |      | ns1.rc.nectar.org.au.                                                       |        |        |
| <rec id3> | my-name.myproject.cloud.edu.au. | A    | 203.101.225.247                                                             | ACTIVE | NONE   |
+-----------+---------------------------------+------+-----------------------------------------------------------------------------+--------+--------+
```
