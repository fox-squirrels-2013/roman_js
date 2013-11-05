// Write your roman numeral code here


function roman(arabic){
  var string = ''

// var array = [[10, 'X'],
//              [ 5, 'V'],
//              [ 1, 'I']]

  if (arabic < 10000 && arabic >= 1000) {
    for(var i = 0; i < Math.floor(arabic / 1000); i++) {
      string += 'M';
    }
    arabic %= 1000;
  }  

  if (arabic < 1000 && arabic >= 500) {
    for(var i = 0; i < Math.floor(arabic / 500); i++) {
      string += 'D';
    }
    arabic %= 500;
  }  

  if (arabic < 500 && arabic >= 100) {
    for(var i = 0; i < Math.floor(arabic / 100); i++) {
      string += 'C';
    }
    arabic %= 100;
  }  

  if (arabic < 100 && arabic >= 50) {
    for(var i = 0; i < Math.floor(arabic / 50); i++) {
      string += 'L';
    }
    arabic %= 50;
  }  

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