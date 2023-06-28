function solution(k, score) {
  var answer = [];
  const rank = [];
  score.forEach((v, i) => {
    rank.push(v);
    rank.sort((a, b) => b - a);
    if (i >= k) {
      rank.pop();
    }
    answer.push(rank[rank.length - 1]);
  });
  return answer;
}
