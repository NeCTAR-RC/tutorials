---
title: Allow Connections by IPs
order: 3
duration: 5
---

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Navigate to the `Project | Network | Security Groups` page
3. Click `Manage Rules` in the Actions List for the security group you want to add or delete rules
4. To add a new rule, click the `Add Rule` button.
    ![Security Group Dialog1]({{ site.baseurl }}/assets/images/intermediate-security-groups/security-group3.png)
5.  In the `Add Rule` dialog,  by default, Rules open network traffic for all IP addresses. If you want to open network traffic for only certain IP addresses, you can do the following in the `CIDR` field:
    - Open network traffic to one single IP: 1.2.3.4./32 
    - Open network traffic to a range of IPs: 1.2.3.4/24. This opens traffic to IPs from 1.2.3.0 to 1.2.3.254
6. Click `Add` button