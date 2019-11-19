---
title: Security Considerations
order: 05
duration: 2
---

### Your Password

AARNet CloudStor is secured using a password. Our recommendation is that you use the `App Password` that CloudStor can generate for you. Please refer to the [previous step](02-generate-cloudstor-password) for how to generate password. If you prefer to choose your own password, make sure your password meets minimum security standards.

###  Sharing a Virtual Machine Snapshot

The `cloudstor-setup` script will store your CloudStor password in plain text at /etc/davfs2/secrets. If you decide to share a snapshot of your virtual machine with another user, this password will also be shared with them. If you intend on sharing snapshots, you should make arrangements to remove your CloudStor credentials before you start the snapshot process.