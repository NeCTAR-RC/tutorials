---
title: ssh-keygen method
order: 4
duration: 5
---

A more generic way to generate a keypair is to use the `ssh-keygen` command from the command line in your terminal. You then need to import your Public Key into Nectar for Nectar use. 

### Generating your keypair

1. You can generate the key with the command. This will run the `keygen` command with the default options which is good for us. 
   
   ```bash
   $ ssh-keygen
   ```
   `ssh-keygen` will ask you these questions. Use the default filename (i.e. `/home/<user>/.ssh/id_rsa`) and for the purpose of this tutorial you can enter an empty passphrase.
   
   ```bash
   Enter file in which to save the key (/home/<user>/.ssh/id_rsa):
   Enter passphrase (empty for no passphrase):
   Enter same passphrase again:
   ```
   For the purpose of this tutorial you can enter an empty passphrase. `ssh-keygen` generates a pair of keys in the directory `.ssh`.
   
   `overwrite (y/n)`<br/>
   If a file with the default key name already exists, `ssh-keygen` will warn you before overwriting. You should not overwrite any existing keys, unless you are absolutely certain it is not in use. Better to choose a different name.
   {: .callout-danger}
   
1. Verify that you have the files of your key pair:
   ```bash
   $ ls ~/.ssh/
   id_rsa  id_rsa.pub
   ```

A key pair is just a pair of text files. You can view the contents of your key files with any text editor. 



### Importing your Public Key into Nectar

To use your key pair with Nectar you need to *Import* your public key (`id_rsa.pub` in the example above) into Nectar. 

**Important** Make sure you import your *Public* key here, *not the private one*
{: .callout-warning}

1. in your Nectar dashboard, navigate to `Compute | Keypairs`
2. Click the `Import Public Key` button
3. In the `Import Public Key` dialog, 
   1. give your public key a **Key Pair Name** (this name doesn't need to match your key's filename or the label. You should choose a name that helps you stay meaningfully organised.)
   2. Select *SSH Key* for **Key Type** 
   3. Load your public key from your public key file (`id_rsa.pub` in our example), using the Choose File button and dialog **or**
   4. Paste the text of your public key in the **Public Key** field.
      The completed Import Public Key Dialog should look something like this
      ![import-key-completed-dialog]({{ site.baseurl }}/assets/images/keypairs/import-key-completed-dialog.png)

5. Click the `Import Public Key` button

The name of your key should now be listed in the Key Pairs page on your Nectar Dashboard. 