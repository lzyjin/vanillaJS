// 21장 빌트인 객체
// 👉 21.1 자바스크립트 객체의 분류
// 자바스크립트 객체는 다음과 같이 크게 3개의 객체로 분류할 수 있다.
// - 표준 빌트인 객체(standarad built-in objects/native objects/global objects)
// : 표준 빌트인 객체는 ECMAScript 사양에 정의된 객체를 말하며, 애플리케이션 전역의 공통 기능을 제공한다.
// 표준 빌트인 객체는 ECMAScript 사양에 정의된 객체이므로 자바스크립트 실행환경(브라우저 또는 Node.js 환경)과 관계없이 사용할 수 있다. 표준 빌트인 객체는 전역 객체의 프로퍼티로서 제공된다. 따라서 별도의 선언 없이 전역 변수처럼 언제나 참조할 수 있다.
// - 호스트 객체(host objects)
// : 호스트 객체는 ECMAScript 사양에 정의되어 있지 않지만 자바스크립트 실행환경(브라우저 또는 Node.js 환경)에서 추가로 제공하는 객체를 말한다.
// 브라우저 환경에서는 DOM, BOM, Canvas, XMLHttpRequest, fetch, requestAnimationFrame, SVG, Web Storage, Web Component, Web Worker와 같은 클라이언트 사이드 Web API를 호스트 객체로 제공하고, Node.js 환경에서는 Node.js 고유의 API를 호스트 객체로 제공한다.
// - 사용자 정의 객체(user-defined objects)
// : 사용자 정의 객체는 표준 빌트인 객체와 호스트 객체처럼 기본 제공되는 객체가 아닌 사용자가 직접 정의한 객체를 말한다.

// 👉 21.2 표준 빌트인 객체 
// 자바스크립트는 Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array, Map/Set, WeakMap/WeakSet, Function, Promise, Reflect, Proxy, JSON, Error 등 40여 개의 표준 빌트인 객체를 제공한다.
// Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 인스턴스를 생성할 수 있는 생성자 함수 객체다. 생성자 함수 객체인 표준  빌트인 객체는 프로토타입 메서드와 정적 메서드를 제공하고, 생성자 함수 객체가 아닌 표준 빌트인 객체는 정적 메서드만 제공한다.

// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(strObj, typeof strObj); // String {'Lee'} 'object'
// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(numObj, typeof numObj); // Number {123} 'object'
// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(boolObj, typeof boolObj); // Boolean {true} 'object'
// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(func, typeof func); // ƒ anonymous(x) { return x * x } 'function'
// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(arr, typeof arr); // (3) [1, 2, 3] 'object'
// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(regExp, typeof regExp); // /ab+c/i 'object'
// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(date, typeof date); // Mon Mar 21 2022 21:52:00 GMT+0900 (한국 표준시) 'object'

// ❕ 생성자 함수인 표준 빌트인 객체가 생성한 인스턴스의 프로토타입은 표준 빌트인 객체의 prototype에 바인딩된 객체다.
// 예를 들어, 표준 빌트인 객체인 String을 생성자 함수로서 호출하여 생성한 String 인스턴스의 프로토타입은 String.prototype이다.

// String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype이다.
{
  const strObj = new String('Lee');
  console.log( Object.getPrototypeOf(strObj) === String.prototype ); // true
}

// ❕표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체(예를 들어, String.prototype)는 다양한 기능의 빌트인 프로토타입 메서드를 제공한다. 그리고 표준 빌트인 객체는 인스턴스 없이도 호출 가능한 빌트인 정적 메서드를 제공한다.
// 예를 들어, 표준 빌트인 객체인 Number의 prototype 프로퍼티에 바인딩된 객체, Number.prototype은 다양한 기능의 빌트인 프로토타입 메서드를 제공한다. 이 프로토타입 메서드는 모든 Number 인스턴스가 상속을 통해 사용할 수 있다. 그리고 표준 빌트인 객체인 Number는 인스턴스 없이 정적으로 호출할 수 있는 정적 메서드를 제공한다.
{
  // Number 생성자 함수에 의한 Number 객체 생성
  const numObj = new Number(1.5);

  // toFixed는 Number.prototype의 프로토타입 메서드다.
  // Number.prototype.toFixed 는 소수점 자리를 반올림하여 문자열로 반환한다.
  console.log( numObj.toFixed() ); // 2

  // isInteger는 Number의 정적 메서드다.
  // Number.isInteger는 인수가 정수(integer)인지 검사하여 그 결과를 Boolean으로 반환한다.
  console.log( Number.isInteger(0.5) ); // false
}

