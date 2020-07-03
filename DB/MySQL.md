# MySQL

install with homebrew - [installation instructions](https://tableplus.com/blog/2018/11/how-to-download-mysql-mac.html)

login to root user
```sh
mysql -u root -p
```
type root password [enter]

Create new database
```sql
CREATE database photo_app;
```

Show database tables
```sql
SHOW databases;
```

create user 
```sql
CREATE user ‘fred’@‘localhost’ IDENTIFIED BY ‘password’;
```

Grant privileges on all database tables
```sql
GRANT ALL privileges ON photo_app.* TO ‘fred’@‘localhost’;
flush privileges;
```

Login with user 
```sh
mysql -u fred -p
```

use db 
```sql
USE photo_app;
```

show tables
```sql
SHOW tables;
```

leave MySQL
```sql
exit
```


