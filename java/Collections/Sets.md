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

To ensure that a duplicate object is not added to the set, you can override the equals method. Duplication can happen because new duplicate object may created and stored in a different hash in memory. Items are only considered equal if the have the same hash. to optimise performance items are store in specific hashes. 

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


## Asymetric & Symetric 

## Modification Order: queues and deques 

* first in, first out 

- boolean offer(E e) - add elements to queue.
- boolean add(E e)
- E `remove()` throws an exception 
- `poll()` return null
 - `element()` & `peek()` read without removing 
