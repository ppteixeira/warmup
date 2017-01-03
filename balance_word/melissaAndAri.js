// Return weight based on position in alphabet
var getLetterWeight = function(letter) {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(letter.toUpperCase()) + 1;
}

// Calculate total weight for string
var getStringWeight = function(str) {
  var stringWeight = 0;

  // Each letter score is based on its base letter value and position from end
  for (var i = 0; i < str.length; i++) {
    stringWeight += getLetterWeight(str[i]) * (i + 1);
  }

  return stringWeight;
}

// Check if word can be balanced around a focal point
// If word can be balanced, print letter weight and characters around focal point
var canBalance = function(word) {
  word = word.toUpperCase();
  // If word too short to be balanced, print error and return
  if (word.length < 3) {
    return word + ' is too short to balance';
  }

  // Print error if word contains non-alphabetical characters
  if (!/^[A-Z]+$/.test(word)) {
    return word + ' contains non-alphabetical characters';
  }

  // Calculate weight of word around focal point
  for (var i = 1; i < word.length - 1; i++) {
    var leftSide = word.substring(0, i);
    var rightSide = word.substring(i + 1, word.length);

    // Reverse left side to simplify weight calculation
    var leftWeight = getStringWeight(leftSide.split('').reverse().join(''));
    var rightWeight = getStringWeight(rightSide);
    // If weight on both sides of focal point are equal
    // return message and weight
    if (leftWeight === rightWeight) {
      return leftSide + ' ' + word[i] + ' ' + rightSide + ' - ' + leftWeight;
    }
  }

  return word + ' DOES NOT BALANCE';
}

var test1 = 'CONSUBSTANTIATION';
var test2 = 'WRONGHEADED';
var test3 = 'UNINTELLIGIBILITY';
var test4 = 'SUPERGLUE';

// -- UI Code
var input = document.getElementById('word-input');
var button = document.getElementById('button');
var resultToPage = document.getElementById('result');

button.addEventListener('click', function(){
  var word = input.value;
  resultToPage.textContent = canBalance(word);
});