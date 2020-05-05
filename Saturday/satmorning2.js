function oddsEvenAvg(arr) {
  var oddsSum = 0;
  var evenSum = 0;
  var oddsCount = 0;
  var evensCount = 0;
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
      evensCount++;
    } else if (arr[i] % 2 !== 0) {
      oddsSum += arr[i];
      oddsCount++;
    }
  }
  console.log("Odds Average: " + oddsSum / oddsCount);
  return ("Evens Average: " + evenSum / evensCount);
}

var arr = [2, 4, 6, 8, 1, 7, 11, 17, 3];

var MattsFavoriteFood = "Not Spinach Souffle"
console.log("Not Spinch Souffle")

console.log(oddsEvenAvg(arr));