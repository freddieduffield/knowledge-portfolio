# Problem Solving 

## 1. understand the problem 

1. can I state the problems in my own words?
2. what are the inputs that go into the problem?
3. what outputs should come from the solution to the problem?
4. can the outputs be determined by the inputs? (do we have enough information to solve the problem)
5. how should I label the important pieces of data that are part of the problem?

## 2. concrete examples

* simple examples
* more complex examples
* empty inputs 
* invalid inputs


## 3. break it down

## 4. solve or simplify

## 5. look back and refactor


---

## Problem Solving patterns 

### Frequency Counter

### Multiple Pointer 

```JavaScript
function sumZero(arr) {
  let left = 0; 
  let right = arr.length - 1;

  while(left < right) {
    let sum = arr[left] + arr[right]; 

    if (sum === 0) {
      return [arr[left], arr[right]]; 
    } else if (sum > 0) {
      right--
    } else {
      left ++ 
    }
  }
} 

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])
```


