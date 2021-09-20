---
title: Account and Trial projects
order: 3
duration: 5
---

The first time you log on to the dashboard, Nectar creates two things: your *Account* and a *Personal Trial (pt)* project. Your personal trial is a *project* named pt-*xyz* (where *xyz* is a number); it is tied to your account.

### Your Nectar Account

You log on to [Nectar dashboard](https://dashboard.rc.nectar.org.au/) using [AAF](https://aaf.edu.au/) (in Australia) or [Tuakiri](https://www.reannz.co.nz/products-and-services/tuakiri/) (in New Zealand). AAF and Tuakiri provide both authorisation and authentication, using your identity (i.e. username) at your home institution.

Your account associated with your email address, will contain account-related information, such as your public-private key pairs (when you register them), your Nectar OpenStack password or any Application Credentials you might create.

**Your password**
Your Nectar OpenStack password is not the same thing as your AAF/Tuakiri password. Read more about the Nectar OpenStack password in our [knowledge base article](https://support.ehelp.edu.au/support/solutions/articles/6000145832-the-nectar-openstack-password). Note also that [Nectar OpenStack Application Credentials](https://support.ehelp.edu.au/support/solutions/articles/6000212274-application-credentials) are a more sophisticated solution than the Nectar OpenStack password for similar use.
{: .callout-warning}

### Your pt-project

In this project you are allocated a very limited quota of 2vCPU of resources for a maximum of 6 vCPU-month of running time. The project also has a time limit of 180 days (approximately 6 months).

Like other standard projects, your pt project is the home of instances, it has quota of some resources allocated (e.g. vCPU, RAM) and project-related things, such as Security Groups.

In other ways your pt-project is different from standard projects. It has *limited resources* (2 vCPU for up to 6 vCPU-months). You cannot share your pt-project with others; there is no user management to grant access to other Nectar users. You get your pt *no questions asked*; there is no application or allocation process. Your *pt-project* is useful for trialing Nectar or indeed completing most of our Nectar tutorials.

Note that 1 vCPU-month equates to 1 Nectar server with 1 vCPU running for 30 days. For the purpose of this measure, a server that is in "paused", "stopped" or "shut-off" state also counts as running.  The only way to stop the meter is to either Delete the server or Shelve it.

Once you have used all of the allocated resources, or once 6 months have elapsed, your pt-project will expire. If you have built up anything valuable in your *pt-project* you can request that we *Convert your trial project* when you apply for a project allocation. If your application is approved, the content of your project trial will be moved to your new project, and your project trial quotas reduced to zero.

Note that the Expiry Bot will start removing instances from your pt-project shortly after pt-project expiration. To retain them by using a trial project conversion, you need to submit a *timely* allocation request. Further details are in the section entitled "Project Trial" in our support article on [Expiry and Renewal](https://support.ehelp.edu.au/support/solutions/articles/6000171494-project-allocation-expiry-and-renewal).
{: .callout-warning}
