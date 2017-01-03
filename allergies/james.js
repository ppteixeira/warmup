function Allergies(score) {
  this.score = score;
  this.list = find_list(this.items, this.score, []);

  function find_list(items, score, keys_used) {
    var keys = Object.keys(items);

    for (var i = 0; i < keys.length; i++) {
      var temp_score = score - items[keys[i]];

      if (temp_score === 0) {return keys_used.concat(keys[i]);}
      else if (temp_score < 0) {return false;}

      var temp_items = Object.assign({}, items);
      delete temp_items[keys[i]];

      var result = find_list(temp_items, temp_score, keys_used.concat(keys[i]));
      if (result !== false) {
         return result;
      }
    }
    return false;
  }
}

Allergies.prototype.allergic_to = function(string) {
  return this.list.includes(string);
};

Allergies.prototype.items = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
};

var allergies = new Allergies(34);
console.log(allergies.list);
console.log(allergies.allergic_to('chocolate'));
