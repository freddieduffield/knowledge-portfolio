# Sinon 

## stubs

[https://sinonjs.org/releases/latest/stubs/](https://sinonjs.org/releases/latest/stubs/)

Stubs can be annonymous or wrap existing functions, when they wrap a function the original is not called. 

`.returns()`

`.throws()`

`.onCall()` (stub responds differently on consecutive calls)

`var stub = sinon.stub(object, "method");`

Replaces object.method with a stub function. An exception is thrown if the property is not already a function.