function solution(arr) {
  const len = arr.length > arr[0].length ? arr.length : arr[0].length;
  let answer = Array.from(Array(len), () => Array(len).fill(0));
  arr.forEach((a, i) => a.forEach((b, j) => (answer[i][j] = arr[i][j])));
  return answer;
}
