/*
Biggie Size

Given an array, write a function that changes all positive numbers in the array to “big”. 
Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
*/

function makeItBig(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      array[i] = "big"
    }
  }
  return array;
}

/*
Print Low, Return High

Create a function that takes an array of numbers. The function should print the lowest 
value in the array, and return the highest value in the array.
*/

function printLowReturnHigh(array) {
  var lowest = array[0];
  var highest = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > highest) {
      highest = array[i];
    } else if (array[i] < lowest) {
      lowest = array[i];
    }
  }
  console.log(lowest);
  return highest;
}

/*
Print One, Return Another

Build a function that takes an array of numbers. 
The function should print the second-to-last value 
in the array, and return first odd value in the array.
*/

function printOneReturnAnother(array) {
  console.log(array[array.length - 2]);
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      return array[i];
    }
  }
}

/*
Double Vision

Given an array, create a function to return a new array where each value 
in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.
*/

function doubleVision(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i] * 2);
  }
  return newArr;
}

/*
Count Positives

Given an array of numbers, create a function to replace last 
value with the number of positive values. Example,  countPositives([-1,1,1,1]) 
changes array to [-1,1,1,3] and returns it.
*/

function countPositives(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      count++;
    }
  }
  array[array.length - 1] = count;
  return array;
}

/*
Evens and Odds

Create a function that accepts an array. Every time that array
has three odd values in a row, print "That’s odd!" Every time the 
array has three evens in a row, print "Even more so!"
*/

function evensAndOdds(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1 && array[i - 1] % 2 === 1 && array[i - 2] % 2 === 1) {
      console.log("That's Odd!")
    } else if (array[i] % 2 === 0 && array[i - 1] % 2 === 0 && array[i + 1] % 2 === 0) {
      console.log("Even More So!")
    } else {
      continue;
    }
  }
}

/*
Increment the Seconds

Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.
*/

function incrementTheSeconds(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (i % 2 === 1) {
      array[i] = array[i] + 1;
    }
  }
  return array;
}

/*
Previous Lengths

You are passed an array containing strings. Working within that same array, 
replace each string with a number – the length of the string at previous 
array index – and return the array.
*/

function previousLengths(array) {
  var length;
  for (var i = 0; i < array.length; i++) {
    length = array[i].length;
    array[i] = length;
  }
  return array;
}

/*
Add Seven to Most

Build a function that accepts an array. Return a new array with all 
values except first, adding 7 to each. Do not alter the original array.
*/

function addSevenToMost(array) {
  var newArr = [];
  for (var i = 1; i < array.length; i++) {
    newArr.push(array[i] + 7);
  }
  return newArr;
}

/*
Reverse Array

Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) 
returns same array, containing [2,4,6,1,3].
*/

function reverseArray(array) {
  for (var i = 0; i < array.length / 2; i++) {
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

/*
Outlook: Negative

Given an array, create and return a new one containing all the values 
of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
*/

function outlookNegative(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      newArr.push(array[i])
    } else {
      newArr.push(-Math.abs(array[i]));
    }
  }
  return newArr;
}

/*
Always Hungry

Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".
If no array elements are "food", then print "I'm hungry" once.
*/

function alwaysHungry(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "food") {
      console.log("yummy");
      count++
    }
  }
  if (count === 0) {
    console.log("I'm hungry");
  }
}

/*
Swap Toward the Center

Given array, swap first and last, third and third-tolast, etc. 
Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. 
Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
*/

function swapTowardsTheCenter(array) {
  for (var i = 0; i < array.length / 2; i += 2) {
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

/*
Scale the Array

Given array arr and number num, multiply each arr value by num, and return the changed arr.
*/

function scaleTheArray(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * num;
  }
  return arr;
}

