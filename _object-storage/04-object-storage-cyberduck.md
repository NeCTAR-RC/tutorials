---
title: Access Object Storage using CyberDuck
order: 4
duration: 15
---

### What is CyberDuck

"Cyberduck is an open source server and cloud storage browser for Mac and
Windows with support for FTP, SFTP, WebDAV, Amazon S3, OpenStack Swift,
Backblaze B2, Microsoft Azure & OneDrive, Google Drive and Dropbox."

In other words, CyberDuck is a "swiss army knife" file transfer tool that will
run on most people's desktop or laptop machine.  (Sorry Linux users!)

### Installation

Cyberduck can be downloaded and installed from the [Cyberduck
website](https://cyberduck.io/).  You can also get it from the Windows Store
or the Apple Mac App Store.  Instructions for installing can be found
at the respective locations.

### Setup

CyberDuck uses ".cyberduckprofile" files to hold "storage provider"
configuration information.  The following is a profile that is suitable
for Nectar's Swift Object Storage.  On the machine where you installed
CyberDuck, open a simple text editor and copy-paste the following text
into it.  Then save the file as `Nectar.cyberduckprofile`.


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

You should now be able to double-click on this file to launch a CyberDuck
window for Nectar Object Storage.

### Openstack Credentials

Before you can connect to your Nectar object storage containers using
CyberDuck, you need to know your Nectar account name and password.
(The password is NOT the institutional password that you normally use
when logining in to the Nectar Dashboard.  Rather is a password that
you would normally generate using the Nectar Dashboard.)

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

Note that your Openstack password applies to all of your Nectar projects,
including your "project trial" (if it is still active).  If you have
previously embedded the password in scripts or application configurations,
you will need to update the scripts.  (Note that there are better ways
to do this; see the Application Credentials tutorial.)

### Connecting using Cyberduck

Assuming that you have your credentials ready, you can now double-click on the
CyberDuck profile that you created above; e.g. the `Nectar.cyberduckprofile`
file.  You will now need to fill in a username and the password:

- The "username" field should contain your Nectar account name and
  the project name in the following format:

      <project-name>:Default:<account-name>

  For example:

      dhd-sandbox:Default:davey.crocket@unimelb.edu.au

- The "password" field should contain your Openstack password.

Assuming that that worked, you now use the CyberDuck user interface to
create Object Store containers and folders, and upload and download files.
