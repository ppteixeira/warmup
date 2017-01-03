
var holdem = {

  makedeck: function() {
    var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10","J", "Q", "K"];
    var suits = {clubs:'clubs', diamonds: 'diamonds', hearts: "hearts", spades: "spades"};
    var deck = [];
    for (var suit in suits){
      for (var j = 0; j < ranks.length; j++) {
          deck.push([ranks[j], suits[suit]])
      }
    }

    return deck
  },

  shuffle: function(list) {
    var i = 0
      , j = 0
      , temp = null;
    for (i = list.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    return list
  },

  dealCards: function(list , num = 1) {
    var dealedList = [];
    for (var i = 0; i < num; i++) {
      dealedList.push(list[i])
    }
    for (var i = 0; i < num; i++) {
      list.shift();
    }
    return [list,dealedList];
  },

}
