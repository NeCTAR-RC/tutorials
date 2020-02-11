---
title: Manage Database Users
order: 4
duration: 15
---

We did the exercise  to manage database instance in the last section. In this section, we are going to manage database users.

### Create a new database user
1. Navigate to the `Project | Database | Instances` page.
![Database instance list page]({{ site.baseurl }}/assets/images/database/create-database4.png)
1. Click the `Instance Name` tutorial and click the `Users`tab.
![Database users page]({{ site.baseurl }}/assets/images/database/edit-user-database1.png)
1. Click 'Create User' button.
1. In the `Create User` dialog, enter tutorial in `Name` field and 123456 in `Password` field.  Enter tutorial in `Initial Database` field.
![Create user dialog]({{ site.baseurl }}/assets/images/database/create-user-database1.png)
1. Click `Create User` button.
1. You should see 2 users `admin` and `tutorial` are listed.
![User tab list page]({{ site.baseurl }}/assets/images/database/create-user-database2.png)

### Edit Database User

Now, we have a new database user `tutorial` created. In this exerciese, we are going to rename the user to `tutorial_renamed` and change the password to `654321`.

1. Click the `Edit User` from the actions list of user `tutorial`.
1. In the `Edit User` dialog, enter tutorial_renamed in the `New Name` field and 654321 in `New Password` field.
![Edit  user dialog]({{ site.baseurl }}/assets/images/database/edit-user-database1.png)
1. Click `Apply Changes` button and you should see username is changed to tutorial_renamed.
![User tab list page with renamed user]({{ site.baseurl }}/assets/images/database/edit-user-database1.png)
