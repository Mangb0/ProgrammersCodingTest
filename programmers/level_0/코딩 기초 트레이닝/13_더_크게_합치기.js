function solution(a, b) {
  let arr1 = [];
  let arr2 = [];
  arr1.push(a, b);
  arr2.push(b, a);
  return arr1.join("") > arr2.join("")
    ? Number(arr1.join(""))
    : Number(arr2.join(""));
}
