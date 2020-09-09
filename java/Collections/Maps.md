# Maps

like a dictionary, or objects in javascript - a set of key value pairs. Here is how you declare a map: 
`Map<String, String> languages = new HashMap<>();`

- Map cannot contain duplicate keys.
- key can only map to a single interface.
- if you put over an existing value it get over-written. 

* `mapName.put(key, value)`
    - adds a new item
    - returns null if creating a new value
    - overwrites value if it already exists
    
* `mapName.containsKey(key)`
    - returns true if key exists, else returns false
    
* `mapName.get(key)`
    - returns the value.        

* `mapName.keySet()`
    - returns a set view of the keys contained in the map. 

```java
package com.freddieduffield;

import java.util.HashMap;
import java.util.Map;

public class MapProgram {
    public static void main(String[] args) {
        Map<String, String> languages = new HashMap<>();
        if(languages.containsKey("java")) {
            System.out.println("Java is already in the map");
        } else {
            languages.put("java", "this course is about java");
            System.out.println("java successfully added");
        }
        languages.put("java", "a compiled high level, object orientated, platform independent language");
        languages.put("python", "an interperted, object-orientated, high level programming language with dynamic semantics");
        System.out.println(languages.put("agol", "an algorithmic language"));


        if(languages.containsKey("java")) {
            System.out.println("Java is already in the map");
        } else {
            languages.put("java", "this course is about java");
        }
    }
  System.out.println("===============");
        for(String key: languages.keySet()) {
            System.out.println((key + " : " + languages.get(key)));
        }

}
```
