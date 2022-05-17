---
title: Updating your application
order: 6
duration: 10
---

It is good practice to run updates frequently!

To keep the Operating System and R-Studio Application updated, you can use the Remote Desktop.

![Remote Desktop]({{ site.baseurl }}/assets/images/applications/remotedesktop.png)

Find the Terminal through the Application menu.

![terminal-menu]({{ site.baseurl }}/assets/images/applications/terminal_menu.png)

In the terminal, enter the following commands, one at a time:

```
sudo apt update
```
```
sudo apt upgrade
```

This should ensure both the Operating System is updated, as well as any of the latest packages for R-Studio.

For other applications without a remote desktop option, you can connect to your instance via [SSH]({{ site.baseurl }}/connecting/01-overview) and then enter the update commands.