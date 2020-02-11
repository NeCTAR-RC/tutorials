---
title: Managing a database instance
order: 3
duration: 20
---

You can manage your database instance by using its actions list. In this section, we are going to do some exercises to manage your database instances.  We are going to use the instance named `tutorial` created from the last exercise.

![Database instance action list]({{ site.baseurl }}/assets/images/database/manage-database1.png)

## Attach Configuration Group

A configuration group is used to apply database parameters. In this exercise, we are going to attach a configuration group to a database instance.

1. Navigate to the `Project | Database | Configuration Groups` page
1. Click the `Create Configuration Group` button to start the Create Configuration Group Dialog
1. Enter `tutorial_mysql` in `Name` field. Select your MySQL datastore version in the the `Datastore` drop down list.
![Configuration group dialog]({{ site.baseurl }}/assets/images/database/create-config-group2.png)
1. Click the `Create Configuration Group` button.
1. Once the configuration group is created. Click the `tutorial_mysql`.
![Configuration group list page with instance]({{ site.baseurl }}/assets/images/database/create-config-group3.png) 
1. In the configuration group details page, click the `Add Parameter` button.
![Configuration group details page]({{ site.baseurl }}/assets/images/database/create-config-group4.png) 
1. Select `auto_increment_increment` in the 'Name' drop down list and enter 10 in the `Value` field.
![Add parameter dialog]({{ site.baseurl }}/assets/images/database/create-config-group5.png)
1. Click the 'Add Parameter' button and you should see `auto_increment_increment` is listed in the `Configuration Group Detail` page.
![Parameter list page]({{ site.baseurl }}/assets/images/database/create-config-group6.png)
1. Navigate to the `Project | Database | Instances` page. Click the `Attach Configuration Group` from the actions list of your `tutorial` instance.
![Instance list page with action list]({{ site.baseurl }}/assets/images/database/create-config-group7.png)
1. In the `Attach Configuration Group` dialog, select `tutorial_mysql` from the `Configuration Group` drop down list. Note: it may be necessary to restart the database instance for this new configuration group to take effect.
![Attach Configuration Group Dialog]({{ site.baseurl }}/assets/images/database/create-config-group8.png)

## Enable Database Root Access

By default, your database has no root access. In this exercise, we are going to enable root access.

1. Navigate to the `Project | Database | Instances` page and click `Manage Root Access` from the actions list of your `tutorial` instance.
![Instance list page with action list]({{ site.baseurl }}/assets/images/database/create-config-group7.png)
1. Click the `Enable Root` button. A new root password will be generated.
![Enable Root Access Dialog]({{ site.baseurl }}/assets/images/database/enable-root-database.png)
