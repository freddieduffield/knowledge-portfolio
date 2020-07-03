# Interfaces

Set of command behaviours to be used by different classes. Interface sets up a contract for what methods and return types a class would have. Decoupling the what from how. 

* All methods and variables are automatically public and abstract
* All code written in the class that implements the interface
* gives an idea of what will be done, not how it will be done 

* since java 8  `default` methods with implementations
* since java 9 interfaces can contain private methods commonly used when two default methods in an interface share common code.

# Abstract Classes

* Methods can have any visibility, i.e. public, protected and private concrete methods.
* Can Abstract class can only extend 1 parent class but it can implement multiple interfaces
* Abstract classes may contain abstract declarations, concrete implementations or both. 
* can have constructor
* useful if one method's implementation is a shared between many classes, but one needs to different.