function alphabetSort(message){
  var arr = message.split('');
  var sorted = arr.sort();
  return sorted.join('');
}
console.log(alphabetSort('hello')); // should return 'ehllo'