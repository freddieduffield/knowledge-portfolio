# Class

## java.util

**Logger**

used to log messages 

**Optional**

`java.util.Optional<T>`

A container object which may or may not contain a non-null value.


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


