# Sinon 

## stubs

[https://sinonjs.org/releases/latest/stubs/](https://sinonjs.org/releases/latest/stubs/)

Stubs can be annonymous or wrap existing functions, when they wrap a function the original is not called. 
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