// 👉 21.3 원시값과 래퍼 객체
// 문자열이나 숫자, 불리언 등의 원시값이 있는데도 문자열, 숫자, 불리언 객체를 생성하는 String, Number, Boolean 등의 표준 빌트인 생성자 함수가 존재하는 이유는 무엇일까?
{
  const str = 'hello';

  // 원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
  console.log( str.length ); // 5
  console.log( str.toUpperCase() ); // HELLO
}
// 이는 원시값인 문자열, 숫자, 불리언 값의 경우 이들 원시값에 대해 마치 객체처럼 마침표 표기법(또는 대괄호 표기법)으로 접근하면 자바스크립트 엔진이 일시적으로 원시값을 연관된 객체로 변환해주기 때문이다.
// 즉, 원시값을 객체처럼 사용하면 자바스크립트 엔진은 암묵적으로 연관된 객체를 생성하여 생성된 객체로 프로퍼티에 접근하거나 메서드를 호출하고 다시 원시값으로 되돌린다.
// ❕ 이처럼 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체 wrapper object라 한다.

// 예를 들어, 문자열에 대해 마침표 표기법으로 접근하면 그 순간 래퍼 객체인 String 생성자 함수의 인스턴스가 생성되고, 문자열은 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.

{
  const str = 'hi';

  // 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환된다.
  console.log( str.length ); // 2
  console.log( str.toUpperCase() ); // HI
  
  // 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
  console.log( typeof str ); // string
  // type이 object가 아니라 string으로 나옴
}
// 이때 문자열 래퍼 객체인 String 생성자 함수의 인스턴스는 String.prototype의 메서드를 상속받아 사용할 수 있다.
// 그 후 래퍼 객체의 처리가 종료되면 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값으로 원래의 상태, 즉 식별자가 원시값을 갖도록 되돌리고 래퍼 객체는 가비지 컬렉션의 대상이 된다.

{
  // 1) 식별자 str은 문자열을 값으로 가지고 있다.
  const str = 'hello';

  // 2) 식별자 str은 암묵적으로 생성된 래퍼 객체를 가리킨다.
  // 식별자 str의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
  // 래퍼 객체에 name 프로퍼티가 동적 추가된다.
  str.name = 'Lee';

  // 3) 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시 값을 갖는다.
  // 이때 2에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

  // 4) 식별자 str은 새롭게 암묵적으로 생성된( 2)에서 생성된 래퍼 객체와는 다른 ) 래퍼 객체를 가리킨다.
  // 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
  console.log( str.name ); // undefined

  // 5) 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
  // 이때 4)에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
  console.log( typeof str, str ); // string hello
}

// 숫자 값도 마찬가지다. 숫자 값에 대해 마침표 표기법으로 접근하면 그 순간 래퍼 객체인 Number 생성자 함수의 이스턴스가 생성되고 숫자는 래퍼 객체의 [[NumberData]] 내부 슬롯에 할당된다. 
// 이때 래퍼 객체인 Number 객체는 당연히 Number.prototype의 메서드를 상속받아 사용할 수 있다.
// 그 후, 래퍼 객체의 처리가 종료되면 래퍼 객체의 [[NumberData]] 내부 슬롯에 할당된 원시값을 되돌리고 래퍼 객체는 가비지 컬렉션의 대상이 된다.
{
  const num = 1.5;

  // 원시 타입인 숫자가 래퍼 객체인 String 객체로 변환된다.
  console.log( num.toFixed() ); // 2

  // 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
  console.log( typeof num, num ); // number 1.5
}

