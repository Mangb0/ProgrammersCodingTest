var fs = require("fs");
var input = +fs.readFileSync("/dev/stdin").toString().trim();
const answer = [];

for (let i = 0; i < input / 3 + 1; i++) {
  let sugar = input - i * 3;
  if (sugar % 5 === 0) {
    answer.push(i + sugar / 5);
  }
}

console.log(answer.length === 0 ? -1 : Math.min(...answer));
