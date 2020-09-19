## Uniqueness: Sets

Sets are collections of distinct elements. There are no duplicates. takes as single type 

### Set Features
* `add()`
* `remove()`
* `clear()`

### Worked example

### Set Implementations

**HashSet**

* based on HashMap
* hashCode() looks up location
* General purpose implementation
* a hashcode is the unique identifier

**TreeSet**
* based upon TreeMap
  * uses Binary Tree with a required sort order
* Keeps elements in the given order
  * see SortedSet and NavigableSet

**EnumSet**
* Specialized implementation for enum
  * uses bitset based upon the ordinal of the enum
* if using enum use enum set 
  
### SortedSet Feature
* `first()`
* `last()`
* `tailSet(fromElement)`
* `headSet(toElement)`
* `subSet(fromElement, toElement)`

**NavigableSet**
* Provides way to move through 
* implemented by treeset

## Modification Order: queues and deques 

* first in, first out 

- boolean offer(E e) - add elements to queue.
- boolean add(E e)
- E `remove()` throws an exception 
- `poll()` return null
 - `element()` & `peek()` read without removing 
