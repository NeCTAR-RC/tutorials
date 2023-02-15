---
title: FileZilla - GUI apps
order: 3
duration: 6
---

Command line applications are great, and can easily be automated and scheduled using standard interfaces. Some people prefer graphical tools (aka software).

[Filezilla](https://filezilla-project.org/) is a graphical tool for moving data. We'll be using SFTP to create a connection to our instance and move some data there and back.

Filezilla is one of many options for graphical data moving tools. Other popular options include Cyberduck (cross platform) and WinSCP
{: .callout-warning}

### Add private key
Before you connect, you need to let FileZilla know about which private key to use.
1. On the program menu, go to `edit`, then `settings`.

![Filezilla menu]({{ site.baseurl }}/assets/images/moving-data/filezilla_menu.png)

 On the left hand side, select `SFTP`, then click `add key file..`. In the window that appears, navigate to your private key file location, and click open.

2. ![menu area]({{ site.baseurl }}/assets/images/moving-data/key_select.png)

### Let's connect
Now, you can fill in the 'Quick Connection' details at the top of the main window. We have a filled in example in the screenshot as well.
1. Add your **Host** information, this is the IP address of your instance.
1. Add your **Username**, which is based on what Operating System/Image you chose at setup of your instance, in this tutorial, we chose Ubuntu, so our username is `ubuntu`. For other images' usernames, [read this article here](https://support.ehelp.edu.au/support/solutions/articles/6000106269-image-catalog#username).
1. For the **Port**, we add `22` as we are using the SSH method to connect.
1. Lastly, then click **Quick Connect**


![Quick Connect Dialog Box]({{ site.baseurl }}/assets/images/moving-data/details-filezilla.png)

If successful, you will see the file structure of your Cloud Computer on the right side. If it does not work, there will be clues in the status bar as to the error. You can also ask our friendly [digital help desk team](https://support.ehelp.edu.au/support/home) as well.

We'll let you work out how to *Double click*, or *Drag-and-drop* files, *Create remote directories*, *Upload files*, *Save/Reuse session data* and *Disconnect* for yourself on your particular platform.