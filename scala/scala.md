# Scala

* Mostly used for Spark and is what spark is written with. 
* runs on JVM
* functional programming

````scala

// VALUES are immutable constants
val hello: String = "Hello!"

// Variables - mutable
var helloThere: String = hello
helloThere = hello + "there"

println(helloThere)

val numberOne: Int = 1
val truth: Boolean = true
val letterA: Char = 'a'
val pi: Double = 3.1231412
val piSinglePrecision: Float = 3.14159265f
val bigNumber: Long = 12346789
val smallNumber: Byte = 127

println(f"pi is about $piSinglePrecision%.3f")

println(s"string interpolation $pi $bigNumber")

println(s"expressions ${1+2}")

val theUltimateAnswer: String = "To life, the universe and everything 42"
val pattern = """.*([\d]+).*""".r
val pattern(answerString) = theUltimateAnswer

val answer = answerString.toInt
println(answer)

// boolean
// < lesser
// > greater
// &&
// ||
// ==
````

## Flow control
```scala
if (1 > 3) println("impossible") else println("world makes sense")
```

* and as usual

## switch
val number = 3
number match {
  case 1 => println("one")
  case 2 => println("two")
  case 3 => println("three")
  case _ => println("something else")
}


## for
for(x <- 1 to 4) {
  val squared = x * x
  println(squared)
}
## while / do while
while(x >= 0) {
  println(x)
  x -= 1
}

x = 0
do { println(x); x+=1} while (x <= 10)

## Expressions
{val x = 10; x + 20}
// last bit of block printed out

## functions
```scala

def squareIt(x: Int) : Int = {
  x * x
}

def cubeIt(x: Int) : Int = { x * x * x}

def transformInt(x: Int, f: Int => Int) : Int = {
  f(x)
}

val result = transformInt(2, cubeIt)
printLn(result)

transformInt(3, x => x * x * x)

transformInt(10, x => x / 2)

transformInt(2, x => {val y = x * 2; y * y})
```

## tuples
* 1 based

```scala
val captainStuff = ("picard", "Enterprise-D", "NCC-1701")

println(captainStuff._1)
println(captainStuff._2)

val picardsShip = "Picard" -> "Enterprise-D"

val aBunchOfStuff = ("kirk", 1964, true)
```

## Lists
*  like tuple but must be of single type
*  0 based
```scala
val shipList = List("Enterprise", "Defiant", "Voyager")
println(shipList(1))
println(shipList.head)
println(shipList.tail)

for (ship <- shipList) {println(ship)}
```
### map
```scala
val backwardShips = shipList.map((ship: String) => {ship.reverse})
```
### reduce
```scala
val numberList = List(1,2,3,4)
val sum = numberList.reduce((x: Int, y: Int ) => x + y)
```

println(sum)
### filter
```scala
val iHateFives = numberList.filter((x: Int) => x != 5)
val iHateThrees = numberList.filter(_ != 5)
```

### concatenate Lists
```scala
val moreNumbers = List(6,7,8)
val lotsOfNumbers = numberList ++ moreNumbers
```

### List utils
```scala
val reserved = numberList.reverse
val sorted = reserved.sorted
val lotsOfDuplicates = numberList ++ numberList
val distinctValues = lotsOfDuplicates.distinct
val maxValue = numberList.max
val total = numberList.sum
val hasThree = iHateThrees.contains(3)
```

## Maps / dictionaries
```scala
val shipMap = Map("kirk" -> "Enterprise", "Picard" -> "Enterprise-D")
println(shipMap("Enterprise"))
val archersShip = util.Try(shipMap("Archer")) getOrElse "unknown"
```
