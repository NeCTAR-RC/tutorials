---
title: Delete a Record Set
order: 7
duration: 2
---

To delete a DNS record that is no longer needed, navigate to **Project -> DNS
-> Zones**. Click the required zone from the list of zones, select the **Record
Sets** tab, then the **Delete** action for the required record set.

![Delete Record Set]({{ site.baseurl }}/assets/images/dns/dns-delete-rs.png)

Click the **Delete Record Set** button when prompted to confirm.

To delete a record set using the OpenStack command line:

```
openstack recordset delete <zone id> <rec id>
```

You can locate the required record set id and zone id using the `openstack zone
list` and `openstack recordset list` commands.
