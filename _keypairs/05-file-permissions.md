---
title: A note on file permissions
order: 5
duration: 3
---

Depending on your Operating System and your `ssh` software the file access permissions on the directory `~/.ssh` and your private key file  (e.g. `~/.ssh/foo-bar-blah-key`) matter. If this is the case for your situation, you may find that your attempts to establish an ssh-connection fail, with an error message similar to  

```bash
Permissions 0666 for '.ssh/foo-bar-blah-key' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key ".ssh/foo-bar-blah-key": bad permissions
```

   

In this case you should change the *mode* of the `.ssh`-directory to 700 and the mode of the private key file to 600. You can use the `chmod` command to do this, as in the example below

```bash
$ cd ~
$ chmod 700 .ssh/
$ chmod 600 .ssh/foo-bar-blah-key
```
