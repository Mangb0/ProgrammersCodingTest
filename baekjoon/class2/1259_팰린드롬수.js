var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
var input = fs.readFileSync("./stdin.txt").toString().trim().split("\n");

input.forEach((v) => {
  if (v === "0") return;
  const cleaned = v.replace(/\r/g, "");
  console.log(cleaned === [...cleaned].reverse().join("") ? "yes" : "no");
});
