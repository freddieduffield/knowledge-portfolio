# Packages 

_notes on the packages of the javascript ecosystem_

## Axios 

*Promised based HTTP client*

* __axios.all()__

Make mulitple requests in parallel by passing an array of arguments to the `axios.all()`. It returns a single promise that resolves only when all arguments have passed.

* __axios.spread()__

assigns the properties of response array to separate variables. 
```js
// execute simultaneous requests 
axios.all([
  axios.get('https://api.github.com/users/mapbox'),
  axios.get('https://api.github.com/users/phantomjs')
])
.then(responseArr => {
  //this will be executed only when all requests are complete
  console.log('Date created: ', responseArr[0].data.created_at);
  console.log('Date created: ', responseArr[1].data.created_at);
});

// logs:
// => Date created:  2011-02-04T19:02:13Z
// => Date created:  2017-04-03T17:25:46Z
```

---
## Lodash

[documentation](https://lodash.com/docs/4.17.15)

* __throttle__

invokes a function every x number of seconds

* __chunk__

creates an array of elements of an array to length of a given size 

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```
* __get__

gets the value at the path of the object. 

parameters : object, path, default value (returned if `undefined`)

```js
var object = { 'a': [{'b': {'c': 3}}]}

_.get(object, 'a[0].b.c')
// 3
```

---

## [Backstop.js](https://github.com/garris/BackstopJS)

*Visual regression testing*
