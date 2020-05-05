/*
For Loop

for (<initialization>; <condition>; <incrementer>){
[do some code]
}

<Initialization> - This expression is where we initialize a veriable that will
                   be used as a counter. You can call it whatever you'd like.
                   Call it tuna, it'll still work. Widely adopted is calling that
                   variable 'i'.

<Condition> - If this expression evaluates to "true" then we run another cycle of the loop.
              If it is false, we stop and exit the loop. Each cycle in a loop is an iteration.

<incremeneter> - This expression is evaluated after every iteration of the loop. This step should
                 bring the counter that was created in the initialization closer to the condition to
                 evaluate to false.

Steps for the loop

1. Initialize the counter
2. Evaluate the condition, if it's false loop is over! / True move to 3
3. Run all the code inside the body of the loop
4. Increment the counter and go back to step 2.

Infinite loops

The loop will stop running once the middle condition evaluates to false. In infinite loops, the condition will always be true.

for (let i = 0; i < 200; i -= 1){
[some code]
}

Return vs. Console Log

A return saves the product of a function to a variable i.e. 
*/
const mattsFavoriteFood = "Anything but Spinach Souffle"


// while console.log just prints it to the console. One saves, one doesnt.


// Define a function `logBetween(lowNum, highNum)` that 
// will print every number from `lowNum` to `highNum`, 
// inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. 

// Hint: this function only need to print using `console.log`,
// it does not need to return.

// Examples:

// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2

// logBetween(14, 6); prints nothing


// Define a function `fizzBuzz(max)` that takes a number 
// and prints  every number from 0 to `max` that is divisible 
// by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18

// Define a function `isPrime(number)` that returns `true` 
// if `number` is prime. Otherwise, false. Assume `number` 
// is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(7); // => true
// isPrime(9); // => false