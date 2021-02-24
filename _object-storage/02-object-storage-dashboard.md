---
title: Accessing Object Storage via the Dashboard
order: 2
duration: 15
---

In this lesson we will use the Nectar Research Cloud Dashboard to create
an object storage container and upload some files to it.

### What is a container?
A container is like a conventional file system folder: it holds objects in
the same way that a file system directory holds files.  The key differences
are:

- A container can only hold objects.  It cannot hold other containers.  In
  other words containers are essentially flat.  By contrast, a file system
  directory can hold other directories as well as files, symbolic links and
  potentially other things.
- An object is a member of exactly one container.  By contrast a file in some
  conventional file systems can be a member of two or more directories, or
  even none.

### What is a folder?

While we just said that containers are flat, Swift object storage does provide
a way to simulate a hierarchy of objects.  Each object has a name consisting of
up to 1024 characters.  (To be precise, names are 1024 bytes of UTF-8 encoded
text.)  If you use the "/" (slash) character in an object name, you can
make the objects appear to be organized as hierarchical folders.

Container folders do not behave like conventional file system directories in
the following respects when they are accessed via the Swift APIs:

  - There is no "current folder" concept.
  - You cannot easily list all of the objects in a folder.  Your application
    needs to list them all and filter for names starting with the folder name.
  - You cannot easily delete the objects in a folder, or do other operations
    at a folder level.

The Dashboard interface for object storage largely hides these issues, and
allows you to "browse" the folder hierachy of your containers.

For more information on folders, see [Pseudo-hierarchical folders and directories](https://docs.openstack.org/ocata/user-guide/cli-swift-pseudo-hierarchical-folders-directories.html)

### Creating a container

1. Logon to your [Nectar Dashboard](https://dashboard.rc.nectar.org.au)
   and ensure you're working in the right project.  (Use the project selector
   on the top left-hand side of the dashboard.)
2. Navigate to the `Project` / `Object Store` / `Containers` page.  This page
   shows any existing containers in the project.
3. Click on the `+ Container` button to start creating a new container.
    ![Object Storage Container page1]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard1.png)
4. Enter the container name in the `Container Name` field.
5. You can alter the default access for the container by
   choosing `public` or `private` in `Container Access`.
6. Click the `Submit` button.  You should shortly see that a new container
   has been created.
    ![Object Storage Container page2]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard2.png)

### Creating a folder

To create a new folder in the newly created container:

1. Login and navigate to the `Project` / `Object Store` / `Containers` page as
   before.
2. Find the container in the list and click on it to select it.
3. Click on the container's `+Folder` button.
    ![Object Storage Container page3]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard3.png)
4. Enter a folder name in the `Folder Name` field.
5. Click the `Create Folder` button.
    ![Object Storage Container page4]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard4.png)

You can create folders within folders, and use the container browser to
navigate the folder hierarchy.

### Uploading a file

1. Login and navigate to the `Project` / `Object Store` / `Containers` page as
   before.
2. Click to select the container to upload the file to.
3. In the container page, click the `file upload` icon to start the file upload
   dialog.
    ![Object Storage Container page5]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard5.png)
4. Click the `Choose file` button, select a file on your local machine
   and click the `Upload File` button.
    ![Object Storage Container page6]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard6.png)
5. You should shortly see that the selected file uploaded to the container.

### Deleting a container and its contents

1. Log on and navigate to the `Project` / `Object Store` / `Containers` page
   as before.
2. Click to select the container you want to delete to check its contents.
3. You need to delete all objects in a container before you can delete
   the container:
   - either, use the `Delete` option from the drop down menu for each object
   - or use the checkboxes to select all objects to be deleted and click
     "trash can" button next to `+Folder`.
   You will then be asked to confirm the operation.
    ![Object Storage Container page7]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard7.png)
4. To delete the emptied container, click the trash can button on the
   container's entry in the container list.

**Note**  
You cannot delete a container unless it is empty.  However, you can delete
all files in a folder by selecting the folder and clicking the "trash can"
button next to `+Folder`.
{: .callout-warning}

### Other operations on objects

1. Log on and navigate to the `Project` / `Object Store` / `Containers` page
   as before.
2. Select a container and navigate to the folder containing the object.
3. To view the object's metadata, select `View Details` from the dropdown
   menu.  This will show you the object's full name, the content type used
   when it was uploaded, its creation timestamp, size and MD5 hash.
4. To download an object as a file on your P/C, select `Download` from
   the dropdown menu and use your browser's "save file" control tell it where
   to put the downloaded file.
5. To copy an object to another container, select `Copy` from the dropdown
   menu.  You will be prompted for the destination container name and (full)
   object name in the destination container.

### Make a container public

1. Log on and navigate to the `Project` / `Object Store` / `Containers` page
   as before.
2. Select the container that you want to make public.
3. Tick the `Public Access` option to make the container public.
4. The "disabled" text will be replaced with a hyperlink named "link".  You
   can use your web browser's "copy link location" to capture the URL, send
   it to other people.

**Note**  
When a Nectar project expires, all resources left behind are deleted after
a grace period.
If a container in the project is marked as "public", it will not be
deleted automatically and will persist after the project has expired.
{: .callout-warning}
