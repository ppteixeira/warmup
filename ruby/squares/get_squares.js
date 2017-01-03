var test = [1,4, 1, 16, 1, 10, 35, 22]
var result = get_square(test)

function get_square(array){
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    var num = Math.sqrt(array[i])
    if (num % 1 === 0) {
      newArray.push(array[i])
    }
  }
  return uniq(newArray)
}

function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}
