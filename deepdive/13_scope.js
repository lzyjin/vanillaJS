// 13장 스코프

// 👉 13.1 스코프란?
// 스코프(scope 유효범위)
// 우리는 스코프를 이미 경험했다.
// 함수의 매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조할 수 없다. 
// 이것은 매개변수를 참조할 수 있는 유효범위 (= 매개변수의 스코프)가 함수 몸체 내부로 한정되기 때문이다.
function add(x, y) {
  // 매개변수 x, y는 함수add 몸체 내부에서만 참조할 수 있다.
  console.log(x, y); // 1 2
  return x + y;
}
add(1, 2);
// console.log(x, y); // ReferenceError: x is not defined

// 변수는 코드의 가장 바깥 영억뿐 아니라 코드 블록이나 함수 몸체 내에서도 선언할 수 있다.

var var1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수

if(true) {
  var var2 = 2; // 코드 블록 내에서 선언한 변수
  if(true) {
    var var3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
  }
}

function foo() {
  var var4 = 4; // 함수 내에서 선언한 변수
  function bar() {
    var var5 = 5; // 중첩된 함수 내에서 선언한 변수
  }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
// console.log(var4); // ReferenceError: var4 is not defined
// console.log(var5); // ReferenceError: var5 is not defined

// 변수는 자신이 선언된 위치에 의해 자신이 유효한 범위(= 다른 코드가 변수 자신을 참조할 수 있는 범위)가 결정된다.
// 변수뿐만 아니라 모든 식별자가 그렇다.

// 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.
// 이를 스코프라 한다.
// 스코프 = 식별자가 유효한 범위

var x = 'global';
function foo() {
  var x = 'local';
  console.log(x); // local
}
foo();
console.log(x); // global

// 자바스크립트 엔진은 이름이 같은 두 개의 변수 중에서 어떤 변수를 참조해야 할 것인지를 결정해야한다. 
// 이를 식별자 결정(identifier resolution)이라 한다. 
// 자바스크립트 엔진은 스코프를통해 어떤 변수를 참조해야 할 것인지 결정한다.
// 스코프란 자바스크립트 엔진이 식별자를 검색할 때 사용하는 규칙이라고도 할 수 있다.

// 자바스크립트 엔진은 코드를 실행할 때 코드의 문맥(context)를 고려한다.
// 렉시컬 환경(lexical environment): 코드가 어디서 실행되며 주변에 어떤 코드가 있는지
// 코드의 문맥은 렉시컬 환경으로 이뤄진다.
// 이를 구현한 것이 "실행 컨텍스트(execution context)"이며, 모든 코드는 실행 컨텍스트에서 평가되고 실행된다.

// 식별자는 어떤 값을 구별할 수 있어야 하므로 유일unique해야 한다.
// 따라서 식별자인 변수 이름은 중복될 수 없다.
// 하나의 값은 유일한 식별자에 연결name binding되어야 한다.

// 프로그래밍 언어에서는 스코프(유효 범위)를 통해 식별자인 변수 이름의 충돌을 방지하여 같은 이름의 변수를 사용할 수 있게 한다.
// 스코프 내에서 식별자는 유일해야 하지만 다른 스코프에는 같은 이름의 식별자를 사용할 수 있다.
// 즉, 스코프는 네임스페이스다.

// var 키워드로 선언한 변수의 중복 선언
// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다.
// 이는 의도치 않게 변수값이 재할당되어 변경되는 부작요을 발생시킨다.
function foo() {
  var x = 1;
  var x = 2;
  console.log(x); // 2
}
foo();

// 하지만 let이나 const 키워드로 선언된 변수는 같은 스코프 내 중복 선언을 허용하지 않는다.
function bar() {
  let x = 1;
  // let x = 2; // SyntaxError: Identifier 'x' has already been declared
}

// 👉 13.2 스코프의 종류
// 코드는 전역(global)과 지역(local)로 나뉜다

// 구분           설명            스코프        변수
// 전역     코드의 가장 바깥 영역   전역 스코프     전역 변수
// 지역       함수 몸체 내부      지역 스코프     지역 변수

// 변수는 자신이 선언된 위치(전역 또는 지역)에 의해 자신이 유효한 범위인 스코프가 결정된다.
// 전역에서 선언된 변수는 전역 스코프를 갖는 전역 변수
// 지역에서 선언된 변수는 지역 스코프를 갖는 지역 변수

// 📌 13.2.1 전역과 전역 스코프
// 전역이란 코드의 가장 바깥 영역
// 전역은 전역 스코프를 만든다
// 전역에 변수를 선언하면 전역 스코프를 갖는 전역 변수(global variable)가 된다. 
// 전역 변수는 어디서든지 참조할 수 있다.

var x = 'global x';
var y = 'global y';

function outer() {
  var z = "outer's local z";

  console.log(x); // 1) global x
  console.log(y); // 2) global y
  console.log(z); // 3) outer's local z

  function inner() {
    var x = "inner's local x";

    console.log(x); // 4) inner's local x
    console.log(y); // 5) global y
    console.log(z); // 6) outer's local z
  }

  inner();
}

outer();

console.log(x); // 7) global x
// console.log(z); // ReferenceError: z is not defined


// 📌 13.2.2 지역과 지역 스코프
// 지역이란 함수 몸체 내부
// 지역은 지역 스코프를 만든다
// 지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 된다
// 지역 변수는 자신이 선언된 지역과 하위 지역(중첩 함수)에서만 참조할 수 있다.
// = 지역 벼눗는 자신의 지역 스코프와 하위 지역 스코프에서만 유효하다.

// inner 함수 내부에서 선언된 x 변수 이외에 이름이 같은 전역 변수x가 존재한다.
// 이때 inner 함수 내부에서 x 변수를 참조하면 전역 변수 x를 참조하는 것이 아니라 inner 함수 내부에서 선언된 x변수를 참조한다.
// 이는 자바스크립트 엔진이 스코프 체인을 통해 참조할 변수를 검색(identifer resolution)했기 때문이다.


// 👉 13.3 스코프 체인
// 함수는 전역에서 정의할 수 있고 함수 몸체 내부에서 정의할 수도 있다. 
// 함수 몸체 내부에서 함수가 정의된 것을 "함수의 중첩"
// 함수 몸에 내부에서 정의된 함수를 "중첩 함수"
// 중첩 함수를 포함하는 함수를 "외부 함수"라고 한다

// 함수는 중첩될 수 있으므로 함수의 지역 스코프도 중첩될 수 있다.
// 스코프가 함수의 중첩에 의해 계층적 구조를 갖는다.
// = 중첩 함수의 지역 스코프는 중첩 함수를 포함하는 외부 함수의 지역 스코프와 계층적 구조를 갖는다.
// 외부 함수의 지역 스코프를 중첩 함수의 상위 스코프라 한다.

// outer 함수의 지역과 inner 함수의 지역이 있다.
// inner 함수는 outer 함수의 중첩 함수다.
// outer 함수가 만든 지역 스코프는 inner 함수가 만든 지역 스코프의 상위 스코프다.
// outer 함수의 지역 스코프의 상위 스코프는 전역 스코프다

// 전역 스코프
// x 'global x'
// y 'global y'
// outer <function objct>
// ^
// |
// outer 지역 스코프
// z 'outer's local z'
// inner <function object>
// ^
// |
// inner 지역 스코프
// x 'inner's local x'

// 이처럼 모든 스코프는 하나의 계층적 구조로 연결되며, 모든 지역 스코프의 최상위 스코프는 전역 스코프다.
// 이렇게 스코프가 계층적으로 연결된 것을 스코프 체인(scope chain)이라 한다.

// 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여
// 상위 스코프 방향으로 이동하여 선언된 변수를 검색(identifier resolution)한다.
// 이를 통해 상위 스코프에서 선언한 변수를 하위 스코프에서도 참조할 수 있다.

// 스코프 체인은 물리적인 실체로 존재한다.
// 자바스크립트 엔진은 코드를 실행하기에 앞서 위 그림과 유사한 자료구조인 렉시컬 환경을 실제로 생성한다.
// 변수 선언이 실행되면 변수 식별자가 이 자료구조(렉시컬 환경)에 키key로 등록되고, 변수 할당이 일어나면 이 자료구조의 변수 식별자에 해당하는 값을 변경한다.
// 변수의 검색도 이 자료구조 상에서 이뤄진다.

// 레시컬 환경
// 스코프 체인은 실행 컨텍스트의 렉시컬 환경을 단방향으로 연결한 것.
// 전역 렉시컬 환경은 코드가 로드되면 곧바로 생성되고, 함수의 렉시컬 환경은 함수가 호출되면 곧바로 생성된다.


// 📌 13.3.1 스코프 체인에 의한 변수 검색
// 4)를 보면 x를 참조하는 코드의 스코프인 inner 함수의 지역 스코프에서 x가 선언되었는지 검색한다.
// inner 함수 내에는 선언된 x가 존재한다.
// 따라서 검색된 변수 x를 참조하고 검색을 종료한다.

// 5)를 보면 y를 참조하는 코드의 스코프인 inner 함수의 지역 스코프에서 y가 선언되었는지 검색한다.
// inner 함수 내에는 y의 선언이 존재하지 않으므로 상위 스코프인 outer 함수의 지역 스코프로 이동한다.
// outer 함수 내에도 y의 선언이 존재하지 않으므로 또 다시 상위 스코프인 전역 스코프로 이동한다.
// 전역 스코프에는 y의 선언이 존재한다.
// 따라서 검색된 변수를 참조하고 검색을 종료한다.

// 이처럼 자바스크립트 엔진은 스코프 체인을 따라 변수를 참조하는 코드의 스코프에서 시작해서 
// 상위의 스코프 방향으로 이동하며 선언된 변수를 검색한다.
// 절대 하위 스코프로 내려가며 식별자를 검색하는 일은 없다.

// ❕ 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만, 
// 하위 스코프에서 유효한 변수를 사위 스코프에서 참조할 수 없다는 것을 의미한다.


// 📌 13.3.2 스코프 체인에 의한 함수 검색
// 전역 함수
function foo() {
  console.log('global function foo');
}
function bar() {
  // 중첩 함수
  function foo() {
    console.log('local function foo');
  }
  foo(); // 1)
}
bar();

// 함수 선언문으로 함수를 정의하면 런타임 이전에 함수 객체가 먼저 생성된다.
// 그리고 자바스크립트 엔진은 함수 이름과 동일한 이름의 식별자를 암묵적으로 선언하고 생성된 함수 객체를 할당한다.
// 1)에서 foo 함수를 호출하면 자바스크립트 엔진은 함수를 호출하기 위해 먼저 함수가 가리키는 식별자 foo를 검색한다.
// 이처럼 함수도 식별자에 할당되기 때문에 스코프를 갖는다.
// 따라서 스코프를 '변수를 검색할 때 사용하는 규칙'이라고 하기보다 '식별자를 검색하는 규칙'이라고 표현하는 편이 더 적합하다.


// 👉 13.4 함수 레벨 스코프
// 지역: 함수 몸체 내부
// 지역은 지역 스코프를 만든다
// -> 코드 블록이 아닌 함수에 의해서만 지역 스코프가 생성된다는 의미

// 대부분의 프로그래밍 언어는 모든 코드 블록(if, for, while, try/catch...)이 지역 스코프를 만든다.
// 이러한 특성을 블록 레벨 스코프block level scope라 한다.

// 하지만 var 키워드로 선언된 변수는 오로지 함수의 코드블록만을 지역 스코프로 인정한다.
// 이러한 트성을 함수 레벨 스코프function level scope라 한다.

var x = 1;
if(true) {
  // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
  // 따라서 x는 전역 변수다.
  // 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
  // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
  var x = 10;
}
console.log(x); // 10

var i = 10;
// var 키워드로 선언된 변수는 블록 레벨 스코프를 인정하지 않기 때문에 for 문에서 선언한 i는 전역 변수가 된다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for(var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
// 의도치 않게 전역 변수의 값이 변경되었다.
console.log(i); // 5


// 👉 13.5 렉시컬 스코프
var x = 1;

function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}
foo(); // 나의예상결과: 1, 실제결과: 1
bar(); // 나의예상결과: 1, 실제결과: 1

