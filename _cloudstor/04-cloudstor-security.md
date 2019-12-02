---
title: Security Considerations
order: 4
duration: 2
---

### Your Password

Access to your CloudStor account on your instance is secured using a password. Our strong recommendation is that you use the `App Password` that CloudStor can generate for as you have seen in section 2 of this tutorial. 

###  Sharing a Virtual Machine Snapshot

The `cloudstor-setup` script will store your CloudStor password in plain text in a file called `/etc/davfs2/secrets`. If you create and share a snapshot of your virtual machine with another user, this password will also be shared with them. If you intend to share a snapshot, you should make arrangements to remove your CloudStor credentials before you start the snapshot process.

### Sharing instances

If you share access to your instance with other users, then you are also sharing access to your CloudStor data. Read access if you use separate user accounts, read-write if you are sharing user accounts.

### Instance security 

You should follow good Nectar instance security practice. You can find information about how to keep your Nectar instance secure in the [Nectar Knowledge Base](https://support.ehelp.edu.au/support/search/solutions?term=security)

