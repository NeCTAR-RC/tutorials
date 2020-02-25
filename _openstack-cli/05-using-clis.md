---
title: Using the CLI tools
order: 5
duration: 10
---

In this section, we are going to introduce some basic commands and usage of OpenStack client.

### Commands

To list all available commands:

```
openstack --help
```

To get a description of a specific command:

```
openstack help <command>
```

### Examples

List all available servers in your project:

```
openstack server list
```

Show the detailed information for server `test01`:

```
openstack server show test01
```

Create a new image:

```
openstack image create --disk-format=qcow2 --container-format=bare --public --copy-from http://somewhere.com/text.image test
```
 
 List available volumes:
 
 ```
 openstack volume list
 ```

To get a complete list of all available options, please visit the [OpenStack Client website](https://docs.openstack.org/python-openstackclient/latest/cli/index.html).
