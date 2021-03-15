# TypeScript

TS types are check during compilation, JS types at runtime. Doesn't stop bugs at runtime, but adds an extra sanity check when compiling code.

## Core Types
core primitive types in typescript are lowercase

* `number`
* `string`
* `boolean`
* `object`
* `array`
* `tuple` (array fixed length and type)
* `enum`
* `any`  - takes away TS advantage, fallback - only with runtime checks.

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
```

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
* assigning a type to an `array`

```typescript
let favouriteActivities: string[];
favouriteActivities = ['sports'];
```

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

#### Union types

Union types are where multiple types can be expected. 

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
