var question = {  question : null,
                   asked : ["Happy St Patrick's" ,
                            'Do you want a pint of Guinness?',
                            "Paddy, it's your round"],
                    reply :["tildlely de, potatoes",
                            'Just the luck of the Irish.',
                            "Look, Leprechaun!"]};
var countDrunk = 0;
function askPaddy() {
  var str = document.getElementById('question').value;
  for (var i = 0; i < question.asked.length; i++) {

    if (str === question.asked[1]) {
      countDrunk++;
      if (countDrunk == 2) {
        paddyReply(question.reply[1]);
        countDrunk = 0;
      }
      else {
        paddyReply('...');
      }
    }
    else if (str === question.asked[i]) {
      paddyReply(question.reply[i]);
    }
  }
}
function paddyReply(str){
  console.log(str);
  document.getElementsByClassName('answer')[0].innerHTML = "<div id='tedAnswer'> <span>" + str + "</span></div>";
}

var btnAsk = document.getElementById('btnAsk');
var answer = btnAsk.addEventListener('click', askPaddy );
