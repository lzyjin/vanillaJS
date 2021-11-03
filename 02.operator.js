// 1. String concatenation
console.log('my' + 'cat'); // mycat
console.log('1' + 2); // 12
console.log(`string literals: 


'''''''''''''
1 + 2 = ${1 + 2}`);

console.log('ellie\'s \nroom');

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation 2의 3승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators 할당 연산자
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
// ||는 true가 나오면 뒤는 읽지 않는다 -> oh my god 이 출력되지 않음
console.log(`or: ${value1 || value2 || check()}`);
                  // 심플한 조건을 앞으로, 복잡한 함수나 식을 뒤로 보내는게 효율적! 
// &&(and), finds the first falsy value
// 첫번째 조건이 false이면 남은 조건까지 안봐도 false다 
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// 이 object가 null이 아닐때만 이 object의 something이라는 값을 받아오게 된다
let nullableObject = null;
if(nullableObject != null) {
  nullableObject.somethind;
}

function check() {
  for(let i = 0; i < 10; i++) {
    // wasting time
    console.log('oh my god');
  }
  return true;
}

// !(not)
console.log(!value1); // true

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false
// 문자열 5와 숫자 5를 같다고 인식

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true
// 문자열 5와 숫자5는 타입이 다르기 때문에 다르다고 인식

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3);// true

// equality - puzzler
console.log(0 == false); // 예상 true - 정답 
console.log(0 === false); // 예상 false - 정답
console.log('' == false); // 예상 true - 정답
console.log('' === false); // 예상 false - 정답 
console.log(null == undefined); // 예상 false - 땡 true임
console.log(null === undefined); // 예상 false - 정답

// 8. Conditional operators: if
const name = 'ddd';
if(name === 'ellie') {
  console.log('welcome ellie');
} else if(name === 'coder') {
  console.log('you are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like if checks
// use for multiple type checks in TS
const browser = 'chrome';
switch(browser) {
  case 'ie':
    console.log('go away!');
  break;
  case 'chrome':
  case 'firefox':
    console.log('love you!');
  break;
  default:
    console.log('same you');
  break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check thd condition.
do {
  console.log(`do while: ${i}`);
} while(i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
for(let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break: loop를 완전히 끝냄 
// continue: 지금것만 스킵하고 다시 다음스텝으로 넘어감

// Q1. iterate from 0 to 10 and print only even numbers (use continue) 
for(let i = 0; i <= 10; i++) {
  if(i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break) 
for(let i = 0; i <= 10; i++) {
  console.log(i);
  // if(i === 8) {
  if(i >= 8) {
    break;
  }
}
/// test 

// !!!