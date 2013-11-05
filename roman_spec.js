function assert(outcome,description){
  console.log(outcome + " : " + description)
}

// Write your TDD code here

assert(roman(1)=="I", "it converts 1 to I");
assert(roman(2)=="II", "it converts 2 to II");
assert(roman(3)=="III", "it converts 3 to III");
assert(roman(4)=="IV", "it converts 4 to IV");
assert(roman(5)=="V", "it converts 5 to V");
assert(roman(9)=="IX", "it converts 9 to IX");


