function solution(s) {
  let firstChar = "";
  let xCount = 0,
    count = 0,
    answer = 0;
  [...s].forEach((v, i) => {
    if (!firstChar) {
      firstChar = v;
    }
    v === firstChar ? xCount++ : count++;
    if (xCount === count) {
      xCount = 0;
      count = 0;
      answer++;
      firstChar = "";
    }
  });
  return firstChar ? answer + 1 : answer;
}
