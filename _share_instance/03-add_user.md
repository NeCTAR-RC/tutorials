---
title: Adding additional users
order: 3
duration: 1
---

There may be times you'd prefer your colleague accessing the instance, have their own user account.
Let's do that now.

In the terminal, type in the command `useradd`, with the following parameters and the name of the new user, in this example we are creating one for jimmy:
```
sudo useradd -m -U -s /bin/bash jimmy
```
### Breaking down the command

Sudo elevates you to administrator priviledges
```
sudo
```

This is the program to create new users

```
useradd
```

Create the new users home directory if it does not exist
```
-m
```

Create a user group with the same name as the user, add the user to this group.
```
-U
```

This means we will specify the name of the user's login shell.
```
-s
```

This is specifying the type of shell we want the user to have.
```
/bin/bash
```

The last argument is the name of the new user.
```
jimmy
```
### Adding the .ssh folder

Now you need to create a `.ssh` folder for your new user, and the corresponding authorised keys file.

You need to navigate to the new users main home directory. To do this, we first need to make ourselves root user, so we have access to jimmy's folders. To do this type in:

```
sudo su
```
Navigate to jimmy's home directory:
```
cd ~jimmy
```
Now, create the .ssh folder:
```
mkdir .ssh
```
Then navigate into that folder.
```
cd .ssh
```
Now we will create the authorized_keys file
```
touch authorized_keys
```
Let's open that file and add your colleagues corresponding **public key**. This will be in a .pub file in their .ssh folder on their local computer, or can be copy pasted from the dashboard as well.

To open the authorized_keys file, we'll open this using nano.
```
nano authorized_keys
```
In the file that opens, paste the contents of the required public key, and then save it. You can do this by pressing `Ctrl + S` to save, then `Ctrl + X` to exit from Nano.

As we created this folder/file as root user, we have to hand over ownership to jimmy so he can access it. To do this, we can imput the following command:
```
sudo chown -R jimmy:jimmy ~jimmy/.ssh
```
To also ensure that only Jimmy has access, we enter this command:
```
sudo chmod 0700 ~jimmy/.ssh
```

Finally, you can exit from root user mode, using `Ctrl + D` and you will return back to your standard user mode.

To double check these folders have been handed over correctly, you can input the following command:
```
sudo ls -al /home/jimmy/.ssh/
```
And you should see the following result:
```
total 8
drwx------ 2 jimmy jimmy 4096 Apr  5 02:58 .
drwxr-x--- 4 jimmy jimmy 4096 Apr  5 02:55 ..
-rw-r--r-- 1 jimmy jimmy    0 Apr  5 02:57 authorized_keys
```

**You shall pass (log in!)**  
Now our colleague Jimmy will be able to login to his user account. Just make sure they adjust the command to log in via SSH. Of course, they need their own private key name, putting in their specific username instead of ubuntu and the IP Address of the instance you created.
 Example:
    ```
    ssh -i ~/.ssh/theirprivatekeyname jimmy@XX.XX.XX.XX
    ```
 {: .callout-info}


**Success**  
Awesome work!! Now the new user Jimmy, should be able to SSH into their newly created user account.
 {: .callout-success}