---
title: Nectar convenience method
order: 3
duration: 3
---
Nectar can generate a keypair for you. It's easy and your Public key is automatically registered in your Nectar account. You will have to ensure that your downloaded Private key file is in an appropriate and secure location on your computer.

To get your Nectar-generated key you follow these steps

1. Logon to the [Nectar Dashboard](https://dashboard.rc.nectar.org.au)
2. Navigate to `Project` / `Key Pairs` page 
3. Click the "**+** Create Key Pair" button
   ![key-pairs-page]({{ site.baseurl }}/assets/images/keypairs/key-pairs-page.png)
4. In the Create Key Pair dialog, insert a meaningful name for your key and select Key type "SSH Key"
5. Click the "**+** Create Key Pair" button
   ![create-key-dialog]({{ site.baseurl }}/assets/images/keypairs/create-key-dialog.png)
6. Your Public key is now registered in the list, and your Private key is now downloaded by your browser.
   ![registered and downloaded]({{ site.baseurl }}/assets/images/keypairs/registered-and-downloaded.png)

Your browser's default download folder is not an appropriate place to store your Private key. You should store your Private key in a suitably permanent place that is only accessible to you.

1. Create a folder for your Keys  in a suitably permanent place that is only accessible to you. In the remainder of this tutorial we will assume you have created a `.ssh/` directory in your home directory, e.g. (using your local terminal)
   ```
   $ cd ~
   $ mkdir .ssh
   $ chmod 700 .ssh/
   ```

2. Move your downloaded Private key file into your new key folder. The file access permissions on your private key file matter too. You can set the right permissions using the command
   ```
   $ chmod 600 .ssh/<your downloaded private key>
   ```
That's all there's to *the Nectar convenience method*.

