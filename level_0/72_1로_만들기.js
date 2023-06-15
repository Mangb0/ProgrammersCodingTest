function solution(num_list) {
  var answer = 0;
  const test = (n) => {
    if (n === 1) return 0;
    answer++;
    if (n % 2 === 0) n = n / 2;
    else n = (n - 1) / 2;
    test(n);
  };
  num_list.forEach((a) => test(a));
  return answer;
}
