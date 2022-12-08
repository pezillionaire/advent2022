const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(/\r?\n/);
const nest = [];
const dirStructure = { '/': {} };
const dirSize = {};
let curDir = '';

const setNestedValue = (obj,path,value) => {
  if (path.length === 1) {
    obj[path] = value
    return
  }
  return setNestedValue(obj[path[0]],path.slice(1),value)
}

input.forEach((line) => {
  const cmd = line.split(/\s/);
  if (cmd[0] == '$') { // check if command
    if (cmd[1] == 'cd') {
      if (cmd[2] == '..') { // remove from nesting
        nest.pop();
      } else { curDir = cmd[2]; } // set current directory
    } else if (cmd[1] == 'ls') { // set current directory to nesting
      nest.push(curDir);
    }
  } else if (parseInt(cmd[0])) { // set files w/ size
    setNestedValue(dirStructure,[...nest,cmd[1]],cmd[0]);
    for (i of nest) {
      if (dirSize[i]) {
        dirSize[i] += parseInt(cmd[0]);
      } else { dirSize[i] = parseInt(cmd[0]); }
    };
  } else if (cmd[0] == 'dir') { // set dirs
    setNestedValue(dirStructure,[...nest,cmd[1]],{});
  }
});

let result = 0
for (const [key,value] of Object.entries(dirSize)) {
  if (value <= 100000) {
    result += value;
  }
}
console.log(dirSize);
console.log('result',result);