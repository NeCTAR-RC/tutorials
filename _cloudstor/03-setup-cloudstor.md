---
title: Setup AARNet CloudStor
order: 3
duration: 5
---

1) Login to Nectar virtual machine via your preferred termianl software. Please refer to this [tutorial](/connecting/01-overview) for how to access virtual machine using SSH.

2) Start the CloudStor setup by typing `cloudstor-setup` at the command prompt. 

3) The `cloudstor-setup` command will prompt you for your CloudStor `username` and `password`. Type in the username and password generated from the previous section and following the prompt.

![VM Console Page1]({{site.baseurl}}/assets/images/cloudstor/cloudstor-console-password1.png)

4) you should now be able to work with your CloudStor data at /cloudstore on your virtual machine.

![VM Console Page2]({{site.baseurl}}/assets/images/cloudstor/cloudstor-console-password2.png)


**Note**
The command `cloudstor-setup` is available on Nectar official images, build after 10/10/2018.
Under the hood the `cloudstor-setup` command uses software called davfs2 to connect to your AARNet CloudStor account.
{: .callout-warning}
