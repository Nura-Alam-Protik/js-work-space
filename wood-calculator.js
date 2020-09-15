function woodCalculator(chair, table, bed)
{
  var totalWoods = 1*chair + 3*table + 5*bed;
  return totalWoods;
}

var woodRequirement = woodCalculator(14, 5, 12);
console.log(woodRequirement);