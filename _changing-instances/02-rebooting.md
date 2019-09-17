---
title: Rebooting
order: 2
duration: 10
---

From time to time you may find the need to reboot your instance. Whether a software install or upgrade as part of a troubleshooting task. Below are a number of ways you can reboot your instance. 

### From the `ssh` command line

You can use the Linux command `shutdown` from your `ssh` command line. During shutdown and reboot your `ssh`-connection will be broken, but after successful rebooting you can reconnect to your instance. The command for rebooting from the command line is given below:

```bash
$ sudo shutdown -r now
```



You will typically need `sudo`-elevation to use the `shutdown`-command. You ask for a reboot using the `-r` argument. And you can indicate when you want the shutdown/reboot to take place. We're using `now`.

It typically takes a minute or so for an instance to be accessible again. In this time you won't be able to connect.

An example is show here

```bash
me@local:~$ ssh debian@144.6.226.175
debian@acme-analysis:~$ sudo shutdown -r now
Connection to 144.6.226.175 closed by remote host.
Connection to 144.6.226.175 closed.
me@local:~$ ssh debian@144.6.226.175
ssh: connect to host 144.6.226.175 port 22: Connection refused
me@local:~$ ssh debian@144.6.226.175
debian@acme-analysis:~$
```



### From the instances tab

You can reboot your instances from the Nectar Dashboard Instances page. 

![Action Menu Reboot options]({{ site.baseurl }}/assets/images/changing-instances/action-menu-reboot-options.png)

Choose from *Soft Reboot Instance* and *Hard Reboot Instance*. 

> With a soft reboot, the operating system is signaled to restart, which allows for a graceful shutdown of all processes. A hard reboot is the equivalent of power cycling the server. 

### From the instance vnc-console

You can also restart the instance from the Console in the Console tab on the Instance Detail page for your instance. Use the button `Send CtrlAltDel` send the reboot request. This option is useful in the unlikely event you need [recovery options](https://support.ehelp.edu.au/support/solutions/articles/6000194010-recovery-options-when-you-cannot-access-your-instance). 

![Console Send Ctrl-Alt-Del]({{ site.baseurl }}/assets/images/changing-instances/console-send-ctrlaltdel.png)

