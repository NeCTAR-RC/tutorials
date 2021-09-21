---
title: Prerequisites
order: 2
duration: 1
---

Install Python development tools on your development machine:

For Linux/WSL
```
sudo apt-get install python3-dev virtualenv gcc
```

For MacOS:
```
brew install python3
pip3 install virtualenv
```

Create and activate virtual environment to install the software:
```
cd ~
virtualenv .elasticluster
source .elasticluster/bin/activate
(you can use deactivate to stop using the virtualenv)
```

Install ElastiCluster on the virtual environment:
```
git clone https://github.com/NeCTAR-RC/elasticluster.git
cd elasticluster
pip install -e .
```