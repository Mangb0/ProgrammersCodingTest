function solution(l, r) {
  var answer = [];
  for (let i = l; i <= r; i++)
    if (!i.toString().match(/[^50]+/)) answer.push(i);
  return answer.length ? answer : [-1];
}
