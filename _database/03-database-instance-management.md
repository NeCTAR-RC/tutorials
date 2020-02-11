---
title: Managing a database instance
order: 3
duration: 20
---

If you have an exisitng database instance, you can manage it by using its actions list.

![Database instance action list]({{ site.baseurl }}/assets/images/database/manage-database1.png)

### Resize Volume

If you think the disk szie of your database instance is not enough, you can resize its volume. 

1. Click the `Resize Volume` item from the actions list.  In the `Resize Database Volume` dialog, provide a new disk size in GB in the `New Size` field.

    ![Database Resize Volume Dialog]({{ site.baseurl }}/assets/images/database/resize-volume-database.png)

2. Click `Resize Database Volume` button.

### Upgrade Database Version

1. Click the `Upgrade Instance` item from the actions list. In the `Upgrade Database Instance` dialog, select a newer version in `New Version` list.

    ![Upgrade Database Dialog]({{ site.baseurl }}/assets/images/database/upgrade-instance-database.png)


### Attach Configuration Group

If you want to apply parameters defined in configuration group, you can attach the configuration group to the database instance.

1. Click the `Attach Configuration Group` from the actions list. In the `Upgrade Database Instance` dialog, select a configuration group from `Configuration Group` drop down list. Note: it may be necessary to reboot the database instance for this new configuration group to take effect.

    ![Attach Configuration Group Dialog]({{ site.baseurl }}/assets/images/database/attach-configuration-group-database.png)

### Enable or Disable Root Access

By default, your database has no root access. If you need root access to the database,  you can enable it.

1. Click 'Manage Root Access'  from the actions list. 
2. Click the `Enable Root` butoon. A new root password will be generated.
 
    ![Enable Root Access Dialog]({{ site.baseurl }}/assets/images/database/enable-root-database.png)
        
3. If you want to disable root access, you can click `Disable Root` from the actions list.
 
### Restart Database Instance
 
1. Click `Restart Instance` from the actions list.
 
### Delete Database Instance

1. Click `Delete Instance` from the actions list.
 