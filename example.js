function arrayLength(arr) {
  var arrLen = 0;
  var i = 0;
  while (arr[i++]) {
    arrLen++;
  }
  return arrLen;
}
function addToArray(arr, add) {
  var arrLen = arrayLength(arr);
  arr[arrLen] = add
  return arr
}

function insertAt(arr, pos, val) {
  var arrLen = arrayLength(arr);
  console.log(arrLen);
  var newArray = [];
  if (pos < arrLen - 1) {
    for (var i = 0; i < arrLen; i++) {
      console.log(i);
      // if (i = pos) {
      //   addToArray(newArray, val);

      // }
      addToArray(newArray, val);
    }
    console.log(newArray);
  }
  else {
    console.log("That position is not available")
  }
}

insertAt([5, 7, 2, 8], 2, 6)