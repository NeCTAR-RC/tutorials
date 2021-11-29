---
title: Web-based VNC console
order: 4
duration: 5
---

You can access the instance command line via the web-based vnc-console on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au/).

1. On your [Nectar Dashboard](https://dashboard.rc.nectar.org.au/) select your project and navigate to the Instances page.

2. On the instances page click the name of your instance and then select the Console tab.

   ![Instance console]({{ site.baseurl }}/assets/images/connecting/instance-console.png)

3. If necessary, activate the keyboard input by clicking the grey area surrounding the black console

4. log into your instance using the default user account (`ubuntu` in our example) and password you set in the previous section. If you are using a different Linux distribution, the corresponding usernames can be [found here](https://support.ehelp.edu.au/support/solutions/articles/6000106269-image-catalog#username).

You can now type commands into your console in just the same way you would in the SSH terminal we've seen earlier. Try the command below!

```
$ sudo apt update
```

If you ran the command above in a Ubuntu or Debian instance, then  the operating system checks for updates to any installed components. It reports how many packages can be upgraded. You can learn more about the command line, sudo and installing and maintaining software [here]({{sitebase.url}}/cli-101/01-overview).
{: .callout-warning}

**the console vs. pasting and data**  
The console is a straightforward web-based tool to access your instance command line. Two major drawbacks are that the *console doesn't accept pasting data* from the clipboard, and *you cannot transfer data from your local machine to your instance*.
{: .callout-danger}

