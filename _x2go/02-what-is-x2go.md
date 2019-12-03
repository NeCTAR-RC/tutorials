---
title: What is X2Go
order: 2
duration: 3
---

X2Go is a free remote desktop tool using NX technology for low latency access to graphical desktop environment running on remote computers. 

Features include:

- Simple installation
- Client supports Windows, Mac and Linux
- Traffic is securely tunnelled over SSH
- Very fast window redraw, low latency feedback on user input
- Dynamic window re-scaling (you can drag the X2Go window to resize it, and the remote windows resize too)
- Supports multiple desktop environments
- Copy and paste passthrough
- Remote file sharing

### X2Go Server

The X2Go server is the server application that runs on the remote machine. It starts the graphical desktop sessions and receives the input from X2go client. Then it transfers the rendered desktop and processed results to the X2Go client. 

### X2Go Client

The X2Go Client is the client application that connects to a remote X2Go server and displays a graphical desktop on a local machine. The client requires X11 server installed on the local machine. On Windows, The X11 server has included in the installation. On Linux, the client uses the local Xorg server. On Mac, XQuartz X11 server is required for the client to function.

**Note**
Please refer to [X2Go official website](https://wiki.x2go.org/doku.php) for more information about X2Go.
{: .callout-warning}
