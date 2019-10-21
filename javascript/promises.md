# Promises 

To construct a function that returns a promise...

```
function promise() {
  return new Promise((resolve, reject ) => {
    // do some stuff
  })
}
```

The callback function that is passed to the promise constructor takes the parameters `resolve` and `reject`

It is then possible to change `.then` on to the function call

```
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

resolves when all the promises passed to resolve


### Promise.race

takes an array of promises and returns the fastest to resolve first
If you pass an array the promise will forever be pending.
Not commonly used but a use case might be timeout function