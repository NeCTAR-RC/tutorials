---
title: Basic file system actions
order: 2
duration: 12
---

### `home` directory 

When you connect to an instance using `ssh` you typically enter into the *home*-directory of the user account you are connecting with. Your *command prompt* usually reflects your location in the file system. In this context the tilde (`~`) is used to indicate your *home*-directory, and you can make the full directory that you are currently in visible using the `pwd`-command (**p**rint **w**orking **d**irectory).

See if you can recognise the above four statements in the session transcript below:

```bash
me@localmachine:~$ ssh ubuntu@myinstance
ubuntu@myinstance:~$ pwd
/home/ubuntu
```



To show the files and subdirectories that you may have in your home directory you can use the `ls` command.

```bash
ubuntu@myinstance:~$ ls
file1.txt  file2.dat  file3.log
```



If nothing shows for you after running the `ls`-command, there aren't any files in your current directory. This makes for a poor demo of the `ls`-command, so lets create some files and directories, and then try again. 

### Create directories and files

To create directories we can use the `mkdir`-command and to create some files we will use the `touch` command. We will use the `cd` command to change from one directory to another.

```bash
ubuntu@myinstance:~$ mkdir mydata
ubuntu@myinstance:~$ cd mydata/
ubuntu@myinstance:~/mydata$ touch datafile1.txt datafile2.dat logfile3.log
ubuntu@myinstance:~/mydata$ ls
datafile1.txt  datafile2.dat  logfile3.log
```



Much better `ls` result!

### Move directories and files

You can move files and directories using the `mv` command. Just specify the file and the new name you want it to have like in this example. Not the expert use of the`cd` and  `ls` commands again. And two more things: `.` is used to indicate *the current directory*
and `..` to indicate _the relative parent directory_ otherwise known as *one directory up*. See it in action in the transcript below. Note the comments (after the `#` characters) describing each action.

```bash
ubuntu@myinstance:~/mydata$ cd .. #move one directory up
ubuntu@myinstance:~$ ls #list files in current directory
mydata
ubuntu@myinstance:~$ mv mydata/logfile3.log ./ #move file to ./
ubuntu@myinstance:~$ ls #list files and dirs
logfile3.log  mydata
ubuntu@myinstance:~$ mv mydata researchdata #use mv to rename dir
ubuntu@myinstance:~$ ls #list files and dirs
logfile3.log  researchdata
ubuntu@myinstance:~$ ls researchdata/ #list files in specific dir
datafile1.txt  datafile2.dat
```



### Removing files 

At the end of any whirlwind demonstration, it is a good idea to tidy up after ourselves. So we will remove the files and directories we created. We can use the `rm`-command to remove files, and the `rmdir` command to remove empty directories. We can use the `*` wildcard character to indicate multiple files.

```bash
ubuntu@myinstance:~$ ls #list files and dirs
logfile3.log  researchdata
ubuntu@myinstance:~$ rm logfile3.log #delete file in current dir
ubuntu@myinstance:~$ ls #list files and dirs
researchdata
ubuntu@myinstance:~$ rm researchdata/* # delete all files in subdir
ubuntu@myinstance:~$ ls researchdata/ # list files in subdir (empty)
ubuntu@myinstance:~$ rmdir researchdata/ # delete subdir
ubuntu@myinstance:~$ ls #list files and dirs (empty)
ubuntu@myinstance:~$
```



### man and --help

There are many ways to interact with the file system on your instance. The examples above are merely a very brief introduction.  if you're uncertain about the exact working of a command, you can call on help straight from your command line. Try these two commands:

```bash
$ man ls
```



(use `space` to scroll, `q` to exit to the command prompt)

and 

```bash
ls --help
```



Most commands have some form of help included in one of these ways. Try the `man`-pages (short for *manual pages*) for some of the other commands we used above, e.g. `man ls` or `man touch`. 

