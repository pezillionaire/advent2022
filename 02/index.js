const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n");

const lut1 = {
  AX: (1 + 3),
  AY: (2 + 6),
  AZ: (3 + 0),
  BX: (1 + 0),
  BY: (2 + 3),
  BZ: (3 + 6),
  CX: (1 + 6),
  CY: (2 + 0),
  CZ: (3 + 3)
}

const lut2 = {
  AX: (3 + 0),
  AY: (1 + 3),
  AZ: (2 + 6),
  BX: (1 + 0),
  BY: (2 + 3),
  BZ: (3 + 6),
  CX: (2 + 0),
  CY: (3 + 3),
  CZ: (1 + 6)
}

total1 = 0
total2 = 0
for (i in input) {
  total1 += lut1[input[i].replace(/\s/g,'')];
  total2 += lut2[input[i].replace(/\s/g,'')];
}
console.log('round1 ',total1)
console.log('round2 ',total2)