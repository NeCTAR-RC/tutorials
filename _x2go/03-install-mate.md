---
title: Install Mate
order: 3
duration: 30
---

### What is MATE

The MATE is a free graphical desktop environment that runs on Linux and BSD operation systems. It is the continuation of GNOME2 desktop. MATE desktop provides an intuitive and attractive desktop environment using traditional metaphors and it feels very familiar with Microsoft Windows and Apple Mac OS. 

For more information about MATE, please refer to [MATE official website](https://ubuntu-mate.org/).

### Installation of Mate

1. Login to the virtual machine using a terminal software. Please refer to this [tutorial](/connecting/01-overview) for how to access virtual machine. In this tutorial, we use Ubuntu 19.04 as the operating system on the virtual machine.

2. Once you are connected to the virtual machine, type in command `sudo apt-update` and enter to execute the command.

    ```bash
    $ sudo apt update
    ```

3. Wait for the above command to be finished, then type in command `sudo apt install -y ubuntu-mate-desktop` and enter to execute the command. 

    ```bash
    $ suto apt install -y ubuntu-mate-desktop
    ```

4. Once a window is popped out, select the `lightdm` as the default display manager. The command will take a while to install the required packages, please wait until the installation process is finished.

    ![mate default display manager window]({{ site.baseurl }}/assets/images/x2go/x2go-default-display-manager.png)

**Note**
In this tutorial we assume you are using the Ubuntu 18.04 or above as the operating system of the virtual machine.
{: .callout-warning}