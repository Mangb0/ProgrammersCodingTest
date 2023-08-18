function solution(rank, attendance) {
  const arr = rank.filter((a, i) => attendance[i]).sort((a, b) => a - b);
  return (
    10000 * rank.indexOf(arr[0]) +
    100 * rank.indexOf(arr[1]) +
    rank.indexOf(arr[2])
  );
}
