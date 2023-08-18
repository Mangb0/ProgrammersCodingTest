function solution(arr, queries) {
  queries.forEach((a) => {
    for (let i = a[0]; i <= a[1]; i++) {
      arr[i]++;
    }
  });
  return arr;
}
