---
title: ssh-keygen method
order: 4
duration: 4
---

A more generic way to generate a keypair is to use the `ssh-keygen` command from the command line in your terminal. You then need to import your Public Key into Nectar for Nectar use. 

### Generating your keypair

1. Open Terminal. You will start off in your *“home”* directory. If you already had the terminal open before, make sure you are in the home directory, by simply typing
   ```bash
   $ cd ~
   ```
   
1. Now, check if you already have a directory called `.ssh`, by typing 
   ```bash
   $ ls -a
   ```
   A list of files in your home directory will be printed. If you don’t see the name `.ssh` in this list, you can create the directory using the command: 
   ```bash
   $ mkdir .ssh
   ```
   and change to this directory: 
   ```bash 
   $ cd .ssh
   ```
   
1. Now generate the key with 
   (NOTE: you should choose a much better name than "*foo-bar-blah-key*")
   ```bash
   $ ssh-keygen -t rsa -f foo-bar-blah-key
   ```
   `ssh-keygen` will ask you to 
   ```bash
   Enter passphrase (empty for no passphrase):
   ```
   For the purpose of this tutorial you can enter an empty passphrase. 
   `ssh-keygen` generates a pair of keys in the directory `.ssh`.
   
1. Verify that you have the files of your key pair:
   ```bash
   $ ls
   foo-bar-blah-key  foo-bar-blah-key.pub
   ```

A key pair is just a pair of text files. You can view the contents of your key files with any text editor. 



### Importing your Public Key into Nectar

To use your key pair with Nectar you need to *Import* your public key (`foo-bar-blah-key.pub` in the example above) into Nectar. 

**Important** Make sure you import your *Public* key here, *not the private one*
{: .callout-warning}

1. in your Nectar dashboard, navigate to `Compute | Keypairs`
2. Click the `Import Public Key` button
3. In the `Import Public Key` dialog, 
   1. give your public key a **Key Pair Name** (this name doesn't need to match your key's filename or the label. You should choose a name that helps you stay meaningfully organised.)
   2. Select *SSH Key* for **Key Type** 
   3. Load your public key from your public key file (`foo-bar-blah-key.pub` in our example), using the Choose File button and dialog **or**
   4. Paste the text of your public key in the **Public Key** field.
      The completed Import Public Key Dialog should look something like this
      ![import-key-completed-dialog]({{ site.baseurl }}/assets/images/keypairs/import-key-completed-dialog.png)

5. Click the `Import Public Key` button

The name of your key should now be listed in the Key Pairs page on your Nectar Dashboard. 