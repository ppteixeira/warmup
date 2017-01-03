function grannyTalk(userInput) {
  if (userInput === 'BYE'){
    return "What's that honey, I didn't hear you..";
  }else if (isUpperCase(userInput)){
    var year = getYear(1930,1950)
    return 'NO, NOT SINCE '+ year;
  }else {
    return 'SPEAK UP SONNY JIM';
  }
}

function getYear(min, max) { // GET A RANDOM YEAR BETWEEN TWO GIVEN VALUES
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isUpperCase(str) { // CHECK IF A STRING IS CAPS OR NOT
    return str === str.toUpperCase();
}

function grandpaTalk(answerGranny) {
  if (question === 'BYE'){
    return 'Whassup';
  }else {
    var checkAnswer = function (answerGranny) {
      var n = answer.search("19");
      return n;
    }
    if (checkAnswer === -1 ){
      return "What's that honey, I didn't hear you..??";
    }
    else{
      yearGrandpa = getYear(1930,1950);

      return 'NO, NOT SINCE '+ yearGrandpa;
    }
  }
}

var question = prompt("Talk to Granny");

var answer = grannyTalk(question);
var grandpaAnswer = grandpaTalk(answer);
window.alert('Grandpa: Your granny said " ' + grandpaAnswer + ' "');
