# ️⚛️ <br>React

## setState

- `setState` is asynchronous 

- `setState` takes a callback as a second argument, that will be executed after the state state has been updated. 

```JavaScript
this.setState(
    {name: 'fred' }, 
    () => console.log(this.state.name)
  )
```

## React.Children 

utilities to deal with `this.props.children`

```JS
React.Children.map(children, function[(thisArg)])
```

## React.cloneElement 

```JS
React.cloneElement(
  element,
  [props],
  [...children]
)
```

## PropTypes

```js

nameOfComponent.propTypes = { // lowercase
  nameOfProp: PropTypes.string //uppercase 
}
```
modifiers: 
__oneOf__
```js
PropTypes.oneOf(['value', 'of', 'prop'])
```
__shape__
```js
Proptypes.shape({
  usageOrigin: PropTypes.string,
  usageZone: PropTypes.string,
  usageIsEmbed: PropTypes.string,
  usageSrcfr: PropTypes.string,
});
```