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

## History

`.pushState(state: object, title: string, url: string) ` - add entry to browsers history stack. params

## Window

### Popstate 
event fired when active history entry changes i.e. when browser back or forward buttons hit.

