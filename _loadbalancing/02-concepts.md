---
title: Load Balancing concepts
order: 2
duration: 10
---

When working with load balancers, it's important to understand the elements
involved and how they work together to perform the load balancing service.

We'll briefly go over each of the elements
- Load balancer
- Listener
- Pool
- Pool member
- Health monitor

and discuss how they work together.

### Load balancer

The load balancer is the engine that powers the service and ties all the
elements together.

When you create it, you'll be required to provide the existing private network
that your application servers are connected to, in order for the load balancer
to be able to communicate with the application servers.

You can then assign a `Floating IP` to this port if you wish to make your
load balancer publically accessible over the Internet.


### Listener

The listener defines the frontend part of the load balancing service which
the clients will connect to.

Here you will need to define which protocol the listener should use (HTTP, HTTPS,
SSL-terminated HTTPS, TCP or UDP) and which port number.


### Pool

The pool is the backend part of the load balancer that contains a list of
members. When creating the pool, you choose the `algorithm` which decides which
member to sent the request to. For example, least number of connections or
round robin.


### Pool member

The pool members will represent the application servers available that can
process the requests. The pool member will require the IP address of the server
and the port number the application is listening on for handling the requests.


### Health monitor

The role of the health monitor is to establish whether or not the application
server is in a state where it is able to handle requests.

For HTTP-based applications, you may choose to periodically check a particular
path for an application server to ensure it returns a `200 OK` response, or
for TCP applications, you may use a TCP-monitor that tests that the desired
port is open.
