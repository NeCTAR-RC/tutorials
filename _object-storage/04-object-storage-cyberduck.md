---
title: Access Object Storage using Cyberduck
order: 4
duration: 15
---

### What is Cyberduck

"Cyberduck is an open source server and cloud storage browser for Mac and
Windows with support for FTP, SFTP, WebDAV, Amazon S3, OpenStack Swift,
Backblaze B2, Microsoft Azure & OneDrive, Google Drive and Dropbox."

In other words, Cyberduck is a "swiss army knife" file transfer tool that will
run on most people's desktop or laptop machine.

### Installation

Cyberduck can be downloaded and installed from the [Cyberduck
website](https://cyberduck.io/).  You can also get it from the Windows Store
or the Apple Mac App Store.  Instructions for installing can be found
at the respective locations.

### Setup

Cyberduck uses ".cyberduckprofile" files to hold "storage provider"
configuration information.

Once you download the [Nectar Cyberduck profile](https://swift.rc.nectar.org.au/v1/AUTH_2f6f7e75fc0f453d9c127b490b02e9e3/cyberduck/nectar.cyberduckprofile),
you should now be able to double-click on this file to launch a Cyberduck
window for Nectar Object Storage.

### Openstack Credentials

Before you can connect to your Nectar object storage containers using
Cyberduck, you need to know your Nectar account name and password.
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
Cyberduck profile that you created above; e.g. the `Nectar.cyberduckprofile`
file.  You will now need to fill in a username and the password:

- The "username" field should contain your Nectar account name and
  the project name in the following format:

      <project-name>:Default:<account-name>

  For example:

      dhd-sandbox:Default:davey.crocket@unimelb.edu.au

- The "password" field should contain your Openstack password.

Assuming that that worked, you now use the Cyberduck user interface to
create Object Store containers and folders, and upload and download files.
