const fs = require('fs');
const assignments = fs.readFileSync('input.txt').toString().split("\n");
let contain = 0;
let overlap = 0;
for (i in assignments) {
  const [first,second] = assignments[i].split(",");
  const [firstStart,firstEnd] = first.split("-");
  const [secondStart,secondEnd] = second.split("-");

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
console.log('contain',contain);
console.log('overlap',overlap);