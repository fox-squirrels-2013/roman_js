function roman(number){
  var numeral="";
  var numerals = {"C": 100, "L": 50, "X": 10, "V": 5, "I": 1};

  for (var numbers in numerals)
  {
    console.log(numbers)
    while (number >= numbers)
    {
      console.log(number)
      number  -= numbers;
      numeral += numerals;
    }
  }

  // while (number >= 100)
  // {
  //   numeral+="C"
  //   number-=100
  // }

  // while (number >= 50)
  // {
  //   numeral+="L";
  //   number-=50;
  // }

  // while (number >= 10)
  // {
  //   numeral+="X";
  //   number-=10;
  // }

  // while (number >= 5)
  // {
  //   numeral+="V";
  //   number-=5;
  // }

  // while (number > 0) 
  // {
  //   numeral+="I";
  //   number--;
  // }
  return numeral;
}
