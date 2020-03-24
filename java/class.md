# Class

## java.util

**Logger**

used to log messages 

**Predicate**

`java.util.function.predicate<T>`

a functional interface that can be used as a target assignment for a lambda expression. Takes a single input and returns a boolean

**Optional**

`java.util.Optional<T>`

A container object which may or may not contain a non-null value.

**Set**

interface that extends collection - unordered collection of objects of which duplicates can't be stored

java.util.Collections;

java.util.HashMap;

java.util.List;

java.util.Map;


---

### Regex

**Pattern**

`java.util.regex.Pattern`

complied regex expression

**Matcher**

`java.util.regex.Matcher`

performs match operators on character sequence by interpreting sequences

---

### Scanner 

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    //create new scanner instance
    Scanner scanner = new Scanner(System.in); 
    // parses int
    int yearOfBirth = scanner.nextInt();
    // must be a next line after
    scanner.nextLine();
    
    System.out.println("Enter your name: ");
    // allows user to enter string
    String name = scanner.nextLine();

    System.out.println("Your name is " = name);

    scanner.close();
  }
}
```


---
org.apache.commons.lang3

### StringUtils

```java
String exampleString = "hello"
StringUtils.isNotBlank(exampleString); 
```
---

`javax.ws.rs.core`

## UriBuilder 

Uri template aware utility class for building URIs from there components


    queryParam(java.lang.String name, java.lang.Object... values)
          Append a query parameter to the existing set of query parameters.
