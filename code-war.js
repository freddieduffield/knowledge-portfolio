// 1. write function that determines whether the character count of string is equal when removing one character
// 2.  a string of characters 
// 3. boolean 
// 4. 
// 5. 


// Examples 
// 'abba' === false

// {a: 2, b: 2}
// a - 1 = {a: 1, b: 2}  === false
// b - 1 = {a: 2, b: 1}  === false

// 'abbba' === true 

// {a: 2, b: 3} 
// a - 1 = {a: 1, b: 3}  === false
// b - 1 = {a: 2, b: 2}  === true

// 'aaaa' === true

// {a: 4} 
// a - 1 = {a : 3} === true 

// 'wwf' === true 

// {w: 2, f: 1}
// w - 1 = {w: 1, f: 1} === true
// f - 1 = {w: 2} === true
 
// If only one character remains, return true; 
// If all character counts are equal, return true 

// 'aaabcde' === false

// {a: 3, b: 1, c: 1, d: 1 }




function solve(s) {
  // make array store count
  const characterCount = {};
  // loop over string 
  for (let char in s) {
    // if char is in characterCount ++
    // else add char to characterCount with value 1
    if(characterCount[char]) {
      characterCount[char] += 1
    } else {
      characterCount[char] = 1
    }
  }
  // loop over characterCount array 
  for (let key of Object.keys(characterCount3)) { 
    let modifiedCount = {...characterCount3}

    modifiedCount[key] = characterCount3[key] - 1
    
    const values = Object.values(modifiedCount); 
    
    values.every(val => val === values[0])
  } 
}


// function letterFrequency(text){

//   const count = ( allLetters, letter ) => {
//      if (letter in allLetters) {
//        allLetters[letter]++ 
//      } else {
//        allLetters[letter] = 1
//      }
//      return allLetters
//    }
 
//   const letterCount = text
//    .replace(/[^\w\s]|_/g, "")
//    .replace(/\s+/g, "")
//    .toLowerCase()
//    .split('')
//    .reduce( count, {} )
   
//    console.log(letterCount)
   
//    const newObject = {}
   
//    Object.keys( letterCount )
//     .sort()
//     .forEach(key => {
//     newObject[key] = letterCount[key]
//    });
   
//    console.log(newObject)
  
//    return Object.entries( newObject )
//     .sort()
//     .sort((a, b) => b[1] - a[1] )
//  }


// Letter Frequency 

// write a function that returns an array of arrays of characters sorted by frequency of occurance. 

// strings can contain uppercase, can contain numbers spaces and punctuation marks eg. 'aaaaAA BBBBB cccc' 

// [['a', 6], ['b', 5], ['c', 4]] array of arrays 

//  we have enough input just need to count

// eg 
// letterFrequency('aaaaAA BBBBB cccc') returns [['a', 6], ['b', 5], ['c', 4]]
// 

// letterFrequency('As long as I'm learning something, I figure I'm OK - it's a decent day.') 
// returns  [["i", 7], ["a", 5], ["e", 5], ["n", 5], ["g", 4], ["s", 4], ["m", 3], ["o", 3], ["t", 3], ["d", 2], ["l", 2], ["r", 2], ["c", 1], ["f", 1], ["h", 1], ["k", 1], ["u", 1], ["y", 1]]

//  []

// no need to handle inputs which aren't strings? 

// sanitise input (string: 'As long as I'm learning something,' string: returns 'aslongasimlearningsomething')
  // remove punctuation 
  // remove numbers
  // remove spaces 
  // convert to lowercase

// count characters 
  // create object 
  // loop over string
  // if char exists in object + 1
  // if char doesn't exist in object, add with value of 1
  
// Sort by frequency

function letterFrequency(text) {

  const sanitisedText = text
    .toLowerCase()
    .replace(/[0-9~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-\s]/g, '');  
  
  const count = {}  

  for(let char in sanitisedText) {
    count[char] 
    ? count[char] += 1
    : count[char] = 1
  }

  const arr = Object.entries(count)
  const sortArray = arr
    .sort()
    .sort((a, b) => b[1] - a[1])

  return sortArray;
}
