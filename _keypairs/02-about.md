---
title: About keys and Nectar
order: 2
duration: 4
---

A Public-Private keypair is used in the Nectar instead of a password, to log on to any Virtual Machine (VM) you launch in Nectar. You will learn more about Launching and `ssh`-connecting in other tutorials. 

Before you get to that, you need to have a keypair and register your Public key in your Nectar account. 

A Public-Private keypair is a pair of files, your Private key and your Public key. They uniquely belong to each other. Your Private key file is yours, and yours alone. You should securely store it on a location on your computer that is only accessible to you.  Your Public key can be used to authorise and authenticate you in a remote computer account. 

**Important**<br/>
Keep your Private key private and secure
{: .callout-danger}

When you launch an instance, Nectar places the Public key from your Nectar account into your VM for you, attached to an admin user account. This way you can use `ssh` to connect to your VM using the three essential connection elements: the computer's IP address, the user account, and the private key that is securely stored on your computer.

**Theorising v. Hands dirty**<br/>
We can theorise until the *bovi eunt domus* but for the purpose of this tutorial we should just get our hands dirty, so...
{: .callout-warning}

Let's get a keypair and register it in Nectar. On the next pages you will learn two ways of obtaining a keypair for use with Nectar.