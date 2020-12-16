# ️⚛️ <br>React

```
npx create-react-app <app-name>
```
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

[a-complete-guide-to-useeffect](https://overreacted.io/a-complete-guide-to-useeffect/)

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


### useWindowDimensions
returns the size of the browser window

```javascript 
import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

  return {};
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function resize() {
      setWindowDimensions(getWindowDimensions());
    }

    const handleResize = debounce(resize, 300);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
```


### useIsSSR

[using-window-in-react-ssr](https://stephencook.dev/blog/using-window-in-react-ssr/)

```javascript
import { useState, useEffect } from "react";

const useIsSsr = () => {
  // we always start off in "SSR mode", to ensure our initial browser render
  // matches the SSR render
  const [isSsr, setIsSsr] = useState(true);

  useEffect(() => {
    // `useEffect` never runs on the server, so we must be on the client if
    // we hit this block
    setIsSsr(false);
  }, []);

  return isSsr;
}
```

### usePageVisibilty 

# react-native

## Setup

`npm install -g react-native-cli`

on getting error : **React/RCTBridgeDelegate.h' file not found**

```cli
sudo gem install cocoapods
cd ios && pod install
```

### Setting up a project

    react-native init ProjectName
    cd ProjectName
    react-native run-ios

to specfic the iPhone simulator...

    react-native run-ios --simulator="iPhone 8"

### in the ios simulator

`cmd + d` - pops open the developer menu

`cmd + r` - refreshes app


## Styling

### Layout

`flex: 1`
take up full screen

default flexDirection is `column` (as opposed to `row` on the web)