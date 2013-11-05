function assert(outcome,description){
  console.log(outcome + " : " + description)
}

// Write your TDD code here

assert(roman(1)=="I", "it converts 1 to I")
assert(roman(2)=="II", "it converts 2 to II")
assert(roman(3)=="III", "it converts 3 to III")
assert(roman(5)=="V", "it converts 5 to V")
assert(roman(6)=="VI", "it converts 6 to VI")
assert(roman(8)=="VIII", "it converts 8 to VIII")
assert(roman(10)=="X", "it converts 10 to X")
assert(roman(13)=="XIII", "it converts 13 to XIII")
assert(roman(23)=="XXIII", "it converts 23 to XXIII")
assert(roman(40)=="XXXX", "it converts 40 to XXXX")
assert(roman(45)=="XXXXV", "it converts 45 to XXXXV")

