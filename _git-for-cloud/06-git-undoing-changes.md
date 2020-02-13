---
title: Undoing Commits and Changes
order: 6
duration: 10
---

In this section, the tutorial will discuss the available Git commands to undo changes.  You can think about Git timeline management software. Commits are snapshots of a point in time alone the history of project. By undoing changes in Git, you are moving back snapshots in time where the state of the project you want to keep.

### Viewing old commits

If you want to look at changes in a commit in your project history, you can use `git checkout <Commit ID>` command to go back to the commit.

Get the ID of the commit use command `git log`:

```bash
git log --oneline
```

After executing the above command, your will get a list of commits in your project history.

```bash
872fa7e Fixed typo in change.txt
a1e8fb5 Added new content in change.txt
435b61d Added change.txt
9773e52 Initial import
```

If you want to go back to the commit with ID a1e8fb5, you can use the below command:

```bash
git checkout a1e8fb5
```

This makes your working directory match the exact state of the a1e8fb5 commit.

### Undo a commit with git checkout

If you uses `git checkout` to go back to a particular commit and you want remove the commit history from the checked out commit to the latest commit.  You need to create a new branch based on the checked out commit. The below example shows you how to do it.

We assume you have a commit history like below and you want to remove `Added new content in change.txt` and `Fixed typo in change.txt` two commits:

```bash
872fa7e Fixed typo in change.txt
a1e8fb5 Added new content in change.txt
435b61d Added change.txt
9773e52 Initial import

git checkout 435b61d
git branch new_branch_without_unwanted_two_commits
git checkout new_branch_without_unwanted_two_commits
# now you can add new commits to the new branch
```

### Undo commit with git revert

Rather than creating a branch. you can undo a commit by using `git revert <commit ID>` command. It will create and add a new commit with the inverse of the commit. `git revert` will not change the commit history and it only just add a new commit as the last commit and you can continue using the same branch. 

If you want to undo the last commit, you can use the below command:

```bash
git revert HEAD
```