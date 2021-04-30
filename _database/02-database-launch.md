---
title: Create and launch a Database Instance
order: 2
duration: 15
---

## Launch a MySQL database

1. Log on to the [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
1. Navigate to the `Project` / `Database` / `Instances` page
1. Click the `Launch Instance` button to start the Create Database Instance dialog.
1. Select the appropriate Availability Zone from drop down list and supply the name `tutorial` for the `Instance Name` field. Select the latest of version of MySQL in the `Datastore` drop down list.
![Database instance dialog details tab]({{ site.baseurl }}/assets/images/database/create-database1.png)
1. Click the `Initialize Databases` tab. Enter `tutorial` in the `Initial Databases` field. Enter `admin` in `Initial Admin User` field. Enter a strong password in the `Password` field.
![Database instance dialog initialize tab]({{ site.baseurl }}/assets/images/database/create-database2.png)
1. Click `Launch` button.
1. Once the building process is finished, you should see your instance become `Active`. It is now ready to use.
![Database instance list page]({{ site.baseurl }}/assets/images/database/create-database4.png)

**Important**  
For security reasons, we *recommended* that you *either* provide a specific host IP address in the `Allowed Host` field to limit access to your database instance, *or* launch your database instance on a private network.  See the [Advanced Networking]({{site.baseurl}}/advanced-networking) tutorial for more information.
{: .callout-danger}

In the next section, you will learn how to create and restore database backups.

