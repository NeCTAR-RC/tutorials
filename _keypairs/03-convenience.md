---
title: Nectar convenience method
order: 3
duration: 3
---
Nectar can generate a keypair for you. It's easy and your Public key is automatically registered in your Nectar account.

To get your Nectar-generated key you follow these steps

1. Log on to the [Nectar Dashboard](https://dashboard.rc.nectar.org.au)
2. Navigate to `Project` / `Key Pairs` page
3. Click the "**+** Create Key Pair" button
   ![key-pairs-page]({{ site.baseurl }}/assets/images/keypairs/key-pairs-page.png)
4. In the Create Key Pair dialog, insert a meaningful name for your key and select Key type "SSH Key"
5. Click the "**+** Create Key Pair" button
   ![create-key-dialog]({{ site.baseurl }}/assets/images/keypairs/create-key-dialog.png)
6. Your Public key is now registered in the list, and your Private key is now downloaded by your browser.
   ![registered and downloaded]({{ site.baseurl }}/assets/images/keypairs/registered-and-downloaded.png)

Your browser's default download folder is not an appropriate place to store your Private key. You should store your Private key in a suitably permanent place that is only accessible to you, similar to the example below.
 {: .callout-danger}

1. In the remainder of this tutorial we will assume you have created a `.ssh/` directory in your home directory, e.g. (using your local terminal/command line)
   ```
   $ cd ~
   $ mkdir .ssh
   $ chmod 700 .ssh/
   ```
   *The first command ensures you are in your home directory. The second makes a new folder called .ssh (the dot noting it should be a hidden folder). The third command sets the correct folder permissions.*

1. Move your downloaded Private key file into your new key folder.
   ```
   $ mv ~/Downloads/<your private key file name here> ~/.ssh
   ```
   *mv is the command to move a file, with the first part being the file path of the file we want to move, and the last part, the destination (this being the ssh folder).*

1. The file access permissions on your private key file matter too. You can set the right permissions using the command
   ```
   $ chmod 600 .ssh/<your downloaded private key file name>
   ```

That's all there's to *the Nectar convenience method*.