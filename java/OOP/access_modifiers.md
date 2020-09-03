# Access Modifiers

For hiding data and keeping it consistent across objects,

- `private`
- `public`
- `default` - (used when no accessor is used)

Use getter and setters, instead of directly modifying values

`public` - can be accessed from any other class anywhere, even ina different package

`Package-private` - An object with no access modifier is visible to every class within the same package (but not classes in external packages)

`private` - only visible within the class it is declared. it is not visible anywhere else (including sub classes of its class)

## non access modifiers

### protected

`protected` an access modifier that enables a variable or method to accessed 
* within the enclosing class
* other classes in the same package as the enclosing class
* sub classes regardless of packages.  

### final 

 `final` is a constant - its immutable.
  `final int = 123`

  - stops method overidding

  - stops value change

  - stops inheritance 

### Static methods

- declared using the static modifier
- you can call this method with out instantiating an object. it does not require any state.
- can't access instance methods or variables 
- usually used for operations that don't require any data from an instance of class

Static variables are attached to every instance of a class.

![](static-or-instance.png) 
