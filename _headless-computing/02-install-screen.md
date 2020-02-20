---
title: Install Screen
order: 2
duration: 5
---

To run a task on a virtual machine, you can use ssh client to connect to virtual machine and execute the tasks in the terminal. However, this is only good for short-running tasks. Your tasks are attached to your SSH session and it will get terminated if your connection drops or the SSH session is closed. You can use `screen` to perform a long-running task on a virtual machine even your connection drops or you turn off your ssh client.

Screen is a terminal multiplexer and it allows you to open any number of windows (virtual terminals) inside a SSH session. Tasks running in Screen will continue to run when their window is not visible even if your SSH connection is disconnected. You can also disconnect  and re-connect to a shell sessions from multiple locations.

### Install Linux Screen

```bash
$ sudo apt install screen
$ screen --version
```

### Starting Linux Screen

```bash
$ screen
```

If you want to create a named session, you can use the below command:

```bash
$ screen -S <session name>
```

Now you have a screen session running, you can execute your tasks within it.