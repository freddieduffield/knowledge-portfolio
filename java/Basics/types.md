# Types

## Primatives

|||Wrapper class|max | min| width | notes |
|---|---|---|---|---|---|---|
`boolean` | boolean (true / false)
|`byte`||`Byte`| 127| -128| 8 bits |v.small, uncommon 
|`char`|single character||||| 16 bits| allows you store unicode values
|`double`|Double precision number|`Double`|1.7976931348623157E308|4.9E-324 |32 bits| add `d` after declaration of digits
|`float`|single precision number|`Float`|3.4028235E38 |1.4E-45 |64 bits| add `f` after declaration of digits
|`short`||`Short` | 32767 | -32767| | 16 bits
|`int`||`Integer`|2147483647 | -2147483647| 32 bits 
|`long`||`Long`|9223372036854775807|-9223372036854775808|64 bits|add `L` end of digits tp define it as long


### Casting 

coercion to specify type. 

```java
byte myNewByteValue = (byte) (myMinIntValue / 2);
```

## Special 
----

**String** 

is a class, a sequence of characters. Strings are immutable.
StringBuffer 

comparing strings 

```java
String exampleString = "hello"

exampleString.equals("hello")
// true
```

---
**enum** 

enables variable to be a set of predefined constants. 

names of enum fields are uppercase 



