const fs = require('fs');
const elfList = fs.readFileSync('input.txt').toString().split("\n\n");
const topElves = [];
const elfSums = []
for (i in elfList) {
  const elf = (elfList[i].split("\n"));
  for (i in elf) { elf[i] = parseInt(elf[i]); }
  const sum = elf.reduce((acc,value) => acc + value,0);
  if (!Number.isNaN(sum)) { elfSums.push(sum); }
}
[...Array(3)].forEach((x,i) => {
  let top = elfSums.indexOf(Math.max(...elfSums));
  console.log(i + 1,top);
  topElves.push(elfSums[top])
  elfSums.splice(top,1)
});
console.log('top 3',topElves);
console.log('sum',topElves.reduce((acc,value) => acc + value,0));
