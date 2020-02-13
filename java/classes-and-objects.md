# Classes and Objects


`Class` is a blueprint to construct objects

**State** - things the object Knows

* variables -
  - variables must have `type` and `name`
  - two flavours of variables
    - primatives
    - object references

declaration -> `int score = 509;` <- assignment

**Behaviour** - things the object does

* methods

```java
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


`declaration of`int` defaults to 0

- instantiating an object

  `Movie movie1 = new Movie(1999, 100);`

  in this example movie1 is the object reference.

  object reference gives access, not the object itself


### OOP

everything is an object