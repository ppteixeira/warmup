var arg1 = 5;
var arg2 = 5;
var arg3 = null;
var arg4 = null;
var key = 'F';

function makeFakeMap(arg1,arg2,key){
  console.log(key);
  var write = [];
  var randomValue1 = Math.floor((Math.random() * 5) + 1);
  var randomValue2 = Math.floor((Math.random() * 5) + 1);
  var $map = $('.map');
  console.log(randomValue1);
  console.log(randomValue2);
  for (var i = 1; i < arg1 + 1; i++) {
    for (var y = 1; y < arg2 + 1; y++) {
      if (i === randomValue1 && y === randomValue2) {
        write[y] = key;
      }else {
        write[y] = 'A';
      }
    }
    stringWrite = write.join(" ");
    $map.append(stringWrite +"<br />");
    console.log(stringWrite);
    write = [];

  }
}

makeFakeMap(arg1,arg2,key);


//_______________________________SOLUTION____________________

// function makeFakeMap(x, y, key) {
//     var boundingMap = [];
//     for(var i = 0; i < x; i++) {
//         var line = [];
//         for(var j = 0; j < y; j++) {
//             line.push('A');
//
//         }
//         boundingMap.push(line);
//
//     }
//
//     var randomX = Math.floor(Math.random() * (x + 1));
//     var randomY = Math.floor(Math.random() * (y + 1));
//
//     boundingMap[randomX][randomY] = key;
//
//     return boundingMap;
// }
//
// makeFakeMap(10, 10, 'X');
//
// //output
//
// [ [ 'X', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ],
//   [ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ],
//   [ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ],
//   [ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ],
//   [ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ],
//   [ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ],
//   [ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ],
//   [ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ],
//   [ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ],
//   [ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ] ]
