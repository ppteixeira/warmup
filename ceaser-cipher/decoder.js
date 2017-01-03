normalAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var cipherAlphabet = [];
var input = 'FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH';
function findNewAlphabet(y) { // y is the shift value
    var shift = normalAlphabet.slice(0,y);
    cipherAlphabet = normalAlphabet.slice(y,normalAlphabet.length);
    cipherAlphabet = cipherAlphabet.concat(shift);
    return cipherAlphabet;
}
function replace(inputString){

  var decripted = [];
  for (var i = 0; i < inputString.length-1; i++) {
    if (i < shiftNumber) {

    }else {
      decripted[i] = decript(inputString[i])
    }
  }

  return decripted;
}

function decript (character){
    var foundIndex = cipherAlphabet.indexOf(character);
    if (foundIndex == -1) {
      return character
    }else {
      var foundLetter = normalAlphabet[foundIndex];
      return foundLetter;
    }
}

// function replace(inputString){
//   debugger
//   var decripted = [];
//   for (var i = 0; i < inputString.length-1; i++) {
//     decripted[i] = decript(inputString[i]);
//   }
//   return decripted;
// }
//
// function decript (character){
//     var foundIndex = normalAlphabet.indexOf(character);
//     if (foundIndex == -1) {
//       return character
//     }else {
//       var foundLetter = normalAlphabet[foundIndex];
//       return foundLetter;
//
//     }
// }

// CaesarCipher.encode('TWO SYMBOLS KISSING EACH OTHER')
// take the index of the letter encrypted

// find the letter with the same index on normalAlphabet


var shiftNumber = 3;
cipherAlphabet = findNewAlphabet(shiftNumber);
var decryptedInput = replace(input);
decryptedInput.join('');
console.log(cipherAlphabet);
console.log(normalAlphabet);
console.log(decryptedInput);
