---
title: Use X11 Forwarding in SSH Client
order: 4
duration: 5
---

After the X server is installed in your operating system, you can connect to virtual machine with X11 forwarding enabled in your SSH Client

### Linux SSH Client

1. In Linux, SSH terminal supports X11 forwarding by default, so you don't need to install anything. You can connect to your virtual machine by typing:
    ```bash
    $ ssh -i <your private key> -X username@ip address
    ```

2. After you connected to your virtual machine, you can type the below command to test whether X11 forwarding is working:
    ```bash
    $ xclock
    ```

### macOS SSH Client

1. Once X11 forwarding is setup, you can test it using the following command:
    ```bash
    ssh -i <your private key> -X username@ip address
    ```

2. After you connected to your virtual machine, you can type the below command to test whether X11 forwarding is working:
    ```bash
    $ xclock
    ```

### Windows SSH Client

In Windows, you can use putty to connect to your virtual machine with X11 forwarding enabled.

1. Open Putty and fill in the `username` and `IP address` of your virtual machine.

    ![Putty Page 1]({{ site.baseurl }}/assets/images/x11forwarding/x11-4.png)

2. Go to the `Connection` menu and click the `+` in front of `SSH` to exapnd the list. Select `X11` in the drop-down list. Tick the box `X11 forwarding`. Type `localhost:0` in `X display location`. Then click the `open` button.

    ![Putty Page 2]({{ site.baseurl }}/assets/images/x11forwarding/x11-5.png)

3. After you connected to your virtual machine, you can type the below command to test whether X11 forwarding is working:
    ```bash
    $ xclock
    ```