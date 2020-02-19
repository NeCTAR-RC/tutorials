---
title: Create Credential
order: 2
duration: 5
---

### Install Required Packages

```
sudo apt update
sudo apt install python-openstackclient
sudo apt install python-keystoneclient
```

### Set up User Credentials

Before you can start, you need to setup the login details.

1. Log on to on your [Nectar Dashboard](https://dashboard.rc.nectar.org.au) and ensure you're working in the right project (Use the project selector on the top left-hand side)
2. Click your email address on the top left corner and click `OpenStack RC File` to download the authentication file. Save the file into your computer.

    ![User Credential Page1]({{ site.baseurl }}/assets/images/application-passwords/app-password-python-client1.png)

3. Click `Settings` in the same drop down menu get into the `Settings` page. Then click the `Reset Password` item to get your password.

    ![User Credential Page2]({{ site.baseurl }}/assets/images/application-passwords/app-password-python-client2.png)


4. Execute the below command with your authentication file and type in the password when it prompts.

    ```bash
    source project_name.sh
    ```

### Create Application Credentials

1. You can use the below command to create a new application credential:

    ```bash
    $ openstack application credential create <credentials name>

    +--------------+-----------------------------------------+
    | Field        | Value                                   |
    +--------------+-----------------------------------------+
    | description  | None                                    |
    | expires_at   | None                                    |
    | id           | 0cfa2baa33f546b7bec27f1b7461a1c5        |
    | name         | mydemo                                  |
    | project_id   | 6d23beae28fc41958a2ba5d5d68eb87f        |
    | roles        | Member                                  |
    | secret       | ErqiQo4wvf0CxajMkPd66cKmVVoZ93KogQDwBYJ |
    | unrestricted | False                                   |
    +--------------+-----------------------------------------+
    ```

2. Use the below command to see what other options available for the `application credential create` command:

    ```bash
    $ openstack application credential create --help
    ```