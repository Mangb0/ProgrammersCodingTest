function solution(intStrs, k, s, l) {
  const answer = [];
  intStrs.forEach((a) => answer.push(+a.split("").splice(s, l).join("")));
  return answer.filter((a) => a > k);
}
