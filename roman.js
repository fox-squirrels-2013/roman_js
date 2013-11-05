// Write your roman numeral code here

function roman(number){
  var numeral=""

  if (number >= 100)
  {
    while (number >= 100)
    {
      numeral+="C"
      number-=100
    }
  }
  
  if (number >= 50)
  {
    while (number >= 50)
    {
      numeral+="L";
      number-=50;
    }
  }

  if (number >= 10)
  {
    while (number >= 10)
    {
      numeral+="X";
      number-=10;
    }
  }

  if (number >= 5)
  {
    while (number >= 5)
    {
      numeral+="V";
      number-=5;
    }
  }

  if (number >= 1)
    {
      while (number > 0) 
      {
        numeral+="I";
        number--;
      }
    }
  return numeral;
}
