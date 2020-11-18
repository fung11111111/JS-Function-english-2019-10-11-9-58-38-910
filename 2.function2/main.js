function reverseString(message){
  var revStr = "";
    for (let i = message.length - 1; i >= 0; i--) {
      revStr += message[i];
    }
   return revStr;
}

function palindrome(message){
  var cpyStr = reverseString(message);
  var palindrome = true;
  for(var i =0;i<message.length;i++){
    if(cpyStr[i] != message[i]){
      palindrome = false;
      break;
    }
  }
  return palindrome;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true