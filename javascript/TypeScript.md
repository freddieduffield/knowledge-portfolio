# TypeScript

TS types are check during compilation, JS types at runtime. TypeScript won't stop bugs at runtime, but adds an extra sanity check when compiling code, so you will potentially catch bugs earlier.

* Assigning types in function arguments

```typescript
function add(n1: number, n2: number, showResults: boolean, resultPhrase: string) {
    const result = n1 + n2;
    if(showResults) {
        console.log(resultPhrase + result);
    } else {
    return result;
    }
}
```

* Assigning types to `let` variables

```typescript
let numberThree: number;
// ... later
numberThree = 3;

## Core Types
core primitive types in TypeScript are lowercase, and are as follows:
* `number`
* `string`
* `boolean`

```
### * `object`

* explicitly defining `object` properties, this is not typically necessary as typescript infers the object's types
```typescript
const person: {
    name: string,
    age: number
} = {
    name: 'Fred',
    age: 34
}
```
### * `array`
* assigning a type to an `array`

```typescript
let favouriteActivities: string[];
favouriteActivities = ['sports'];
```

### * `tuple` (array fixed length and type)
* assigning a `tuple` (TypeScript would detect pushing an element into tuple, watch out!)

```typescript
const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] // assignment of tuple
} = {
    name: 'Fred',
    age: 34,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author'] // declaration of type
}
```
### * `enum`

* enums, custom type - human readable mapped values. Can edit each constant to be string or specific number. Defaults to 0, 1, 2
```typescript
enum Role {
  ADMIN, READ_ONLY, AUTHOR
};

const person = {
    name: 'Fred',
    age: 34,
    hobbies: ['sports', 'cooking'],
    role: Role.AUTHOR
}
```
### * `any` 
`any` takes away TS advantage, fallback - use only with runtime checks in place.

#### * Union types

Union types are where multiple types can be expected for a value. They are denoted by a list of potential types separated by `|` 

```typescript
function combine(input1: number | string, input2: number | string) {
    let result;

    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
 }
```

### * Literal Types
Specific value. e.g. a constant. Can useful in conjunction with union types when a enum is over kill.

```typescript
function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
) {
    let result;
    if (
        typeof input1 === "number"
        && typeof input2 === "number"
        || resultConversion === 'as-number'
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
 }

const textResult = combine(1, 1, 'as-text')
const numberResult = combine(1, 1, 'as-number')

```

### * Type alias
create a custom type, for example with union types / union literal types / object type.
```typescript
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
type User = { name: string, age: number }
```
The object type simplifies
```typescript
function greet(user: { name: string, age: number }) {
//   ...
}
```
can be improved and shorten using Type alias `User`
```typescript
function greet(user: User) {
// ...
}
```
### * Return Types
You can set a return type with a colon after the parameters. You should rely on TypeScript inference unless you have a specific reason.

````typescript
function add(n1:number, n2: number): number  {
    return n1 + n2;
}
````

`void` is returned by a function that doesn't have a return statement.

```typescript
function printResult(num: number) {
    console.log('Result ' + num)
}
```

### * Functions as Types

```typescript
let combineValues: Function;
combineValues = add;
```
or to give more specifics about params and return types, use the fat arrow syntax.
```typescript
let combineValues: (a: number, b: number) => number;
```
Callbacks
```typescript
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}
```
specify `void` indicates the return type will not be used.

### * `unknown` & `never`
`unknown` - more strict than any, requires additional type check.
```typescript
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Fred';
userName = userInput;

if (typeof  userInput === 'string') {
    userName = userInput;
}
```
`never` is return type that never return e.g. when an error is thrown and the program runtime is broken.
```typescript
function generateError(message: string, code: number): never {
    throw { message, errorCode: code }
}
```
