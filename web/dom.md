# DOM

document object model

## Event

* stop page reloading 
```js
event.preventDefault();
```

* returns the element the event was fired on
```js
event.target
```

* get the value out of a form with name property
```html
<form>
  <input name="search">
</form>
```
```js
event.target.search.value
```
or with the index
```
event.target[0].value
```