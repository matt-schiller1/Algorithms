/*
Only Keep the Last Few

Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount.
Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter).
Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.
*/

function onlyKeepTheLastFew(array, num) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + num - 1]
  }
  array.length = num
  return array;
}

/*
Math Help

Cartman doesn’t really like math; he needs help. You are given two numbers – 
coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept 
(his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; 
Cartman just snorts in his general direction).
*/

function mathHelp(num1, num2) {
  return [num1 / num2, 0];
}


/*
Poor Kenny

Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, 
there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 
30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.
*/

function whatHappensToday() {
  var disasterNumber = Math.floor((Math.random() * (101 - 1) + 1));
  switch (true) {
    case (disasterNumber >= 1 && disasterNumber <= 10):
      console.log("Look out for the Volcano!");
      break;
    case (disasterNumber >= 11 && disasterNumber) <= 30:
      console.log("Look out for the Earthquake!");
      break;
    case (disasterNumber >= 31 && disasterNumber) <= 55:
      console.log("Look out for the Blizzard!");
      break;
    case (disasterNumber >= 56 && disasterNumber) <= 85:
      console.log("Look out for the Meteor Strike");
      break;
    case (disasterNumber >= 86 && disasterNumber) <= 100:
      console.log("Look out for the Tsunami!");
      break;
  }
}

/*
Soaring IQ

Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student,
Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp,
his IQ rose by .01 on the first day, then went up by an additional .02 on the second day,
then up by .03 more on the third day, etc. all the way until increasing by 
.98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?

*/

function soaringIQ() {
  var bogdenIQ = 101;

  for (var i = .01; i <= .98; i += .01) {
    bogdenIQ += i;
  }

  return bogdenIQ;
}

/*
Letter Grade

Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, 
given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 
70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, 
you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".
*/

function letterGrade(score) {
  if (typeof (score) !== "number") {
    return "score must be a number"
  }

  if (score <= 59) {
    return "Score: " + score + " Grade: F";
  } else if (score >= 60 && score <= 69) {
    return "Score: " + score + " Grade: D";
  } else if (score >= 70 && score <= 79) {
    return "Score: " + score + " Grade: C";
  } else if (score >= 80 && score <= 89) {
    return "Score: " + score + " Grade: B";
  } else if (score >= 90 && score <= 100) {
    return "Score: " + score + " Grade: A";
  }
}


/*
More Accurate Grades

For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores,
 and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). 
 Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .
*/

function moreAccurateGrades(score) {
  if (typeof (score) !== "number") {
    return "score must be a number"
  }

  if (score <= 59) {
    return "Score: " + score + " Grade: F";
  } else if (score >= 60 && score <= 62) {
    return "Score: " + score + " Grade: D-";
  } else if (score >= 63 && score <= 67) {
    return "Score: " + score + " Grade: D";
  } else if (score >= 68 && score <= 69) {
    return "Score: " + score + " Grade: D+";
  } else if (score >= 70 && score <= 72) {
    return "Score: " + score + " Grade: C-";
  } else if (score >= 73 && score <= 77) {
    return "Score: " + score + " Grade: C";
  } else if (score >= 78 && score <= 79) {
    return "Score: " + score + " Grade: C+";
  } else if (score >= 80 && score <= 82) {
    return "Score: " + score + " Grade: B-";
  } else if (score >= 83 && score <= 87) {
    return "Score: " + score + " Grade: B";
  } else if (score >= 88 && score <= 89) {
    return "Score: " + score + " Grade: B+";
  } else if (score >= 90 && score <= 92) {
    return "Score: " + score + " Grade: A-";
  } else if (score >= 93 && score <= 100) {
    return "Score: " + score + " Grade: A";
  }
}