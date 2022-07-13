---
title: Rebooting
order: 2
duration: 10
---

From time to time you may find the need to reboot your instance. Whether due to a software install or upgrade, or as part of a troubleshooting task. Below are a number of ways you can reboot your instance. 

### From the SSH command line

You can use the Linux command `shutdown` from your SSH command line. During shutdown and reboot your SSH-connection will be broken, but after successful rebooting you can reconnect to your instance. The command for rebooting from the command line is given below:

```
$ sudo shutdown -r now
```



You will typically need `sudo`-elevation to use the `shutdown`-command. You ask for a reboot using the `-r` argument. And you can indicate when you want the shutdown/reboot to take place. We're using "`now`".

It typically takes a minute or so for an instance to be accessible again. In this time you won't be able to connect.

An example is shown here, with #comments explaining:

```bash
me@local:~$ ssh debian@144.6.226.175   #connecting to the instance
debian@acme-analysis:~$ sudo shutdown -r now  #putting in the shutdown command
Connection to 144.6.226.175 closed by remote host. #this is the feedback saying the reboot has happened and your connection closed.
Connection to 144.6.226.175 closed.
me@local:~$ ssh debian@144.6.226.175 #this is an attempted reconnection
ssh: connect to host 144.6.226.175 port 22: Connection refused #as the instance is still rebooted connection is rebooted.
me@local:~$ ssh debian@144.6.226.175 #connection attempted again
debian@acme-analysis:~$  #success!
```

### From the instances tab

You can reboot your instances from the Nectar Dashboard Instances page.

![Action Menu Reboot options]({{ site.baseurl }}/assets/images/changing-instances/action-menu-reboot-options.png)

Choose from *Soft Reboot Instance* and *Hard Reboot Instance*.

> With a soft reboot, the operating system is signaled to restart, which allows for a graceful shutdown of all processes. A hard reboot is the equivalent of power cycling the server.

### From the instance vnc-console

You can also restart the instance from the Console. To find the console, click on the instance name you want to access it for. Then click the console tab. Use the button `Send CtrlAltDel` send the reboot request. This option is useful in the unlikely event you need [recovery options](https://support.ehelp.edu.au/support/solutions/articles/6000194010-recovery-options-when-you-cannot-access-your-instance).

![Console Send Ctrl-Alt-Del]({{ site.baseurl }}/assets/images/changing-instances/console.png)

