function solution(name, yearning, photo) {
  let score = {};
  const answer = [];
  name.forEach((v, i) => (score[v] = yearning[i] || 0));

  photo.forEach((a) =>
    answer.push(a.map((v) => score[v] || 0).reduce((acc, cur) => acc + cur))
  );
  return answer;
}

// 다른 사람 풀이
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}
