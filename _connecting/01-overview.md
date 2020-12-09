---
title: Overview
order: 1
duration: 2
---

One of the most basic ways of driving a computer, whether virtual or physical, whether remote or local, is using the command line. The command line of remote computers, which includes our Nectar virtual machines, can be accessed using a Secure SHell (or ssh) connection. It is called "Secure" because SSH encrypts all its communications, and it's called a `shell`, because... well it appears that nobody really knows why it's called a *shell* <sup>###</sup>. Nevermind.  

We can also access our instance using a webpage in the Nectar dashboard through a web-based `vnc`-console. The `vnc`-console gives us access to our instance command line, without the need for separate terminal software.

In this tutorial you will learn how to connect to our instance using [terminal software](https://support.ehelp.edu.au/support/solutions/articles/6000223964-terminal-software) and SSH. We'll set up a user account password to enable access to our `vnc`-console, and then connect using the `vnc`-console. 

**Cloud Starter**  
This tutorial is part of the Nectar Cloud Starter curriculum. Only the bare essentials of SSH-connecting are explained here. The `vnc`-console is optional in the cloud starter curriculum, but it can be useful in the unlikely event of troubleshooting your instance.
{: .callout-warning}

### What you'll learn

- Connecting to our instance using SSH
- Changing a User account password using `passwd`
- Connecting to our instance using the `vnc` console in the Nectar Dashboard

### What you'll need

- [Terminal software](https://support.ehelp.edu.au/support/solutions/articles/6000223964-terminal-software) 
- A running instance in the Nectar Cloud, with your public key and an SSH security group applied







<br/><br/><br/><sup>###</sup> Internet pioneer [Louis Pouzin](https://en.wikipedia.org/wiki/Louis_Pouzin) coined the term *shell* for a command language in the mid 1960s.  

