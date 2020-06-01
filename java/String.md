# String 

**String** is a class, a sequence of characters. Strings are immutable.

StringBuffer 

**String** 

is a class, a sequence of characters. Strings are immutable.
StringBuffer 

## comparing strings 

`equals`

returns a boolean 

```java
String exampleString = "hello";

exampleString.equals("hello");
// true
```

`compareTo`

returns an int.
each character is converted to unicode value for comparision. if equal returns 0.  else it returns a positive or negative int. Positve if the first string > second string - else negative. 

```java
String exampleString = "hello";

exampleString.compareTo("hello");
// 0 

exampleString.compareTo("");
// -5



```
