---
title: Basic file system actions
order: 2
duration: 12
---

### `home` directory

When you connect to an instance using SSH you typically enter into the *home*-directory. Your *command prompt* usually reflects your location in the file system. In this context, the tilde (`~`) is used to indicate your *home*-directory, and you can make the full directory that you are currently in visible using the `pwd`-command (**p**rint **w**orking **d**irectory).

See if you can recognise the steps below:

```
me@localmachine:~$ ssh ubuntu@myinstance
ubuntu@myinstance:~$ pwd
/home/ubuntu
```

To list the files and subdirectories that you may have in your home directory you can use the `ls` command.

```
ubuntu@myinstance:~$ ls
file1.txt  file2.dat  file3.log
```

If nothing shows for you after running the `ls`-command, there aren't any files in your current directory. This makes for a poor demo of the `ls`-command, so lets create some files and directories, and then try again.

### Create directories and files

To create directories we can use the `mkdir`-command and to create some files we will use the `touch` command. We will use the `cd` command to change from one directory to another.

```
ubuntu@myinstance:~$ mkdir mydata
ubuntu@myinstance:~$ cd mydata/
ubuntu@myinstance:~/mydata$ touch datafile1.txt datafile2.dat logfile3.log
ubuntu@myinstance:~/mydata$ ls
datafile1.txt  datafile2.dat  logfile3.log
```

Much better `ls` result!

### Move directories and files

You can move files and directories using the `mv` command. Just specify the file and the new name you want it to have like in this example. Note the use of the `cd` and  `ls` commands again. And two more things: `.` is used to indicate *the current directory*
and `..` to indicate *one directory up*. See it in action below. Note the comments (after the `#` characters) describing each action.

```
ubuntu@myinstance:~/mydata$ cd ..  # move one directory up
ubuntu@myinstance:~$ ls  # list files in current directory
mydata
ubuntu@myinstance:~$ mv mydata/logfile3.log ./  # move file to ./
ubuntu@myinstance:~$ ls  # list files and dirs
logfile3.log  mydata
ubuntu@myinstance:~$ mv mydata researchdata  # use mv to rename dir
ubuntu@myinstance:~$ ls  # list files and dirs
logfile3.log  researchdata
ubuntu@myinstance:~$ ls researchdata/  # list files in specific dir
datafile1.txt  datafile2.dat
```

### Removing files

Let's now remove those files. We can use the `rm`-command to remove files, and the `rmdir` command to remove empty directories (folders). We can use the `*` wildcard character to indicate multiple files.

```
ubuntu@myinstance:~$ ls  # list files and dirs
logfile3.log  researchdata
ubuntu@myinstance:~$ rm logfile3.log #delete file in current dir
ubuntu@myinstance:~$ ls #list files and dirs
researchdata
ubuntu@myinstance:~$ rm researchdata/*  # delete all files in subdir
ubuntu@myinstance:~$ ls researchdata/  # list files in subdir (empty)
ubuntu@myinstance:~$ rmdir researchdata/  # delete subdir
ubuntu@myinstance:~$ ls  # list files and dirs (empty)
ubuntu@myinstance:~$
```

### man and --help

There are many ways to interact with the file system on your instance. The examples above are merely a very brief introduction. If you're uncertain about a command, there is help within the Command Line. Try these two commands:

```
$ man ls
```

(use `space` to scroll, `q` to exit to the command prompt) and

```
$ ls --help
```

Most commands have some form of help included in one of these ways. Try the `man`-pages (short for *manual pages*) for some of the other commands we used above, e.g. `man ls` or `man touch`.
