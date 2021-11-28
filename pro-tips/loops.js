// Looping
const items = [1, 2, 3, 4, 5, 6];


// 짝수일때 4를 곱하고 총합을 구하고 싶다
items.forEach( (item, idx) => {
  let result = 0;
  if(item % 2 === 0) {
    result += item * 4;
    return result;
  } 
  return false;
} );


// ❌ Bad Code 💩
function getAllEvens(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

function multiplyByFour(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(items[i] * 4);
  }
  return result;
}

function sumArray(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  return sum;
}
const evens = getAllEvens(items);
const multiple = multipleByFour(evens);
const sum = sumArray(multiple);
console.log(sum);



// ✅ Good Code ✨
const evens = items.filter( (num) => num % 2 === 0 );
const multiple = evens.map( (num) => num * 4 );
const sum = multiple.reduce( (a, b) => a + b, 0);
console.log(sum);



// ✅ Better Code ✨
const result = items
  .filter( (num) => num % 2 === 0 )
  .map( (num) => num * 4 )
  .reduce( (a, b) => a + b, 0);
console.log(sum);