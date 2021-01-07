# HTTP

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


