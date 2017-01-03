function Allergies(allergies) {
  const allAllergies = ["eggs", "peanuts", "shellfish", "strawberries","tomatoes","chocolate","pollen","cats"];

  // Array of indexes which point to the appropriate allergies on the array of all the allergies.
  var myAllergies = getAllergies(allergies);

  function getAllergies(a) {


    var indexes = a % 256;
    var indexList = [];
    while ( indexes > 0 ) {
      let i = parseInt(Math.log2(indexes));
      indexList.unshift(i);
      indexes -= Math.pow(2,i);
    }
    return indexList;
  };

  return {
    allergicTo : function(a) {
      return myAllergies.includes(allAllergies.indexOf(a))
    },

    list : function() {
      return myAllergies.map( a => allAllergies[a] )
    }
  }
}

var allergies = Allergies(35);

console.log(allergies.allergicTo('chocolate'));

console.log(allergies.allergicTo('cats'));

console.log(allergies.list());
