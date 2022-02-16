// 15장 let, const 키워드와 블록 레벨 스코프

// 15.1 var 키워드로 선언한 변수의 문제점
// ES5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이었다.
// var 키워드로 선언된 변수는 다음과 같은 특징이 있다.
// 주의를 기울이지 않으면 심각한 문제를 발생시킬 수 있다.
// - 변수 중복 선언 허용
// - 함수 레벨 스코프
// - 변수 호이스팅

// 15.1.1 변수 중복 선언 허용
var x = 1;
var y = 1;

// ❕ var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 도작한다.
var x = 100;
// 초기화문이 없는 변수 선언문은 무시된다.
var y;
console.log(x); // 100
console.log(y); // 1

// var 키워드로 선언한 x변수와 y변수는 중복 선언되었다.
// var 키워드로 선언한 변수를 중복 선언하면 초기화(변수 선언과 동시에 초기값을 할당하는 문) 유무에 따라 다르게 동작한다.
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작하고, 초기화문이 없는 변수 선언문은 무시된다. 이때 에러는 발생하지 않는다.
// 위 예제와 같이 만약 동일한 이름의 변수가 이미 선언되어 있는 것을 모르고 변수를 중복 선언하면서 값까지 할당했다면 의도치 않게 먼저 선언된 변수 값이 변경되어 부작용이 발생한다.

// 15.1.2 함수 레벨 스코프
// var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
// ❕ 따라서 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 된다.
var x2 = 1;
if(true) {
  // x2는 전역변수다. 이미 선언된 전역 변수 x가 있으므로 x변수는 중복 선언된다.
  // 이는 의도치 않게 변수값이 변경되는 부작용을 발생시킨다.
  var x2 = 10;
}
console.log(x2); // 10

// for 문의 변수 선언문에서 var 키워드로 선언한 변수도 전역 변수가 된다.
var i = 0;
// for문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for(var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
// 
console.log(i); // 5

// ❕함수 레벨 스코프는 전역 변수를 남발할 가능성을 높인다.
// 이로 인해 의도치 않게 전역 변수가 중복 선언되는 경우가 발생한다.

// 15.1.3 변수 호이스팅
// var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작한다.
// 즉, 변수 호이스팅에 의해 var 키워드로 선언한 변수는 변수 선언문 이전에 참조할 수 있다. 
// 단, 할당문 이전에 변수를 참조하면 언제나 undefined를 반환한다.

// 1. 선언 단계 - 이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다.
// 2. 초기화 단계 - 변수 foo는 undefined로 초기화 된다.
console.log(foo); // undefined

// 3. 할당 단계 - 변수에 값을 할당
foo = 123;

console.log(foo); // 123

// 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
var foo;

// 15.2 let 키워드
// var 키워드의 단점을 보완하기 위해 ES6에서는 새로운 변수 선언 키워드인 let과 const를 도입했다.
// let 키워드와 var 키워드와의 차이점
// - 변수 중복 선언 금지
// - 블록 레벨 스코프
// - 변수 호이스팅
// - 전역 객체와 let

// 15.2.1 변수 중복 선언 금지
// var 키워드로 이름이 동일한 변수를 선언하면 아무런 에러가 발생하지 않는다.
// 이때 변수를 중복 선언하면서 값까지 할당했다면 의도치 않게 먼저 선언된 변수 값이 재할당되어 변경된 부작용이 발생한다.
// let 키워드는 이름이 같은 변수를 중복 선언하면 문법 에러Syntax Error가 발생한다
var foo2 = 123;
// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
var foo2 = 456;

let foo3  = 123;
// let foo3  = 456; // SyntaxError: Identifier 'foo3' has already been declared

// 15.2.2 블록 레벨 스코프
// var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정하는 함수 레벨 스코프를 따른다.
// 하지만 let 키워드로 선언한 변수는 모든 코드 블록(함수, if문, for문, while문, try/catch문 등)을 지역 스코프로 인정하는 블록 레벨 스코프block-level scope를 따른다.
let foo4 = 1;
{
  let foo4 = 2;
  let bar = 3;
}
console.log(foo4); // 1
// console.log(bar); // ReferenceError: bar is not defined

