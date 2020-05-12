# Array
Three ways to intialise an array.

1.
```java
// define an array with ten integers
int[] myIntArray = new int[10]
// set the first position 
myIntArray[0] = 45;
// assign the second position
myIntArray[1] = 4; 
```

2.
If you know all the elements, then when declare the variable

```java
int[] myIntArray = { 1, 2, 3, 5, 6, 7, 8, 9, 10 };
```
3. 
   ```java
   int[] myIntArray = new int[10]; 
   
   for(int i = 0; i < myIntArray.length; i++) {
     myIntArray[i] = i*10
   }

   for(int i=0; i<myIntArray.length ; i++) {
     System.out.println("Element " + i + ", value is ", + myIntArray[i])
   }
   ```
