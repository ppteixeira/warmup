

function flipCoin(){
  tailsCount = 0;
  headsCount = 0;
  winner = null;
  flips = 0

    do {
        document.getElementById('tailsCoin').style.visibility = 'hidden';
        document.getElementById('headsCoin').style.visibility = 'hidden';
        var x = Math.floor((Math.random() * 2) + 1);

        if (x === 1) {
          tailsCount++;
          console.log('tails');
          document.getElementById("result").innerHTML = 'tails';
          document.getElementById('tailsCoin').style.visibility = 'visible';

        }
        else {
          headsCount++;
          console.log('heads');
          document.getElementById("result").innerHTML = 'heads';
          document.getElementById('headsCoin').style.visibility = 'visible';
        }

        document.getElementById("tails").innerHTML = 'Tails --> ' + tailsCount;
        document.getElementById("heads").innerHTML = 'Heads --> ' + headsCount;

      if (headsCount >= tailsCount) {
        winner = 'Heads'
        winnerCount = headsCount;
      }else {
        winner = 'Tails'
        winnerCount = tailsCount;
      }
      flips = setTimeout(function (flips) { return flips + 1;  },1000);
  } while (flips < 5);
    console.log('winner : '+ winner);
    document.getElementById("winner").innerHTML = 'WINNER: ' + winner;
}
flipCoin();
