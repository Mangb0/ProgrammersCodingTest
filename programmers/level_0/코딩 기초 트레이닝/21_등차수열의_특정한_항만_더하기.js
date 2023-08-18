function solution(a, d, included) {
  let answer = 0;
  included.forEach((bool, i) => {
    if (bool) {
      answer += a + d * i;
    }
  });
  return answer;
}
