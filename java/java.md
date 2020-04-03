source code -> **compiled** -> compiled code -> **execute** -> program

`.java` - file extension for Java

## Operators

Mostly similar to JS except:

- `==` is the only equality operator 😒
- `!=`



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

Java does not allow multiple inheritance. 
* 100% abstract class and has only abstract
* class implement any number of interfaces 

Dog extends class animal
and has the interface pet 

 

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
