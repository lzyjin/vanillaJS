// 18장 함수와 일급 객체
// 18.1 일급 객체
// 다음과 같은 조건을 만족하는 객체를 일급 객체라 한다.
// 1. 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능하다.
// 2. 변수나 자료구조(객체, 배열)에 저장할 수 있다.
// 3. 함수의 매개변수로 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.

// ❕ 자바스크립트의 함수는 다음 예제와 같이 위의 조건을 모두 만족하므로 일급 객체다.

// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function(num) {
  return ++num;
};
const decrease = function(num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const predicates = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
  let num = 0;

  return function() {
    num = predicate(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

// ❕함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미이다.
// 객체는 값이므로 함수는 값과 동일하게 사용할 수 있다.
// 따라서 함수는 값을 사용할 수 있는 곳(변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문)이라면 어디서든지 리터럴로 정의할 수 있으며 런타임에 함수 객체로 평가된다.

// 일급 객체로서 함수가 가지는 가장 큰 특징은 일반 객체와 같이 함수의 매개변수에 전달할 수 있으며, 함수의 반환값으로 사용할 수 있다는 것이다.

// 함수는 객체이지만 일반 객체와는 차이가 있다.
// 일반 객체는 호출할 수 없지만, 함수 객체는 호출할 수 있다.
// 그리고 함수 객체는 일반 객체에는 없는 함수 고유의 프로퍼티를 소유한다.

// 18.2 함수 객체의 프로퍼티
// 함수는 객체다. 따라서 함수도 프로퍼티를 가질 수 있다.
function square() {
  return number * number;
}
console.dir(square);
/*
  arguments: null
  caller: null
  length: 0
  name: "square"
  prototype: {constructor: ƒ}
*/

// square 함수의 모든 프로퍼티의 프로퍼티 어트리뷰트를 확인해보면 다음과 같다
console.log(Object.getOwnPropertyDescriptors(square));
/*
  arguments: {value: null, writable: false, enumerable: false, configurable: false}
  caller: {value: null, writable: false, enumerable: false, configurable: false}
  length: {value: 0, writable: false, enumerable: false, configurable: true}
  name: {value: 'square', writable: false, enumerable: false, configurable: true}
  prototype: {value: {…}, writable: true, enumerable: false, configurable: false}
  [[Prototype]]: Object
*/

// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); // undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')); // {enumerable: false, configurable: true, get: ƒ, set: ƒ}

// 이처럼 arguments, caller, length, name, prototype 프로퍼티는 모두 함수 객체의 데이터 프로퍼티다.


// 📌 18.2.1 arguments 프로퍼티
// 함수 객체의 arguments 프로퍼티 값은 arguments 객체다.
// arguments 객체는 함수 호출시 전달된 인수argument들의 정보를 담고 있는 순회 가능한iterable 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다.
// 즉, 함수 외부에서는 참조할 수 없다.

// 함수 내부에서 지역 변수처럼 사용할 수 있는 arguments 객체를 참조하도록 한다.

// 자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
// 따라서 함수 호출시 매개변수 개수만큼 인수를 전달하지 않아도 에러가 발생하지 않는다.

function multiply(x, y) {
  console.log(arguments);
  return x * y;
}
console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 2

// 함수를 정의할 때 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급된다.
// 즉, 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화 된 이후 인수가 할당된다.

// 선언된 매개변수의 개수보다 인수를 적게 전달했을 경우 인수가 전달되지 않은 매개변수는 undefined로 초기화된 상태를 유지한다.
// 매개변수의 개수보다 인수를 더 많이 전달한 경우 초과된 인수는 무시된다.

// 그렇다고 초과된 인수가 그냥 버려지는 것은 아니다.
// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.

// arguments 객체는 인수를 프로퍼티 값으로 소유하며, 프로퍼티 키는 인수의 순서를 나타낸다.
// arguments 객체의 calle 프로퍼티는 함수 자신을 가리키고, arguments 객체의 length 프로퍼티는 인수의 개수를 가리킨다.

// - arguments 객체의 Symbol(Symbol.iterator) 프로퍼티
// arguments 객체의 Symbol 프로퍼티는 arguments 객체를 순회 가능한 자료 구조인 이터러블iterable로 만들기 위한 프로퍼티다.

function multiply2(x, y) {
  // 이터레이터
  const iterator = arguments[Symbol.iterator]();

  // 이터레이터의 next 메서드를 호출해서 이터러블 객체 arguments를 순회
  console.log(iterator.next()); // {value: 1, done: false}
  console.log(iterator.next()); // {value: 2, done: false}
  console.log(iterator.next()); // {value: 3, done: false}
  console.log(iterator.next()); // {value: undefined, done: true}
  console.log(iterator.next()); // {value: undefined, done: true}

  return x * y;
}

multiply2(1, 2, 3);

// 선언된 매개변수의 개수와 함수를 호출할 때 전달하는 인수의 개수를 확인하지 않는 자바스크립트의 특성 때문에 함수가 호출되면 인수 개수를 확인하고, 이에 따라 함수의 동작을 달리 정의할 필요가 있을 수 있다.
// 이때 유용하게 사용되는 것이 arguments 객체다.

// arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.

function sum() {
  let res = 0;

  // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문으로 순회할 수 있다.
  for(let i=0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}
console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

// - 유사 배열 객체와 이터러블
// ES6에서 도입된 이터레이션 프로토콜을 준수하면 순회 가능한 자료구조인 이터러블이 된다.
// 이터러블의 개념이 없었던 ES5에서 arguments 객체는 유사 배열 객체로 구분되었다.
// 하지만 이터러블이 도입된 ES6부터 arguments 객체는 유사 배열 객체이면서 동시에 이터러블이다.

// 유사배열 객체는 배열이 아니므로 배열 메서드를 사용할 경우 에러가 발생한다.
// 따라서 배열 메서드를 사용하려면 Function.prototype.call, Function.prototype.apply를 사용해 간접 호출해야 하는 번거로움이 있다.

function sum2() {
  // arguments 객체를 배열로 변환
  const array = Array.prototype.slice.call(arguments);
  return array.reduce(function(pre, cur) {
    return pre + cur;
  }, 0);
}
console.log(sum2(1, 2)); // 3
console.log(sum2(1, 2, 3, 4, 5)); // 15

// 이러한 번거로움을 피하기 위해 ES6에서는 Rest 파라미터를 도입했다
// ES6 Rest Parameter
function sum3(...args) {
  return args.reduce( (pre, cur) => pre + cur, 0 );
}
console.log(sum3(1, 2)); // 3
console.log(sum3(1, 2, 3, 4, 5)); // 15

// ES6 Rest 파라미터의 도입으로 모던 자바스크립트에서는 arguments 객체의 중요성이 이전같지는 않지만 언제나 ES6만 사용하지는 않을 수 있기 때문에 알아둘 필요가 있다.
// arguments 객체와 Rest 파라미터에 대해서는 26.4절에서 살펴봄

// 18.2.2 caller 프로퍼티
//caller 프로퍼티는 ECMAScript 사양에 포함되지 않은 비표준 프로퍼티다.
// 이후 표준화될 예정도 없는 프로퍼티이므로 사용하지 말고 참고로만 알아두자.

// 함수 객체의 caller 프로퍼티는 함수 자신을 호출한 함수를 가리킨다.
function foo(func) {
  return func();
}
function bar() {
  return 'caller : ' + bar.caller;
}

// 브라우저에서 실행한 결과
console.log(foo(bar)); // caller : function foo(func) { return func(); }
console.log(bar()); // caller : null


// 18.2.3 length 프로퍼티
// 함수 객체의 length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.

function foo2() {}
console.log(foo2.length); // 0

function bar2(x) {
  return x;
}
console.log(bar2.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2

// arguments 객체의 length 프로퍼티와 함수 객체의 length 프로퍼티의 값은 다를 수 있으므로 주의해야 한다.
// arguments 객체의 length 프로퍼티는 인자argument의 개수,
// 함수 객체의 length 프로퍼티는 매개변수의 개수를 가리킨다.

// 18.2.4 name 프로퍼티
// 함수 객체의 name 프로퍼티는 함수 이름을 나타낸다.
// name 프로퍼티는 ES6 이전까지는 비표준이었다가 ES6에서 정식 표준이 되었다.

// name 프로퍼티는 ES5와 ES6에서 동작을 달리하므로 주의하자.
// ❕ 익명 함수 표현식의 경우 ES5에서 name 프로퍼티는 빈 문자열을 값으로 갖는다.
// 하지만 ES6에서는 함수를 가리키는 식별자를 값으로 갖는다.

// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명 함수 표현식
var annoymousFunc = function() {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(annoymousFunc.name); // annoymousFunc

// 함수 선언문
function bar3() {}
console.log(bar3.name); // bar3

// 12.4.1절 "함수 선언문"에서 살펴본 바와 같이 함수 이름과 함수 객체를 가리키는 식별자는 의미가 다르다는것을 잊지 말자!!
// 함수를 호출할 때는 함수 이름이 아닌 함수 객체를 가리키는 식별자로 호출한다.

// 18.2.5 __proto__ 접근자 프로퍼티
// 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다.
// [[Prototype]] 내부 슬롯은 객체 지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.

// __proto__ 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티다.
// 내부 슬롯에는 직접 접근할 수 없고 간접적인 접근 방법을 제공하는 경우에 한하여 접근할 수 있다.


const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 메서드다.
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('__proto__')); // false

// - hasOwnProperty 메서드
// - hasOwnProperty 메서드는 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고, 상속받은 프로토타입의 키인 경우 false를 반환한다.

// 18.2.6 prototype 프로퍼티
// ❕prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체.
// 즉, constructor만이 소유하는 프로퍼티다.
// 일반 객체와 생성자 함수로 호출할 수 없는 non-constructor에는 prototype 프로퍼티가 없다.

// 함수 객체는 prototype 프로퍼티를 소유한다
console.log( (function() {}).hasOwnProperty('prototype') ); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log( ({}).hasOwnProperty('prototype') ); // false
