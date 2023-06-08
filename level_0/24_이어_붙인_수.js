function solution(num_list) {
  let odd = "",
    even = "";
  num_list.forEach((a) => (a % 2 === 0 ? (odd += a) : (even += a)));
  console.log(odd, even);
  return Number(odd) + Number(even);
}
