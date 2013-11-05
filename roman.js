// Write your roman numeral code here


function roman(arabic){
  var string = ''


  if (arabic < 50 && arabic >= 10) {
    for(var i = 0; i < Math.floor(arabic / 10); i++) {
      string += 'X';
    }
    arabic %= 10;
  }  

  if (arabic < 10 && arabic >= 5) {
    for(var i = 0; i < Math.floor(arabic / 5); i++) {
      string += 'V';
    }
    arabic %= 5;
  }

  if (arabic < 5) {
    for(var i = 0; i < arabic; i++) {
      string += 'I';
    }
  }

  return string
};