// let 키워드로 선언된 변수는 블록 레벨 스코프를 따른다.
// 위 예제의 코드 블록 내에서 선언된 foo4 변수와 bar 변수는 지역변수다.
// 전역에서 선언된 foo4변수와 코드 블록 내에서 선언된 foo4 변수는 다른 변개의 변수다.
// 또한 bar 변수도 블록 레벨 스코프를 갖는 지역 변수다.
// 따라서 전역에서는 bar 변수를 참조할 수 있다.

// 함수도 코드 블록이므로 스코프를 만든다.
// 이때 함수 내의 코드 블록은 함수 레벨 스코프에 중첩된다.
let j = 10; // - 전역 스코프
function foo5() { // - 함수 레벨 스코프
  let j = 100;
  for(let j=0; j < 3; j++) { // - 블록 레벨 스코프
    console.log(j); // 0 1 2
  }
  console.log(j); // 100
}
foo5();
console.log(j); // 10


// 15.2.3 변수 호이스팅
// console.log(foo6); // ReferenceError: Cannot access 'foo6' before initialization
let foo6;
console.log(foo6); // undefined

// 이처럼 let 키워드로 선언한 변수를 변수 선언문 이전에 참조하면 참조 에러ReferenceError가 발생한다

// var 키워드로 선언한 변수는 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 "선언 단계"와 "초기화 단계"가 한번에 진행된다.
// 즉 선언 단계에서 스코프에 변수 식별자를 등록해 자바스크립트 엔진에 변수의 존재를 알린다.
// 그리고 즉시 초기화 단계에서 undefined로 변수를 초기화한다.
// 따라서 변수 선언문 이전에 변수에 접근해도 스코프에 변수가 존재하기 때문에 에러가 발생하지 않는다.
// 다만 undefined를 반환한다.
// 이후 변수 할당문에 도달하면 비로소 값이 할당된다.
console.log(foo7); // undefined
var foo7;
console.log(foo7); // undefined
foo7 = 1;
console.log(foo7); // 1

// let 키워드로 선언한 변수는 "선언 단계"와 "초기화 단계"가 분리되어 진행된다.
// 즉 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언 단계가 먼저 실행되지만, 초기화 단계는 변수 선언문에 도달했을 때 실행된다.
// 만약 초기화 단계가 실행되기 이전에 변수에 접근하려고 하면 참조 에러ReferenceError가 발생한다. 
// let 키워드로 선언한 변수는 스코프의 시작 지점부터 초기화 단계 시작 지점(변수 선언문)까지 변수를 참조할 수 없다.
// 스코프의 시작 지점부터 초기화 시작 지전까지 변수를 참조할 수 없는 구간을 ❕ 일시적 사각지대Temporal Dead Zone:TDZ라고 부른다.

// ❕ 런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화 되지 않았다.
// console.log(foo8); // ReferenceError: Cannot access 'foo8' before initialization
// 초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.
let foo8;
console.log(foo8); // undefined
// foo8 = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo8); // 1

// 결국 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 보인다. 하지만 그렇지 않다.
// = 호이스팅이 발생했다
let foo9 = 1; // 전역변수
{
  // console.log(foo9); // ReferenceError: Cannot access 'foo9' before initialization
  let foo9 = 2; // 지역변수
}
// let 키워드로 선언한 변수의 경우 변수 호이스팅이 발생하지 않는다면 위 예제는 전역 변수 foo의 값을 출력해야 한다.
// 하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생했기 때문에 참조 에러가 발생했다.

// ❕ 자바스크립트는 모든 선언(var, let, const, function, function*, class 등)을 호이스팅한다.
// 단, ES6에서 도입된 let, const, class를 사용한 선언문은 호이스팅이 발생하지 않는 것처럼 동작한다.


// 15.2.4 전역 객체와 let
// 전역 변수
var xx = 'xx';
// 암묵적 전역
yy = 'yy';
// 전역 함수
function foo10() {}

// var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
console.log(window.xx); // xx
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(xx); // xx

// 암묵적 전역은 전역 객체 window의 프로퍼티다.
console.log(window.yy); // yy
console.log(yy); // yy

// 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
console.log(window.foo10); // ƒ foo10() {}
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(foo10); // ƒ foo10() {}

