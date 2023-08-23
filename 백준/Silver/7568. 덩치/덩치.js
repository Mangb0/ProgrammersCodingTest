var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input.shift();
const array = input.map((v) => v.split(" ").map((v) => +v));
const rank = [];

for (let i = 0; i < T; i++) {
  let count = 0;
  for (let j = 0; j < T; j++) {
    if (array[i][0] < array[j][0] && array[i][1] < array[j][1]) {
      count++;
    }
  }
  rank.push(count + 1);
}

console.log(rank.join(" "));
