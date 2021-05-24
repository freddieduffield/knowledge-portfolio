# AWS

`ARN` - Amazon Resource Names : uniquely identify aws resources, used to specify a resource unambigously across AWS

```
arn:partition:service:region:account-id:resource-id
```
`AZ` - Availability Zone: each region is divided into availability zones consisting of datacenters/   

---

## AWS regions

- Each region has availabilty zones
- each availabilty zone is a physical data center in the region.
- AWS consoles are region scoped (except IAM & S3)

---

## IAM (identity and access management)

- Users (1 per person)
- roles (1 per app)
- groups

permission polices in JSON

set up MFA

- Never use root account except for initial file

---

## Load Balancing

---

## SNS : Simple Notification Service

a web service that manages the delivery or sending of messages to subscribing endpoints or clients.

**clients**

- publishers (producers)
- subscribers (consumers)

Topic - logical access point and communication channel.
---
## SQS 

Simple Queue Service

### DLQ

Dead letter queue isolates problematic messages 

---

## Elasticache

fully managed redis and memcached

---

## Memcached

in memory data store.
Keeps data in memory rather than writing to disk. quick access to data.
Multi threaded scale up compute capcity.

---

## AWS Lambda

an lambda is essential a function the is excuted only when desired so to save cloud compute.

---

## CloudWatch

Provides data and actionable insights to monitor applications.

## DynamoDB

## Amplify

## AppSync

helps create flexible api to get data to your app using graphQL

### Service Quotas
AWS account limits for each service, region specific, some can change others can't. 
[https://console.aws.amazon.com/servicequotas/home/](https://console.aws.amazon.com/servicequotas/home/?#) 
