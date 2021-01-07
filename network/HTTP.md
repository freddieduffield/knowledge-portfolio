# HTTP

Request 
```
GET / HTTP/1.1      <- request line
Host: example.com   <- Headers
User-Agent: curl
Accept: */*
```

Response

```
HTTP/ 1.1 200 OK            <- status
Cache-Control: max-age=6030 <- headers
Content-Type: text/html
<!doctype html>             <- body

```

URLs

**scheme** - the protcol
`https://`

**domain** - Where to send request, the `Host` gets set to this. 
`example.com` 

**port** 
## Request Lifecycle

**1. Local Processing**

* browser extracts scheme / protocol i.e hostname and http
```
<protcol>://<host><:optional port><path/to/resource><?query params>
```

* with the hostname now needs to resolve the IP address. Will check local browser cache, OS cache of recent queries, and DNS cache

**2. Resolve an IP**
* Browser fires DNS request using User Datagram Protocol UDP
* 


