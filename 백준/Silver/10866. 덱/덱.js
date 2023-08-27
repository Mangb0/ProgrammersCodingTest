var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const len = input.shift();

const arr = [];
const answer = [];

for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case "pop_front":
      answer.push(arr.shift() || -1);
      break;
    case "pop_back":
      answer.push(arr.pop() || -1);
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
      const push = input[i].split(" ");
      if (push[0] === "push_back") arr.push(push[1]);
      else arr.unshift(push[1]);
  }
}

console.log(answer.join("\n"));
