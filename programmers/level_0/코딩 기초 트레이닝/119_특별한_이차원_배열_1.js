function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));
  answer.forEach((v, i) => (v[i] = 1));
  return answer;
}
