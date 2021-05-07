export function howMuchPencil(str) {
  let arr = [];
  for (let i = 0; i <= str.length; i++){
    arr.push(str.slice(i));;
  }
  return arr;
}

export function wordsToCharList(arr) {
  return Array.from(arr);
}

export function listFoods(obj) {
  let arr = [];
  for (let i = 0; i <= obj.length; i ++) {
    if (i === 'Gruffalo' || 'oats' || 'brown sugar' || 'flour' || 'pur maple syrup' || 'chopped nuts' || 'baking soda' || 'baking powder' || 'cinnamon' || 'melted butter' || 'fresh water') {
      arr.push(i);
    } 
  }
  return arr;
}