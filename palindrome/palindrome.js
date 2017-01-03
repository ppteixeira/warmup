var palindrome = 'Im a tune nut, am I'

function concatenate(str){
  return str.replace(/\s/g,'');
}
function reverse(s) {
  return s.split('').reverse().join('');
}
function onlyLeters(s){
  return s.replace(/[^a-zA-Z ]/g, "");
}

function checkPalindrome(string){
  var condition = null;

  var strConcat = concatenate(string);
  var str = onlyLeters(strConcat);
  str = strConcat.toLowerCase();
  var strReversed = reverse(str) ;

  if (str == strReversed){
    console.log('Palindrome!');
  }else {
    console.log('Not this time.');
  }
  // var y = str.length - i;
  // for (var i = 0; i < str.length || i == y - 1 ; i++ , y--) {
  //
  //   if (str[i] === str[y]){
  //     condition = true;
  //   }else {
  //     condition = false;
  //     break;
  //   }
  // }
  // if (condition == true) {
  //   console.log('The string "' + string +'" is a palindrome.');
  // }else {
  //   console.log('The string "' + string +'" is NOT a palindrome.');
  // }
}
