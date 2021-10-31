// 1. Use strict
// added in ES 6
// use this for Vanilla Javascript
'use strict';

// 2. Variable
// 2-1. let ( added in ES6 )
// mutable
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var ( don't ever use this! )
// var hoisting ( move declaration from bottom to top = 변수선언을 제일 위로 끌어올려주다 )
// has no block scope
{
  age = 4;
  var age;
}
console.log(age); // 4가 출력됌 ㄷㄷ


// 2-2. Const
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 3. Variable Types
// - primitive, single item : Number, string, boolean, null, undefined, symbol
// - object, box container 
// - function, first-class function

const count = 17;
console.log(`value: ${count}, type: ${typeof count}`);
const size = 17.1;
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infiniry, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt
// BigInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.
// BigInt는 정수 리터럴의 뒤에 n을 붙이거나(10n) 함수 BigInt()를 호출해 생성할 수 있습니다.

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
const test = 3 < 1; // boolean
console.log(`value: ${test}, typeof: ${typeof test}`); 

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test2 = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test2}, type: ${typeof test2}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined ( 선언은 되었지만 값이 할당되어있지 않음 )
// let x;
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol : create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data-structure
const ellie = {
  name: 'ellie',
  age: 20
}
console.log(ellie);
console.log(ellie.age);
ellie.age = 21;
console.log(ellie.age);

// 4. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75 string
text = '8' / 2;
console.log(`value: ${text}, type: ${typeof text}`); // 4 number
// console.log(text.charAt(0)); // error

