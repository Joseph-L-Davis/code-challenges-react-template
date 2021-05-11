export function returnTen(str) {
  let newStr = str.slice(-1 - 9);
  return Array.from(newStr);
}