const fs = require('fs');
let [cont,inst] = fs.readFileSync('input.txt').toString().split('\n\n',2);
cont = cont.split('\n').reverse();
inst = inst.split('\n').filter(x => x)

const contLength = parseInt((cont.shift().split(' ')).filter(x => x).pop());
let containers = [...Array(contLength)].map(e => [])
const instructions = []

for (i of inst) {
  const s = i.split(' ');
  instructions.push([parseInt(s[1]),parseInt(s[3]),parseInt(s[5])]);
}

for (stack of cont) {
  for (let i = 0; i < contLength; ++i) {
    const container = stack[1 + i * 4];
    if (container && container !== ' ') {
      containers[i].push(container);
    }
  }
}

for (let i = 0; i < instructions.length; ++i) {
  const move = instructions[i][0];
  const fromStack = containers[(instructions[i][1]) - 1];
  let toStack = containers[(instructions[i][2]) - 1];
  // Remove .reverse() for answer B
  const moving = (fromStack.splice(-move).reverse());
  toStack = [...toStack,...moving];
  containers[instructions[i][1] - 1] = fromStack;
  containers[instructions[i][2] - 1] = toStack;
}

let result = '';
for (stack of containers) {
  result = result.concat(stack[stack.length - 1])
}
console.log(result);
//A = WCZTHTMPS
//B = BLSGJSDTS