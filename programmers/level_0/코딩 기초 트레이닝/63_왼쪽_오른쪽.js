function solution(str_list) {
  const a = str_list.includes("l") ? str_list.indexOf("l") : 0;
  const b = str_list.includes("r") ? str_list.indexOf("r") : 20;
  if (str_list.length === 1) return [];
  return str_list.filter((_, i) => (a < b ? i < a : i > b));
}
