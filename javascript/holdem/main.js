
console.log("4 PLAYER PLAYING:");

var totalPlayers = 4;
var players = []

var deck = holdem.makedeck()
deck = holdem.shuffle(deck)
var deckAndCards;
for (var i = 0; i < totalPlayers ; i++) {
  deckAndCards =  holdem.dealCards(deck,2) ;
  deck = deckAndCards[0];
  players[i] = deckAndCards[1];
  if (i == totalPlayers - 1){
    console.log('Your hand: '+ players[i]);
  }else {
    console.log('CPU '+ i + ' hand: ' + players[i]);
  }
}

var deckAndFlop = holdem.dealCards(deck,3);
deck = deckAndFlop[0]
var flop = deckAndFlop[1];
console.log('Flop: ' + flop );

var deckAndTurn = holdem.dealCards(deck,1)
deck = deckAndTurn[0]
var turn = deckAndTurn[1]
console.log('Turn: ' + turn );

var deckAndRiver = holdem.dealCards(deck,1)
deck = deckAndRiver[0]
var river = deckAndRiver[1]
console.log('River: ' + river );
