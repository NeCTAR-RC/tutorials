---
title: Check your Storage
order: 6
duration: 4
---

Your attached and mounted volume storage will behave like any other disk/block device in Linux. Here are some commands that can help you to look at your mounted storage blocks and keep track of their usage:

`lsblk` for Listing Block devices

```
$ lsblk
```

`df` for free disk space

```
$ df -hT
```

`du` for disk usage

```
du -h <path/to/directory>
```

Don't forget you can access the `man`-pages for these commands like this:

```
$ man lsblk
$ man df 
$ man du
```

