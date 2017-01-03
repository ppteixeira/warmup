

var map1  = [ ["A","A","A","A","A"],
              ["A","A","A","A","A"],
              ["A","A","X","A","A"],
              ["A","A","A","A","A"],
              ["A","A","A","A","A"] ];
var map2 = [
              ["A","A","A","A","A"],
              ["A","A","A","A","A"],
              ["A","A","A","A","A"],
              ["A","A","A","A","A"],
              ["A","X","A","A","A"]
              ];

var map3 = [
              ["A","A","A","A","A"],
              ["A","A","V","A","A"],
              ["A","A","A","V","A"],
              ["v","v","V","v","X"],
              ["A","V","A","A","A"]
              ];

var map4 = [
              ["A","A","A","A","A"],
              ["A","A","V","A","A"],
              ["A","A","A","V","A"],
              ["v","v","V","v","A"],
              ["X","V","A","A","A"]
              ];

var holyGrailMap = [
              ["v","v","V","v","S","S"],
              ["v","v","V","v","S","S"],
              ["v","v","V","v","S","S"],
              ["v","v","V","v","S","S"],
              ["v","v","G","v","S","S"],
              ["v","v","H","v","S","S"],
              ["v","v","V","v","S","S"],
              ["A","V","A","A","A","S"]
              ];

var treasure = [];
var key = 'X';

function findTreasure(map,reference){
  var coordinate = [];
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map.length; j++) {
      if (map[i][j] == reference){
        coordinate[0] = i;
        coordinate[1] = j;
        if (map[i][j] == '') {        *************** need fix ************

        }
        return coordinate;
      }
    }
  }
}
var treasure1 = findTreasure(map1,key);
var treasure2 = findTreasure(map2,key);
var treasure3 = findTreasure(map3,key);
var treasure4 = findTreasure(map4,key);
var holyGrailMapG = findTreasure(holyGrailMap,'G');
var holyGrailMapH1 = findTreasure(holyGrailMap,'H');
var holyGrailMapH2 = findTreasure(holyGrailMap,'H');
var holyGrailMapV = findTreasure(holyGrailMap,'V');
console.log('Treasure 1 = '+ treasure1 );
console.log('Treasure 2 = '+ treasure2 );
console.log('Treasure 3 = '+ treasure3 );
console.log('Treasure 4 = '+ treasure4 );
console.log('holyGrailMap G = '+ holyGrailMapG );
console.log('holyGrailMap H1 = '+ holyGrailMapH1 );
console.log('holyGrailMap H2 = '+ holyGrailMapH2 );
console.log('holyGrailMap V = '+ holyGrailMapV );
