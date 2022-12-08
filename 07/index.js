
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(/\r?\n/);
let nest = [];
let structure = { '/': {} };
let cd = '';

const setNestedKey = (obj,path,value) => {
  if (path.length === 1) {
    obj[path] = value
    return
  }
  return setNestedKey(obj[path[0]],path.slice(1),value)
}

input.forEach((line,i) => {
  const cmd = line.split(/\s/);
  if (cmd[0] == '$') {
    if (cmd[1] == 'cd') {
      if (cmd[2] == '..') {
        nest.pop();
      } else { cd = cmd[2]; }
    } else if (cmd[1] == 'ls') {
      nest.push(cd);
    }
  } else if (parseInt(cmd[0])) {
    setNestedKey(structure,[...nest,cmd[1]],cmd[0])
  } else if (cmd[0] == 'dir') {
    setNestedKey(structure,[...nest,cmd[1]],{})
  }
});

console.log(structure);