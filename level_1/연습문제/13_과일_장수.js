function solution(k, m, score) {
  var answer = 0;
  let len = score.length / m;
  let arr = score.sort((a, b) => b - a);
  for (let i = 1; i <= len; i++) {
    answer += arr[m * i - 1] * m;
  }
  return answer;
}
