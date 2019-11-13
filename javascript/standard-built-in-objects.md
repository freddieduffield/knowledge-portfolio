# Standard Built in Objects 

## Proxy 


The proxy object is used to define custom behaviour for fundemental operations (eg. property look-up, assignment, ennumeration, function invocation etc)

Takes a `handler` and `target` parameters

```js
var handler = {
  get: function(obj, prop) {
    return prop in obj ?
      obj[prop] :
      37;
  }
}

var p = new Proxy({}, handler);

p.a = 1;
p.b = undefined;

console.log(p.a, p.b) // 1 , undefined
console.log(p in c, p.c) // false , 37
```