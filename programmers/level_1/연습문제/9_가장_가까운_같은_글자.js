function solution(s) {
  const answer = [];
  const arr = [];
  [...s].forEach((v, i) => {
    if (!arr.includes(v)) {
      arr.push(v);
      answer.push(-1);
    } else {
      answer.push(i - [...s].splice(0, i).lastIndexOf(v));
    }
  });
  return answer;
}

// 다른 사람 풀이
function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}
