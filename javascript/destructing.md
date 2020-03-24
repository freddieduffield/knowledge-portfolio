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