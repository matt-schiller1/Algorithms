// Change every word to pig latin (adding -ay to the end of each)


function pigLatin(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + "-ay"
  }
  return arr;
}


console.log(pigLatin(["hi", "there", "guys", "sunday", "funday"]));
