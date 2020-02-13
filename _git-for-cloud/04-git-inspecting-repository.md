---
title: Inspecting a repository
order: 4
duration: 10
---

### Check Status

If you want to check the state of the repository and the staging area, you can use git status command. It shows what changes have been staged, which haven't, and which files are being tracked or not by Git.

1. Go to the project directory and type `git status`:

    ```bash
    cd /path/to/your/project
    git status
    ```

2. After executing the command, you may see the below output:
    
    ```bash
    # On branch master
    # Changes to be committed:
    # (use "git reset HEAD <file>..." to unstage)
    #
    #modified: change.txt
    #
    # Untracked files:
    # (use "git add <file>..." to include in what will be committed)
    #
    #new_change.txt
    ```

### List History
If you want to display project history and search for specific changes, you can use `git log` command. `git status` allows you inspect the project directory and the staging area, `git log` only operates on the committed history.

1. Go to the project directory and type `git log`. This command displays entire commit history using the default formatting. You can use `Space` to scroll and `q` to exit.

    ```bash
    git log
    ```

2. You can also limit the number of commits to display by using command `git log -n <limit>`. The below command will display only 3 commits:

    ```bash
    git log -n 3
    ```