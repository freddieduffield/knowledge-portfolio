# Methods
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

```java
sayNumberNine(982);
```

### Method Overloading 

* Creating different methods with the same name with different implementations. Must be passed different parameters. 

```java
public static int sum(int a, int b) {
  return a + b;
}

public static int sum(int a, int b, int c) {
  return a + b + c; 
}

public static int sum(int a, int b, int c, int d) {
  return a + b + c + d;
}
```

* `System.out.println()` is  good example of method overloading, there are actually 10 different versions for different types. 

