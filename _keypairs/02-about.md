---
title: About keys and Nectar
order: 2
duration: 4
---

A Public-Private keypair is used in the Nectar instead of a password, to log on to any Virtual Machine (VM) you launch in Nectar.

**Note**  
Some institutions offer [Windows OS support](https://support.ehelp.edu.au/support/solutions/articles/6000245786-summary-of-support-for-windows-instances-by-nectar-cloud-nodes), and if you're using this, there may be integration with institutional log in mechanisms (which vary). If unsure, best to contact the Help Desk.
{: .callout-primary}

A Public-Private keypair is a pair of files, your **Private key** and your **Public key**. They uniquely belong to each other (just like a lock and key). Your Private key file is yours, and yours alone (just like your car or house keys!). You should securely store it on a location on your computer that is only accessible to you.  Your Public key can be used to authorise and authenticate you in a remote computer account.

**Important**
Keep your Private key *private and secure*
{: .callout-danger}

When you launch an instance, Nectar places the Public key from your Nectar account into your VM for you. This way you can use SSH to connect to your VM using the three essential connection elements:
1. Computer's IP address
1. The user account,
1. The private key that is securely stored on your computer.

On the next pages you will learn two ways of obtaining a keypair for use with Nectar.
