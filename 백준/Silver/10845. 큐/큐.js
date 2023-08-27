var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const len = input.shift();

const arr = [];
const answer = [];

for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case "pop":
      answer.push(arr.shift() || -1);
      break;
    case "size":
      answer.push(arr.length);
      break;
    case "empty":
      answer.push(arr.length ? 0 : 1);
      break;
    case "front":
      answer.push(arr[0] || -1);
      break;
    case "back":
      answer.push(arr[arr.length - 1] || -1);
      break;
    default:
      arr.push(input[i].split(" ")[1]);
  }
}

console.log(answer.join("\n"));
