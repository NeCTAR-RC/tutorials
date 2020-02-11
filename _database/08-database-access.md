---
title: Access The Database
order: 8
duration: 10
---

We use mysql client in this section.

### Connect to database

```bash
$ mysql -u <database_user_name> -p -h <database_instance_ip>
Enter password: 
mysql>
```

### Show databases and use database

```bash
SHOW DATABASES;
Use <database name>;
```

### Show tables

```bash
SHOW Tables;
```

### Select data from table

```bash
SELECT * FROM <table name>;
```

To find out mre about mysql client, please go to this [Tutorial](https://dev.mysql.com/doc/refman/8.0/en/tutorial.html).