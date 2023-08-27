var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const obj = {};
let answer = "";

input[3].split(" ").map((v) => {
  obj[v] = 0;
});

input[1].split(" ").map((v) => {
  if (obj[v] !== undefined) obj[+v]++;
});

for (let v of input[3].split(" ")) {
  answer += obj[v] + " ";
}

console.log(answer.trim());
