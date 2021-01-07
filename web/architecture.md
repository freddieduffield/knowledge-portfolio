# Web Application Architectures

* client server
  * request response
* Peer-to-Peer
* MVC
* Mircoservices
* Event driven

# Mircoservices with Node and React
- Data management between services is challenge of mircoservices
## Database per service
- One db per service independent 
- no db is single source of failure
- increase uptime
- different db for different causes 

## communication strategies between services
### Sync
communication directly with requests
- no db required
- dependencies
- inter requests fail - main request fails
- only as fast as slowest request
### Async
#### event based communication

- service emits event 
- event bus routes to required services



