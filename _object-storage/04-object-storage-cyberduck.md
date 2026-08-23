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
Cyberduck, you need to know your Nectar account name and OpenStack
password.  If you don't have these, follow the
[Setting up your credentials]({{ site.baseurl }}/openstack-cli/04-credentials)
tutorial first.

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
