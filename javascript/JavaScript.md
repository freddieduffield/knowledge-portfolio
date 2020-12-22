# JavaScript

# Expressions and Operators 

## Logical Operators

`??` - [nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator): returns right hand side of operand if the left is `null` or `undefined`

### in  

returns true if the specified property is the specified object or its prototype chain. 

### of 

When looping through strings use `of`

---


# Statements and Declarations

## throw

a user defined exception. will be passed to first catch block, if no catch block exists program will terminate

# Strings 

### Slice 

The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.

```JS
'Hello'.slice(0, 4)
//returns 'Hell'
```

---

# Map

# Set
# Arrays

.shift - remove items from the front of the array.

.includes

---

### Array.prototype.filter()

[.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- filter takes a condition and returns an array with the items for which the condition returns true

**Helpers**

return odd numbers from an array

`array.filter(x => x % 2 )`

---

### Array.prototype.find()
[.find]()

find invokes the callback on each element of the array until it returns a truthy value.

**Parameters**
- callback
  - element
  - index
  - array
- this

**Returns:** element matching truthy return of callback immediately. if nothing is found it returns undefined.  

--- 

### Array.prototype.forEach()

[.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

**parameters:** 
- callback
  1. value of current element
  2. index of current element
  3. the array that is being traversed 

**Returns:** only if you specify a return. 

---

### Array.prototype.reduce()

[.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Reduce first argument a callback. second argument - intialValue

returns the type of the initial value

#### Examples

**count all instances in an array**

```js
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function(allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);
```

**Group by a property from an array objects**

```js
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function(acc, obj) {
    var key = obj[property];
    console.log('key: ', key);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupPeople = groupBy(people, 'age');

console.log(groupPeople);
```

---
### Array.prototype.some()

[.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

returns a boolean

tests if at least 1 item appears in an array 

---

### Array.prototype.sort()

[.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

- Returns a new array

- If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order.

**defaults** : ascending

**Output** : array

**Helpers**

sort lowest to highest (ascending)

`array.sort((a, b) => a - b)`

sort highest to lowest (descending)

`array.sort((a, b) => b - a)`

---

### Array.prototype.slice()

[.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

```js
const array = ['Fred', 'is', 'cool'];
array.slice(1);
// returns ['is', 'cool']
array.slice(2);
// return ['cool']

array.slice(-1);
// return ['cool']
array.slice(-2);
// returns ['is', 'cool']

array.slice(0, 1);
// returns ['Fred']
```

- A positive number will remove the items up to given index from the front of the array.

- A negative number with return the numbers from the end of the array

- the first argument as start and the second agrument is end

---

### Array.prototype.indexOf()

[.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

returns the first index of a given example.

    array.indexOf('Fred')
    // returns 0

---

    Array.prototype.lastIndexOf()

[.lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

    array.lastIndexOf('Fred')
    // returns 0

---

Together `indexOf` and `lastIndexOf` can be used to identify duplicates or unique values...

```JS

const array = ['Fred', 'is', 'named', 'Fred'];

console.log(array.indexOf('Fred'));
// 0

console.log(array.lastIndexOf('Fred'));
// 3

array.indexOf('Fred') !== array.lastIndexOf('Fred');
//true

array.indexOf('is') !== array.lastIndexOf('is');
// false

```

### Destructing Arrays

```js
const [greeting, ,,, name] = ['hello', 'my', 'name', 'is', 'Freddie']
console.log(greeting, name)
// -> hello Freddie
```

## Heplers

### get unique values

```js
const unique = [...new Set([1, 2, 3, 4, 1, 2])];
console.log(unique);
// [1, 2, 3, 4]
```

### Filter bad values

```js
const array = [undefined, 'chode', false, '', 12];
array.filter(Boolean);
// ['chode', 12]
```

# Objects

## [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
...copies all enumerable own properties from one or more source objects into a target object. returns target object. 

merging objects... 
```js
const falafel = {name: 'iFalafel', price: 350 }
const location = {street: 'middlesex Street', market: 'Petticoat lane'}

const iFalafelData = Object.assign(falafel, location); 

console.log(iFalafelData);
```

__parameters:__ 
* target
* sources

Properties of target object overwritten if they have the same key. Later sources overwrite earlier ones.

---
## [Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

__parameters:__ 

*

# Destructing in JavaScript 
## Objects

Basically you pull vaiables out of an object.

```js
const person = {
  name: 'fred',
  age: '33'
};

const { name, age } = person; 

console.log(`Hi, my name is ${name} and I am ${age} years old. Bye`);
// -> Hi, my name is fred and I am 33 years old. Bye
```

you can add them to already declared variables. you need to add brackets because opening a curly bracket declares a block. 

```js
const person = {
  name: 'fred',
  age: '33'
};

let name, age; 

({name, age} = person) 

console.log(name); // -> fred
console.log(age); // -> 33
```

destructing arguments from a function 

```js 
const getGreeting = ({name, age}) => `Hi, my name is ${name} and I am ${age} years old. Bye`

const greeting = getGreeting(person);

console.log(greeting);
```

rename a variable 

```js
const { name: firstname, age } = person 

console.log(firstname) // -> fred
```

default values 

```js
const person = {};
const {name = 'first name', age = 'DOB'} = person;
console.log(name) // -> first name 
console.log(age) // -> DOB
```

can also be used when setting a default value 

```js
const {name: firstname = 'frederick'} = person
console.log(firstname) // -> frederick
```

computed property 

```js
var prop = 'name'; 
var { [prop]: fred} = {name: 'frederick'}; 
console.log(fred) // -> frederick
```
nesting object destructoring 
```js

const person = {
  name: 'Fred',
  place: {
    country: 'Engl and',
    city: 'Great Yarmouth'
  }
}

const { name: firstname, 
  place: {
    country: land,
    city: town
  }
}

console.log(firstname) // -> fred
console.log(land) // -> England
console.log(town) // -> Great Yarmouth
```
rest of the object

```js
const person = {
  name: 'fred'
  age: 33
  height: 6
}
const {name, ...others} = person
console.log(name) // -> fred
console.log(others) // -> {age: 33, height: 6}
```

## Arrays 

taking items in order from array, this example takes the first two items and assigns them to a variable with a name of your choice. 

```js
const introduction = ['hello', 'my', 'name', 'is', 'Freddie'];

const [greeting, pronoun] = introduction; 
```

Skipping items

when destructing arrays you can take only the parts you want, and skip over those that you don't by using a comma as a place holder. 

```js
const [greeting, ,,, name] = ['hello', 'my', 'name', 'is', 'Freddie']
console.log(greeting, name)
// -> hello Freddie
```

assining the rest of the array 

```js
const jazzMusicians = [ 'John Coltrane', 'Charlie Parker', 'Miles Davis']; 

const [coltrane, ...theRestOfThem] = jazzMusicians; 
console.log(coltrane); 
// -> John Coltrane
console.log(theRestOfThem)
// -> ['Charlie Parker', 'Miles Davis']
```

🧠brain fuck  

swaping values of variables using destructoring

```js
var a = 1000;
var b = 1; 

[a, b] = [b, a]; 

console.log(a) // -> 1
console.log(b) // -> 1000
```

### Reference
- [Object Destructuring in ES6](https://dev.to/sarah_chima/object-destructuring-in-es6-3fm)
- [Destructuring Assignment in ES6- Arrays](https://dev.to/sarah_chima/destructuring-assignment---arrays-16f)

# Functions
`Function.length` is the number of parameters 
### Function.prototype.call()

[.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

**parameters:** `this`, `...args`

allows for a function belonging to one object to called and assigned for a different object.

* calling chain constructors
* invoke anonymous function
* invoke function a specific the context of this
  
```js
function Product(name, price) {
  this.name = name; 
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product(this, name, price);
  this.category = 'toy';
}

const cheese = new Food('feta', 13);
const doll = new Toy('barbie', 234);
```

### the arguments object 

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


# Standard Built in Objects 

### Error
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


#### Types of Error 
|Error|Description|
|---|---|---|
|`EvalError`| creates an instance respresenting an error that occurs regarding the global function `eval()` |
|`InternalError`| Creates an instnace representing an error that occurs when an internal error in the Javascript engine occurs|
|`RangeError`|Creates an instance representing an error that occurs when de-referencing an invalid |
|`ReferenceError`||
|`SyntaxError`||
|`TypeError`||
|`URIError`||

### Math 
|||
|---|---|
|`.max()` | return the largest of 0 or more numbers |
| `.round()` | returns the value of a number to the nearest integer | 


### Number 

||||
|---|---|---|
|`.parseFloat` | parses a string argument and returns a floating point | 
|`Number.protoype.toFixed()`| formats a number to using fixed point notation | `Number.parseFloat(x).toFixed(2)`


### Proxy 
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




# Asynchronous JavaScript 
## Blocking vs non-blocking
  - Blocking - sync
  - non-blocking - async

  1. cpu gets instruction to go and get bit of information from harddrive
  2. Hard drive looks for the information
  3. cpu goes off and does other things
  4. Hard drive loads information in main memory
  5. hard drive Sends hardware interupt to cpu 
  6. CPU stops doing what its doing and loads up the information from the memory

  - hardware built to be non-blocking
  - non-blocking far better for performance. 

  ## Multi-threaded programming 

  - Threads are processes with shared memory 
  - each thread has read and write access to a shared memory space.
  - Threads hard to get right, eg. race conditions
  - using locks mean deadlocks / livelocks 
  - When a thread blocks another thread takes over

  ## Event Driven Programming
  - Node abstracts all I/O operation into events that are handled on an implicit eventloop
  - Node / chrome do use threads
  - JavaScript code runs single threaded 
  - node uses one main thread
  - Asychronicity provide by events
  - Event loop

  ```javascript
  const fs = require('fs');

  fs.readFile('somefile.txt', (err, data) => {

  });

  console.log('This gets called before the file is loaded') 
  ```

  - code doesn't block, there is always something running

  ```javascript
  http.get({path: '...'}, response => {
    let body = ''; 
    response.on('data', part => {
      body += part;
    });
    response.on('end', () => {
      let parsed = JSON.parse(body);
    });
  });
  console.log('this gets printed first');
  ```
  - node make it easy to performant code. 

  ## Async Patterns
  - callbacks
  - Promises
  - Async / Await 
  - Generators

  - setInterval()
  - setTimeout()
  - setImmediate()
  - process.nextTick()
  - readFile()

  ## Callbacks
  - just because a call back is used doen't make it asynchronous

  ```js
  // this code is synchronous 
  function doAsyncTask(cb) {
    // this will be invoked immediately 
    cb();
  }
  // Message is undefined at this point
  doAsyncTask(() => console.log(message));

  let message = 'Callback called'
  ```
  - to solve it, can use `setImmediate(...)` or `process.nextTick(...)`

  ```JavaScript
  function doAsyncTask(cb) {
    // setImmediate(() => {
    //   cb();
    // });

    // setImmediate(cb);

    process.nextTick(() => {
      cb();
    });
  }
  ```

  **Errors**
  - error first callbacks
  ```JavaScript

  const fs = require("fs");

  function readFileThenDo(next) {
    fs.readFile("./blah.nofile", (err, data) => {
    next(err, data);
    });
  }

  readFileThenDo((err, data) => {
    if(err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

  ```

  - can't use try catch with callbacks.

## Promises 

To construct a function that returns a promise...

```javascript
function promise() {
  return new Promise((resolve, reject ) => {
    // do some stuff
  })
}
```

The callback function that is passed to the promise constructor takes the parameters `resolve` and `reject`

It is then possible to chain `.then` on to the function call

```javascript
promise().then(() => {
  console.log('something')
})
```

## States of a promise

`resolved`

`rejected`

`pending`

## Consumers 

### .then 

```javascript 
promise.then(
  (result) => {
    /* 
    handles result
    after promise is resolved 
    */

  },
  (error) => {
    /* 
    handles error
    after promise is rejected
    */
  }
)
```

### .catch

`.catch` is the same as `.then(null, fn)`
it handles errors once the promise is rejected

### .finally

The function passed to `.finally` always runs when the promise is settled be it resolve or reject. 

Its useful for performing clean-up. 

### .all 

Takes multiple promises a parameters and returns a single promise the is resolved when all promises are fulfilled. 
resolves when all the promises passed to resolve.

Makes requests in parallel, stops waterfall and makes it much faster. 

```JavaScript
const promise = Promise.all([
  queryAPI('films'),
  queryAPI('planets')
]);

promise
  .then(([films, planets]) => {
    output.innerText = 
    `${films.length} films,` +
    `${planets.length} planets`;
  })
  .catch(errror => {
    console.warn(error);
    output.innerText = ':('
  })
  .finally(() => {
    spinner.remove();
  });
```


### Promise.race

takes an array of promises and returns the fastest to resolve first
If you pass an array the promise will forever be pending.
Not commonly used but a use case might be timeout function

## Examples

### Getting data out of a promise
<!-- DON"T COMMIT -->
```JS
function getApplications() {
var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "***");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

return fetch("https://api.newrelic.com/v2/applications.json?filter[name]=sdtech-arp-local-eu-west-1", requestOptions)
  .then(response => response.text())
  .catch(error => console.log('error', error));
}

const { applications } = getApplications();

console.log('variable: ', applications);
```
 
# Modules 

with no original concept of modules, there are few competing formats

* __Asynchronous Module Definition (AMD)__ used in browsers and uses `define`

* __CommonJS__ used in node and uses `require` & `module.exports`

* __ES Module__ ES6 native module format, uses `import` & `export`

* __System.register__ supports ES6 modules in ES5

* __Universal Module Definition (UMD)__ can be used both in browser and node 

## CommonJS 

```js
// import
const fs = require('fs');

// path to file
const user = require('./user');

// destructuring 
const { getName, dob } = require('./user');

// export a function
function getName() {
  return 'Fred';
}

exports.getName = getName;

// exporting a default value 

class User {
  // ...
}

module.exports = User

```

## Exports map

[packages: main entry point](https://nodejs.org/api/packages.html#packages_main_entry_point_export)

At some point you may wish to make the subpath accessible within node module. so for example you can import using this syntax `import { component } from 'library/subpath'`. You can do this by adding `exports` property to the `package.json`. This syntax is available in node 15
```
{
  "main": "./main.js",
  "exports": {
    ".": "./main.js",
    "./submodule": "./src/submodule.js"
  }
}
```

# conventions 

`_` prefixed to variable names are considered private by convention by are still public. 

as of 2019 `#` has be accepted by TC39 as the offical class syntax for private variables. 


# ES2019
## flat

```
const arr = [1, 2, [3, 5]]

const flatArr = arr.flat();

console.log(flatArr)
// [ 1, 2, 3, 5 ]
```

## flatMap 

```
const arr = [1, 2, 3, 4]

arr.flatMap(x => [x, x * 2]);
```

### Represent Collision free String Constants 
---
As of ES2019 we get the description of a `Symbol`

```javascript
const letters = {
  a: Symbol('A');
}

letter.a.description
// returns A
```

### fromEntries 
---

