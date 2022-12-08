const fs = require('fs');
let [cont,inst] = fs.readFileSync('input.txt').toString().split(/\r?\n{2}/);
cont = cont.split(/\r?\n/).reverse();
inst = inst.split(/\r?\n/).filter(x => x)

const contLength = parseInt((cont.shift().split(/\s/)).filter(x => x).pop());
const containers = [...Array(contLength)].map(e => [])
for (let stack of cont) {
  for (let i in containers) {
    const container = stack[1 + i * 4];
    if (container && container !== ' ') {
      containers[i].push(container);
    }
  }
}

const instructions = []
for (let i of inst) {
  const s = i.split(/\s/);
  instructions.push([parseInt(s[1]),parseInt(s[3]),parseInt(s[5])]);
}

for (let i in instructions) {
  const move = instructions[i][0];
  const fromStack = containers[(instructions[i][1]) - 1];
  let toStack = containers[(instructions[i][2]) - 1];
  // Remove .reverse() for answer B
  const moving = fromStack.splice(-move).reverse();
  toStack = [...toStack,...moving];
  containers[instructions[i][1] - 1] = fromStack;
  containers[instructions[i][2] - 1] = toStack;
}

let result = '';
containers.forEach(stack => {
  result = result.concat(stack.pop())
})

console.log(result);
//A = WCZTHTMPS
//B = BLSGJSDTS