// Write your roman numeral code here
function roman(x) 
{
  var romanArray = [];
  for (var i = 0; x > i; i++) 
  {
    if (x >= 10) {
      romanArray.push("X");
      x -= 9;
    } else if (x >= 5) {
      romanArray.push("V");
      x -= 4;
    } else {
      romanArray.push("I");
    }
  
  }
    var romanNumber = romanArray.join("");
    console.log(romanNumber);
    return romanNumber;
}



































  // r_array = r_array || [];
  // for(var i = 0; i < x; i++)
  // {  
  //   if (i < 4) {
  //     r_array.push("I");
  //   } else {
  //     r_array = []
  //     r_array.push("V");
  //     x %= 5;
  //     roman(x);
  //   }
  // }
  // var romanNumber = r_array.reverse().join("");
  // console.log(romanNumber);

  // return romanNumber;

