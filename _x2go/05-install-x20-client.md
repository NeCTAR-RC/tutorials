---
title: Install X2Go Client
order: 5
duration: 10
---

After you have installed the MATE and X2Go Server, you will now install the X2Go client on your local computer.  Depending on which OS you are using, instructions will differ. Go to the instructions below for your operating system. If you have a operating system not listed here, you can find additional documentation on how to install the client on the [Official X2Go website](https://wiki.x2go.org/doku.php/doc:installation:x2goclient).


### Installation of the X2Go client on Windows

1. Download the X2Go client for Windows at the following address [X2Go Client](http://wiki.x2go.org/doku.php/doc:installation:x2goclient#ms_windows).

2. Double click the downloaded client and follow the installation wizard's steps. You may keep all default options.


### Installation of the X2Go client on Ubuntu or Debian

```bash
$ sudo apt-get update
$ sudo apt-get install x2goclient
```

You can now start X2Go Client by typing `x2goclient` at the command-line or you can find it inside the `Internet` section of your menu inside your graphical desktop environment.

### Installation of the X2Go client on Mac OS X

1. The X2go Mac client requires OS X11 server called `Xquartz`. If you don't have `Xquartz` installed, you can get it from the [Xquartz website](https://www.xquartz.org/). Download it.
2. Double click the .dmf to make its content available.
3. Drag the application from the .dmf window into /Applications to install and wait for the copy process to finish.
4. eject the .dm file and delete it.
5. Once the installation is finished, start the XQuartz server. You can find it in the spotlight search (open it with Cmd+Space), and type in `xquartz` to find it. Click on it to start.
6. In the Preferences, go to the `Security` tab and enable `allow connections from network clients`. 
7. Download the X2Go Mac client from the X2Go Mac Client [website](https://code.x2go.org/releases/binary-macosx/x2goclient/).
