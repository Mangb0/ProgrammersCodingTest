function solution(code) {
  let ret = "";
  const arr = [...code];
  let mode = 0;
  arr.forEach((a, i) => {
    mode === 0
      ? a == 1
        ? (mode = 1)
        : i % 2 === 0
        ? (ret += a)
        : ret
      : a == 1
      ? (mode = 0)
      : i % 2 === 1
      ? (ret += a)
      : ret;
  });
  return ret === "" ? "EMPTY" : ret;
}
