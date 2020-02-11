/*
Setting and Swapping

Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
*/

var myNumber = 42;
var myName = "your name";

var temp = myNumber; // Since we are reassigning the value of myNumber, we need a variable to hold on to the initial value.
myNumber = myName;
myName = temp;

/*
Print -52 to 1066

Print integers from -52 to 1066 using a FOR loop. 
*/

for (var i = -52; i <= 1066; i++) {
  console.log(i);
}

/*
Don’t Worry, Be Happy

Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
*/

function beCheerful() {
  for (var i = 0; i <= 98; i++) {
    console.log("good morning!");
  }
}


/*
Multiples of Three – but Not All

Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
*/

for (var i = -300; i <= 0; i++) {
  if (i === -3 || i === -6) {
    continue;
  } else if (i % 3 === 0) {
    console.log(i);
  }
}

/*
Printing Integers with While

Print integers from 2000 to 5280, using a WHILE. 
*/

var i = 2000;
while (i <= 5280) {
  console.log(i)
  i++;
}

/*
You Say It’s Your Birthday

If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
*/

function myBirthday(num1, num2) {
  var myBirthMonth = 8;
  var myDay = 29;
  if (num1 === myBirthMonth || num1 === myDay && num2 === myBirthMonth || num2 === myDay) {
    console.log("How did you know?");
  } else {
    console.log("Just another day.")
  }
}

/*
Leap Year

Write a function that determines whether a given year is a leap year. 
If a year is divisible by four, it is a leap year, unless it is divisible by 100. 
However, if it is divisible by 400, then it is.
*/

// If / Else If / Else
function leapYear1(year) {
  if (year % 4 === 0 && !(year % 100 === 0) || (year % 400 === 0)) {
    console.log("Leap Year");
  } else {
    console.log("Not a Leap Year");
  }
}

// One Line with Return Statement
function leapYear2(year) {
  return (year % 4 === 0 && !(year % 100 === 0) || (year % 400 === 0));
}

//Ternary Solution
function leapYear3(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}



/*
Print and Count

Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
*/

function printAndCount() {
  multiples = 0;
  for (var i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
      console.log(i);
      multiples++
    }
  }
  console.log("Number of Multiples: " + multiples);
}

/*
Multiples of Six

Print multiples of 6 up to 60,000, using a WHILE.
*/

var i = 1;
while (i <= 60000) {
  i++;
  if (i % 6 === 0) {
    console.log(i);
  }
}

/*
Counting, the Dojo Way

Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
*/

for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 10 !== 0) {
    console.log("Coding");
  } else if (i % 10 === 0) {
    console.log("Dojo");
  } else {
    console.log(i);
  }
}

/*
What Do You Know?

Your function will be given an input parameter incoming. Please console.log this value.
*/

function whatDoYouKnow(incoming) {
  console.log(incoming);
}

/*
Whoa, That Sucker’s Huge…

Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
*/

function whoaThatSuckersHuge() {
  var sum = 0;
  for (var i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log(sum);
}

/*
Countdown by Fours

Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
*/

function countdownByFours() {
  var number = 2016;
  while (number >= 0) {
    console.log(number);
    number = number - 4;
  }
}

/*
Flexible Countdown

Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, 
using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
*/

function flexibleCountdown(lowNum, highNum, mult) {
  for (i = highNum; i >= lowNum; i -= mult) {
    console.log(i);
  }
}

/*
The Final Countdown

This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; 
don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 
and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. 
Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
*/

function finalCountdown(num1, num2, num3, num4) {
  while (num2 <= num3) {
    if (num2 % num1 === 0 && num2 !== num4) {
      console.log(num2);
    }
    num2++;
  }
}

