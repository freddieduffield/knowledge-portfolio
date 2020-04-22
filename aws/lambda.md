# AWS Lambda 

## EC2 vs Lambda

EC2 
- Virtual servers in the cloud 
- Limited by RAM and CPU
- Continously running 
- scaling means intervention to add / remove servers

Lambda
- Virtual functions - no servers management 
- Limited time - short executions 
- Run on demand 
- scaling automated

## Benefits of Lambda 
- Easy pricing 
  - pay per request and compute time
- integrated with the whole AWS stack 
- integrated with many programming languages 
- Easy monitoring with CloudWatch
- Easy to get more resources per functions


## Reuse S3 connections

https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html
https://aws.amazon.com/blogs/compute/container-reuse-in-lambda/
https://medium.com/capital-one-tech/best-practices-for-aws-lambda-container-reuse-6ec45c74b67e
https://www.jeremydaly.com/reuse-database-connections-aws-lambda/
https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html
https://winterwindsoftware.com/fff-function-initialisation/
https://medium.com/capital-one-tech/best-practices-for-aws-lambda-container-reuse-6ec45c74b67e
