---
title: Install Git
order: 2
duration: 5
---

In this tutorial, we assume you use a virtual machine with ubuntu 19.04 installed. 

### Install Git on Linux

1. From your shell, install Git using apt-get:

```bash
sudo apt-get update
sudo apt-get install git
```

2. Verify the installation was successful by typing:

```bash
git --version
```

3. Configure your Git username and email:

```bash
git config --global user.name "your name"
git config --global user.email "your email address"
```