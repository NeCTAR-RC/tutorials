---
title: Allow connections by IP address
order: 3
duration: 5
---

To specify a single IP address or a range of IP addresses for a security
group rule, you would choose `CIDR` for the `Remote` option.

CIDR (or Classless inter-domain routing) notation is a method of representation
of IP addresses. It is made up of two parts, the first being an IP address,
followed by a slash (`/`) and a number indicating how many bits of the address
are used to define the network.

Some common options might be:
   - **0.0.0.0/0** To allow access to *any* available IP address. This is potentially
     risky and should generally be avoided if possible.
   - **192.168.1.0/24** To allow any IP address between `192.168.1.1` and `192.168.1.254`.
   - **10.1.2.3/32** To allow the single IP address `10.1.2.3`. The `/32`
     component is used for identifying a single IPv4 address.
