function solution(my_string, s, e) {
  const arr = my_string.split("");
  const temp = arr.splice(s, e - s).reverse();
  arr.splice(s + 1, 0, ...temp);
  return arr.join("");
}
