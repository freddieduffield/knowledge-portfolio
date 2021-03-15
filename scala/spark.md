# Apache Spark

## RDD 

Resilient Distributed Dataset - bunch of rows of data, distributed because it can run on multiple computers

*spark context* creates the RDD 

RDD can come from S3 / hadoop / databases / json / CSV

### RDD Methods
* map 
* flatmap
* filter
* distinct 
* sample
* union, intersection, substract, cartesian

```scala
val rdd = sc.parallelize(List(1,2,3,4))
val squares = rdd.map(x => x*x)

// 1, 4, 9, 16
```
RDD methods accept a function as parameter

### RDD Actions 
Give me an answer.

* collect - give you everything back in one giant datastructure in scala
* count - count stuff
* countByValue - how many rows exist for each value in key value pair
* take
* top
* reduce

Nothing actually happens in your drive program until an action is called.
(can be help for debugging nothing happens unitl an action is called)



### `StructType`  
Part of spark schema I.e used to create a data frame, a class which is a collection of `StructField` and that define column name / type / nullable / metadata

```scala
val schema = StructType(List(
                        StructField("docId",StringType,true), 
                        StructField("doi",StringType,true),
                        StructField("articleBody", StringType, true),
                        StructField("articleSecTitle", StringType, true),
                        StructField("articleSubSec", StringType, true),
                        StructField("error", StringType, true)
))
```
