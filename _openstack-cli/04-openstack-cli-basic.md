---
title: OpenStack Client Basic
order: 4
duration: 10
---

In this section, we are going to introduce some basic commands and usage of OpenStack client.

### Commands

To list all available commands:

```bash
openstack --help
```

To get a description of a specific command:

```bash
openstack help <command>
```

### Examples

List all avaialble server in your project:

```bash
openstack server list
```

Show the detailed information for server `test01`:

```bash
openstack server show test01
```

Create a new image:

```bash
openstack image create --disk-format=qcow2 --container-format=bare --public --copy-from http://somewhere.com/text.image test
```
 
 List available volumes:
 
 ```bash
 openstack volume list
 ```

To get a complete list of all available options, please visit the [OpenStack Client website](https://docs.openstack.org/python-openstackclient/latest/cli/index.html).