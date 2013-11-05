// Write your roman numeral code here
function roman(x) {

  var roman_string = ''

  if (x > 5) {
    roman_string + 'V';
    x - 5
  }
  else if (x === 1){
    roman_string + 'I';
  }
  return roman_string
} ;

 // else if (x === 2 )
  // {
  //    return "II";
  // }
  // else if (x === 4)
  // {
  //   return "IV";
  // }
  // else if (x === 5)
  //   return "V";

