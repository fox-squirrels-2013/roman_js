// Write your roman numeral code here

var roman = function(num) {
  var result = "";
  var romanHash = {
    100: "C",
    50: "L",
    5: "V",
    10: "X",
    1: "I"
  };
  var romanArray = [];
  for (var key in romanHash) {romanArray.push([key, romanHash[key]])}; 
    romanArray = romanArray.reverse();
  while (num > 0){
    for (var index in romanArray){
      if (Math.floor(num/index) == 1){
        result += romanArray[index][1];
      num -= romanArray[index][0];
      }
    }
  };
  return result;
};


// for(var index in items) {
//   document.write( index + " : " + items[index] + "<br />");
// }


    // if (num == 100) {
    //   result += "C";
    //   num -= 100;
    // }
    // else if (num >= 50) {
    //   result += "L";
    //   num -= 50;
    // }
    // else if (num >= 10) {
    //   result += "X";
    //   num -= 10;
    // }
    // else if (num >= 5) {
    //   result += "V";
    //   num -= 5;
    // }
    // else {
    //   result += "I";
    //   num -= 1;
    // }



  // if (num == 1) {
  //   return "I";
  // } 
  // else if (num == 2) {
  //   return "II";
  // }
  // else if {
  //   return "V";
  // }
  // else 