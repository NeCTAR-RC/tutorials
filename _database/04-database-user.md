---
title: Managing Database Users
order: 4
duration: 15
---

Database user accounts can be used to control individuals' or applications' access to the databases in a Database instance.  You might do this to limit access to information, or to limit damage if someone makes a mistake or some application code goes troppo.

In this section, we are going to learn how to add, modify and remove the users for a Database instance and manage their access.

## Create a new Database User
1. Navigate to the `Project` / `Database` / `Instances` page.
![Database instance list page]({{ site.baseurl }}/assets/images/database/create-database4.png)
1. Click your "tutorial" instance and select the `Users` tab.
![Database users page]({{ site.baseurl }}/assets/images/database/edit-user-database1.png)
1. Click the `Create User` button.
1. In the `Create User` dialog, enter "tutorial" in the `Name` field and a strong password in the `Password` field.  Enter "tutorial" in the `Initial Database` field.
![Create user dialog]({{ site.baseurl }}/assets/images/database/create-user-database1.png)
1. Click the `Create User` button.
1. You should see the "tutorial" user listed.
![User tab list page]({{ site.baseurl }}/assets/images/database/create-user-database2.png)

**Note**
The "tutorial" user we just created has credentials that permit login from any IP address (assuming that this is permitted by the Database instance).  If you provide a value in the `Host` field, you can restrict the user so that they can only login from a specific machine.
{: .callout-warning}


## Editting Database User

In this exercise, we are going to rename the user to `tutorial_renamed` and change their password.

1. Navigate to the `Project` / `Database` / `Instances` page.
1. Click on the "tutorial" instance name and select the `Users` tab.
1. Click the `Edit User` from the actions list of user `tutorial`.
1. In the `Edit User` dialog, enter tutorial_renamed in the `New Name` field and a new strong password in the `New Password` field.
![Edit  user dialog]({{ site.baseurl }}/assets/images/database/edit-user-database1.png)
1. Click `Apply Changes` button. The password has been updated and you will see that the username has been changed to `tutorial_renamed`.
![User tab list page with renamed user]({{ site.baseurl }}/assets/images/database/edit-user-database1.png)

You can also modify the `Host` field this way.

## Adding and Removing Database access

A Database User is initially allowed to access databases in the `Initial Database` list.  Access to databases can be added and removed via the `Manage Access` action.

In this exercise, we are going to remove the "tutorial" user's access to the "tutorial" database.

1. Navigate to the `Project` / `Database` / `Instances` page.
1. Click on the "tutorial" instance name and select the `Users` tab.
1. Click the `Manage Access` from the actions list of user "tutorial".
1. In the `Database Access` page, look for the row for the "tutorial" database.  It should currently have "Yes" in the `Accessible` column.
1. Click the `Revoke Access` button, and the row should shortly update to say "No" in the `Accessible` column.
1. To restore access, you could then click the `Grant Access` button.
1. You can use your browser's "back" button to return to the Database Instance page. 

**Note**
The access control functionality provided by the Dashboard is a subset of that which is (typically) available using the database's command line tool.  For with the `mysql` command allows you control a user's privileges down to the level of a single database table.  Please refer to the relevant database user documentation for more details.
{: .callout-warning}

## Removing a Database User

The procedure for removing a user from a Database instance is straightforward.

1. Navigate to the `Project` / `Database` / `Instances` page.
1. Click on the "tutorial" instance name and select the `Users` tab.
1. Select the `Delete User` action for the "tutorial" user.
1. In the `Confirm Delete User` dialog, click `Delete User`.

**Caution**
Deleting a user or removing a users access to a database may have the effect of stopping an application from working if it uses the user to login.
{: .callout-warning}
