# Testing

## Jest 

### Assertions 

`toEqual()`

`toHaveBeenCalledTimes(2)`

`toHaveBeenCalledWith('argument1', 'argument2')`

`toHaveBeenNthCalledWith(1, 'argument1, 'argument2')`

### Mock functions 

`jest.fn()`

Essentially spies. Pass it the function that you wish to mock, it will record what arguments it called with, how many times it a called etc.

`mockFn.mock.calls` - array containing all the arguments 

```js
jest.spyOn(obj, 'method')
obj.function.mockImplementation((arg1, arg2) => arg2);
...
obj.function.mockRestore()
```

`jest.mock()`

to mock a whole module

```js
jest.mock('../path', () => { 
  return {
    method: jest.fn((arg1, arg2) => arg)
  }
})
```
1. pathway to module
2. module factory function, returns the mocked version of the module

`__mock__` directory to keep mocks you want to use between files

## Sinion / Mocha / Chai

### stubs

[https://sinonjs.org/releases/latest/stubs/](https://sinonjs.org/releases/latest/stubs/)

Stubs can be annonymous or wrap existing functions, when they wrap a function the original is not called.
They are simple to get through the code. It doesn't do ant 
|||
|---|---|
|`.alwaysCalledWithExactly()` ||
|`.returns()`| |
|`.throws()`| 
| `.onCall()` | (stub responds differently on consecutive calls)
|`.onFirstCall()` | chain with throws, if you want test first call failing 
|`.onSecondCall()` | see above
|`.onThirdCall()` | see above

`var stub = sinon.stub(object, "method");`

Replaces object.method with a stub function. An exception is thrown if the property is not already a function.

### Spy

Are a special type of stub that collect the data on how the function is stubs is called. you can then check how many times it was called etc. 

## React Testing Library