// 불리언 값도 문자열이나 숫자와 마찬가지지만 불리언 값으로 메서드를 호출하는 경우는 없으므로 그다지 유용하지는 않다.

// ES6에서 새롭게 도입된 원시값인 심벌도 래퍼 객체를 생성한다.
// 심벌은 일반적인 원시값과는 달리 리터럴 표기법으로 생성할 수 없고 Symbol 함수를 통해 생성해야 하므로 다른 원시값과는 차이가 있다.

// ❕ 이처럼 문자열, 숫자, 불리언, 심벌은 암묵적으로 생성되는 래퍼 객체에 의해 마치 객체처럼 사용할 수 있으며, 표준 빌트인 객체인 String, Number, Boolean, Symbol의 프로토타입 메서드 또는 프로퍼티를 참조할 수 있다.
// ❕❕ 따라서 String, Number, Boolean 생성자 함수를 new 연산자와 함께 호출하여 문자열, 숫자, 불리언 인스턴스를 생성할 필요가 없으며 권장하지도 않는다.
// (Symbol은 생성자 함수가 아니므로 이 논의에서는 제외한다.)

// ❕문자열, 숫자, 불리언, 심벌 이외의 원시값, 즉 null과 undefined는 래퍼 객체를 생성하지 않는다. 따라서 null과 undefined 값을 객체처럼 사용하면 에러가 발생한다. 

// 👉 21.4 전역 객체
// 전역 객체(global object)는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체이며, 어떤 객체에도 속하지 않은 최상위 객체다.
// 전역 객체는 자바스크립트 환경에 따라 지칭하는 이름이 제각각이다.
// 브라우저 환경에서는 window(또는 self, this, frames)가 전역 객체를 가리키지만, Node.js 환경에서는 global이 전역 객체를 가리킨다.

// - globalThis
// ES11에서 도입된 globalThis는 브라우저 환경과 Node.js 환경에서 전역 객체를 가리키던 다양한 식벽자를 통일한 식별자다.
// globalThis는 표준 사양이므로 ECMAScript 표준 사양을 준수하는 모든 환경에서 사용할 수 있다.
{
  // 브라우저 환경
  console.log( globalThis === this); // true
  console.log( globalThis === window); // true
  console.log( globalThis === self); // true
  console.log( globalThis === frames); // true

  // Node.js 환경(12.0.0 이상)
  // console.log( globalThis === this); // true
  // console.log( globalThis === global); // true
}
// ❕ 전역 객체는 표준 빌트인 객체(Object, String, Number, Function, Array 등)와 환경에 따른 호스트 객체(클라이어느 Web API 또는 Node.js의 호스트 API), 그리고 var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티로 갖는다.

// ❕ 즉, 전역 객체는 계층적 구조상 어떤 객체에도 속하지 않은 모든 빌트인 객체(표준 빌트인 객체와 호스트 객체)의 최상위 객체다.
// 전역 객체가 최상위 객체라는 것은 프로토타입 상속 관계상에서 최상위 객체라는 의미가 아니다.
// ❕ 전역 객체 자신은 어떤 객체의 프로퍼티도 아니며, 객체의 계층적 구조상 표준 빌트인 객체와 호스트 객체를 프로퍼티로 소유한다는 것을 말한다.

// 전역 객체의 특징
// - 전역 객체는 개발자가 의도적으로 생성할 수 없다. 즉, 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다.
// - 전역 객체의 프로퍼티를 참조할 때 window(또는 global)를 생략할 수 있다.
{
  // 문자열 'F'를 16진수로 해석하여 10진수로 변환하여 반환한다.
  console.log( window.parseInt('F', 16) ); // 15

  // window.parseInt는 parseInt로 호출할 수 있다.
  console.log( parseInt('F', 16) );

  console.log( window.parseInt('F', 16) === parseInt('F', 16) ); // true
}

