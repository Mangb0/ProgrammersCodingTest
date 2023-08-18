function solution(n, control) {
  let answer = n;
  [...control].forEach((a) => {
    if (a === "w") answer += 1;
    else if (a === "s") answer -= 1;
    else if (a === "d") answer += 10;
    else answer -= 10;
  });
  return answer;
}

// 다른 사람 풀이
const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n);
}
