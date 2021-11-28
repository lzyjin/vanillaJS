// 👉 Spread Syntax - array

let fruits = ['🍉', '🍊', '🍌'];

// fruits에 딸기를 추가하고싶으면 이렇게 했지만
// fruits.push('🍓');

// 기존의 fruits를 수정하지 않고 새로운 배열을 만들고 싶다면?
let fruits2 = [...fruits, '🍓'];


// fruits의 맨 앞에 포도를 추가하고 싶으면 이렇게 했지만
// fruits.unshift('🍇');

// 기존의 fruits를 수정하지 않고 새로운 배열을 만들고 싶다면?
let fruits3 = ['🍇', ...fruits]


let fruitsB = ['🍈', '🍑', '🍍'];

// fruits 와 fruitsB를 합치고 싶으면?
// 1. concat() 사용
let combined = fruits.concat(fruitsB);
// 2. Spread Syntax 사용
combined = [...fruits, ...fruitsB];