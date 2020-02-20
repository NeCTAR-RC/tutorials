---
title: Work with Screen
order: 3
duration: 10
---

When you start a new screen session, it creates a single window with a shell in it. You can execute your tasks in the window. You can disconnect your SSH client now and your tasks will not be terminated.

If you want to have run multiple tasks you can have multiple windows inside a Screen session.

To create a new window with shell execute `Ctrl+a c`, the first available number from the range `0...9` will be assigned to it.

Below are some most common commands for managing Linux Screen Windows:

- Ctrl+a c Create a new window (with shell)
- Ctrl+a '' List all window
- Ctrl+a 0 Swith to window 0 (by number)
- Ctrl+a K Kill the current screen session

### Detach from Screen Session
If you want leave your screen session,  You can detach from the screen session by typing:

```bash
Ctrl+a d
```

### Reattach to a Screen session
If you want check the progress or result of your tasks, you can reattach to the screen session that has your tasks running.

```bash
screen -r <screen session id>
```

If you have multiple screen sessions running, you will need to append the `screen session id` after the -r option.

To find the session id list the current running screen sessions with:

```bash
screen -ls
```
