var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const len = input.shift();

const arr = [];
const answer = [];

for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case "pop":
      answer.push(arr.pop() || -1);
      break;
    case "size":
      answer.push(arr.length);
      break;
    case "empty":
      answer.push(arr.length ? 0 : 1);
      break;
    case "top":
      answer.push(arr[arr.length - 1] || -1);
      break;
    default:
      arr.push(input[i].split(" ")[1]);
  }
}

console.log(answer.join("\n"));
