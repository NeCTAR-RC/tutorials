---
title: Access Object Storage using CyberDuck
order: 3
duration: 15
---

### What is CyberDuck

"Cyberduck is an open source server and cloud storage browser for Mac and
Windows with support for FTP, SFTP, WebDAV, Amazon S3, OpenStack Swift,
Backblaze B2, Microsoft Azure & OneDrive, Google Drive and Dropbox."

In other words, it is a "swiss army knife" file transfer tool that will
run on most people's desktop.

### Installation

Cyberduck can be downloaded and installed from the [Cyberduck
website](https://cyberduck.io/).  You can also get it from the Windows Store
or the Apple Mac App Store.  Instructions for installing can be found
at the respective locations.

### Setup

CyberDuck uses ".cyberduckprofile" files to hold the configurations
for the various Storage Providers that the tool supports.  The following
is a profile that is suitable for Nectar's Swift Object Storage.  Open a
simple text editor and copy-paste the following into it.  Then save it as
`Nectar.cyberduckprofile`.


```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>Protocol</key>
        <string>swift</string>
        <key>Vendor</key>
        <string>nectar</string>
        <key>Description</key>
        <string>Nectar Object Storage</string>
        <key>Default Hostname</key>
        <string>keystone.rc.nectar.org.au</string>
        <key>Hostname Configurable</key>
        <false/>
        <key>Default Port</key>
        <string>5000</string>
        <key>Port Configurable</key>
        <false/>
        <key>Username Placeholder</key>
        <string>Project:Domain:Username</string>
        <key>Password Placeholder</key>
        <string>Password</string>
        <key>Region</key>
        <string>Melbourne</string>
        <key>Regions</key>
        <array>
            <string>Melbourne</string>
        </array>
        <key>Context</key>
        <string>/v3/auth/tokens</string>
    </dict>
</plist>
```

You should then be able to double-click on this file to start Cyberduck

### Openstack Credentials

Before you can connect to your object storage containers using CyberDuck,
you need to know your Openstack account name and password.  (The password is
NOT the password that you use to login to the Nectar Dashboard.  Rather
is normally generated using the Dashboard.)

**Your OpenStack password**
If you have already generated and saved your OpenStack password you can
skip this next step.  Note that when you generate a new password, the
previous version will stop working.
{: .callout-warning}


1. Log on to your [Nectar Dashboard](https://dashboard.rc.nectar.org.au).

2. Your Nectar account name is shown in the top right of the Dashboard:
   it is typically your email address.

3. Use the pulldown menu next to your account name to select the `Settings`
   page.

4. In the `Settings` menu, click the `Reset Password` menu item.

5. In the `Reset Menu Form` page, click the `Reset Password` button.

6. Copy and paste the password, and save it in a safe place.  (If you have
   a "key ring" or "password safe" application on your desktop, that would
   be place to save the password.

    ![User Settings Page2]({{ site.baseurl }}/assets/images/object-storage/object-storage-swift-python-client2.png)

Note that the Openstack password applies to all projects that you are a
member of, including your "project trial" if it is still active.

### Connecting using Cyberduck

Once you have your credentials, you can double-click on the profile
that you created above; e.g. the `Nectar.cyberduckprofile` file

You will need to fill in the username and the password based on your
credentials:

- The "username" field should contain your Nectar account name and
  the project name in the following format:

      <project-name>:Default:<account-name>

  For example:

      dhd-sandbox:Default:davey.crocket@unimelb.edu.au

- The "password" field should contain your Openstack password.

You can now use the CyberDuck user interface to create object store
containers and folders, and upload and download files.
