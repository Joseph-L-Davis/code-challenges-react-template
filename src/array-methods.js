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
    if (obj[i] === 'Gruffalo' || 'oats' || 'brown sugar' || 'flour' || 'pur maple syrup' || 'chopped nuts' || 'baking soda' || 'baking powder' || 'cinnamon' || 'melted butter' || 'fresh water') {
      arr.push(i);
    } 
  }
  return arr;
}

export function stepActions(recipe) {
  let arr = recipe.steps;
  let str = String(arr);
  let str2 = str.split('  ');
  let arr2 = [];
  for (let i = 0; i < str2.length; i++) {
    if (i === 'Pre-heat' || i === 'De=prickle' || i === 'Sprinkle' || i === 'Mix' || i === 'Grease' || i === 'Combine' || i === 'Fold' || i === 'Spread' || i === 'Bake') {
      arr2.push(i);
    }
  }
  return arr2;
}
