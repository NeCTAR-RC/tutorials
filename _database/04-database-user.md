---
title: Manage Database Users
order: 4
duration: 15
---

In this section, we are going to manage database users.

## Create a new database user
1. Navigate to the `Project | Database | Instances` page.
![Database instance list page]({{ site.baseurl }}/assets/images/database/create-database4.png)
1. Click your `tutorial` instance and select the `Users` tab.
![Database users page]({{d site.baseurl }}/assets/images/database/edit-user-database1.png)
1. Click the `Create User` button.
1. In the `Create User` dialog, enter tutorial in the `Name` field and a strong password in the `Password` field.  Enter tutorial in the `Initial Database` field.
![Create user dialog]({{ site.baseurl }}/assets/images/database/create-user-database1.png)
1. Click the `Create User` button.
1. You should see the `tutorial` user listed.
![User tab list page]({{ site.baseurl }}/assets/images/database/create-user-database2.png)

## Edit Database User

We have a new database user `tutorial`. In this exercise, we are going to rename the user to `tutorial_renamed` and change the password.

1. Click the `Edit User` from the actions list of user `tutorial`.
1. In the `Edit User` dialog, enter tutorial_renamed in the `New Name` field and a new strong password in the `New Password` field.
![Edit  user dialog]({{ site.baseurl }}/assets/images/database/edit-user-database1.png)
1. Click `Apply Changes` button. The password has been updated and you will see that the username has been changed to `tutorial_renamed`.
![User tab list page with renamed user]({{ site.baseurl }}/assets/images/database/edit-user-database1.png)
