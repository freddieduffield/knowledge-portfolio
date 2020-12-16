# String 

**String** is a class, a sequence of characters. Strings are immutable.

StringBuffer 

**String** is a class, a sequence of characters. Strings are immutable.
StringBuffer can be used to create a mutable string 

* `s1.length()` returns an `int` equal to the number of characters
* `s1.equals(s2)` returns an `boolean`,  `true` if contains the same sequence of characters equalsIgnoreCase doesn’t distinguish upper and lower case
* S1.charAt(I) char at position of I counting from 0. If I less than 0  or greater than or equal to s1.lenght throws StringIndexOutOfBounds
* s1.toString string same obj as s1
* String.valueOf(v) string representation of v. when v has reference type converted using toString. Every object  has a toString method that can be overridden
* S1 + s2 same as s1.concat(s2) creates new string
* S1.compareTo(s2) returns negative integer zero or positive according to lexiciographical ordering based on Unicode 1
* S1.substring(int I, int j) returns a new string with character between the 2 indexes
* S1.subsequence(int I, int j) returns a charsequence

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
each character is converted to unicode value for comparision. if equal returns 0.  else it returns a positive or negative int. Positve if the first string > second string - else negative. the int is the difference between strings 

```java
String exampleString = "hello";

exampleString.compareTo("hello");
// 0 

exampleString.compareTo("");
// -5

// example method using compareTo to compare two objects
int compareTo(ListItem item) {
      if(item != null) {
          return ((String) super.getValue()).compareTo((String) item.getValue());
      } else {
          return -1;
      }
}

```
