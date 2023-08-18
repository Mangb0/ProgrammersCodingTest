function solution(arr, flag) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      flag[i] ? answer.push(arr[i], arr[i]) : answer.pop();
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) =>
      flag[i]
        ? [...prev, ...new Array(num * 2).fill(num)]
        : prev.slice(0, -num),
    []
  );
}
