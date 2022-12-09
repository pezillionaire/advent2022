const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(/\r?\n/);
const forest = []
for (let row in input) { forest[row] = input[row].split(''); }
const viz = []
// let visible = (forest.length * 2) + (forest[0].length * 2) - 4;

console.log(forest);
console.log(visible);

for (let i = 1; i < forest.length - 1; ++i) {
  forest[i]
}
