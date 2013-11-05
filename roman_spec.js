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
assert(roman(100)=="C", "it converts 100 to C")
assert(roman(145)=="CXXXXV", "it converts 145 to CXXXXV")
assert(roman(233)=="CCXXXIII", "it converts 233 to CCXXXIII")
assert(roman(500)=="D", "it converts 500 to D")
assert(roman(505)=="DV", "it converts 505 to DV")
assert(roman(1000)=="M", "it converts 1000 to M")
assert(roman(9999)=="MMMMMMMMMDCCCCLXXXXVIIII", "it converts 9999 to MMMMMMMMMDCCCCLXXXXVIIII")


