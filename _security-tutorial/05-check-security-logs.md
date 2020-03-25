---
title: Check Security Log
order: 5
duration: 5
---

Linux logs all login information in its authorization log files and the file tracks usage of authorization systems, the mechanisms for authorizing users which prompt for user passwords, such as PAM system, the sudo command, remote logins to sshd and so on. It is a good practice to regularly check log files to review any unexpected logins.

In this section, we are going to check the log file and see which information you need to be aware. 


### Use less command

The `less` command shows the latest entries in auth log file.

```
$sudo less /var/log/auth.log
Apr  7 03:44:21 tutorial sshd[31584]: Received disconnect from 89.163.153.41 port 60086:11: Bye Bye [preauth]
Apr  7 03:44:21 tutorial sshd[31584]: Disconnected from 89.163.153.41 port 60086 [preauth]
Apr  7 03:45:11 tutorial sshd[31586]: Received disconnect from 222.186.30.167 port 26362:11:  [preauth]
Apr  7 03:45:11 tutorial sshd[31586]: Disconnected from authenticating user root 222.186.30.167 port 26362 [preauth]
Apr  7 03:48:09 tutorial sshd[31589]: Received disconnect from 222.186.31.135 port 19960:11:  [preauth]
Apr  7 03:48:09 tutorial sshd[31589]: Disconnected from authenticating user root 222.186.31.135 port 19960 [preauth]
Apr  7 03:53:04 tutorial sshd[31592]: Accepted publickey for ubuntu from 116.240.150.61 port 60935 ssh2: RSA SHA256:R00wmFltn/G1VeIlsAqVWWKUvvdkVu4U6JjYtS3psLQ
Apr  7 03:53:04 tutorial sshd[31592]: pam_unix(sshd:session): session opened for user ubuntu by (uid=0)
Apr  7 03:53:04 tutorial systemd-logind[696]: New session 135 of user ubuntu.
Apr  7 03:53:04 tutorial systemd: pam_unix(systemd-user:session): session opened for user ubuntu by (uid=0)
Apr  7 03:53:06 tutorial sudo:   ubuntu : TTY=pts/0 ; PWD=/home/ubuntu ; USER=root ; COMMAND=/bin/bash
Apr  7 03:53:06 tutorial sudo: pam_unix(sudo:session): session opened for user root by ubuntu(uid=0)
```

From the above log we can see the latest successful login is from IP address `116.240.150.61` and the user is ubuntu. The authentication method is public key and it also used sudo to became root user.
We can also see there was attempted root login from IP `222.186.31.135` and it was disconnected or rejected.

### Use last command 

The `last` command shows the most recent login attempts.

```
$last
ubuntu   pts/0        116.240.150.61   Tue Apr  7 03:53   still logged in
ubuntu   pts/1        116.240.150.61   Thu Apr  2 06:50 - 12:02  (05:12)
ubuntu   pts/0        116.240.150.61   Thu Apr  2 05:14 - 08:26  (03:11)
reboot   system boot  4.15.0-76-generi Thu Apr  2 05:04   still running
```

From the above output, you can see the IP address and time for users logged in. 

### Use lastlog command

The `lastlog` command views the last time each user on the system logged in.

```
$lastlog
Username         Port     From             Latest
root                                       **Never logged in**
daemon                                     **Never logged in**
bin                                        **Never logged in**
sys                                        **Never logged in**
sync                                       **Never logged in**
games                                      **Never logged in**
man                                        **Never logged in**
lp                                         **Never logged in**
mail                                       **Never logged in**
news                                       **Never logged in**
uucp                                       **Never logged in**
proxy                                      **Never logged in**
www-data                                   **Never logged in**
backup                                     **Never logged in**
list                                       **Never logged in**
irc                                        **Never logged in**
gnats                                      **Never logged in**
nobody                                     **Never logged in**
systemd-network                            **Never logged in**
systemd-resolve                            **Never logged in**
syslog                                     **Never logged in**
messagebus                                 **Never logged in**
_apt                                       **Never logged in**
uuidd                                      **Never logged in**
sshd                                       **Never logged in**
murano-agent                               **Never logged in**
davfs2                                     **Never logged in**
ubuntu           pts/0    116.240.150.61   Tue Apr  7 03:53:04 +0000 2020
```

From the above output, you can see only user `ubuntu` has logged in.