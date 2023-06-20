function solution(arr1, arr2) {
  if (arr1.length > arr2.length) return 1;
  else if (arr1.length < arr2.length) return -1;
  else {
    const a = arr1.reduce((acc, cur) => acc + cur);
    const b = arr2.reduce((acc, cur) => acc + cur);
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  }
}