// - 전역 객체는 Object, String, Number, Boolean, Function, Array, RegExp, Date, Math, Promise 같은 모든 표준 빌트인 객체를 프로퍼티로 가지고 있다. 
// - 자바스크립트 실행 환경(브라우저 환경 또는 Node.js 환경)에 따라 추가적으로 프로퍼티와 메서드를 갖는다.
// 브라우저 환경에서는 DOM, BOM, XMLHttpRequest, fetch, requestAnimationFrame, SVG, Storage, Web Component, Web Worker 같은 클라이언트 사이드 Web API를 호스트 객체로 제공하고, Node.js 환경에서는 Node.js 고유의 API를 호스트 객체로 제공한다.
// - var 키워드로 선언한 전여 변수와 선언하지 않은 변수에 값을 할당한 암묵적 전역, 그리고 전역 함수는 전역 객체의 프로퍼티가 된다.
{
  // var 키워드로 선언한 전역 변수
  var foo = 1;
  console.log( window.foo ); // 1

  // 선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티다.
  bar = 2; // window.bar = 2
  console.log( window.bar ); // 2 

  {
    var whatIsThis = 100;
    function test() {
      var whatIsThis2 = 200;
    }
  }
  console.log( window.whatIsThis ); // 100
  console.log( window.whatIsThis2 ); // undefined

  // 전역 함수
  function baz() { return 3; }
  console.log( window.baz() ); // 3
}

// - let이나 const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. ❕ 즉, window.foo와 같이 접근할 수 없다. let이나 const 키워드로 선언한 전역 변수는 보이지 않는 개념적인 블록(전역 렉시컬 환경의 선언적 환경 레코드)내에 존재하게 된다.
{
  let variable = 123;
  console.log( window.variable ); // undefined
}

// - ❕브라우저 환경의 모든 자바스크립트 코드는 하나의 전역 객체 window를 공유한다. 여러 개의 script 태그를 통해 자바스크립트 코드를 분리해도 하나의 전역 객체 window를 공유하는 것은 변함이 없다. 이는 분리되어 있는 자바스크립트 코드가 하나의 전역을 공유한다는 의미다.

// 전역 객체는 몇 가지 프로퍼티와 메서드를 가지고 있다. 전역 객체의 프로퍼티와 메서드는 전역 객체를 가리키는 식별자, 즉 window나 global을 생략하여 참조/호출 할 수 있으므로 전역 변수와 전역 함수처럼 사용할 수 있다.

// 👉 21.4.1 빌트인 전역 프로퍼티
// ❕ 빌트인 전역 프로퍼티(built-in global property)는 전역 객체의 프로퍼티를 의미한다.
// 주로 애플리케이션 전역에서 사용하는 값을 제공한다.

// - Infinity
// Infinity 프로퍼티는 무한대를 나타내는 숫자값 Infinity를 갖는다.
{
  // 전역 프로퍼티는 window를 생략하고 참조할 수 있다.
  console.log( window.Infinity === Infinity ); // true
  
  // 양의 무한대
  console.log( 3/0 ); // Infinity
  // 음의 무한대
  console.log( -3/0 ); // -Infinity
  // Infinity는 숫자값이다.
  console.log( typeof Infinity ); // number
}

// - NaN
// NaN 프로퍼티는 숫자가 아님(Not-a-Number)을 나타내는 숫자값NaN을 갖는다.
// NaN 프로퍼티 Number.NaN 프로퍼티와 같다.
{
  console.log( window.NaN ); // NaN
  console.log( Number.NaN ); // NaN
  console.log( window.NaN === Number.NaN ); // false
  console.log( window.NaN === Number('xyz') ); // false
  console.log( Number('xyz') ); // NaN
  console.log( 1  * 'string' ); // NaN
  console.log( typeof NaN ); // number            
}

// - undefined
// undefined 프로퍼티는 원시 타입 undefined를 값으로 갖는다.
{
  console.log( window.undefined ); // undefined
  console.log( window.undefined === undefined ); // true

  var vari;
  console.log( vari ); // undefined
  console.log( typeof vari ); // undefined
}

