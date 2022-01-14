---
title: Accessing the Volume
order: 5
duration: 5
---

### Accessing via the Command Line

To access the volume itself, within the Command Line, you need to use the `cd` (**C**hange **D**irectory) command.
As we mounted the Volume to the `/pvol` path, we will navigate here. **This is the main folder for your Volume**.
```
cd /pvol
```

While in this directory, you can work create/save files as normal, and they will remain on the Volume. You can detach and attach it to another instance/VM (just like an External Hard Drive!) and continue working on the files you were previously.

### Accessing in your graphical interface (FileZilla)

To access the Volume via your graphical interface software (like Filezilla or equivalent), simply [connect to your instance]({{ site.baseurl }}/moving-data/03-filezilla) as usual, then navigate to the `/pvol` folder in the `remote` section of your instance. Then you can simply drag and drop files across as you normally would to move files to the Volume.

![folder example]({{ site.baseurl }}/assets/images/volume-storage/pvol.PNG)
