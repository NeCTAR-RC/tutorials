---
title: Using your Virtual Desktop
order: 3
duration: 1
---

Let's open your Desktop for the first time! Click the green `OPEN DESKTOP` button.

![Open Desktop button]({{ site.baseurl }}/assets/images/virtual-desktop-service/update_desktop_button.PNG)

Now you will see a desktop environment, with some similarities to your standard computer. There is a taskbar at the top, a menu button in the top-left corner to access applications, and folders on the desktop background.

![desktop map]({{ site.baseurl }}/assets/images/virtual-desktop-service/full-vdi.PNG)

### Finding programs

To find programs you can navigate via the menu button called `Applications` in the top left corner. You have the basics, like an Internet Browser, Terminal and Office suite.

Let's open the Terminal. It should be the second option under `Applications`.

![terminal-select]({{ site.baseurl }}/assets/images/virtual-desktop-service/select_terminal.PNG)

Once you have opened the Terminal, you can enter commands. Two good commands to know are:

```bash
sudo apt update
```

and

```bash
sudo apt upgrade
```

To understand these commands, consider their components:

- `sudo` stands for 'superuser do', and elevates you to administrator privileges.
- `apt update` tells the computer to check for updates to packages.
- `apt upgrade` tells the computer to check for upgrades and install newer versions.

If there are upgrades available, you will be asked if you want to install them, and you can respond by typing `y` into the Terminal and pressing the `Enter` key on your keyboard.

**Call Security!** 🚨  
It is good security practice to check for upgrades. You should do this each day you log into the Desktop for the first time. This ensures you have the latest Security patches. There is further information on our [Security Checklist](https://support.ehelp.edu.au/a/solutions/articles/6000253768).
{: .callout-warning}

### Copying and Pasting

Copying and pasting text between your local computer and the Virtual Desktop should work as expected. However, we are aware of a few minor anomalies:

- If you are using a Mac, use your `Commmand` key as normal when copying from your local computer, but use `Ctrl` instead when pasting to the Virtual Desktop.
- When using Firefox browser and the Neurodesktop, there are extra steps required to ensure the copy/paste function works. Instructions can be found on the [Neurodesk FAQ](https://www.neurodesk.org/docs/overview/faq/#copying-text-from-my-host-computer-and-pasting-it-inside-neurodesktop-doesnt-work-in-firefox).

### Transferring files

To transfer files from your local computer to the Virtual Desktop, drag them from your computer and drop them into the Virtual Desktop window.

When you do this, a box will appear in the bottom-right cornder with the name of your file you transferred.

![file transfer]({{ site.baseurl }}/assets/images/virtual-desktop-service/file_transfer.PNG)

**Transferring folders**  
If you want to transfer a folder from your local computer onto the Virtual Desktop, you will first need to compress it into a zipped file. To compress a folder on Mac, right-click on the folder and select `Compress`. To compress a folder on Windows, right-click on the folder and select `Send to` then select `Compressed (zipped) folder`. Once you have dragged the compressed folder onto the Virtual Desktop, you can unzip it by right-clicking on the .zip file, and selecting `Extract Here` or `Extract To...`
{: .callout-info}

Where did the file go? It doesn't matter where you drag and drop your file, whether it's to the desktop or a particular folder, it will always go to `thinclient_drives` (it acts like a USB in the file explorer).

#### Navigating to the added files

1. Open the `File System` folder on the Virtual Desktop

    ![file system]({{ site.baseurl }}/assets/images/virtual-desktop-service/file_system.PNG)

1. On the left hand side, under `Devices`, select `thinclient_drives`, then open the `GUACFS` folder.

    ![devices/thinclient]({{ site.baseurl }}/assets/images/virtual-desktop-service/thin_client_drive.png)

1. Here you should see any files or (zipped) folders you transferred.

    ![success file transferred]({{ site.baseurl }}/assets/images/virtual-desktop-service/success_file.PNG)

You can move files and folders to anywhere you want to store them on the Virtual Desktop, in the same ways you would move files on your computer. For example, you can drag and drop a file into the `Documents` folder.

**Note**  
It is important to move your files from the `GUACFS` directory into your Virtual Desktop, as this location is only for file transfer and your files are not guaranteed to persist there.
{: .callout-danger}

#### Downloading a file from the Virtual Desktop to your local computer

1. Navigate to `Devices`, `thinclient_drives`, then open the `GUACFS` folder.

1. Drag and drop your file onto the `Download` folder. This will immediately begin the download
   process within the browser.

**You're up and running!**  
Well done. You have accessed your Virtual Desktop for the first time, opened applications, and learnt how to move files back and forth. In the next [tutorial]({{ site.baseurl }}/virtual-desktop-service/04-managing-desktop) we will learn about how to manage your Virtual Desktop.
{: .callout-success}
