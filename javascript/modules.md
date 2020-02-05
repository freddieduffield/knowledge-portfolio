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