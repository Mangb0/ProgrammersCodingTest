function solution(n) {
  let answer = 0;
  if (n % 2 === 1) {
    for (let i = 0; i <= n / 2; i++) {
      answer += i * 2 + 1;
    }
  } else {
    for (let i = 1; i <= n / 2; i++) {
      answer += (i * 2) ** 2;
    }
  }
  return answer;
}

// 참고 다른 풀이
function solution(n) {
  return n % 2 === 1
    ? ((n + 1) / 2) * ((n + 1) / 2)
    : (n * (n + 1) * (n + 2)) / 6;
}
