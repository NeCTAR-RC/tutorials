---
title: Manage Security Group
order: 2
duration: 10
---

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Navigate to the `Project | Network | Security Groups` page

### Change Security Group Name

1. Click `Edit Security Group` in the Actions list for the security group you want to change.

    ![Security Group Dialog1]({{ site.baseurl }}/assets/images/intermediate-security-groups/security-group1.png)

2. Enter a new security group name in the `Name` field
3. Click `Edit Security Group` button

### Delete Security Group Name

1. Click `Delete Security Group` in the Actions list where the security group you want to delete
2. Click `Delete Security Group` button

    ![Security Group Dialog2]({{ site.baseurl }}/assets/images/intermediate-security-groups/security-group2.png)


### Add And Delete Rules

1. Click `Manage Rules` in the Actions List for the security group you want to add or delete rules
2. To delete a rule, click the red button `Delete Rule`
3. To add a new rule, click the `Add Rule` button

    ![Security Group Dialog3]({{ site.baseurl }}/assets/images/intermediate-security-groups/security-group3.png)

4. Below is a list of `Rules` you can select:
    -  Custom TCP Rule: Rules to allow TCP protocol network connection. This is the most common rule you can use to allow network connection since most of network connections use TCP. Fox example, you can allow web connection by port 80 using Custom TCP Rule
    - Custom UPD Rule, if you want to allow connection using UDP protocol, you can use this Rule
    - Custom ICMP Rule, if you want to allow connection using ICMP protocol, you can use this Rule
    - Other Protocol, if you want to allow other protocols, you can use this Rule
    There are other pre-defined rules that you can select to allow some services such as DNS, HTTP and SSH
5. You can block connection by direction Select Ingress for incoming network traffic and Egress for outgoing traffic
6. Type in the port number in `Open Port`
7. Click `Add` button