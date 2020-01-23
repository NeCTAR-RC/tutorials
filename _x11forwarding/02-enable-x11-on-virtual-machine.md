---
title: Enable X11 Forwarding
order: 2
duration: 5
---

There are a few changes needed on the virtual machine to enable X11 forwarding. In this tutorial we use Ubuntu 19.04. Other Linux distributions will have a very similar SSH daemon configuration. The SSH daemon configuration file is located at `/etc/ssh/sshd_config`.

1. Open the SSH daemon configuration file.
    ```bash
    $ sudo vi /etc/ssh/sshd_config
    ```

2. Locate and uncomment or change line `X11Forwarding` to be `X11Forwarding yes`. This line allows the graphical application to be forwarded over to your computer.
    ```bash
    X11Forwarding yes
    ``` 

3. Restart SSH daemon.
    ```bash
    $ service sshd restart
    ```

4. Install a graphical application `xeyes` for testing.
    ```bash
    $ apt -y install xeyes
    $ xeyes
    ```