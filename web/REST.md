# REST

 Representational State Transfer: a set of principles that define how web standards such HTTP and URIs should to be used. It is an architectural approach to design web services.

# Design Principles
* designed around resources i.e that is any kind of object, data or service that can be accessed by a client. 

* A resource has an unique identifier, in the shape of a uri. 

* clients interact with a service by exchanging representations of resources, e.g a JSON response. 

* Stateless request model, HTTP requests are independent and may occur in any order. Any server can handle any request from any client. Highly Scalable.  

* representation contains links, to other resources. 

*  focus on the business entities the web api exposes. 

* Doesn't have to be based on single physical data item, but will be presented to the client as single entity. Avoid creating api's that mirror the internal structure of a database. 

* entities are often grouped in collections, these require a separate resource e.g `orders` and return a list of items in the collection.  

## Five Principles
1. Give everything an id
2. Link things together
3. Use Standard methods
4. Resources with Multiple representations
5. communicate statelessly

## Methods
- GET:  retrieves a representation of the resource for the specificied URI.

- POST: creates new resource at specificied URI. the body of the request provides the details. Can also be used for operations that don't actually create resources.  

- PUT: either creates or replaces a resource at specificied URI. body of requests specifise the resource to be created or updated.Idempotent

- PATCH: performs partial update of a resource.

- DELETE: removes resource.
