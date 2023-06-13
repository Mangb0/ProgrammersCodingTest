function solution(my_string, indices) {
  let arr = my_string.split("");
  for (let i = 0; i < indices.length; i++) {
    arr[indices[i]] = "";
  }
  return arr.join("");
}
