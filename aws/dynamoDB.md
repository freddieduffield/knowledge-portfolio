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
    

--- 
## Resources 

####[Choosing the right partition key](https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/)

