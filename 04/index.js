const fs = require('fs');
const assignments = fs.readFileSync('input.txt').toString().split(/\r?\n/);
let contain = 0;
let overlap = 0;
for (let i of assignments) {
  const [first,second] = i.split(/,/);
  const [firstStart,firstEnd] = first.split(/-/);
  const [secondStart,secondEnd] = second.split(/-/);

  if (parseInt(firstStart) <= parseInt(secondStart) && parseInt(firstEnd) >= parseInt(secondEnd)) {
    contain += 1
  } else if (parseInt(secondStart) <= parseInt(firstStart) && parseInt(secondEnd) >= parseInt(firstEnd)) {
    contain += 1
  }

  if (parseInt(firstStart) <= parseInt(secondStart) && parseInt(firstEnd) >= parseInt(secondStart)) {
    overlap += 1
  } else if (parseInt(firstStart) >= parseInt(secondStart) && parseInt(firstStart) <= parseInt(secondEnd)) {
    overlap += 1
  } else if (parseInt(secondStart) <= parseInt(firstStart) && parseInt(secondEnd) >= parseInt(firstStart)) {
    overlap += 1
  } else if (parseInt(secondStart) >= parseInt(firstStart) && parseInt(secondEnd) <= parseInt(firstEnd)) {
    overlap += 1
  }
}
console.log('contain',contain); // A 509
console.log('overlap',overlap); // B 870