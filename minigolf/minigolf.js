var bob = {
  holeAttempts : [3,2,6,11,9,2,6,9,10],
  holeScores : [],
  total : 0,
  name : 'Bob'
}
var jimbo = {
  holeAttempts : [5,12,9,22,13,7,16,10,11],
  holeScores : [],
  total : 0,
  name : 'Jimbo'
}
var fish = {
  holeAttempts : [2,2,4,5,4,3,6,4,1],
  holeScores : [],
  total : 0,
  name : 'Fish'
}
var par = {
  hole : [3,4,5,5,3,3,4,3,5],
  total : 0
}
var totalHouse = 0;
var winner = {
  holeAttempts : [],
  holeScores : [],
  total : 0,
  name : null
}

function totalScores(player) {
  for (var i = 0; i < par.hole.length; i++) {
    player.holeScores[i] = player.holeAttempts[i] - par.hole[i];
    player.total = player.total + player.holeScores[i];
    par.total =+ par.hole[i];
    
    console.log('Par '+ (i+1) + ' score : ' + player.holeScores[i] )
  }

  console.log(player.name +
              ' scored a total of ' +
              player.total +
              ' points. ');
  console.log(' ');
  return player;
}
function findWinner(player1,player2,player3) {
  if (player1.total < player2.total && player1.total < player3.total){
    return player1;
  }else if (player2.total < player3.total) {
    return player2;
  }else {
    return player3;
  }
}

bob = totalScores(bob);
jimbo = totalScores(jimbo);
fish = totalScores(fish);
winner = findWinner(bob,jimbo,fish)
console.log('The winner is '+ winner.name + ' with a total of ' + winner.total + ' points.');
