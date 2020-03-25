---
title: Tight up SSH
order: 2
duration: 5
---

In this section, we are going to do some exercises to further tight up the SSH setup in Nectar instances.

### Change default SSH port
The default SSH port is 22 and it is well known. In this exercise, we are going to change the default port to 2222.

1. Login into your instance. Replace the private key and the IP address of the instance.
```
ssh -i tutorial.pem ubuntu@144.144.144.144
```
1. Execute command.
```
sudo nano /etc/ssh/sshd_config
```
1. Find the line `#Port 22` and change it to `Port 2222`.
1. Save the file.
1. Execute the below command to restart sshd server.
```
sudo systemctl restart sshd
```
1. Since your SSH port is changed to 2222, you need to create a new security group to open port 2222. Please follow this [tutorial](/sec-groups-101/) to create a new security group.
1. Execute the below command and you need to replace `tutorial.pem` to be your private key and `144.144.144.144` to your instance IP address:
```
ssh -i tutorial.pem ubuntu@144.144.144.144 -p 22
ssh: connect to host 144.144.144.144 port 22: Connection refused
ssh -i tutorial.pem ubuntu@144.144.144.144 -p 2222
```
1. You should now see the connection is successful.

### Set a custom SSH warning banner

A good practice for all Linux and Unix boxes is to set a custom welcome banner for SSH connections. Once the user has gained access, a warning banner will be displayed, as you see below:

ALERT! You are entering a secured area! Your IP and login information have been recorded. System administration has been notified.

This system is restricted to authorized access only. All activities on this system are recorded and logged. Unauthorized access will be fully investigated and reported to the appropriate law enforcement agencies.

The below are the steps to add the above warning text to SSH login.

1. Edit the file /etc/motd.
```
sudo nano /etc/motd
```
1. Add the above text into the file and save it.
1. Login into your instance and you should see below:
```
ssh -i tutorial.pem ubuntu@144.144.144.144 -p 2222
login as: ubuntu
Authenticating with public key "imported-openssh-key"
ALERT! You are entering a secured area! Your IP and login information have been recorded. System administration has been notified.

This system is restricted to authorized access only. All activities on this system are recorded and logged. Unauthorized access will be fully investigated and reported to the appropriate law enforcement agencies.
Last login: Thu Apr  2 02:34:07 2020 from 116.240.150.61
```

### Only allow SSH version 2

SSH protocol version 1 is old and has more security issues. It is a good practice to disable it and only enable SSH protocol version 2.

1. Edit the `/etc/ssh/sshd_config` file.
```
$ sudo nano /etc/ssh/sshd_config
```
1. Add the line `Protocol 2` into the file and save it.
1. Restart the sshd server.
```
$ sudo systemctl restart sshd
```
1. Use SSH client to connect to the instance.
```
$ ssh -i tutorial.pem -1 ubuntu@144.144.144.144.144
$ SSH protocol v.1 is no longer supported
```

### Limit max authentication attempts
1. Edit the `/etc/ssh/sshd_config` file.
```
$ sudo nano /etc/ssh/sshd_config
```
1. Find the line `#MaxAuthTries 6` and change it to `MaxAuthTries 3`.
1. Restart the sshd server.
```
$ sudo systemctl restart sshd
```

### Keep SSH updated

1. Execute the below command to update your open ssh server.
```
$ sudo apt-get update
$ sudo apt-get --only-upgrade install openssh-server
```
