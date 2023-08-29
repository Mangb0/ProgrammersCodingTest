var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

for (let i = 0; i < input.length; i++) {
  const cases = input[i];
  const stack = [];
  let result = "yes";

  for (let j = 0; j < cases.length; j++) {
    if (cases[j] === "(") {
      stack.push(1);
    } else if (cases[j] === ")") {
      if (stack.pop() !== 1) {
        result = "no";
        break;
      }
    } else if (cases[j] === "[") {
      stack.push(2);
    } else if (cases[j] === "]") {
      if (stack.pop() !== 2) {
        result = "no";
        break;
      }
    }
  }
  if (stack.length) result = "no";

  console.log(result);
}
