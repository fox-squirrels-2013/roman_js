function assert(outcome,description){
  console.log(outcome + " : " + description)
}

// Write your TDD code here

assert(roman(1)=="I", "it converts 1 to I")
assert(roman(2)=="II", "it converts 2 to II")
assert(roman(5)=="V", "it converts 5 to V")
assert(roman(6)=="VI", "it converts 6 to VI")
assert(roman(7)=="VII", "it converts 7 to VII")
assert(roman(10)=="X", "it converts 10 to X")
assert(roman(59)=="LVIIII", "it converts 59 to LVIIII")
assert(roman(99)=="LXXXXVIIII", "it converts 99 to LXXXXVIIII")
assert(roman(100)=="C", "it converts 100 to C")

