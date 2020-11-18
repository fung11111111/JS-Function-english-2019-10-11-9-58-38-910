function countWords(message){
  var cnt = message.split(" ").length;
	return cnt;
}
console.log(countWords('Good morning, I love JavaScript.')); // should return 5