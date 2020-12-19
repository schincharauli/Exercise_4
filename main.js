
// Exercises

// Variables
// Declare a variable firstname and initialize it with the value 'Lata'
let firstname = 'Lata';

// What is x?
// Which value does x have after execution of the following code?
// let x = 'Geeta';
'Geeta'

// Several variables
// Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'.
let flower = 'rose';
let tree = 'maple';

// Reassignment
// Which value does x have after execution of the following code?
// let x = 'Tic';
// x = 'Tac';
// x = 'Toe';
'Toe'

// Assign variables
// Which value does x have after execution of the following code?
// let x = 'Laurel';
// let y = 'Hardy';
// let z = y;
// y = x;
// x = z;
'Hardy'

// Functions
// Define a function hello that returns 'Hello world!'.
function hello () {
     return 'Hello world!'};

// Multiple functions
// Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'.
function a () {
    return'Hello a!'}
   
   function b () {
    return 'Hello b!'}

 // Function calls
//  1. Define a function greet returning the value 'Haydo!'.
// 2. Declare a variable salutation. Call the function greet and assign the result of the call to the variable salutation.
function greet () {
    return 'Haydo!';}
   
   let salutation = greet ();

//    What is x?
// Which value does x have after execution of the following code?
// function hello() {
//   return 'Hi!';
// }
// let x = hello();
'Hi!'

// Parameters
// Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2') should return 'CO2'
function echo(Greta) {
    return 'Greta'; 
   }
   
function echo(CO2){
    return 'CO2'; 
   }
// ჯანო, პიროის მიხედვით ვფიქრობ, რომ სწორად ავაწყვე, მაგრამ არ მითვლის და პასუხი რომ ვნახე ასეთი ჩანაწერია: 
// function echo(sound) {
//     return sound;
//   } 
// ჰოდა პირობაში ეს sound არ იყო მოცემული და ცოტა ვერ გაივეგე ეს ამბავი. :-// 

// What is x?
// function reply(phrase) {
//     return phrase;
//   }
  
//   let x = reply('How do you do?');
'How do you do?'

// Strings
// Write a function greet having one parameter and returning 'Hello <parameter>!'.
function greet (Ada) {
    return 'Hello ' + Ada + '!' ; }

// What is x?
// Which value does x have after execution of the following code?
// function whereIs(name) {
//   return 'Where is ' + name + '?';
// }
// let x = whereIs('Jacky');
'Where is Jacky?'

// What is x?
// which value does x have after execution of the following code?
// function hi(name) {
//   return 'Hi ' + name + '!';
// }

// let h1 = hi('Selva');
// let h2 = hi('Pola');
// let x = h1 + ' ' + h2;
'Hi Selva! Hi Pola!'

// Logging
// Write a function log that logs 'Hello Console!'. If you are working with a desktop browser, open the developer tools to see the output there as well.
function log () {
    console.log('Hello Console!')};

// Logging variables
// Write a function log, that takes a parameter and logs this parameter.

// Example: log('Ken Thompson') should log 'Ken Thompson'.
function log (google) {

    console.log(google)
    }
    
// Logging and Strings
// Write a function shout that takes a string and returns this string duplicated. In addition, the return should be logged.
function shout(water) {
    let result = water + water; 
    console.log(result);
    return result; }

// Silent Teacher
// Which value does x have after execution of the following code?
// function double(name) {
//   return name + ' and ' + name;
// }

// let x = double('Roy');
'Roy and Roy'

// String: toUpperCase()
// Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter.
function toCase(mthatha) {
    return mthatha.toLowerCase() + '-' + mthatha.toUpperCase();
  }

//   String: charAt()
// Write a function shortcut that takes two strings and returns the initial letters of theses strings.
function shortcut(Amnesty, International) {
    return Amnesty.charAt(0) + International.charAt(0); 
    }

