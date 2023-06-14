function solution(q, r, code) {
  var answer = "";
  [...code].forEach((a, i) => (answer += i % q === r ? a : ""));
  return answer;
}
