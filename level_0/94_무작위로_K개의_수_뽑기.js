function solution(arr, k) {
  let answer = new Array(k).fill(-1);
  arr.forEach((v) =>
    answer.includes(v) ? v : (answer[answer.indexOf(-1)] = v)
  );
  return answer;
}

// 다른 사람 풀이
function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k
    ? [...set, ...Array(k - set.size).fill(-1)]
    : [...set].slice(0, k);
}
