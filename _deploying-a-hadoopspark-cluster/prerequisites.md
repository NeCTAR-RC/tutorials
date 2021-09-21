---
title: Prerequisites
order: 2
duration: 1
---

Install Python development tools:

*For Ubuntu or Debian based linux:*
```
sudo apt-get install python3-dev virtualenv gcc
```

*For Red Hat Enterprise Linux, CentOS or Fedora:*
```
sudo yum install python3-devel python3-virtualenv gcc
```

*For MacOS:*
```
brew install python3
pip3 install virtualenv
```

*For Windows:*
```
Install the python3 package from https://www.python.org/downloads/windows/
pip install virtualenv
```

Create a virtual environment to install the software:
```
cd ~
virtualenv venv
source venv/bin/activate
```

Install ElastiCluster on the virtual environment:
```
git clone https://github.com/NeCTAR-RC/elasticluster.git
cd elasticluster
pip install -e .
```