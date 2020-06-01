# LinkedList

create a linked list 
```java
LinkedList<String> linkedList = new LinkedList<>(); 
```

# ListIterator 

```java
import java.util.ListIterator; 
```

Create iterator to move through the linked list 
```java
Iterator <String> iterator = linkedList.iterator(); 
```
check that there is a next item 
```java
iterator.hasNext(); 
```
check there is a previous element 
```java
iterator.hasPrevious();
```
get the the next item in linked list 
```java
iterator.next(); 
```
move back 
```java
iterator.previous(); 
```
insert specificied element into the list immediately before the element that would be returned by `next` and after `previous`
```java
iterator.add("new element");
```

