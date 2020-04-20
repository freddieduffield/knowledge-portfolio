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

# Hooks 

## Fetching data with hooks

[How to Fetch Data with React Hooks in a Minute](https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6)

[How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

* `useState` to store the data that we have fetched
* `useEffect` to fetch data when the component loads

```
import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await fetch(
        "https://my-json-server.typicode.com/tomas-cani/mock-sd-data/articles"
      );

      const json = await result.json();

      setData(json);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Science Direct Article Search</h1>
      <ul>
        {data.map(article => {
          return <li>{article.title}</li>;
        })}
      </ul>
    </div>
  );
}
```