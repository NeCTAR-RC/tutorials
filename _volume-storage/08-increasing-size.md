---
title: Increasing your Volume Size
order: 8
duration: 3
---
🚨**Warning**🚨  
The process requires some system administration skills and there is a risk that you can lose your data, so make sure you have a backup. It is also recommended that you try it out on a small test volume first. If unsure you can always contact the Help Desk as well.
{: .callout-danger}

### Checking volume quota

Let's first check if you have **Volume quota available**. To check your available quota in the Dashboard, click the `Compute` tab, then the `Overview` sub-tab. The pie chart for Volume Storage shown will show your quota.

If you need more quota for this, you can view our [Manage your Allocation](https://support.ehelp.edu.au/a/solutions/articles/6000068044) article.

**Note**  
These instructions uses a combination of the Command Line and the Dashboard.
{: .callout-info}

Ensure you are connected to the instance where your Volume is connected, using SSH on the Command Line.
Then use the df command below to see the list of disks and their size. **Take note of your volume's name**.
```
df -h
```

🚨**Beep Beep Backup!**🚨  
Before proceeding any further, please ensure you have a backup of any important data on your Volume.
{: .callout-danger}

Then, enter this Command below, which will unmount your Volume. *Adjust the command as necessary for the name of your Volume.*

```
sudo umount /dev/vdb
```

Now, you can go to the Dashboard, to the Volumes page (`Overview, Volume, Volumes`), select `Manage Attachments`, and then `Detach`.
![manage volume]({{ site.baseurl }}/assets/images/volume-storage/volume-manage.png)

![detach volume]({{ site.baseurl }}/assets/images/volume-storage/detach-volume.PNG)

Now we can increase the size of the volume, by finding the `Extend volume` button on the dashboard.

![extend option]({{ site.baseurl }}/assets/images/volume-storage/extend-volume-navigate.png)

In the window that pops up, enter what size you would like to make the Volume, and click `Extend Volume`.

![extend screen]({{ site.baseurl }}/assets/images/volume-storage/extend-volume-screen.PNG)

Return to your instance ssh login session and re-mount the volume.
```
sudo mount /dev/vdb /mnt/pvol
```
Once remounted, you can see that the volume filesystem size is still the same, before resizing it.
```
$ df -h
```
You should now be able to extend the filesystem to match the new volume size. We will use the `resize2fs` command. To resize the filesystem using resize2fs, first un-mount the volume.

```
$ sudo umount /dev/vdb
```

Then we perform a file system consistency check.

```
sudo e2fsck -f /dev/vdb
```
Resize the filesystem to match the volume size.

```
sudo resize2fs /dev/vdb
```

Re-mount the volume and check that the filesystem size matches the new volume size.
```
sudo mount /dev/vdb /mnt/pvol
```

```
$ df -h
```
Your volume should appear in the list with the new size!

**Great Job**  
Your volume's extra storage is now ready!
{: .callout-success}
