---
title: Using Branches
order: 5
duration: 10
---

In this section, we will discuss the branch feature in Git. A branch in Git is an independent line of development. It has a brand-new working directory, staging area, and project history. New commits are recorded in the current branch, which results in a fork in the history of the project. You can use branch to work on a new feature of your project and later to merge it back to the Master branch. The Master branch is the default branch, which you usually use it to start working on the project.

### Listing Branches

List all of the branches in your repository:

 ```bash
git branch
```

### Creating Branches

Create a new branch uses command `git branch <branch name>`:

```bash
git branch new_branch
```

The above command creates a new branch using the current commit in the current working branch as a starting point. It only creates the new branch. To start adding new commits to it, you need to select it with command `git checkout`, and then use the `git add` and `git commit` commands.

### Select a Branch

Before you can start working on a branch, you need to select it. Use `git checkout <branch name>` to select a branch.

```bash
git checkout new_branch
```

### Deleting a Branch

If you don't want to keep committed changes in a branch, you can delete it. Use command `git branch -d <branch name>`.

```bash
git branch -d new_branch
```

The branch delete command will prevent you from deleting the branch if it has unmerged changes. If you want to force delete the specified branch, you can use `git branch -D <branch name>` command.