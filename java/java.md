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
- `default` - (used when no accessor is used)

Use getter and setters, instead of directly modifying values

## Inheritence 

Super class
- contains shared methods or varibles. 

children or subclasses inherit parent / superclass.

```java
class Media {
  // super class
}

/*
*  child /subclasses
*/
class Film extends Media {
// ... add class business 
}
```

## Polymorphism 
- many forms in latin

- everything extends object - has methods
  - toString()
  - hashCode()
  - clone()

- object reference variable can be a superclass.
```java
Media m1 = new Film();
Media m2 = new TvShow();

ArrayList<Media> history = new ArrayList();
history.add(m1);
```

```java
class Media {
  void getCredits(); // method signature 
}

class Film extends Media {
  int cast;
  void printCredits() {
    System.out.println(cast)
  }
}
```
### Abstract

`abstract` says this is an empty method and defines it as a signature.

when a class is defined as `abstract` it is not instaniated. 

### Overiding

When your provide a different implementation in

`super` calls the parents method

## Interfaces

you only provide signature.

```java
Buyable itemOne = new Film();

Buyable[] cart = new Buyable[3];
cart[0] = itemOne;

void checkout(Buyable cart[]) {
  for ()
}

```

## main()

the first method called in the application

```java
public class MyApp {
  Netflix netflix = new Netflix();
  public static void main(String[] args) {
    netflix.run();
  }
}
```

## non access modifiers

- **final** is a constant - its immutable. 
`final int = 123`
  - on method - cant overide

- **static** you can call this method with out instantiating an object. it does not require any state.
  - Math


