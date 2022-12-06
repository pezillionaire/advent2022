const fs = require('fs');
let [cont,inst] = fs.readFileSync('input.txt').toString().split('\n\n',2);
cont = cont.split('\n').reverse();
inst = inst.split('\n').filter(x => x)
instructions = []
for (i of inst) {
  const s = i.split(' ');
  instructions.push([parseInt(s[1]),parseInt(s[3]),parseInt(s[5])]);
}

const contLength = parseInt((cont.shift().split(' ')).filter(x => x).pop());
let containers = [...Array(contLength)].map(e => [])

for (stack of cont) {
  for (let i = 0; i < contLength; ++i) {
    const container = stack[1 + i * 4];
    if (container && container !== ' ') {
      containers[i].push(container);
    }
  }
}
// console.log(cont);
console.log(containers);
// console.log(inst[0]);
// console.log(instructions[0]);
// console.log(inst[inst.length - 1]);
// console.log(instructions[instructions.length - 1]);


for (let i = 0; i < instructions.length; ++i) {
  const move = instructions[i][0];
  const fromStack = containers[(instructions[i][1]) - 1];
  let toStack = containers[(instructions[i][2]) - 1];
  // console.log('move',move);
  // console.log('from',fromStack);
  // console.log('to',toStack);
  const moving = (fromStack.splice(-move)).reverse();
  // console.log('moving',moving);
  toStack = [...toStack,...moving];
  containers[instructions[i][1] - 1] = fromStack;
  containers[instructions[i][2] - 1] = toStack;
  // console.log('fromAfter',fromStack);
  // console.log('toafter',toStack);
  // console.log(inst[i]);
  // console.log((instructions[i][1]) - 1,(instructions[i][2]) - 1);
  // console.log('containers',containers);
}

// console.log(containers);
let result = '';
for (stack of containers) {
  result = result.concat(stack[stack.length - 1])
}
console.log(result);