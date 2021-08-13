[course materials](https://sundog-education.com/machine-learning/)

## Installation

install [anaconda](https://www.anaconda.com/products/individual)

install pydotplus  `conda install pydotplus`

install tensorflow `pip install tensorflow`

## Open Juypter notebooks

Navigate to course materials 
```
jupyter notebook
```

## Python basics

run a code block jupyter notebooks `shift + enter`

import and rename
```python
import numpy as np
```
list 
```python
x = [1, 2, 3, 4]
``` 
Length of list 
```
len(x)
```
slice first 3 items 
```
x[:3]
```
last 3 items
```python
x[3:]
```
extend
```python
x.extend([1,2])
```
append
```python
x.append(9)
```
sort
```python
x.sort()
```
sort in reverse order
```
x.sort(reverse=True)
```
Tuples 
- immutable 
```python
z = (1,2,3)
```
variable assignment from spliting a string
```python
(age, income) = "32,120000".split(',')

```
Dictionaries 
```
captains = {}
captains["Enterprise"] = "Kirk" 
captains.get("Enterprise")

for ship in captains:
    print(ship + ": " + captains[ship])
```
functions
```python
def SquareIt(x):
    return x*x

def DoSomething(f, x):
    return f(x)

DoSomething(SquareIt, x)

DoSomething(lambda x: x * x * x, 3)
 
```

Booleans
```
1 == 3
# false

1 is 3
# false

True or False
```

looping 
```python
for x in range(10):
    print(x)

for x in range(10):
    if (x is 1):
        continue
    if (x > 5):
        break
    print(x) 
```
Graphs will be created in notebook no in new file. 
```python
%matplotlib inline
```
## Pandas
```python
%matplotlib inline
import numpy as np
import pandas as pd

df = pd.read_csv("PastHires.csv")
df.head()
# first 10
df.head(10)
# last 10 
df.tail(10)
# shape rows and columns
df.shape
# total cell
df.size
# get columns names
df.columns
# get column
df["Hired"]

df["Hired"][:5]
# single value
df["Hired"][5]

df[["Hired","Years of Experience"]]
df[['Hired', 'Years of Experience']]

#distribution of data
degree_counts = df['Level of Education'].value_counts()
# plot a graph
degree_counts.plot(Kind='bar')
```

## Types of Data
- numerical
    - Representative of quantitive measurement e.g heights of people
    - discrete data 
        - integer based counts of some event
    - continuous data
        - infinate number of possible values infinate precision availab;e
- categorical
    -  qualatitve data that has no inherent mathematical meaning
- ordinal 
    - mixture of categorical and numeric meaning
    - eg. movie rating by star

## Mean, Median, Mode
- Mean
    - average
    - sum values and divide by number of samples
- Median 
    - sort values and find the middle
- Mode
    - most common value in dataset

```python

```    
