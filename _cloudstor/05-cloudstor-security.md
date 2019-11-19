---
title: Security Considerations
order: 05
duration: 2
---

### Your Password

AARNet CloudStor is secured using a password. Our recommendation is that you use the `App Password` that CloudStor can generate for you. Please refer to the previous step for how to generate password. If you prefer to choose your own password, make sure your password meets minimum security standanrds.

###  Snapshotting

The setup of CloudStor will store on your behalf in a privileged user account on your virtual machine. If you want to snapshot the virtual machine, the password will become part of the snapshot. If you subsequently share the snapshot with another user, you are also sharing the password, and the other user will have access to your data.

### General Nectar Security Info

You should practice good security around your virtual machine. Nectar has documentation about good security practice, please refer to here. 