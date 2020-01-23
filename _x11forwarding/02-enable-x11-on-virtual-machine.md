---
title: Enable X11 Forwarding on Virtual Machine
order: 2
duration: 5
---

There are a few changes needed on the virtual machine to enable X11 forwarding. In this tutorial we use Ubuntu 19.04. Other Linux distributions will have a very similar SSH daemon configuration. The SSH daemon configuration file is located at `/etc/ssh/sshd_config`. 

1) Open the SSH daemon configuration file.

```bash
$ sudo vi /etc/ssh/sshd_config
```
2) Locate and uncomment or change line `X11Forwarding` to be `X11Forwarding yes`. This line allows the graphical application to be forwarded over to your computer. 

```bash
# GSSAPI options
GSSAPIAuthentication no
#GSSAPICleanupCredentials yes
#GSSAPIStrictAcceptorCheck yes
#GSSAPIKeyExchange no

# Set this to 'yes' to enable PAM authentication, account processing,
# and session processing. If this is enabled, PAM authentication will
# be allowed through the ChallengeResponseAuthentication and
# PasswordAuthentication.  Depending on your PAM configuration,
# PAM authentication via ChallengeResponseAuthentication may bypass
# the setting of "PermitRootLogin without-password".
# If you just want the PAM account and session checks to run without
# PAM authentication, then enable this but set PasswordAuthentication
# and ChallengeResponseAuthentication to 'no'.
UsePAM yes

#AllowAgentForwarding yes
#AllowTcpForwarding yes
#GatewayPorts no
X11Forwarding yes
#X11DisplayOffset 10
#X11UseLocalhost yes
#PermitTTY yes
PrintMotd no
#PrintLastLog yes
#TCPKeepAlive yes
#PermitUserEnvironment no
#Compression delayed
#ClientAliveInterval 0
#ClientAliveCountMax 3
UseDNS no
#PidFile /var/run/sshd.pid
#MaxStartups 10:30:100
#PermitTunnel no
#ChrootDirectory none
#VersionAddendum none

# no default banner path

``` 

3) Restart SSH daemon.

```bash
$ service sshd restart

```
4) Install a graphical application `xeyes` for testing.

```bash
$ apt -y install xeyes

```