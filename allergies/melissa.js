// List of items and allergy score
const allergens = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
};

// Constructor function. Maybe
var Allergies = function(score) {
  this.score = score;
  // Generate list of items that patient is allergic to based on score
  this.list = Object.keys(allergens)
    .reverse()
    .filter((item) => {
      if (score >= allergens[item]) {
        score -= allergens[item];
        return true;
      }
      return false;
    })
    .reverse();
}

// Check if patient is allergic to given item
Allergies.prototype.isAllergicTo = function(item) {
  // If not listed in allergens mark false
  // Otherwise check allergen score against total allergy score
  return this.list.indexOf(item) !== -1;
}

module.exports = Allergies;
