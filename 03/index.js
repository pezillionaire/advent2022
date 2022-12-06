const fs = require('fs');
const bags = fs.readFileSync('input.txt').toString().split(/\r?\n/);
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const values = {};

[...alphabet].forEach((x,i) => {
  Object.assign(values,{ [x]: i + 1 });
});

const split = (str,i) => {
  return [str.slice(0,i),str.slice(i)];
}

const arrayCompare = (arrayOfArrays) => {
  return arrayOfArrays.shift().filter(v => {
    return arrayOfArrays.every(a => {
      return a.indexOf(v) !== -1;
    });
  });
}

// sum the common item in each bag compartment (split bag in half)
const items = []
bags.forEach(bag => {
  const [first,second] = split(bag,(bag.length / 2));
  const compartments = [[...first],[...second]];
  const filter = arrayCompare(compartments);
  items.push(values[filter[0]])
})
const itemSum = items.reduce((acc,value) => acc + value,0);
console.log(itemSum) //A 7824

// sum the common item in each 3 bag group
const elfGroup = []
for (let bag = 0; bag < bags.length; bag += 3) {
  const group = [[...bags[bag]],[...bags[bag + 1]],[...bags[bag + 2]]];
  const filter = arrayCompare(group);
  elfGroup.push(values[filter[0]]);
};
const groupSum = elfGroup.reduce((acc,value) => acc + value,0);
console.log(groupSum); //B 2798