// - eval
// eval 함수는 자바스크립트 코드를 나타내는 문자열을 인수로 전달받는다. 전달받은 문자열 코드가 표현식이라면 eval 함수는 문자열 콬드를 런타임에 평가하여 값을 생성하고, 전달받은 인수가 표현식이 아닌 문이라면 eval 함수는 문자열 코드를 런타임에 실행한다. 문자열 코드가 여러 개의 문으로 이루어져 있다면 모든 문을 실행한다.
{
  // 표현식인 문
  console.log( eval('1+2;') ); // 3
  // 표현식이 아닌 문
  console.log( eval('var varr = 5;') ); // undefined

  // eval 함수에 의해 런타임에 변수 선언문이 실행되어 varr 변수가 선언되었다.
  console.log( varr ); // 5

  // 객체 리터럴은 반드시 괄호로 둘러싼다.
  const o = eval('({ a: 1 })');
  console.log( o ); // {a: 1}

  // 함수 리터럴은 반드시 괄호로 둘러싼다.
  const f = eval('(function() { return 10; })');
  console.log( f() ); // 10
}

// 인수로 전달받은 문자열 코드가 여러 개의 문으로 이루어져 있다면 모든 문을 실행한 다음, 마지막 결과값을 반환한다.
{
  console.log( eval('1+2; 3+4;') ); // 7
}

// eval 함수는 자신이 호출된 위치에 해당하는 기존의 스코프를 런타임에 동적으로 수정한다.
{
  const z = 1;

  function zoo() {
    // eval 함수는 런타임에 zoo 함수의 스코프를 동적으로 수정한다.
    eval('var z = 2;');
    console.log(z); // 2
  }

  zoo();
  console.log(z); // 1
}

// 위 예제의 eval 함수는 새로운 z 변수를 선언하면서 zoo 함수의 스코프에 선언된 z 변수를 동적으로 추가한다. 함수가 호출되면 런타임 이전에 먼저 함수 몸체 내부의 모든 선언문을 먼저 실행하고 그 결과를 스코프에 등록한다. 따라서 위 예제의 eval 함수가 호출되는 시점에는 이미 zoo 함수의 스코프가 존재한다. 하지만 eval 함수는 기존의 스코프를 런타임에 동적으로 수정한다. ❕ 그리고 eval 함수에 전달된 코드는 이미 그 위치에 존재하던 코드처럼 동작한다. 즉, eval 함수가 호출된 zoo 함수의 스코프에서 실행된다.
// 단, strict mode(엄격 모드)에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
console.clear();
{
  const t = 1;

  function too() {
    'use strict';

    // strict mode에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
    eval('var t = 2; console.log(t);'); // 2
    console.log(t); // 1
  }
  too();
  console.log(t); // 1
}

// 또한 인수로 전달받은 문자열 코드가 let, const 키워드를 사용한 변수 선언문이라면 암묵적으로 strict mode가 적용된다.
{
  const s = 1;

  function soo() {
    eval('var s = 2; console.log(s);'); // 2
    // let, const 키워드를 사용한 변수 선언문은 strict mode가 적용된다.
    eval('const s = 3; console.log(s);'); // 3
    console.log(s); // 2
  }
  soo();
  console.log(s); // 1
}

// eval 함수를 통해 사용자로부터 입력받은 콘텐츠(untrusted data)를 실행하는 것은 보안에 매우 취약하다. 또한 eval 함수를 통해 실행되는 코드는 자바스크립트 엔진에 의해 최적화가 수행되지 않으므로 일반적인 코드 실행에 비해 처리 속도가 느리다.
// 따라서 eval 함수의 사용은 금지해야한다!!

// - isFinite
// 전달받은 인수가 정상적인 유한수인지 검사하여 유한수이면 true를 반환하고, 무한수이면 false를 반환한다. 전달받은 인수의 타입이 숫자가 아닌 경우, 숫자로 타입을 변환한 후 검사를 수행한다. 이때 인수가 NaN으로 평가되는 값이라면 false를 반환한다.
{
  // 인수가 유한수이면 true를 반환한다.
  console.log( isFinite(0) ); // true
  console.log( isFinite(2e64) ); // true
  console.log( isFinite('10') ); // true ('10' -> 10)
  console.log( isFinite(null) ); // true (null -> 0)

  // 인수가 무한수 또는 NaN으로 평가되는 값이라면 false를 반환한다. 
}