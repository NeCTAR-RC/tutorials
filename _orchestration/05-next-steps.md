---
title: Next Steps
order: 4
duration: 5
---

In this tutorial we have explored the elements of templates and how they work.
We also looked at how to deploy them using the dashboard and using the command line tools.

However, we've only just scratched the surface of what can be done with the orchestration service.
If you're interested in diving deeper, there are some things we can recommend.

### Resources
The full list of supported resources types can be browsed via the dashboard's
[resources list page](https://dashboard.rc.nectar.org.au/project/resource_types/).
Most types of cloud resources are available for provisioning via templates.

### Examples
Don't forget about our collection of [example templates](https://github.com/NeCTAR-RC/heat-templates).
These templates have been developed and tested by us to ensure they work well on the Nectar Research Cloud.

Note that in these examples we've used 0.0.0.0/0 as a source address for security groups for simplicity.
This is not good practice and where possible you should limit access to any service to only address ranges that are required.

### OpenStack Heat Project
OpenStack have comprehensive documentation of the [Heat project](https://docs.openstack.org/heat/).

Other useful examples and documentation may be found at
[openstack heat templates](https://opendev.org/openstack/heat-templates/) and
[openstack template guide](https://docs.openstack.org/heat/latest/template_guide/index.html)
