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

   # ArrayList 


   instaniate 

   ```java
private ArrayList<String> listName = new ArrayList<String>(); 
   ```

add

```java
listName.add(item);
```

select an item
```java
listName.get(index);
```

modify item
```java
listName.set(index, item); 
```
remove
```java
listName.remove(position); 
```
get length
```java
listName.size();
```
check if element exists in an array, returns a boolean 
```java
listName.constains(item); 
```
get index of item 
```java
listName.indexOf(item); 
```
## Autoboxing & unboxing 
ArrayList can only be created of classes not primative types. for primative types you need to use wrapper class. 

```java
// Creating ArrayList with wrapper class
ArrayList<Integer> intArrayList = new ArrayList<Integer>();

// Autoboxing : primative type -> autowrapper
for(int i=0; i <=10; i++) {
  intArrayList.add(Integer.valueOf(i));
}

// unboxing : autowrapper -> primative type
for(int i=0; i <=10; i++) {
  System.out.println(i + " -> " + intArrayList.intValue()); 
}

Integer myIntValue = 56; // Integer.valueOf(56)
int myInt = myIntValue.intValue(); // myInt.intValue()
```