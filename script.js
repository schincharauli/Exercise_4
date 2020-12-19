// Exercise - Hello World
alert("Hello World!");

// Exercise - Weeks in a lifetime
var daysInYear = 365.25;
var daysInWeek = 7;
var yearsInLifetime = 80;
var x = 365.25*80;
var y = 7;
var z = x / y;
console.log(z)

// Exercise - String Concatenation
var greeting = 'hello ';
var name = 'world ';
var alert = 'hello ' + 'world ';

console.log(alert)


// Exercise - Conditional logic
var date = new Date(2020,11,20);
date.setHours(11);
console.log(date)



// Exercise - Lunar Countdown
function countDown (a) {
  let arr = [];
  for (i=a; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}

console.log(countDown (10))


// Pizza Exercise
var toppings;
var toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];
 function makePizza(toppings){
  return "A tasty pizza with Cheese and Ham and Bits and Tomatoes"
 }
 console.log(toppings)


//  Harder Exercise - Capitalise every element
 var array = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];
 var uppers = array.map(function(x) { return x.toUpperCase(); });
 console.log(uppers);