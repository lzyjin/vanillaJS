'use strict';

// Array 🎉

// 1. Deaclaration
// 2가지 방법 
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
// 베열의 값에 접근하려면 [인덱스]를 사용
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
// 배열의 마지막 아이템에 접근할 때는 
console.log(fruits[fruits.length - 1]);


// 3. Looping over an array
// print all fruits 
console.clear();
// a. for
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits) {
  console.log(fruit);
}
// c. forEach
// fruits.forEach(function(fruit, index, array) { // forEach에서는 보통 arrays는 받아오지 않는다
fruits.forEach(function(fruit, index) {
  // console.log(fruit, index, array);
  console.log(fruit, index);
});
// anonymous function(익명함수)는 화살표함수로 대체 가능
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});


// 4. Addtion, deletion, copy
//push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('🍇', '🫐');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push
// 배열의 가장 뒤에 데이터에 접근하거나 데이터를 추가하는것은 정말 빠르고,
// 배열의 중간에 데이터를 넣고 빼는것도 인덱스를 활용하기 때문에 빠르나
// 배열의 데이터 전체가 움직여야하는 경우는 정말 느리다.
// 배열의 길이가 길면 길수록 전체가 움직이려면 더 느리다. 

//splice: remove an item by index position
// splice(시작할 인덱스, 삭제할 개수)
fruits.push('🥭', '🍉');
console.log(fruits);
// splice()는 원하는 인덱스만 지정하고 지우려는 개수를 말하지 않으면, 그 인덱스부터 모든 데이터를 다 지워버린다
// fruits.splice(1);
fruits.splice(1, 1); // 1번째 데이터만 삭제함
console.log(fruits);

// splice로 데이터를 삭제하고, 그 자리에 새로운 데이터를 추가할 수 있다.
fruits.splice(1, 1, '🍅', '🍊',);
console.log(fruits);

// concat: combine two arrays
const fruits2 = ['🥥', '🥝'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the index
console.clear();
console.log(fruits);

// indexOf: 해당하는 인덱스 반환
console.log(fruits.indexOf('🫐')); // 0

// includes: 해당하는 값이 있는지 true/false
console.log(fruits.includes('🍉'));// true
console.log(fruits.includes('🍋'));// false

// lastIndexOf: 
console.clear();
fruits.push('🫐');
console.log(fruits);
// indexOf는 제일 처음부터 순회해서 첫번째로 해당하는 값의 인덱스를 반환
console.log(fruits.indexOf('🫐')); // 0
// lastIndexOf는 제일 마지막부터 순회해서 첫번째로 해당하는 값의 인덱스를 반환
console.log(fruits.lastIndexOf('🫐')); // 5

let lastFruit = fruits.pop();
console.log(lastFruit); // 뽑아낸 것 (가장마지막과일)
console.log(fruits); // 과일들에서 뽑아낸것을 제외한 나머지들

