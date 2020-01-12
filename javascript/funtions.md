# Functions

## the arguments object 

[Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

`arguments` is an array like object accessible inside functions that contains the values of the arguments passed to that function. 

you call call them like this

```JS
arguments[0] // first argument 
arguments[1] // second argument 
arguments[2] // third argument 
```

(slightly unrelated) you can get an array of arguments like this...

```js
function someFunction(...args) {
  console.log(args)
}

someFunction(1, 2, 3)
// return [1, 2, 3]
```

Perhaps the more old fashion way might be 
```js
var args = Array.prototype.slice.call(arguments);
```

or

```js
var args = [].slice.call(arguments);
```

or ES2015

```js
const args = Array.from(arguments)
```

or 

```js
const args = [...arguments]
```