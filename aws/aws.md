# AWS

`ARN` - Amazon Resource Names : uniquely identify aws resources, used to specify a resource unambigously across AWS

```
arn:partition:service:region:account-id:resource-id
```

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

## CloudWatch

Provides data and actionable insights to monitor applications.

## DynamoDB

## Lambda

## Amplify

## AppSync

helps create flexible api to get data to your app using graphQL
