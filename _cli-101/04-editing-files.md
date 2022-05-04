---
title: Opening and editing files
order: 4
duration: 15
---

It is handy to know the basics on how to edit files. There are a number of different programs available, but for this example and throughout the tutorials we will use Nano. 

To use a text editor, you simply put the name of the editor, then the name of the file you wish to open. If the file doesn't exist already, it will be automatically created for you.

```
nano report.txt
```
Then just add the text you wish to write, and hit `Ctrl`+ `S` to save. To exit the file, you can use the shortcut `Ctrl` + `x`.

In nano, you would have seen at the bottom references to a series of Commands. We won't go through them in detail, but highlight that the `^` symbol represents the `ctrl` button on your keyboard.

![commands-nano]({{ site.baseurl }}/assets/images/cli-101/nano-menu.PNG)

Once you have exited your file, you can use the command `cat` to see the entire contents, for example:

```
cat report.txt
```

If you would like to see just the first few lines of your file, using the command `head` which will just show the first 10 lines.

```
head report.txt
```

**Success!**  
You now know the absolute basics to open and edit files.
{: .callout-success}