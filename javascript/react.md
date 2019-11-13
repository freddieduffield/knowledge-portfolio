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