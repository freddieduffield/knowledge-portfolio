# Everything I Know about Object Oriented Programming in Java

## Classes and Objects

`Class` is a blueprint to construct objects

**State** - things the object Knows - the properties it has. 

* variables -
  - variables must have `type` and `name`
  - two flavours of variables
    - primatives
    - object references

declaration → `int score = 509;` ← assignment

- instance variables defined at the top class, can also be called the class' properties or fields. 
- local variables - local to method, doesn't exist after execution

**Behaviour** - things the object does

* methods aka functions. A reusable callable piece of code that are attached to a class. 

```java
Class Rectangle {
  private int width; // ⬅️ instance variables
  private int length;

// method ⬇️
  public int getArea(){
    int total = width * length; // ⬅️ local variable
    return total;
  }

  public void setLength(int length = 4) {
    this.length = length; // setting an instance variable you use `this`.
  }
}
```

### Method Overloading

* method with same name but different parameters

### Constructors

constructors same name as class

```java
Class Film {
  int year;
  String title;
  int length;
  String language;

  public Film () {}

  public Film (int year, String title, int length, String language)
  {
    this.year = year;
    this.title = title;
    this.length = length;
    this.language = language;
  }
}
```

if a constructor is defined all arguments must be passed for it to compile properly.

You can have multiple constructors, with the same name but with different number of arguments. 

<!-- constructor chaining is where you have overloaded constructors  -->

### instantiating an object

  `Movie movie1 = new Movie(1999, 100);`

  in this example movie1 is the object reference.

  object reference gives access, not the object itself

  you pass it the parameters of the constructor


### this vs super

* **super** is used to access call parent class variables and methods
  * used in method overiding 
  * call method with same name from parent class - stops recursion. 

* **this** is used to call the current class variables and methods. 
  * required when there is a parameter with the same name as the instance variable
  * can't use in `static` blocks

* **`this()`** to call a constructor from another overloaded constructor in the same class. 
* **`super()`** calls parent constructor
  * must be first statement
* constructor can have calls to both `super()` and `this()`

## Four Pillars of OOP
There are four core concepts central to OOP: 
1. Inheritance - Eliminate redundent code 
2. Encapsulation - group related variables and functions together. increase reusability 
3. Polymorphism - create multiple object. 
4. Abstraction - Hide details and complexity - isolate impact of changes

