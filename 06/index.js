const fs = require('fs');
const signal = fs.readFileSync('input.txt').toString();

const packetFinder = (markerLength) => {
  let signalFound = 0;
  for (let i = 0; i < signal.length; ++i) {
    console.log(signal[i]);
    const marker = [signal[i]];
    for (let j = 1; j < markerLength; ++j) {
      marker.push(signal[i + j]);
      if (marker.filter(x => x === signal[i + j]).length > 1) { break }
      else if (marker.length === markerLength) { signalFound = i + j + 1; }
    }
    if (signalFound > 0) { return signalFound };
  }
}
console.log(packetFinder(4));  // A
console.log(packetFinder(14)); // B
