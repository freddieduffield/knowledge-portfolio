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

Explicitly write down the steps you need to take 

## 4. solve or simplify

## 5. look back and refactor


---

## Problem Solving patterns 

### Frequency Counter

"Uses objects to collect values / frequencies of values"

```js 
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false; 
  }

  let frequencyCounter1 = {};
  let frequencyCounter1 = {};

  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for(let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true; 
}
```

Write a function that accepts a variable number of arguments and checks to see if any of the arguments are duplicates

```js
function areThereDuplicates() {
    // Create an object to count values 
    let collection = {};
    
    // loop over values
    for(let val in arguments) {
        // if the value exists in the counting object + 1
        // or add the value to the counting object with value of 1
       collection[arguments[val]] ? collection[arguments[val]] += 1 : collection[arguments[val]] = 1;
    }
    
    // loop over the collections object
    for (let key in collection) {
        // write condition that the functions is looking for
        if  (collection[key] > 1) return true
    }
    
    // return the opposite boolean to the one in the above statement
    return false;
}
```

### Multiple Pointer 
"Create pointers or values that correspond to an index or position and move towards the begining, end or middle based on a certain condition." 

Loop through an array only once, create another pointer to compare the current value against. 

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

### Sliding Window

"Create a window ... that depending on a certain condition, either increases or closes"

to calculate a total or to find a sequence of a given number of items in a sequence 

```js
function maxSubarraySum(arr, num) {
  let maxSum = 0; 
  let tempSum = 0;
  if (arr.length < num) return null

  // add up the first numbers to the given amount 
  for(let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum 

// starting from where you left off 
  for(let i = num; i < arr.length; i++) {
    // take the last sum, minus the first item and add the last item
    tempSum = tempSum - arr[i - num] + arr[i];
    // evaluate which is highest 
    maxSum = Math.max(maxSum, tempSum);

    return maxSum;
  }
}
```

### Divide and Conquer

Diving a data set into smaller chunks and then repeating a process with a subset of data.

eg. binary search 

with a sorted array
* Pick middle
* is it higher or lower?
* if lower, find the middle of lower half and vice versa
* continue until value found or it is certain it doesn't exist

