export function toLastNames(arr) {
  return arr.map(str => str.firstName + ' ' + str.lastName);
}

export function addValues(arr) {
  const sum = arr.reduce((acc, val, idx) => {
    acc = acc + val;
    return acc;
  }, 0);
  return sum;
}

export function addPurchased(arr) {
  const total = arr.reduce((acc, val) => {
    acc = acc + val.amount;
    return acc;
  }, 0);
  return total;
}
