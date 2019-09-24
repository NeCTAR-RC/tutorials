---
title: Try Out Your Application
order: 5
duration: 7
---

Once you log in with the **Username** and **Password** you provided earlier, you will reach the R-Studio landing page in this example.

You can launch R-Studio from here. We also provide a link to Shiny Server that has also been installed, and a link to access the instance desktop via browser.

![Launch Building]({{ site.baseurl }}/assets/images/applications/rstudio-landing.png)

R-Studio will require you to log in again with the **Username** and **Password** you provided earlier.

![Launch Building]({{ site.baseurl }}/assets/images/applications/rstudio-signin.png)

R-Studio is now available!

![Launch Building]({{ site.baseurl }}/assets/images/applications/rstudio-console.png)

This application also offers access to R-Studio through *Remote Desktop* via *X2Go*. This might be especially useful for workloads that require visualisations that can't be handled from within the browser environment.

If you would like to use the Remote Desktop interface, you should install the *X2Go client*. It is available for Windows, Mac and Linux from [x2go.org](https://x2go.org).

Once installed and running, you should click the `Create Session` button and provide the **Host**, **Login** and **SSH keypair** details. Your **Session type** should be XFCE.

![x2go-session-settings]({{ site.baseurl }}/assets/images/applications/rstudio-x2go.png)



| Setting      | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| Host         | use the instance IP address, or the hostname `[hostname].[project].cloud.edu.au` |
| Login        | use the username you created in the *Configure Application* dialog |
| RSA/DSA key  | use the private key that corresponds to the key you chose in the *Configure Application* dialog |
| Session type | use *XFCE*. The application is preconfigured with the XFCE desktop environment |

Once you have created the session and connected, the XFCE desktop environment will appear and you can launch R-Studio from the Applications menu.

![Launch Building]({{ site.baseurl }}/assets/images/applications/rstudio-desktop.png)

