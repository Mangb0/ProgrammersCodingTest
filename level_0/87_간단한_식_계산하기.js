function solution(binomial) {
  var answer = binomial.split(" ");
  switch (answer[1]) {
    case "+":
      return +answer[0] + +answer[2];
      break;
    case "-":
      return +answer[0] - +answer[2];
      break;
    default:
      return +answer[0] * +answer[2];
  }
}