// let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. 
// 즉, window.foo와 같이 접근할 수 없다.
let xxx = 'xxx';
// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.xxx); // undefined
console.log(xxx); // xxx

// 15.3 const 키워드
// const 키워드는 상수constant를 선언하기 위해 사용된다.
// const 키워드의 특징은 let 키워드와 대부분 동일하므로 let 키워드와 다른 점을 중심으로 살펴보자.

// 15.3.1 선언과 초기화
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야한다.

// const variable = 1;
// const variable; // SyntaxError: Missing initializer in const declaration

// const 키워드로 선언한 변수는 let 키워드로 선언한 변수와 마찬가지로 블록 레벨 스코프를 가지며, 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
{
  // 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
  // console.log(variable); // ReferenceError: Cannot access 'variable' before initialization
  const variable = 1;
  console.log(variable); // 1
}
// 블록 레벨 스코프를 갖는다
// console.log(variable); // ReferenceError: variable is not defined

// 15.3.2 재할당 금지
// var 또는 let 키워드로 선언한 변수는 재할당이 자유로우나, const 키워드로 선언한 변수는 재할당이 금지된다.
const variable2 = 1;
// variable2 = 2; // TypeError: Assignment to constant variable.

// 15.3.3 상수
// ❕변수의 상대 개념인 상수는 재할당이 금지된 변수를 말한다
// 상수도 값을 저장하기 위한 메모리 공간이 필요하므로 변수라고 할 수 있다. 
// 단, 변수는 언제든지 재할당을 통해 변수 값을 변경할 수 있지만 상수는 재할당이 금지된다.

// 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야한다.

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

console.log(afterTaxPrice); // 110

// 코드 내에서 사용한 0.1은 어떤 의미로 사용했는지 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
// 또한 세율을 의미하는 0.1은 쉽게 바뀌지 않는 값이며 프로그램 전체에서 고정된 값을 사용해야 한다.
// 이때 세율을 상수로 정의하면 값의 의미를 쉽게 파악할 수 있고 변경될 수 없는 고정값으로 사용할 수 있다.

// const 키워드로 선언된 변수는 재할당이 금지된다.
// const 키워드로 선언된 변수에 원시 값을 할당할 경우 원시 값은 변경할 수 없는 값이고 const 키워드에 의해 재할당이 금지되므로 할당된 값을 변경할 수 있는 방법은 없다.

// 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1;
// 세전 가격
let preTaxPrice2 = 100;
// 세후 가격
let afterTaxPrice2 = preTaxPrice2 + (preTaxPrice2 * TAX_RATE);
console.log(afterTaxPrice2); // 110

// 15.3.4 const 키워드와 객체
// const 키워드로 선언된 변수에 원시 값을 할당할 경우 값을 변경할 수 없다.
// ❕ 하지만 const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
// 변경 불가능한 값인 원시 값은 재할당 없이 변경(교체)할 수 있는 방법이 없지만, 변경 가능한 값인 객체는 재할당 없이도 직접 변경이 가능하기 때문이다.

const person = {
  name: 'Lee'
};
// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = 'Kim';
console.log(person); // {name: 'Kim'}
// const 키워드는 재할당을 금지할 뿐, "불변"을의미하지는 않는다.
// 다시말해 새로운 값을 재할당한ㄴ 것은 불가능하지만, 프로퍼티 동적 생성, 삭제, 프로퍼티 값의 변경을 통해 객체를 변경하는 것은 가능하다. 
// 이때 객체가 변경되더라도 변수에 할당된 참조 값은 변경되지 않는다.

// 15.4 var vs let vs const
// 변수 선언에는 기본적으로 const를 사용하고 let은 재할당이 필요한 경우에 한정해 사용하는 것이 좋다.

// 권장사항
// - ES6를 사용한다면 var 키워드는 사용하지 않는다.
// - 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이때 변수의 스코프는 최대한 좁게 만든다.
// - 변경이 발생하지 않고 읽기 전용으로 사용하는 원시 값과 객체에는 const 키워드를 사용한다. 

// 변수를 선언할 때는 일단 const 키워드를 사용하자. 반드시 재할당이 필요하다면 그때 const 키워드를 let 키워드로 변경해도 결코 늦지 않다.
