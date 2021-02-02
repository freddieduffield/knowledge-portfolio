# DynamoDB

## overview 
### types of DBs
**Relational DB** - traditionally RDBMS using SQL where the primary choice of datastorage. They created strong requirements on data modelling, had the ability to do joins / aggregations / computations. This could get compute heavy, which requires vertical scaling i.e more powerful CPU / RAM / IO
 
**NoSQL** - (no only sql) distributed, doesn't support join - all data that is needed has to be present in one row. Doesn't perform aggregations. Give the data you need effieciently - Scales Horizontally. 

### DynamoDB
* fully managed, highly available. 
* NoSQL 
* Scales massive workloads
* Millions of requests per seconds, trillions of row, 100s TB of storage
* Fast and consistent in performance
* integrated IAM for security and adminstration 
* enables event driven programming with dynamoDB streams
* low cost and auto scaling capabilities

## Basic terminology

- `Tables`:
- `primary key`:
- `items` : 400kb
- `attributes` - similar to fields or columns  
- data types
    - Scalar Types: string, number, binary, boolean, null
    - Document types: list, map 
    - set types: string set, number set, binary set
  
### `primary key`

**Option 1:** Partition Key Only
* unique for each item 

eg. where `user_id` is the primary key

|user_id| firstname | age |
|:---:|:---:|:---:|
|1232Beor|john| 46 |
|2141mdsl |katie| 31 |     
    
**Option 2:** partition key and sort key
composite primary key composed to two attributes.
* combination must be unique
* Data grouped by partition key
* sort key is range key, that orders data

eg. `user_id` & `game_id`

|user_id| game_id | result |
|:---:|:---:|:---:|:---:|
|1232Beor|123| win |
|1232Beor|132| lose |
|1232Beor|992| win |


## Provisioned Throughput

* A table must have a provisioned read and write capcity units.
* **RCU - read capcity units** throughput for reads
* **WCU - Write Capacity units** throughput for writes
* option to setup autoscaling of throughput to meet demand
* Throughput can be exceeded temporarily using "burst credit"
* if burst credit empty `ProvisionedThroughputException`

### WCU
* one write per second for an item up to 1kb
* if item larger than 1kb more WCU are consumed

**example** 
1. 10 objects per second 2KB each 
    * 10 * 2 = 20WCU
2. 6 objects per second 4.5KB 
    * 6 * 5 = 30 WCU 
3. 120 objects per minute of 2KB
    * 120 / 60 * 2 = 4WCU        
 
### RCU
* one strongly consistent read per second or two eventually consistent read per second for an item of up to 4KB each.
* if item larger than 4kb more RCU are consumed

**example** 
1. 10 strongly consistent reads per seconds 4KB each
    * 10 * 4KB /4KB = 10RCU
2. 16 eventually consistent reads per seconds of 12KB each
    * (16 / 2) * (12 / 4) = 24RCU    
3. 10 strongly consistent per seconds of 6KB
    * 10 * 8 / 4 = 20RCU 
 
 ### Partions Internal 
 
* Data is divided in partitions
* Partion keys go through hashing alogrithm to know which partition they go to  
* WCU & RCU are spread evenly between partitions. 

### Throttling
* when exceeding RCU or WCU we get `ProvisionedThroughPutExceededExceptions`
* reasons: 
    * Hot keys - one partition key is being read too many times 
    * very large items
* solutions: 
    * Exponential Back-off when exception encounterd (in SDK)
    * distribute partion keys as much as possible 
    * If RCU issue, DynamoDB Accelerator (DAX)     


#### Strongly consistent Read vs Eventually Consistent Read
* Eventually Consistent Read - read just after write, possible to get unexpected response due to replication.
* strongly consistent read: read just after write, we will get the correct data
* **by default** DDB use eventually consistent reads. however `getItem`, `Query`, `Scan` provide a `ConsistentRead` parameter you can set to true. 


    

--- 
## Resources 

####[Choosing the right partition key](https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/)

