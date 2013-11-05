function assert(outcome,description){
  console.log(outcome + " : " + description)
}


assert(roman(1)==="I", "it converts 1 to I")
assert(roman(2)==="II", "it converts 2 to II")
assert(roman(4)==="IV", "it converts 4 to IV")
assert(roman(5)==="V", "it converts 5 to V")
assert(roman(6)==="VI", "it converts 6 to VI")