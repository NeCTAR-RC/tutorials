---
title: Creating and Deleting Databases
order: 6
duration: 10
---

As we saw earlier, you can specify a list of initial databases to create when launching a new Database Instance.  The Dashboard provides a simple way to add more databases, or remove them.  (You can also create and delete databases using the database's native tools.)

## Create a new Database

In this exercise, we are going to create a new database called `tutorial_new` in an existing Database instance.

1. Navigate to the `Project` / `Database` / `Instances` page.
1. Click the database instance name `tutorial`.
1. Click the `Databases` tab.
![Create database tab page]({{ site.baseurl }}/assets/images/database/new-database1.png)
1. Click `Create Database` button
1. Enter `tutorial_new` in the `Name` field.
![Create database dialog]({{ site.baseurl }}/assets/images/database/new-database2.png)
1. Click `Create Database` button.
1. You should see database `tutorial_new` has been created and is listed in the page.
![Create database tab page with new database]({{ site.baseurl }}/assets/images/database/new-database3.png)

## Delete an existing Database

In this exercise, we are going to delete the `tutorial_new` database that we just created.

1. Navigate to the `Project` / `Database` / `Instances` page.
1. Click the database instance name `tutorial`.
1. Click the `Databases` tab.
1. Find the row for the `tutorial_new` database which we created above.
1. Click the `Delete Database` button.
1. In the `Confirm Delete Database` dialog, click the `Delete Database` button.
1. The page will refresh to show that the database has gone.

