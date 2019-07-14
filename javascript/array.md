# JavaScript

.shift

.includes


## Global Objects :

## **Array**

    Array.prototype.forEach()

[.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

---

    Array.prototype.reduce()

[.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

---

    Array.prototype.sort()

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

    Array.prototype.filter()

[.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- filter takes a condition and returns an array with the items for which the condition returns true

**Helpers**

return odd numbers from an array

`array.filter(x => x % 2 )`

---
    Array.prototype.slice()

[.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

```
const array = ['Fred', 'is', 'cool']
array.slice(1)
// returns ['is', 'cool']
array.slice(2)
// return ['cool']

array.slice(-1) 
// return ['cool']
array.slice(-2)
// returns ['is', 'cool']

array.slice(0, 1)
// returns ['Fred']
```

- A positive number will remove the items up to given index from the front of the array.

- A negative number with return the numbers from the end of the array

- the first argument as start and the second agrument is end 

---
    Array.prototype.indexOf()

[.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)


returns the first index of a given example. 

    
    array.indexOf('Fred')
    // returns 0