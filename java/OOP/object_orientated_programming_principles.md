# Inheritance 

`is-a` relationship

- a class can extend a parent class - eg. animal is a type of dog 
  - a dog extends the class of animal

```java
class dog extends animal {
  int tail 

  public dog(String name, int tail) {
    super(name, tail)
    this.tail = tail;
  }
}
```
### Method overriding 

 defining a method in child class that already exists in the parent class. `super` calls the parents method. 

* called runtime time polymorphism and dynamic method dispatch
* `@Override` above method - annotation 
  * must have same name and arguments
  * return type can be subclass of the return type in the parent class
  * can't have a lower access modifier
* only inherited methods can be overwritten
* Constructors and private methods cannot be overridden


# composition

`has-a` relationship

e.g. a house has rooms. 

```java
class Job {
  privte int salary; 

  public Job(int salary) {
    this.salary = salary; 
  }

  public int getSalary() {
    return salary; 
  }

  public setSalary(int salary) {
    this.salary = salary; 
  }
} 
```

A person `has-a` job. 

``` java
class Person {
  private Job job; 

  public Job(Job job) {
    this.job = new Job(1000000);
  }

  public Job getJob() {
    return job; 
  }

  public void setJob(Job job) {
    this.job = job; 
  }

  public int getSalary() {
    return job.getSalary(); 
  }
}
```

# encapsulation 

`data-hiding`

- declare variables of a class as private 
- provide public getters and setters

# Polymorphism

`many-forms`

- common use: parent class reference to children
- two type compile time and run time 
- can be performed by `method-overloading` and `method-overiding` 
- 
