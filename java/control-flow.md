# Control Flow 

## Switch 

```java
int switchValue = 6;
switch(switchValue) {
  case 1:
  // something
  break;
  case 2: 
  // something else
  break;
  case 3:case 4: case 5: 
  // do something else
  break;

  default: 
  //  do something default
  break; 
}
```



## for

```java
for(int i=0; i<5; I++) {
  // do stuff 
}
// or
int arr[] = {1,2,3};
for(int i: arr) {
  //code 
}
```

## While & Do While

for when you don't know how many times you want to loop.

do while always executed once. 

```java
  int count = 0; 
  while(count != 6) {
    System.out.println("Count value is" + count); 
    count++ 
  }

  do {
    // code 
    count++
  } while(count != 6); 
```





