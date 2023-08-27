var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = [];
const map = new Map();

for (let v of input[1].split(" ")) {
  if (map.has(v)) {
    map.set(v, map.get(v) + 1);
  } else {
    map.set(v, 1);
  }
}

for (let v of input[3].split(" ")) {
  if (map.has(v)) {
    answer.push(map.get(v));
  } else {
    answer.push(0);
  }
}

console.log(answer.join(" "));
