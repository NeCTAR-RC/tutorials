---
title: Install X server
order: 3
duration: 5
---

For X11 forwarding in SSH to work on your computer, X server must be installed and running. The X server is a software package that manages the connection between the remote graphical application and your computer. It receives the input from your computer and renders the graphical interface. 

Most Linux has X server installed, so you really don't need to do anything. However, if your computer is running Windows or macOS, you will need to install and run an X server application.

### Installation of X server on Windows

In Windows, you can download and install `Xming` X server. For X11 forwarding to work, you will need to start `Xming` before connecting to the virtual machine with your SSH Client.

1) Download the [Xming](https://sourceforge.net/projects/xming/) to a folder and double click the installer to start the installaltion process.

![Xming Download Page]({{ site.baseurl }}/assets/images/x11forwarding/x11-1.png)

2) Following the steps in the `Xming` Setup Wizard to finish the installation.

![Xming Setup Wizard Page]({{ site.baseurl }}/assets/images/x11forwarding/x11-2.png)

3) In the `Windows Security Alert` window, click `Allow access` button to config firewall to allow `Xming` network connection. 

![Xming Firewall Alert Page]({{ site.baseurl }}/assets/images/x11forwarding/x11-3.png)

### Installation of X server on Mac

For Mac OS, download and install `XQuartz` X server. For X11 forwarding to work, you will need to start `XQuartz` first before making an SSH connection to the virtual machine. Download the [XQuartz](https://www.xquartz.org/) and install it in your Mac OS.

