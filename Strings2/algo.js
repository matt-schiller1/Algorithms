// String to Word Array

function stringToWord(str) {
  let newArr = [''];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newArr[newArr.length - 1] += str[i];
    } else {
      newArr.push("");
    }
  }
  console.log((newArr[newArr.length - 1]));
  return newArr;
}

function stringToWord()

// console.log(stringToWord("Life is not a drill!"));

// Reverse Word Order

function reverseWordOrder(str) {

  let newStr = '';
  for (let i = newArr.length - 1; i >= 0; i--) {
    newStr += newArr[i];
  }
  return newStr;
}

console.log(reverseWordOrder("This is a test"));