// String: trim()
// Write a function firstChar, which returns the first character that is not a space when a string is passed.
// Example: firstChar(' Rosa Parks ') should return 'R'.
function firstChar(Rosa) {
    let trim = ' Rosa '.trim();
    return trim.charAt(0);
   }
// ჯანო მიხარვეზებს ამ დავალებას და მიწერს: firstChar(' Louise') does not return 'L', but 'R'. არადა პირობაში არ ყოფილა ეგ მოცემული. იდეაში ერთი პარამეტრი მომთხოვა და მეც ერთი გავუწერე. 

// String: indexOf()

// String: indexOf()
// Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.
function indexOfIgnoreCase(bit, it) {
    let bitLower = bit.toLowerCase();
    let itLower = it.toLowerCase();
    return bitLower.indexOf(itLower);
  }

//   String: indexOf() with from index
// Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. 
// If the search string does not occur twice, -1 should be returned.
function secondIndexOf(Rabbit, it) {
    let firstIndex = Rabbit.indexOf(it);
    return Rabbit.indexOf(it, firstIndex + 1);
  }

//   String: substr()
// Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the first space.
function firstWord(see) {
    let firstBlank = see.indexOf(' ');
    return see.substr(0, firstBlank);
  }

//   String: replace()
// Write a function normalize, that replaces '-' with '/' in a date string.




// Increment
// Which value does x have after execution of the following code?
x = 7

// Fahrenheit
// Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.
function toFahrenheit(celsius) {
    return 1.8 * celsius + 32;
  }

//   Modulo
// Write a function onesDigit that takes a natural number and returns the ones digit of that number.
function onesDigit(number) {
    return number % 10; 
    }

 // Parentheses
//  Write a function mean that takes 2 numbers and returns their mean value.
function mean(x, y) {
    return (x + y) / 2;
  }
  
  // Math
  // Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. 
  // The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean theorem is valid. 
  // If a and b are the lengths of the two legs and c is the length of the hypotenuse, the following is true: a² + b² = c². 
  // Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.  
  function hypotenuse(a, b) {
    let cSquare = Math.pow(a, 2) + Math.pow(b, 2);
    return Math.sqrt(cSquare);
  }

// min and max
// Write a function midrange, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.
function midrange(3, 9, 1) {
  let min = Math.min(3, 9, 1);
  let max = Math.max(3, 9, 1);
  return (min + max) / 2;
}

// Math.PI
// Write a function area that calculates the area of a circle. The function is given the radius of the circle.



// Rounding
// Write a function round100 that rounds a number to the nearest hundred.
// Example: round100(1749) should return 1700 and round100(856.12) should return 900.



// Boolean
// Write a function nand that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true.
function nand(b, c) {
  let and = b && c;
  return !and;
}

// NOR
// Write a function nor that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.
function nor(b, c) {
  let and = b && c;
  return !and;
}

// Strict equality
// Write a function equals that checks two values for strict equality.

// Example: equals(1, 1) should return true and equals(1, 2) should return false.
function equals(x, y) {
  return x === y;
}

// Three identical values
// Write a function equals that checks 3 values for strict equality. The function should only return true if all 3 values are equal.
function equals(x, y, z) {
  return x === y && x === z;
}

// Strict inequality
// Write a function unequal that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.
function unequal(1, 2, 3) {
  return 1 !== 2 && 1 !== 3 && 2 !== 3;
}

// Compare numbers
// Write a function isThreeDigit that checks if a number is greater than or equal to 100 and less than 1000.
function isThreeDigit(x) {
  return x >= 100 && x < 1000;
}

// if
// Write a function equals that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.
function repdigit(n) {
  let ones = n % 10;
  let tens = Math.floor(n / 10);
  if (ones === tens) {
    return 'Repdigit!';
  }
  return 'No Repdigit!';
}

// Arrays
// Write a function toArray that takes 2 values and returns these values in an array.
function toArray(a, b) {
  return [a, b];
}

// Get array elements
// Write a function getFirstElement that takes an array and returns the first element of the array.
function getFirstElement(a) {
  return [a];
}


