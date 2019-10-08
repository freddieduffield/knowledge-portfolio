source code -> __compiled__ -> compiled code -> __execute__ -> program

`.java` - file extension for Java

## Class & Objects

`Class` is a blueprint to construct objects

**State** - things the object Knows  

variables - 
- variables must have `type` and `name`
- two flavours of variables
  - primatives 
  - object references

**Behaviour** - things the object does

methods

### OOP

everything is an object

### Basic Types

- boolean
- char 

**digit**
- byte
- short
- int
- long

**decimal**
- double 
- float

`String` is a class not a basic type

declaration -> `int score = 509;` <- assignment

``` java
int score; <- declaration
score = 509; <- assignment
```

`declaration of `int` defaults to 0


- instantiating an object 

  `Movie movie1 = new Movie(1999, 100);`

  in this example movie1 is the object reference. 

  object reference gives access, not the object itself


### Method definition 

- parameter - define type 
- `void` in the following example is the return type - 
you must define type returned. `void` is an instance where nothing returned 

```java
void sayNumberNine(int x) {
  System.out.println(x);
}
```

### Method invocation 

``` java
sayNumberNine(982);
```

## Operators 

Mostly similar to JS except:
- `==` is the only equality operator 😒
- `!=` 
--- 

``` java
Class Rectangle {
  private int width;  <- instance variables
  private int length; 

  public int getArea(){
    int total = width * length; <- local variable
    return total; 
  }

  public void setLength(int length = 4) {
    this.length = length;
  }
}
```
- instance variables defined a top class 
- local variables - local to method, doesn't exist after execution 

## Constructors

constructors same name as class

``` java 
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

### Accessor Modifiers

For hiding data and keeping it consistent across objects, 

- `private`
- `public`

Use getter and setters, instead of directly modifying values


