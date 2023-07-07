// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 시간 초과
function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) count++;
      if (count > 0) break;
    }
    if (count === 0) answer++;
  }
  return answer;
}

function solution(n) {
  let answer = 0;
  const arr = new Array(n + 1).fill(true);

  for (let i = 2; i <= n; ++i) {
    if (arr[i] === false) {
      continue;
    }
    for (let k = i * 2; k <= n; k += i) {
      arr[k] = false;
    }
  }
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === true) {
      answer++;
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(n) {
  let answer = 0;
  const arr = new Array(n + 1).fill(true); // 초깃값 설정
  const end = Math.sqrt(n);

  for (let i = 2; i <= end; ++i) {
    // 이미 소수가 아닌 인덱스는 건너뛴다.
    if (arr[i] === false) {
      continue;
    }
    // 소수가 아닌 데이터는 false로 입력한다.
    for (let k = i * i; k <= n; k += i) {
      arr[k] = false;
    }
  }
  // 소수의 갯수를 구한다.
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === true) {
      answer++;
    }
  }
  return answer;
}
