---
title: Setting up a repository
order: 3
duration: 10
---

A Git repository is the .git/ folder inside a project. This repository tracks all changes made to files in your project, building a history over time. Meaning, if you delete the .git/ folder, then you delete history of your project.

### Initializing a new repository

You can use `git init` command to create a new repository for your project. It will create a new .git subdirectory in your current working directory and a new master branch.

1. create a new repository in project directory:

    ```bash
    cd /path/to/your/existing/project
    git init
    ```

### Cloning an existing repository
If you already have a central Git repository such as a repository on GitHub, you can use `git clone` command to obtain a local copy of the repository.

1. obtain a copy of remote repository:

    ```bash
    cd /path/to/your/project
    git clone <repo url>
    ```

After the clone, the folder will contain the full history of the remote repository.

### Saving changes to the repository
After you have a repository cloned or initialized, you can follow the steps in below to add changes to the repository.

1. Change directory to /path/to/project

    ```bash
    cd /path/to/project
    ```

2. Create a new file `change.txt` with contents "change test for git tutorial "

    ```bash
    echo "change test for git tutorial" >> change.txt
    ```

3. Add `change.txt` to the repository staging area

    ```bash
    git add change.txt
    ```

4. Create a new commit to commit the change to the repository. It also includes a message to indicate what has changed.

    ```bash
    git commit -m "Added change.txt to the repository."
    ```

After executing the above commands, your repository will now have change.txt added to the history and will track future updates to the file.