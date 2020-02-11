//String To Word

function doesContain(char) {
  let containsArr = ["!", "?", ".",];
  for (let i = 0; i < containsArr.length; i++){
    if( char == containsArr[i]){
      return true
    }
  }
}

function strToArr(str){
  let newArr = [''];
  for(let i = 0; i < str.length; i++){
    if(str[i] == " "){
      newArr.push("");
    } else if (doesContain(str[i])){
      newArr.push("");
      newArr[newArr.length-1] += str[i];
    } else {
      newArr[newArr.length-1] += str[i];
    }
  }
  return newArr;
}