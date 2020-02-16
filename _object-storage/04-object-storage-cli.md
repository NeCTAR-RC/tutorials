---
title: Access Object Storage via python client
order: 4
duration: 15
---

### What is Swift python client

Swift python client is a python client to access Swift (Object Storage) API. It has two components: a Python API (the swiftclient module) for accessing Swift programmatically and a command-line script (swift).

You can find more information from the python swift client [website](https://github.com/openstack/python-swiftclient).

### Installation

We assume you use Ubuntu 19.04 and python3 to install the Swift python client.

```bash
sudo apt update
sudo apt install python3-swiftclient
```

### Set up Login Credentials

Before you can start, you need to setup the login details.

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Click your email address on the top right corner and click `OpenStack RC File` to download the authentication file. Save the file into your computer.

    ![User Settings Page1]({{ site.baseurl }}/assets/images/object-storage/object-storage-swift-python-client1.png)

3. Click `Settings` in the same drop down menu to get into the `Settings` page. Then click the `Reset Password` item to get your password.

    ![User Settings Page2]({{ site.baseurl }}/assets/images/object-storage/object-storage-swift-python-client2.png)


4. Execute the below command with your authentication file and type in the password when it prompts.

    ```bash
    source project_name.sh
    ```

### Command Line Interface(CLI)

After you have sourced your authentication file, you can type the below command to get all available options for the swift command:

```bash
swift --help
```

The below lists all containers in your project:

```bash
swift list
```

To find more information about how to use swift cli, please visit the [website](https://docs.openstack.org/python-swiftclient/latest/cli/index.html).

### Python Code
Besides using the CLI, you can also write python code to access containers. In this section we present some simple code examples that demonstrate the usage of the swiftclient API. You can find full details of the options and methods available to the API in [website](https://docs.openstack.org/python-swiftclient/latest/introduction.html.

List the available containers:

```python
import swiftclient

user = username
key = password
auth_url = 'https://keystone.rc.nectar.org.au:5000/v3/'
auth_version = '3'
os_options = {
    'user_domain_name':'Default',
    'project_domain_id':'default',
    'project_name': project_name
}

conn = swiftclient.Connection(user=user,key=key,os_options=os_options, auth_version=auth_version,authurl=auth_url)

containers = conn.get_account()

for container in containers:
    print(container)
```

Create a new container:
```python
container = 'new-container'
conn.put_container(container)
containers = conn.get_account()
if container in containers:
    print(container)
```