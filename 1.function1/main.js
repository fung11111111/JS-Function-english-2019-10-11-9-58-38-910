function reverseString(message){
  var revStr = "";
    for (let i = message.length - 1; i >= 0; i--) {
      revStr += message[i];
    }
   return revStr;
}
var result = reverseString('hello');
console.log(result);
