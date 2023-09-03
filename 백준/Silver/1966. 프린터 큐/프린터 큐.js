var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
input = input.map((v) => v.split(" ").map((k) => +k));

for (let i = 0; i < input.length; i += 2) {
  let count = 0;
  const importance = input[i + 1];
  let target = input[i][1];

  while (importance.length > 0) {
    const max = Math.max(...importance);
    const first = importance.shift();
    if (first === max) {
      count++;
      if (target === 0) {
        console.log(count);
        break;
      } else {
        target--;
      }
    } else {
      importance.push(first);
      if (target === 0) {
        target = importance.length - 1;
      } else {
        target--;
      }
    }
  }
}
