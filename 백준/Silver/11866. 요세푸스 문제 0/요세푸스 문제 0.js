var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [N, K] = input;

const array = Array.from({ length: +N }, (_, i) => i + 1);

let answer = "<";
let index = 0;
while (array.length > 0) {
  index = (index + +K - 1) % array.length;
  answer += array.splice(index, 1) + ", ";
}
answer = answer.slice(0, -2) + ">";
console.log(answer);
