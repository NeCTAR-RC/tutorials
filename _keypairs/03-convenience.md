---
title: Nectar convenience method
order: 3
duration: 2
---
Nectar can generate a keypair for you. It's easy and your Public key is automatically registered in your Nectar account. You will have to ensure that your downloaded Private key file is in an appropriate and secure location on your computer.

To get your Nectar-generated key you follow these steps

1. Logon to the [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and navigate to Key Pairs page
2. Click the "**+** Create Key Pair" button
   ![key-pairs-page]({{ site.baseurl }}/assets/images/keypairs/key-pairs-page.png)
3. in the Create Key Pair dialog, insert a meaningful name for your key
2. Click the "**+** Create Key Pair" button
   ![create-key-dialog]({{ site.baseurl }}/assets/images/keypairs/create-key-dialog.png)
5. Your Public key is now registered in the list 
2. and your Private key is now downloaded by your browser.
   ![registered and downloaded]({{ site.baseurl }}/assets/images/keypairs/registered-and-downloaded.png)

Your browser's default download folder is not an appropriate place to store your Private key. You should store your Private key in a suitably permanent place that is only accessible to you. 

1. Create a folder for your Keys  in a suitably permanent place that is only accessible to you. In the remainder of this tutorial we will assume you have created a `.ssh/` directory in your home directory, e.g. (using your local terminal)
   ```bash
   $ cd ~
   $ mkdir .ssh
   ```
   
2. Move your downloaded Private key file into your new key folder.

That's all there's to *the Nectar convenience method*. 

