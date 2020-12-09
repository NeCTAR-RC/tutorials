---
title: Mount CloudStor in VM
order: 3
duration: 5
---

You have a CloudStor account and you have generated an App Password to access it from your Nectar instance. The steps below show you how to use the `cloudstor-setup` command provided by Nectar. 

1. SSH to your Nectar virtual machine via your preferred terminal software. If you're not familiar with this, we have some other [tutorials](/connecting/01-overview) for you.

2. Start the CloudStor setup by typing `cloudstor-setup` at the command prompt. 

   ```
   $ cloudstor-setup
   ```

   The `cloudstor-setup` command will re-emphasise using App Passwords to you.

3. By default the `cloudstor-setup` command will prompt you for your CloudStor `username` and `password`. Follow the prompts and paste in the username and password you generated in the previous section. You should see some output similar to this:

   ```
   $ cloudstor-setup
   This command guides you through the process of mounting your AARNet CloudStor 
   storage to your Nectar instance.
   
   
   To mount your CloudStor storage, you will be prompted for a username and 
   password. You can generate specific use 'app passwords' from the security 
   settings of your CloudStor account here:
   https://cloudstor.aarnet.edu.au/plus/settings/personal?sectionid=security
   
   PLEASE NOTE: If you snapshot this instance and share it, your CloudStor 
   app password may be exposed though the configuration file /etc/davfs2/secrets.
   For more information, please see the CloudStor setup article at: 
   https://support.ehelp.edu.au/support/solutions/articles/6000211327
   
   Press [ENTER] to continue or Ctrl+C to exit.
   
   Username: wile.c@acme.edu.au
   App password:
   Testing your CloudStor credentials... OK
   Mounting CloudStor storage... done
   Your CloudStor account has been mounted to /cloudstor
   $ 
   
   ```

4. You should now be able to work with your CloudStor data at `/cloudstor` on your virtual machine. You can use the `df` command to verify, similar to.:
   ```
   $ df -h
Filesystem                                  Size  Used Avail Use% Mounted on
...
https://cloudstor....us/remote.php/webdav/  1.1T   11G  1.0T   2% /cloudstor
   ```



The `cloudstor-setup` command can uninstall your mounted connection for you too. Use the `-h` argument for more information, e.g.

```
$ cloudstor-setup -h
```



**Note**  
The command `cloudstor-setup` is available on Nectar official images, build after 10/10/2018.
Under the hood the `cloudstor-setup` command uses software called `davfs2` to connect to your AARNet CloudStor account.
{: .callout-warning}
