function solution(a, b, c, d) {
  let arr = [a, b, c, d];
  let count = [];
  for (let i = 0; i < 4; i++) {
    count.push(arr.filter((element) => element === arr[i]).length);
  }
  const maxCount = Math.max(...count);
  switch (maxCount) {
    case 4:
      return 1111 * a;
      break;
    case 3:
      return (10 * arr[count.indexOf(3)] + arr[count.indexOf(1)]) ** 2;
      break;
    case 2:
      let p = count.indexOf(2);
      return count.filter((element) => element === 2).length === 4
        ? arr[p] === arr[p + 1]
          ? (arr[p] + arr[count.indexOf(2, p + 2)]) *
            Math.abs(arr[p] - arr[count.indexOf(2, p + 2)])
          : (arr[p] + arr[count.indexOf(2, p + 1)]) *
            Math.abs(arr[p] - arr[count.indexOf(2, p + 1)])
        : arr[count.indexOf(1)] * arr[count.indexOf(1, count.indexOf(1) + 1)];
    default:
      return Math.min(...arr);
      break;
  }
}
