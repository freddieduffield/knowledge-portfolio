# Testing

# Spies / Stubs / Mocks

## Spies

Create fake functions that are used to track executions and how many times it was called.

## Stubs

Replace functions, return whatever we want or have functions work in a way to enable multiple test scenarios

## Mocks

fake methods that have pre-programmed behaviour and pre-programmed expections. 

## Packages. 

```
    "chai": "3.5.0",
    "chai-as-promised": "6.0.0",
    "chai-enzyme": "1.0.0-beta.0",
    "chai-jest-snapshot": "1.3.0",
    "dirty-chai": "1.2.2",
    "enzyme": "3.3.0",
    "enzyme-adapter-react-16": "1.1.1",
    "enzyme-to-json": "3.3.3",
    "jsdom": "9.9.1",
    "mocha": "5.2.0",
    "mocha-better-spec-reporter": "3.1.0",
    "mocha-sonarqube-reporter": "1.0.1",
    "nock": "9.0.13",
    "react-test-renderer": "16.3.1",
    "redux-mock-store": "1.3.0",
    "sinon-chai": "2.9.0",    
```

When creating a test wrap the callback in __sandbox__ from sd-sandbox, which provides global beforeEach and afterEach. You can use it when spying, stubbing or mocking instead of [sinon(-chai)](https://github.com/domenic/sinon-chai). 



# React

## Components

React tests use enzyme shallow render components. Common cases involve testing if the component renders children or decesendants in the instance that certain props are provided. 

Spies are often used to see if functions are called in specific instances. Use sandbox for spies
    
    const FUNCTION_NAME = sandbox.spy()


__snapshot__ tests are written using [chai-jest-snapshot](https://github.com/suchipi/chai-jest-snapshot#readme)


# Redux
Redux is tested by mocking the store using [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store#readme), its configured with thunk, dummy data can be passed to it, xhr requestes are stubbed.

# Server 

## Routes


