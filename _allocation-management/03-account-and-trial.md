---
title: Account and Trial projects
order: 3
duration: 5
---

The first time you log on to the dashboard, Nectar creates two things: your *Account* and a *Personal Trial (pt)* project. Your account represeents you and is tied to your email address. Your personal trial is a *project* named pt-*xyz* (where *xyz* is a number); it is tied to your account. The two are closely related, but they are not the same thing.

### Your Nectar Account

You log on to [Nectar dashboard](https://dashboard.rc.nectar.org.au/) using [AAF](https://aaf.edu.au/) (in Australia) or [Tuakiri](https://www.reannz.co.nz/products-and-services/tuakiri/) (in New Zealand). AAF and Tuakiri provide both authorisation and authentication, using your identity (i.e. username) at your home institution.

Your account is created upon your first logon. Your account is associated with your email address and will contain some account-related information, such as your public-private key pairs (when you register them), your Nectar OpenStack password or any Application Credentials you might create. 

Your Nectar OpenStack password is not the same thing as your AAF/Tuakiri password. Read more about the Nectar OpenStack password in our [knowledge base article](https://support.ehelp.edu.au/support/solutions/articles/6000145832-the-nectar-openstack-password). Note also that [Nectar OpenStack Application Credentials](https://support.ehelp.edu.au/support/solutions/articles/6000212274-application-credentials) are a more sophisticated solution than the Nectar OpenStack password for similar use.
{: .callout-warning}

### Your pt-project

Upon your first logon Nectar creates a trial project for you, known as your *pt*-project (or *personal trial*). In this project you are allocated a very limited quota of 2vCPU of resources for a maximum of 6 vCPU-month of running time. 

Your pt-project is like a full-fledged project in many ways. It is the home of instances, it has quota of some resources allocated (e.g. vCPU, RAM), it houses your project-related things, such as Security Groups

In other ways your pt-project is different from full-fledged projects. It has *limited resources* (2 vCPU for up to 6 vCPU-months). You can't share your pt-project with others; there is no user management to grant access to other Nectar users. You get your pt *no questions asked*; there is no application or allocation process. Your *pt-project* is useful for trialing Nectar or indeed completing our Nectar tutorials.

After you have used all of the compute time allocated to you in your pt-project it will expire. If you have built up anything valuable in your *pt-project* you can request that we *Convert you trial project* when you submit a request for a project allocation. Note that the Expiry Bot will start removing instances from your pt-project shortly after pt-project expiration. To retain them by using a trial project conversion, you need to request a project timely. More detail in the section Project Trial in our article on [Expiry and Renewal](https://support.ehelp.edu.au/support/solutions/articles/6000171494-project-allocation-expiry-and-renewal) 