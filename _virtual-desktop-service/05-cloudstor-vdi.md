---
title: Connecting CloudStor to your Virtual Desktop
order: 5
duration: 1
---

You have data in your CloudStor account you wish to use in your Virtual Desktop. This tutorial will show you how to make your CloudStor storage accessible inside your Virtual Desktop.

NB: This tutorial was created using an Ubuntu 20.04 Virtual desktop.

1.	Log into your Virtual Desktop and locate the `ownCloud-desktop-sync-client` under the Applications / Accessories menu. You can also search for it via the start menu.

    ![menu-select]({{ site.baseurl }}/assets/images/virtual-desktop-service/menu_accessories.png)

2.	Enter the URL to CloudStor into the ownCloud connection wizard (https://cloudstor.aarnet.edu.au).

    ![enter-url]({{ site.baseurl }}/assets/images/virtual-desktop-service/owncloud_url.png)

3.	A new browser window will open to authenticate your CloudStor account. Select your institution, and enter your University/Institution `username` and `password`.

    ![enter-details]({{ site.baseurl }}/assets/images/virtual-desktop-service/aarnet_login.png)

4.	Grant permission to access to your account by clicking the button `Authorise`.

    ![authorise]({{ site.baseurl }}/assets/images/virtual-desktop-service/authenticate.png)

5.	The ownCloud connection wizard will prompt you to choose the files to sync with your Virtual Desktop and where to save them.

    ![authorise]({{ site.baseurl }}/assets/images/virtual-desktop-service/owncloud_screen.png)

6.	Dismiss the pop-up window that opens prompting you to create a `new keyring`.

7.	Close the connection wizard.

8.	You can now access data from your CloudStor account which can be found in the folder - `/home/vdiuser/ownCloud`.

    ![file-location]({{ site.baseurl }}/assets/images/virtual-desktop-service/folder_location.png)