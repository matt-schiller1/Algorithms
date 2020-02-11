/*
Countdown

Create a function that accepts a number as an input. Return a new array that counts down by one, from
the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
*/

function countDown(number) {
  newArray = [];
  for (var i = number; i >= 0; i--) {
    newArray.push(i);
  }

  console.log(newArray.length);
  return newArray;
}

/*
Print and Return

Your function will receive an array with two numbers. Print the first value, and return the second.
*/

function printAndReturn(array) {
  console.log(array[0]);
  return array[1];
}

/*
First Plus Length

Given an array, return the sum of the first value in the array, plus the array’s length. 
What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
*/

function firstPlusLength(array) {
  return [array[0], array.length];
}

/*
Values Greater than Second

For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is. 
*/

array = [1, 3, 5, 7, 9, 13]
for (var i = 0; i < array.length; i++) {
  if (array[i] > array[1]) {
    console.log(array[i]);
  }
}

/*
Values Greater than Second, Generalized

Write a function that accepts any array, and returns a new array with the array values that are greater 
than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
*/

function greaterThanSecond(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[1]) {
      console.log(array[i]);
    }
  }
}

/*
This Length, That Value

Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same. 
*/

function thisLengthThatValue(num1, num2) {
  newArray = [];
  for (var i = 0; i < num1; i++) {
    if (num1 === num2) {
      newArray.push("Jinx!")
    } else {
      newArray.push(num2);
    }
  }
  return newArray;
}

/*
Fit the First Value

Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; 
if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
*/

function fitFirstValue(array) {
  if (array[0] > array.length) {
    console.log("Too Big!");
  } else if (array[0] < array.length) {
    console.log("Too Small!");
  } else {
    console.log("Just Right!");
  }
}

/*
Fahrenheit to Celsius

Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number
of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, 
Fahrenheit = (9/5 * Celsius) + 32.
*/

function fToC(fDegrees) {
  return ((fDegrees - 32) * 5 / 9)
}

/*
Celsius to Fahrenheit

Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent 
temperature expressed in Fahrenheit degrees.
*/

function cToF(cDegrees) {
  return ((9 / 5 * cDegrees) + 32);
}

/*
(Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, 
so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), 
checking whether it is equal to the corresponding Fahrenheit value.
*/

function equalCelsiusAndFahrenheit() {
  var degrees = 200;
  while (true) {
    if (((9 / 5 * degrees) + 32) === ((degrees - 32) * 5 / 9)) {
      console.log(degrees + " celsius and fahrenheit are the same");
      break;
    }
    degrees--;
  }
}

equalCelsiusAndFahrenheit();