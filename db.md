# DataBases

# MongoDB

* Run mongoDB

```bash
mongod --config /usr/local/etc/mongod.conf --fork
or better to do

    mongod


* Verify mongoDB is running 

    ps aux | grep -v grep | grep mongod


* stop mongod running 

    $ top 
    
    find PID
    
    $ kill <PID>
