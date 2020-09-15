function feeetToMile(mile)
{
  var feet = mile*0.000189393939;
  return feet;
}

var providedMile = feeetToMile(10000);
console.log(providedMile);