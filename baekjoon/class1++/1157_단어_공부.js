var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().toUpperCase().split("");
// var input = fs.readFileSync("./stdin.txt").toString().toUpperCase().split("");
let alphabet = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  J: 0,
  K: 0,
  L: 0,
  M: 0,
  N: 0,
  O: 0,
  P: 0,
  Q: 0,
  R: 0,
  S: 0,
  T: 0,
  U: 0,
  V: 0,
  W: 0,
  X: 0,
  Y: 0,
  Z: 0,
};
input.forEach((el) => {
  alphabet[el]++;
});
let max = 0;
let count = 0;
let maxAlphabet = "";
for (let key in alphabet) {
  if (alphabet[key] > max) {
    max = alphabet[key];
    maxAlphabet = key;
  }
}

for (let key in alphabet) {
  if (alphabet[key] === max) count++;
}
console.log(count > 1 ? "?" : maxAlphabet);
