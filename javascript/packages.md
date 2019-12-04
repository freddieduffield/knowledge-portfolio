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


## Lodash

* __throttle__



## [Backstop.js](https://github.com/garris/BackstopJS)

*Visual regression testing*
