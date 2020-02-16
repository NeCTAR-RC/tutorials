---
title: Access Object Storage via the Dashboard
order: 2
duration: 15
---

In this tutorial we will use the Nectar Research Cloud Dashboard to create a container and upload files to it. 

### What is container?
A container is like a folder in which you can put files. The difference to a normal folder is that a container is intended for a flat hierarchy, so you cannot create containers within a container. However, you may create folders within the container, so you can still organize your files hierarchically.

### Create a container and folder

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Navigate to the `Project | Object Store | Containers` page. This page shows any existing containers or none if you don't have one.
3. Click the `+ Container` button to create a new container.
    ![Object Storage Container page1]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard1.png)
4. Enter container name in the `Container Name` field and click the 'Submit' button. You can also choose whether you want the new container to be public or private by click the options in `Container Access`. After clicking the button, you should see a new container is created.
    ![Object Storage Container page2]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard2.png)
5. To create a new folder under the newly created container, you can click the `+ folder` button.
    ![Object Storage Container page3]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard3.png)
6. In the Dialog, enter a folder name in the `Folder Name` field and click `Create Folder` button.
    ![Object Storage Container page4]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard4.png)

### Upload a file
1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Navigate to the `Project | Object Store | Containers` page. This page shows any existing containers. Click to select a container you want to upload a file. Then click the `file upload` icon to upload a file.
    ![Object Storage Container page5]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard5.png)
3. In the dialog, click `Choose file` button to select a file and click the `Upload File` button.
    ![Object Storage Container page6]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard6.png)
4. You should see the selected file uploaded to the container.

### Delete a container and folder
1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Navigate to the `Project | Object Store | Containers` page. This page shows any existing containers. Click to select a container you want to delete.
3. You need to delete files and folders first before you can delete a container.  To delete a file or folder, click the `Delete` from a drop down list or the `Delete` button.
    ![Object Storage Container page7]({{ site.baseurl }}/assets/images/object-storage/object_storage_dashboard7.png)

### Edit files
1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Navigate to the `Project | Object Store | Containers` page. This page shows any existing  containers. Click to select a container you want to edit files.
3. Choose the file you want to edit or you can navigate folders by clicking the folder name.
4. Select the action you want to do to the file by clicking the drop down list. For example, you can download the file by clicking the `Download` or to replace a file you can click `Edit`.

### Make a container public
1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Navigate to the `Project | Object Store | Containers` page. This page shows any existing containers. Click to select a container you want to make it public.
3. Tick the `Public Access` option to make the container public and you will get a public accessible  link.

**Notice** 
Only empty container can be deleted. However, you can delete a non empty folder. 
{: .callout-warning}