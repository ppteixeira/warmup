//https://gist.github.com/HMAN1911/9382f2fa1042205cc51cb53b81aad65e

var group = {
    A: 20,
    B: 15,
    C: 10
}

// var group = {
//     A: 20.45,
//     B: 15.49,
//     C: 10.13
// }


splitTheBill(group) // returns {A: 5, B: 0, C: -5}


function splitTheBill(entry) {
  var total = 0;
  for (var key in entry) {
    total += entry[key];

  }
  total = total / 3;
  var splited = {};
  for (var key in entry) {
    splited[key] = +(entry[key] - total).toFixed(2);

  }
  console.log(splited);

  // var total = (entry.A + entry.B + entry.C) / 3;
  // var a = (entry.A - total).toFixed(2);
  // var b = (entry.B - total).toFixed(2);
  // var c = (entry.C - total).toFixed(2);
  // console.log("A -> " + a);
  // console.log("B -> " + b);
  // console.log("C -> " + c);
}
