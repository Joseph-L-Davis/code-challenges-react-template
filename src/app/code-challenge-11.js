export function returnTen(str) {
  let newStr = str.slice(-1 - 9);
  return Array.from(newStr);
}

export function findMax(matrix) {
  let num = [];
  for (let i = 0; i < matrix.length; i++) {
    num[i] = matrix[i].sort((a, b) => b - a)[0];
  }
  for (let j = 0; j < num.length; j++){
    return num.sort((a, b) => b - a)[0];
  }
}

export function totalSum(matrix) {
  let nums = [];
  for (let i = 0; i < matrix.length; i++) {
    num[i] = matrix[i].sort((a, b) => b + a)[i];
  }
}