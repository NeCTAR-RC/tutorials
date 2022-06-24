---
title: Using your Virtual Desktop
order: 3
duration: 1
---

Let's open your Desktop for the first time! Click the green `Open Desktop` button.

![Open Desktop button]({{ site.baseurl }}/assets/images/virtual-desktop-service/update_desktop_button.PNG)

Now you will see a desktop environment, with some similarities to what you know with your standard computer. You have a taskbar at the top, a menu button to access applications, and folders on your desktop itself.

![desktop map]({{ site.baseurl }}/assets/images/virtual-desktop-service/full-vdi.PNG)

#### Finding programs

To find programs you can navigate via the menu button called `Applications` in the top left corner. You have the basics, like an Internet Browser, Terminal and Office suite. Let's open the Terminal. It should be the second option under `Applications`.

![terminal-select]({{ site.baseurl }}/assets/images/virtual-desktop-service/select_terminal.PNG)

Once you've opened the Terminal, you can type in commands as normal. One good command to know, even if you haven't used the terminal before is:

```
sudo apt-get upgrade
```

In a nutshell, this command tells your virtual desktop two things:
- `sudo` elevates you to administrator priviledges
- `apt-get upgrade` is telling your computer to check for upgrades

If there are updates available, you will be asked if you want to install them, and you can respond with typing a `y` into the Terminal and hitting the `enter` key.

**Call Security!** 🚨  
It is good security practice to check for updates. You should do this each day you log into the Desktop for the first time. This ensures you have the latest Security patches. There is further information on our Security Guidelines [here](https://support.ehelp.edu.au/a/solutions/articles/6000253768).
{: .callout-warning}

#### Moving files

Moving files back and forth is easy! All you have to do, is drag and drop between you local computer and the Virtual Desktop window.

Try it now! Drag and Drop something to the desktop. You will see in the bottom right hand corner, a box will appear with the name of your file you transfered.

![file transfer]({{ site.baseurl }}/assets/images/virtual-desktop-service/file_transfer.PNG)

But, you may be wondering where the actual file went! Doesn't matter where you drag and drop your file, whether it's to the desktop or a particular folder, it will always go to the `thinclient_drives` first (it's like a USB in the file explorer!).

**To navigate to the files you added:**
1. Open the `File System` folder on your Desktop

    ![file system]({{ site.baseurl }}/assets/images/virtual-desktop-service/file_system.PNG)

1. On the left hand side, under `Devices`, select `thinclient_drives`, then open the `GUACFS` folder.

    ![devices/thinclient]({{ site.baseurl }}/assets/images/virtual-desktop-service/thin_client_drive.png)

1. Here you should see the file(s) you transferred.

    ![success file transferred]({{ site.baseurl }}/assets/images/virtual-desktop-service/success_file.PNG)

Now, you can move this to where ever you want to store this, for example, your `Documents` folder. You can do this any way you normally would on your computer, whether its drag and drop or copy and paste etc.

**To download a file to your local desktop:**

1. Navigate to `Devices`, `thinclient_drives`, then open the `GUACFS` folder.

1. Drag and drop your file onto the `Download` folder. This will immediately begin the download
   process within the browser.

**You're up and running!**  
Well done. You've accessed your Desktop for the first time, opened applications, and learnt how to move files back and forth. In the next [tutorial]({{ site.baseurl }}/virtual-desktop-service/04-managing-desktop) we will learn about how to manage your desktop.
{: .callout-success}
