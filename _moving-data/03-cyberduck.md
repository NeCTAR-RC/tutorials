---
title: Cyberduck - Graphical apps
order: 3
duration: 6
---

Command line applications are great, and can easily be automated and scheduled using standard interfaces. Some people prefer graphical tools however to help visualise the scenarios and options for their data moving tasks. 

[Cyberduck](https://cyberduck.io) is a graphical tool for moving data. It supports a host of storage protocols We'll be using SFTP to create a connection to our instance and move copy some data there and back.

Cyberduck is one of many options for graphical data moving tools. Other popular options include FileZilla (cross platform) and WinSCP
{: .callout-warning}

When you open Cyberduck you just click the Open Connection button. In the Open Connection dialog you fill in the relevant details. Select **SFTP (SSH File Transfer Protocol)**. Enter your host IP address as **Server** (the ip address of your instance). Enter the **Username** you use to enter your instance. Select the **SSH Private Key** that you use to access your instance (you may have to browse for is using the *Choose...* button). Click **Connect**.

![Cyberduck connection dialog]({{ site.baseurl }}/assets/images/moving-data/cyberduck-create-connection.png)



We'll let you work out how to *Double click*, or *Drag-and-drop* files, *Create remote directories*, *Upload files*, *Save/Reuse session data* and *Disconnect* for yourself on your particular platform. 