// 위 예제의 실행 결과는 bar 함수의 상위 스코프가 무엇인지에 따라 결정된다. 
// 두가지 패턴을 예측할 수 있다.
// - 1. 함수를 어디서 호출했는지에 따라 함수의 상위 스코프를 결정한다.
// - 2. 함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정한다.

// 1번 방식으로 함수의 상위 스코프를 결정한다면
// bar 함수의 상위 스코프는 foo함수의 지역 스코프와 전역 스코프일 것이다.
// 2번 방식으로 함수의 상위 스코프를 결정한다면
// bar 함수의 상위 스코프는 전역 스코프일 것이다.

// 1번 방식은 동적 스코프dynamic scope라 한다.
// : 함수를 정의하는 시점에는 함수가 어디서 호출될지 알 수 없다. 따라서 함수가 호출되는 시점에 동적으로 상위 스코프를 결정해야 하기 때문에
// 2번 방식은 렉시컬 스코프lexical scope 또는 동적 스코프static scope라 한다.
// 상위 스코프가 도엊ㄱ으로 바뀌지 않고 함수 정의가 평가되는 시점에 상위 스코프가 정적으로 결정되기 때문에.
// 자바스크립트를 비롯한 대부분의 프로그래밍 언어는 렉시컬 스코프를 따른다.

// ❕ 자바스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 호출했는지가 아니라 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다.
// 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다.
// 즉, 함수의 상위 스코프는 언제나 자신이 정의된 스코프다.

// 이처럼 함수의 상위 스코프는 함수 정의가 실행될 때 정적으로 결정된다. 
// 함수 정의(함수 선언문 또는 함수 표현식)가 실행되어 생성된 함수 객체는 이렇게 결정된 상위 스코프를 기억한다.
// 함수가 호출될 때마다 함수의 상위 스코프를 참조할 필요가 있기 때문이다.

// = bar함수는 전역에서 정의된 함수
// 함수 선언문으로 정의된 bar 함수는 전역 코드가 실행되기 전에 먼저 평가되어 함수 객체를 생성한다.
// 이때 생성된 bar 함수 객체는 자신이 정의된 스코프, 즉 전역 스코프를 기억한다.
// bar 함수가 호출되면 호출된 곳이 어디인지 관계없이 언제나 자신이 기억하고 있는 전역 스코프를 상위 스코프로 사용한다.
// 따라서 위 예제를 실행하면 전역 변수 x의 값 1을 두번 출력한다.

// 렉시컬 스코프는 클로저와 깊은 관계가 있다.
// 클로저는 24장에서 살펴보자.
