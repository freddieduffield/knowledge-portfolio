# optional

A container object which may or may not contain a non-null value. If a value is present, isPresent() will return true and get() will return the value

`.get()` -> returns the value contained in the option 

`.isPresent()` -> returns a boolean 

`Optional.ofNullable(<object>)` -> in case of expecting null values. 

`ifPresent(name -> System.out.println(name.length));
