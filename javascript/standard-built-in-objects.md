# Standard Built in Objects 

## Error
---
thrown when runtime errors occur.

the global `Error` object contains no methods of its own - it inherits from the prototype chain. 

Throw a generic error

```js
try {
  throw new Error('Whoops!');
} catch(e) {
  console.error(e.name + ': ' + e.message); 
}
```


### Types of Error 
|Error|Description|
|---|---|---|
|`EvalError`| creates an instance respresenting an error that occurs regarding the global function `eval()` |
|`InternalError`| Creates an instnace representing an error that occurs when an internal error in the Javascript engine occurs|
|`RangeError`|Creates an instance representing an error that occurs when de-referencing an invalid |
|`ReferenceError`||
|`SyntaxError`||
|`TypeError`||
|`URIError`||

## Math 
|||
|---|---|
|`.max()` | return the largest of 0 or more numbers |
| `.round()` | returns the value of a number to the nearest integer | 


## Number 

||||
|---|---|---|
|`.parseFloat` | parses a string argument and returns a floating point | 
|`Number.protoype.toFixed()`| formats a number to using fixed point notation | `Number.parseFloat(x).toFixed(2)`


## Proxy 
---
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

