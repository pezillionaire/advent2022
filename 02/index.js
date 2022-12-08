const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(/\r?\n/);

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
for (let i of input) {
  total1 += lut1[i.replace(/\s/g,'')];
  total2 += lut2[i.replace(/\s/g,'')];
}
console.log('round1 ',total1) //A 10816
console.log('round2 ',total2) //B 11657