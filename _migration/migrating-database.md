---
title: Migrating a single Database instance 
order: 05
duration: 10
---
*The following just covers the migration of the Database instance itself.*
 {: .callout-primary}

For more information regarding migrating databases, [visit our support site](https://support.ehelp.edu.au/support/solutions/articles/6000246735-migrating-a-database).

**Steps:**
1. Disable any application services that access or update the old Database instance.
*(Note that there isn’t a way for you to "shut down" a Database instance.  Even blocking access via the database security groups will only block new connections, not connections that are already established.)*
 {: .callout-warning}

1. [Create a backup of the Database instance]({{ site.baseurl }}/database/04-database-backups).

1. [Create a new Database instance from the backup]({{ site.baseurl }}/database/04-database-backups) in the new Availability Zone.

1. Set up the new Database instance’s security groups, root access and so on to mirror the old instance.

1. Verify that everything is OK.

1. Wait.  It is advisable to keep the old Database instance for a few days in case it is needed to roll back the migration of services that depend on it.

1. Delete the old Database instance and backup.