const fs = require('fs');
const elfList = fs.readFileSync('input.txt').toString().split(/\r?\n{2}/);
const topElves = [];
const elfSums = []
for (let elf of elfList) {
  elf = (elf.split(/\n/));
  for (let val in elf) { elf[val] = parseInt(elf[val]); }
  const sum = elf.reduce((acc,value) => acc + value,0);
  if (!Number.isNaN(sum)) { elfSums.push(sum); }
}
[...Array(3)].forEach(() => {
  let top = elfSums.indexOf(Math.max(...elfSums));
  topElves.push(elfSums[top])
  elfSums.splice(top,1)
});
console.log('top',topElves[0]); //A 68802
console.log('sum top 3',topElves.reduce((acc,value) => acc + value,0)); //B 205370
