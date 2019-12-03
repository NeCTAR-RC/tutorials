---
title: Access Remote Desktop Using X2Go Client
order: 6
duration: 5
---

The below instruction shows how to set up X2Go Client to connect to a remote virtual machine with X2Go Client installed in windows environment. For instructions in Linux and OS X, please prefer to X2Go official [website](https://wiki.x2go.org/doku.php/doc:newtox2go).

1) Double click X2Go Client icon on the desktop, or you can search it through Windows search function. You should see the below screenshot:

![X2Go Windows Client Screenshot1]({{ site.baseurl }}/assets/images/x2go/x2go-windows-client1.png)

2) You need to create a session to connect to the remote virtual machine. Click `session` menu and then click `New session` menu item. You should see the below screenshot:

![X2Go Windows Client Screenshot2]({{ site.baseurl }}/assets/images/x2go/x2go-windows-client2.png)

3) You need to provide a `Session Name`, the IP of the virtual machine (the one running MATE and X2Go Server) in `Host` field and the user account (ubuntu for Ubuntu Image, please refer to (Image Catalog[)https://support.ehelp.edu.au/support/solutions/articles/6000106269-image-catalog#username] for account in other images) in `Login` filed. In `Use RSA/DSA key for ssh connection` field, put the private key matching the public key used when launching the virtual machine in Nectar Cloud. In the `Session type` dropdown list, select `MATE` as your remote desktop. You can also select other remote desktop type if it is installed on your virtual machine. Then, click OK and you should see something like the below screenshot:

![X2Go Windows Client Screenshot3]({{ site.baseurl }}/assets/images/x2go/x2go-windows-client3.png)

4) Double click that new icon on the right hand side of X2Go window, you should see the mate desktop:

![X2Go Windows Client Screenshot4]({{ site.baseurl }}/assets/images/x2go/x2go-windows-client4.png)
