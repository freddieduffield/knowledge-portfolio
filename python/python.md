# Python 

installing virtual env

```
mkdir newDirectoryName
cd newDirectoryName
virtualenv --no-site-packages -p python3 venv
. ./venv/bin/activate
```

Now you can install stuff in your virtual environment

```python
print("Given a series of words, each on separate line,")
print("this program finds the length of the longest word")
print("Please enter several sentences, one per line")
print("Finish with a blank line")
maxi = 0
word = "."
while len(word) > 0:
  word = input()
if len(word) > maxi :
  maxi = len(word)

if maxi == 0:
  print("there were no words")
else:
  print("the longest sentence was " + str(maxi)+ " characters long")) 

``` 

get an input and assign to variable
```python
word = input()
```

print a word
```python
print(word)
```

Indentation part of the structure of python. 

1. Interpreter checks syntax 
2. if no syntax errors, programme is executed

```python
print("Please enter a word:")
word = input()
print("The word was: ")
print(word)
```

or
```python
print("Please enter a word: " end="")
word = input()
print("The word was: " + word)
```
## Errors
### common syntax errors

`SyntaxError: invalid syntax` 
-  a special symbol in an unexpected place.
- reserved keyword

`SyntaxError: EOL while scanning string literal`
- missing quotes before end of line

`SyntaxError: unexpected EOF while parsing`
- missing closing bracket. 

### Runtime Errors
`NameError: name '...' is not defined`
- using an undefined variable or function

`ZeroDivisonError: division by zero`
- dividing via 0

`TypeError: can only concatenate str (not "int") to str`
- using operators on the wrong types of data

`TypeError: unsupported operand types(s) for +" 'int' and 'str'`

### Logic Errors

- order of operations

 
## Variables 
assignment
`=` initialises variable

**indentifers** 
- first Character a letter uppercase or lowercase 
- subsequent characters can be letters digits or underscores
- case sensitive 

Keywords: 
```python
assert, break, class, continue, def, del, except, finally, global, import, pass, raise, return, try,yield
```

```python
print()
print("Hickory, Dickory, Dock")

firstWord = input()
secondWord= input()

print(secondWord)
print(firstWord)
```

```python
print("Please key in a word: ", end="")
firstWord = input()
print("and now key in another: ", end="")
secondWord = input()
print("you have typed: " + firstWord + " " + secondWord)
```

## integers
whole numbers 

convert a int to string

`str(<integer>)`

conver string to int
`int(<string>)`

## Operators
- `+` - addition
- `-` - subtract
- `*` - multiplication
- `//` - division
- `%` - modulo (remainder)

order of operations 
- precedence to `*`, `/`, `%`
- left to right
- use brackets to override the order precedence

```python
num = 5 
print(str(num)) -> 5
num = num + 2
print(str(num)) -> 7 
num = num // 3 * 6 
print(str(num)) -> 12
print(str(7 + 15 % 4)) -> 10
num = 24 // 3 // 4  
print(str(num)) -> 2
num = 24 // (num // 4) -> error
print(str(num)) 
```

### Strings
Get length of string
```python
len(<string>)
``` 
Get character from string 
```python
S[index]
```
slice a string. first number - where substring begins. 2nd where substring ends. Leaving out the 2nd number you get the rest of the string.
```python
s = "Freddie"
print(s[0:4])
print(s[len(s)-1]) # get last letter of a string 
```
You can multiple strings
```python
print("hots" * 2)
# hotshots
```

`ord` converts char to corresponding numerical code
`chr` converts numerical code to char

### Conditionals

```python
print("Please input your exam result: ", end="")
s = input()
examMark = int(s)
if examMark >= 70:
  print("congrats you passed amazingly")
elif examMark >= 50:
  print("well done pass")
else: 
  print("sorry failure")


```

```
finished = False
count = 0
while not finished: 
  print('enter a number (0 to end): ', end="")
  x = input()
  num = int(x)

  if num == 0: 
    finished = True 

  if num == 100:
    count += 1 
    
countStr = str(count)
print("100 occurred " + countStr + " times")    

```

```python
finished = False
print("Enter the first number: ", end="")
z = input()
previousNum = int(z)

while not finished: 
  print('enter a number (0 to end): ', end="")
  x = input()
  num = int(x)

  if num == 0:
    finished = True
  elif num > previousNum: 
    print("UP")
  elif num < previousNum: 
    print("DOWN")   
  elif num == previousNum: 
    print("SAME")

  previousNum = num

```

```python
finished = False
isInAlphabeticalOrder = "Yes"
prevWord = input()

while not finished: 
  word = input()
  
  if word == "":
    finished = True

  if isInAlphabeticalOrder != "No":
    if word > prevWord: 
      isInAlphabeticalOrder = "Yes"
    else:
      isInAlphabeticalOrder = "No"

  prevWord = word
      

print(isInAlphabeticalOrder)
```

```python
print("Please enter a string: ", end="")

string = input()

middle = len(string) // 2

if string[0: middle] == string[middle:]:
  print(string + " is a twin String!")
else: 
  print("Sorry " + string + " is not a twin string")
```

```python
failures = 0
passes = 0
distinctions = 0

finished = False

while not finished:
  print("Next student (first test): ", end="")
  firstTestScore = int(input())

  if firstTestScore == 51:
    finished = True
    break

  print("(second test): ", end="")
  secondTestScore = int(input())

  totalScore = firstTestScore + secondTestScore

  if totalScore <= 100 and totalScore >= 70: 
    distinctions += 1

  if totalScore <= 69 and totalScore >= 50:
    passes += 1

  if totalScore <= 49 and totalScore >= 0:
    failures += 1


print("failures: " + str(failures))
print("passes: " + str(passes))
print("distinctions: " + str(distinctions))
```
