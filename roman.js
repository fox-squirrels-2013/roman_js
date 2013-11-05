// Write your roman numeral code here
var r_array;
function roman(x) 
{
  r_array = r_array || [];
  for(var i = 0; i < x; i++)
  {  
    if (i < 4) {
      r_array.push("I");
    } else {
      r_array = []
      r_array.push("V");
      x %= 5;
      roman(x);
    }
  }
  var romanNumber = r_array.reverse().join("");
  console.log(romanNumber);

  return romanNumber;

}
