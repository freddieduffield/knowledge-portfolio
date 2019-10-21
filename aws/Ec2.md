## EC2

- Renting virtual machines (EC2)
- Storing data on virtual drives (EBS)
- Distributing load across machines (ELB)
- Scaling the services using an auto-scaling group(ASG)

__AMI__ Amazon machine image

### ssh

- in the instance console
  - check `security groups: view inbound rules`
    ```
    ports: 22
    protocol: tcp 
    source: 0.0.0.0/0 //anyone
    ```
- copy `IPv4 Public IP`

- in terminal `ssh ec2-user@35.180.144`

- remember to reference key `ssh -i EC2Tutorial.pem ec2-user@35.180.144`

  - when first downloading pem file private keys are too open. `permissions 0644`

  - to fix: `chmod 0400 EC2Tutorial.pem`


### security groups

- control traffic to EC2 machines
- fundemental to troubleshooting networking issues
- authorise IP ranges - IPv4 & IPv6

- can be attached to mulitple instances 
- locked down to region / vpc combination
- live outside EC2 
- timeout usually a security group issue
- connection refused is an application error
- Default inbound traffic blocked - outbound traffic allowed

### IPv4 / IPv6 

IPv4 : `123.123.123.123`

IPv6 : `123.123.123.123.123.123`

__Public IPs__ 
- allow servers to speak to one another 
- accessible over the internet
- must be unique across the whole web

__Private IP__
- closed system, eg. companies network
- machine can only ne indentified on private network only
- IP unique across network
- two different companies can have the same IP
- machines connect to internet using WWW internet gateway
- only specific range can be private IPs

__Elastic IPs__

- when stopping and starting EC2 it can change it IP
- if you need fixed IP for your instance you need Elastic IP 

__Public vs Private__

- by default EC2 machine comes with...
  - private ip for the internal AWS network
  - public IP for WWW

- when ssh...
  - we cannot use private, with out vpn - not on same network
  - we can only use the public ip

- if machine stopped and started public IP can change

### (HELLO WORLD) Install Apache on a EC2 machine 

1. ssh into instance 

2. run `sudo su` to get into root user

3. `yum update -y` to update machine (`-y` says to everything)

4. `yum install -y httod.x86_64` - installs http

5. `systemctl start httpd.service` (make sure on Amazon Linux 2)

6. `systemctl enable httpd.service`

7. `curl localhost:80` - see in terminal the html for the page

8. echo "Hello world from $(hostname -f)" > /var/www/html/index.html

### EC2 User Data

bootstrap instances using a `EC2 User data` script

used to automate boot tasks, eg. 
- Installing updates
- installing software
- downloading common files from the internet 
- anything you can think of 

runs with root user


### EC2 Instance Launch Types

- On demand Instances: short workload, predictable pricing
- Reserved instances: long workloads (>= 1 year)
- convertible reserved instances: long workloads with flexible instances
- Scheduled reserved instances: launch within time window you reserve
- Spot instances: short workloads, for cheap, can lose instances

#### - EC2 On Demand

- pay for what you use
- highest cost (no upfront payment)
- no long commitment 

#### - EC2 Reserved Instances 
- up to 75% discount compared on On-demand
- pay upfront for what you use with long term commitment 
- 1 or 3 years
- specfic instance type
- steady state usage applications (eg. db)

  __-Convertible Reserve Instance__
  - change EC2 instance type
  - 54% discount

  __-Scheduled Reserve Instance__
  - launcg within time window you reserve

#### - EC2 Spot Instances

- 90% off compared to on demand
- you bid a price
- varies based on offer and demand
- 2 minute notification 
- Batch jobs

#### - EC2 Dedicated Hosts

- Physical dedicated EC2 server
- full control EC2 instance 
- 3 years
- more expensive

__use cases__
- complicated licensing model 
- strong regulatory or compliance needs

#### EC2 Dedicated instances 
- instances running on hardware that's dedicated to you
- may share hardware with other instances in the same account

### EC2 Pricing 

- region you are in 
- instnace type you are using 
- on-demand vs spot vs reserved vs dedicated host
- billed by the second with a minium of 60 seconds

 - other factors: storage / data transfer /fixed Ip /public address /load balancing 

 - you don't pay for instance if stopped

 [AWS pricing page](https://aws.amazon.com/ec2/pricing/on-demand)

 ### What is AMI?
 - base images : Ubuntu, Fedora, Windows
 - These images can be cutomised at runtime

 Can create custom AMI
 - pre-installed packages needed
 - faster boot time
 - configured with monitoring 
 - control of maintance
 - installing your app ahead of time 
 - using an optimised AMI

__AMI are build for specific AWS region__

### EC2 instance overview

5 distinct characteristics 

* RAM
* CPU
* I/O
* Network
* GPU 

over 50 of them 

[https://ec2instances.info/](https://ec2instances.info/)

### Burstable instances (T2)
- ok CPU
- when something unexpected, CPU very good. 
- if it bursts, uses burst credits
- when credits gone - cpu bad

#### T2 Unlimited
unlimited burst credit balance


