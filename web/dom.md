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
---
### `event.relatedTarget`

Stack Overflow: [blur event.relatedTarget returns null](https://stackoverflow.com/questions/42764494/blur-event-relatedtarget-returns-null/42764495#42764495)

* `focus` - `relateTarget` = element loosing focus
* `blur` - `relateTarget` = element recieving focus

---
## [blur](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) 

* event when an element has lost focus.
* opposite of focus


## [focus](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)

* event fires when element in focus 
* opposite of blur
* event handler property - `onfocus`

* available by default -> 
    * `<a>` elements with href attribute specified
    * `<link>` elements with href attribute specified
    * `<button>` elements
    * `<input>` elements that are not hidden
    * `<select>` elements
    * `<textarea>` elements
    * `<menuitem>` elements
    * elements with attribue draggable
    * `<audio>` and `<video>` elements with controls attribute specified
    
* can be added with `tabindex` property    

## History

`.pushState(state: object, title: string, url: string) ` - add entry to browsers history stack. params

## Window

### Popstate 
event fired when active history entry changes i.e. when browser back or forward buttons hit.

