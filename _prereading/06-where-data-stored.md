---
title: Data and Hardware location
order: 6
duration: 1
---

Your data storage & Nectar instance are based here in Australia, unless you have chosen Auckland as your Availability Zone (meaning it's based in New Zealand).

To explain further, we partner with different institutions (known as nodes) to deliver the Nectar Cloud. These nodes include institutions like Monash University and Swinburne University. These institutions play a role in hosting and operating the hardware on location, which we call `Availability Zones` - the physical place where the data centre resides. When you go to create a Virtual Machine, Volume or a form of Compute or a Database, you are asked to select an Availability Zone.  For these zones, you will see names like Melbourne, Monash & Swinburne etc. Here you are selecting that physical place where your storage will 'live'.

For Nectar's Object Storage service the stored data is replicated across three Availability Zones for redundancy purposes, this includes data placement across different states. For NZ users Object Storage placement remains in New Zealand.