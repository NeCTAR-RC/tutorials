---
title:  Install X2Go Server
order: 4
duration: 5
---

1. In your SSH terminal, type in the following command to install the X2Go repository.

    ```bash
    $ sudo add-apt-repository ppa:x2go/stable
    ```

2. Once the command is finished. Type in the following command to update.

    ```bash
    $ sudo apt-get update
    ```

3. Install X2Go server.

    ```bash
    $ sudo apt-get install x2goserver x2goserver-xsession
    ```

4. Install X2Go MATE binding

    ```bash
    $ sudo apt-get install x2gomatebindings
    ```

For more information about how to install X2Go server on other operating systems, please refer to [install X2go Server](https://wiki.x2go.org/doku.php/doc:installation:x2goserver).

**Note**
We assume you use the Ubuntu 19.04 as the operating system of your virtual machine.
 {: .callout-warning}