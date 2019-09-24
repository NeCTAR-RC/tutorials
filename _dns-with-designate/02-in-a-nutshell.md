---
title: Nectar DNS, In a nutshell
order: 2
duration: 3
---

You can use the Nectar DNS Service to add Domain Name System (DNS) services to
your Nectar Research Cloud projects. The Nectar DNS Service is based on the
OpenStack DNS as a Service project, *Designate*.

### Nectar Provided Zone

For new projects and projects with allocations being renewed, a Nectar provided
DNS zone will be created automatically for your project to use. The zone name
will be based on your given project name, and will be available for you to
create records in right away. The zone name will end with *.cloud.edu.au*

### Bring Your Own Zone

The Nectar DNS service can also host a domain name you currently own. If you
would like to host your domain on the Nectar DNS service, please send an email
request to [support@nectar.org.au](mailto:support@nectar.org.au) and we will
create the zone for you.

Once you have a zone created for your project, you are free to create and
delete any records you wish within this zone.

If you do choose to host your domain with us, for the entries to resolve
properly you will need to set the *Nameserver* records of your domain to:

```
ns1.rc.nectar.org.au (115.146.81.148)
ns2.rc.nectar.org.au (115.146.83.183)
```

Many institutions have service agreements in place with domain name service
providers, and will typically require that you use the approved service
providers when using an institution domain name (eg. your-uni.edu.au). Please
contact your institution IT services team for details.

### Using the Nectar DNS Service

To use the service, we offer a few methods:

- Your [Nectar dashboard](https://dashboard.rc.nectar.org.au)
- OpenStack [Command Line Interface (CLI)](tutorial/openstack-cli)
- Python OpenStack bindings
- Interacting with the OpenStack API directly

You will require your Nectar OpenStack password for CLI, Python bindings, and
direct API access.

**Note** The Nectar DNS service supports Designate API v2 only.
{: .callout-warning}

### Nectar Dashboard and CLI

We will show you how to access DNS service functions using the dashboard and
CLI coming up in this tutorial.

### Python Bindings

The `python-designateclient` package provides the Python bindings required to
interact with the Nectar DNS service though the Python programming language.

Please see the [OpenStack Python Bindings](https://docs.openstack.org/python-designateclient/latest/user/bindings.html)
reference material.

### API Reference

If you would like to interact with the HTTP REST API directly, you can find the
[OpenStack API Documentation](https://developer.openstack.org/api-ref/dns/)

