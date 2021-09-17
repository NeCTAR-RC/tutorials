---
title: scp - Secure Copy
order: 2
duration: 10
---

`scp` stands for "secure copy". It relies on SSH, which in practice means for us that we can use the same key pair access methods for both `scp` and SSH. `scp` copies files between two places on a network.

```
$ scp source-file destination-file
```
The command will take a variation of this form above; we will explore some of the variations below.

**Default or custom private key name/location** If you have your private key in the default location of `~/.ssh/id_rsa` then you don't need to specify it to the `scp` command. If you have a custom name or location, then you need to specify it to `scp` using the `-i` argument. In this case the generic form is like this:
`scp -i /path/to/your/private_key source-file destination-file`
{: .callout-warning}

### To copy from local to remote ...

To copy a file called `data.csv` from the local machine to our remote instance we could use this command:

```
$ scp data.csv wile@144.6.123.234:~/data-dir/
```

Here we're running the `scp` command from the directory where  the *source-file* `data.csv` is located, so we can refer to it by filename without further file path information. The *destination-file* is specified with the connection details to our remote instance: the username `wile`, the `@`, the host IP address `144.6.123.234` and the colon (`:`). You need to find and substitute the remote username and host IP address for your instance.

The part after the colon (`:`) indicates the remote path. Here we are copying the file to the home-directory (`~/`) of the user (`wile`) into a subdirectory (`data-dir/`). The file will be copied using the origrinal name (`data.csv`). Note that the directory 'data-dir' needs to exist.

Here's another example:

```
$ scp /collections/geococcyx/data.csv wile@144.6.123.234:geococcyx-data.csv
```

Here we use the `scp` command, refer to the local  *source-file* by its full file path aka location (`/collections/geococcyx/data.csv`), connect to the remote host using connection details (`wile@144.6.123.234:`), copy to the default directory for the connecting user (no path specified after the colon) and we *rename* file as part of the copy process to `geococcyx-data.csv`. Again: you need to find and substitute the remote username and host IP address for your situation.

Easy.

### To copy from remote to local...

The copy from remote to local is very similar, except we now need to specify our remote connection details for the *source-file*, and we can omit any connections details for the *destination-file*.

```
$ scp wile@144.6.123.234:~/outputs/results.dat outputs/
```

Here we use the `scp` command, we connect to the remote instance using the connection details: `wile@144.6.123.234:`, and specify the remote *source-file* 'results.dat' in the user (`wile`'s) home directory, subdirectory outputs (`~/outputs/results.dat`). We specify the destination directory `outputs/` but we retain the source-file filename `results.dat`. Note that the directory 'outputs' needs to exist. Again: you need to find and substitute the remote username and host IP address for your situation.

In the examples above we've shown some variations of the basic form of `scp` commands to move data between your local machine and your remote instance. `scp` is a powerful tool; we suggest you have a read of the `man` pages (run `$ man scp`) to get an idea of the options that `scp` takes. Being a command line tool, it can be easily automated or scheduled.

