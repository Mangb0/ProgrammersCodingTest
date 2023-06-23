function solution(arr, queries) {
  queries.forEach((a, b) => ([arr[a[0]], arr[a[1]]] = [arr[a[1]], arr[a[0]]]));
  return arr;
}
