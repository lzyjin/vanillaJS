// 17장 생성자 함수에 의한 객체 생성

// 객체 리터럴에 의한 객체 생성 방식은 가장 일반적이고 간단한 객체 생성 방식이다.
// 객체는 객체 리터럴 이외에도 다양한 방법으로 생성할 수 있다.

// 이번 장에서는 객체 생성 방식 중에서 생성자 함수를 사용하여 객체를 생성하는 방식을 살펴본다.

// 17.1 Object 생성자 함수
// new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
// 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.

// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function() {
  console.log('Hi! My name is ' + this.name);
};

console.log(person); // {name: 'Lee', sayHello: ƒ}
person.sayHello(); // Hi! My name is Lee

// 생성자 함수constructor란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다.
// 생성자 함수에 의해 생성된 객체를 인스턴스instance라 한다.

// 자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인 생성자 함수를 제공한다.

// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log( typeof strObj ); // object
console.log( strObj ); // String {'Lee'}

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log( typeof numObj ); // object
console.log( numObj ); // Number {123}

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log( typeof boolObj ); // object
console.log( boolObj ); // Boolean {true}

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log( typeof func ); // function
console.log( func ); // ƒ anonymous(x) { return x * x }

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log( typeof arr ); // object
console.log( arr ); // (3) [1, 2, 3]

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log( typeof regExp ); // object
console.log( regExp ); // /ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log( typeof date ); // object
console.log( date ); // Wed Feb 23 2022 20:44:01 GMT+0900 (한국 표준시)

// 반드시 Object 생성자 함수를 사용해 빈 객체를 생성해야 하는 것은 아니다.
// 객체를 생성하는 방법은 객체 리터럴을 사용하는 것이 더 간편하다.
// Object 생성자 함수를 사용해 객체를 생성하는 방식은 특별한 이유가 없다면 그다지 유용해 보이지 않는다.


// 17.2 생성자 함수
// 17.2.1 객체 리터럴에 의한 객체 생성 방식의 문제점
// 객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하다. 하지만 이 방식은 단 하나의 객체만 생성한다. 
// 따라서 동일한 프로퍼티를 갖는 객체를 여러개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야 하기 때문에 비효율적이다.

const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  }
};
console.log( circle1.getDiameter() ); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  }
};
console.log( circle2.getDiameter() ); // 20

// 객체는 프로퍼티를 통해 객체 고유의 상태state를 표현한다.
// 메서드를 통해 상태 데이터인 프로퍼티를 참조하고 조작하는 동작behavior을 표현한다.
// 따라서 프로퍼티는 객체마다 값이 다를 수 있지만 메서드는 내용이 동일한 경우가 일반적이다.
// 하지만 객체 리터럴에 의해 객체를 생성하는 경우 프로퍼티 구조가 동일함에도 불구하고 매번 같은 프로퍼티와 메서드를 기술해야 한다.

// 17.2.2 생성자 함수에 의한 객체 생성 방식의 장점!!
// 생성자 함수에 의한 객체 생성 방식은 마치 객체(인스턴스)를 생성하기 위한 템플릿(클래스)처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성할 수 있다.

// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다
  // 이 함수가 생성자 함수가 아니라 일반 함수로서 호출되었다면 this는 전역객체(window)를 가리킨다.
  // -> 전역 변수 radius에 할당하는 셈
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };

}
// 인스턴스의 생성
const circleOne = new Circle(5); // 반지름이 5인 Circle 객체를 생성
const circleTwo = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log( circleOne.getDiameter() ); // 10
console.log( circleTwo.getDiameter() ); // 20

// this
// this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수self-referencing variable다.
// this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.

// ❕❕❕ 함수 호출 방식           this가 가리키는 값(this 바인딩)
// 일반 함수로서 호출         전역 객체
// 메서드로서 호출            메서드를 호출한 객체(마침표 앞의 객체)
// 생성자 함수로서 호출        생성자 함수가 (미래에) 생성할 인스턴스

// 함수는 다양한 방식으로 호출될 수 있다.
function foo() {
  console.log(this);
}
// 일반 함수로서 호출
// 전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가리킨다
foo(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const obj = { foo }; // ES6 축약 표현
// 메서드로서 호출
obj.foo(); // {foo: ƒ} 오잉?

// 생성자 함수로서 호출
const inst = new foo(); // foo {}


// 생성자 함수는 이름 그대로 객체(인스턴스)를 생성하는 함수다.
// 하지만 자바와 같은 클래스 기반 객체지향 언어의 생성자와는 다르게 그 형식이 정해져 있는 것이 아니라
// 일반 함수와 동일한 방법으로 생성자 함수를 정의하고 ❕ new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.
// 만약 new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다.

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않고 일반 함수로서 호출된다.
const circle3 = Circle(15);
// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
// console.log( circle3 ); // undefined
// console.log(circle3.radius); // TypeError: Cannot read properties of undefined (reading 'radius')
console.log(radius); // 15
console.log(this.radius); // 15


// 17.2.3 생성자 함수의 인스터늣 생성 과정
// 생성자 함수의 함수 몸체에서 수행해야 하는 것이 무엇인지 생각해보자.
// 생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스틑 생성하기 위한 템플릿(클래스)으로서 동작하여 인스턴스르 생성하는 것과
// 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)하는 것이다.
// 생성자 함수가 인스턴스를 생성하는 것은 필수이고, 생성된 인스턴스를 초기화 하는 것은 옵션이다.

// 생성자 함수
function Circle2(radius) {
  // 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}
// 인스턴스 생성
const circle4 = new Circle2(5); // 반지름이 5인 Circle 객체를 생성

// 생성자 함수 내부의 코드를 살펴보면 this에 프로퍼티를 추가하고 필요에 따라 전달된 인수를 프로퍼티에 초기값으로서 할당하여 인스턴스를 초기화한다.
// 하지만 인스턴스를 생성하고 반환하는 코드는 보이지 않는다.
// 자바스크립트 엔진은 암묵저인 처리를 통해 인스턴스를 생성하고 반환한다.
// new 연산자와 함께 생성자 함수를 호출하면 자바스크립트 엔진은 다음과 같은 과정을 거쳐 암묵적으로 인스턴스를 생성하고 인스턴스를 초기화 한 후 암묵적으로 인스턴스를 반환한다.

// 1. 인스턴스 생성과 this 바인딩
// 암묵적으로 빈 객체가 생성된다. 이 빈객체가 바로 (아직 완성되지는 않았지만) 생성자 함수가 생성한 인스턴스다.
// 그리고 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩된다. 생성자 함수 내부의 this가 생성자 함수가 생성할 인스턴스를 가리키는 이유가 바로 이것이다.
// 이 처리는 함수 몸체의 코드가 한 줄씩 실행되는 런타임 이전에 실행된다. 

// 바인딩name binding이란?
// 바인딩이란 식별자와 값을 연결하는 과정을 의미한다.
// 예를 들어, 변수 선언은 변수 이름(식별자)과 확보된 메모리 공간의 주소를 바인딩하는 것이다. 
// this 바인딩은 this(키워드로 분류되지만 식별자 역할을 한다)와 this가 가리킬 객체를 바인딩하는 것이다.

function Circle3(raius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다
  console.log(this); // Circle3 {}

  this.radius = raius;
  this.getDiameter = function() {
    return 2 * this.raius;
  };
}
// const circle5 = new Circle3();



// 2. 인스턴스 초기화
// 생성자 함수에 기술되어 있는 코드가 한 줄씩 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.
// 즉, this에 바인딩되어 있는 인스턴스에 프로퍼티나 메서드를 추가하고, 생성자 함수가 인수로 전달받은 초기값을 인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당한다.
// 이 처리는 개발자가 기술한다.

function Circle4(raius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = raius;
  this.getDiameter = function() {
    return 2 * this.raius;
  };
}


// 3. 인스턴스 반환
// 생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.

function Circle5(raius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = raius;
  this.getDiameter = function() {
    return 2 * this.raius;
  };

  // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
}

// 인스턴스 생성. Circle5 생성자 함수는 암묵적으로 this를 반환한다.
const circle5 = new Circle5(1);
console.log(circle5); // Circle5 {radius: 1, getDiameter: ƒ}

// ❕ 만약 this가 아닌 다른 객체를 명시적으로 반환하면 this가 반환되지 못하고 return 문에 명시한 객체가 반환된다.
function Circle6(raius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = raius;
  this.getDiameter = function() {
    return 2 * this.raius;
  };

  // 3. 암묵적으로 this를 반환한다.
  // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
  return {};
}

// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle6 = new Circle6(1);
console.log(circle6); // {}

// ❕ 하지만 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
function Circle7(raius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = raius;
  this.getDiameter = function() {
    return 2 * this.raius;
  };

  // 3. 암묵적으로 this를 반환한다.
  // 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
  return 100;
}
const circle7 = new Circle7(1);
console.log(circle7); // Circle7 {radius: 1, getDiameter: ƒ}

// 이처럼 생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손한다.
// 따라서 생성자 함수 내부에서 return문은 반드시 생략해야 한다.


// 17.2.4 내부 메서드 [[Call]]과 [[Construct]]
// 함수 선언문 또는 함수 표현식으로 정의한 함수는 일반적인 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있다.
// 생성자 함수로서 호출한다는 것은 new 연산자와 함께 호출하여 객체를 생성하는 것을 의미한다.

// 함수는 객체이므로 일반 객체ordinary object와 동일하게 동작할 수 있다.
// 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드를 모두 가지고 있기 때문이다.

// 함수는 객체다.
function foo2() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo2.prop = 10;

// 함수는 객체이므로 메서드를 소유할 수 있다.
foo2.method = function() {
  console.log(this.prop);
};
foo2.method(); // 10

// 함수는 객체이지만 일반 객체와는 다르다.
// 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.
// 따라서 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드는 물론, 
// 함수로서 동작하기 위해 함수 객체만을 위한 [[Environment]], [[FormalParameters]] 등의 내부 슬롯과
// [[Call]], [[Contruct]] 같은 내부 메서드를 추가로 가지고 있다.

function foo3() {}

// 일반적인 함수로서 호출: [[Call]]이 호출된다.
foo3();

// 생성자 함수로서 호출: [[Construct]]가 호출된다.
new foo3();

// callable: 내부 메서드 [[Call]]을 갖는 함수 객체 = 호출할 수 있는 객체
// constructor: 내부 메서드 [[Construct]]를 갖는 함수 객체 = 생성자 함수로서 호출할 수 있는 함수
// non-constructor: [[Construct]]를 갖지 않는 함수 객체 = 객체를 생성자 함수로서 호출할 수 없는 함수

// 호출할 수 없는 객체는 함수 객체가 아니므로 함수로서 기능하는 객체, 즉 함수 객체는 반드시 callabl이어야 한다.
// 따라서 모든 함수 객체는 내부 메서드 [[Call]]을 갖고 있으므로 호출할 수 있다. 
// 하지만 모든 함수 객체가 [[Construc]]를 갖는 것은 아니다.
// 다시 말해, 함수 객체는 constructor일 수도 있고 non-constructor일 수도 있다.

// 결론적으로 함수 객체는 callable이면서 constructor이거나, callable이면서 non-constructor다.
// 즉 모든 함수 객체는 호출할 수 있지만 모든 함수 객체를 생성자 함수로서 호출할 수 있는 것은 아니다.


// 17.2.5 construtor와 non-constructor의 구분

// 자바스크립트 엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라 함수를 constructor와 non-constructor로 구분한다.

// - constructor: 함수 선언문, 함수 표현식, 클래스(클래스도 함수다)
// - non-constructor: 메서드(ES6 메서드 축약표현), 화살표 함수

// 이때 주의할 것은 ECMAScript 사양에서 메서드로 인정하는 범위가 일반적인 의미의 메서드보다 좁다는 것이다.


// 일반 함수 정의: 함수 선언문, 함수 표현식
function fooo() {}
const bar = function() {};
const baz = {  
  // 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
  x: function() {}
};
// 일반 함수로 정의된 함수만이 constructor다.
new fooo();
new bar();
new baz.x();

// 화살표 함수 정의
const arrow = () => {};
// new arrow(); // TypeError: arrow is not a constructor

// 메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다
const objec = {
  x() {}
};
// new objec.x(); // TypeError: objec.x is not a constructor

// 메서드 축약 표현이란???
// 📌 10.9.3 메서드 축약 표현
// ES5
// var obj = {
//   name: 'Lee',
//   sayHi: function() {
//     console.log('Hi! ' + this.name);
//   }
// };
// obj.sayHi(); // Hi! Lee
// ES6에서는 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다
// ES6
// const obj3 = {
//   name: 'Lee',
//   sayHi() {
//     console.log('Hi! ' + this.name);
//   }
// }
// obj3.sayHi(); // Hi! Lee
// ES6의 메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당한함수와 다르게 동작한다


// 함수르 프로퍼티 값으로 사용하면 일반적으로 메서드로 통칭한다.
// 하지만 ECMAScript 사양에서 메서드란 ES6의 메서드 축약 표현만을 의미한다.
// ❕ 다시 말해 함수가 어디에 할당되어 있는지에 따라 메서드인지를 판단하는 것이 아니라 함수 정의 방식에 따라 constructor와 non-constructor를 구분한다.
// 따라서 위 예제와 같이 일반함수(함수 선언문과 함수 표현식으로 정의된 함수)만이 constructor이고, ES6의 화살표 함수와 메서드 축약 표현으로 정의된 함수는 non-constructor다.

// 함수를 일반 함수로서 호출하면 함수 객체 내부의 메서드 [[Call]]이 호출되고, new 연산자와 함께 생성자 함수로서 호출하면 내부 메서드 [[Construct]]가 호출된다.
// non-constructor인 함수 객체는 내부 메서드 [[Construct]]를 갖지 않는다.
// 따라서 non-constructor인 함수 객체를 생성자 함수로서 호출하면 에러가 발생한다.

function foo3() {}

// 일반 함수로서 호출
// [[Call]]이 호출된다. 모든 함수 객체는 [[Call]]이 구현되어 있다.
foo3();

// 생성자 함수로서 호출
// [[Construct]]가 호출된다. 이때 [[Construct]]를 갖지 않는다면 에러가 발생한다
new foo3();

// ❕ 주의할 것은 생성자 함수로서 호출될 것을 기대하고, 정의하지 않은 일반 함수(callable이면서 constructor)에 new를 붙여 호출하면, 생성자 함수처럼 동작할 수 있다는 것이다.


// 17.2.6 new 연산자
// 일반 함수와 생성자 함수에 특별한 형식적 차이는 없다.
// new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.
// 다시 말해 함수 객체의 내부 메서드 [[Call]]이 아니라 [[Constructor]]가 호출된다.
// 단, new 연산자와 함께 호출되는 함수는 non-constructor가 아닌 constructor이어야한다.

// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y) {
  return x + y;
}

// 생성자 함수로서 정의하지 않은 함수를 new 연산자와 함께 호출
let inst2 = new add();

// 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
console.log(inst2); // add {}

// 객체를 반환하는 일반 함수
function createUser(name, role) {
  return {name, role};
}

// 일반 함수를 new 연산자와 함께 호출
inst2 = new createUser('Lee', 'admin');
// 함수가 생성한 객체를 반환한다.
console.log( inst2 ); // {name: 'Lee', role: 'admin'}


// 반대로 new 연산자 없이 생성자 함수를 호출하면 일반 함수로 호출된다.
// 다시 말해 함수 객체의 내부 메서드 [[Construct]]가 호출되는 것이 아니라 [[Call]]이 호출된다.

// 생성자 함수 
function Circle8(radiussss) {
  this.radiussss = radiussss;
  this.getDiameterrrr = function() {
    return 2 * this.radiussss;
  };
}

// new 연산자 없이 생성자 함수를 호출하면 일반 함수로서 호출된다.
const circle8 = Circle8(5);
console.log(circle8); // undefined

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(radiussss); // 5
console.log(getDiameterrrr()); // 10

// circle8.getDiameterrrr(); // TypeError: Cannot read properties of undefined (reading 'getDiameterrrr')

// Circle8 함수를 new 연산자와 함께 생성자 함수로서 호출하면 함수 내부의 this는 Circle8 생성자 함수가 생성할 인스턴스를 가리킨다.
// 하지만 Circle8 함수를 일반적인 함수로서 호출하면 함수 내부의 this는 전역 객체 window를 가리킨다.

// 위 예제의 Circle8 함수는 일반 함수로서 호출되었기 때문에 Circle8 함수 내부의 this는 전역 객체 window를 가리킨다.
// 따라서 radiussss 프로퍼티와 getDiameterrrr 메서드는 전역 개체의 프로퍼티와 메서드가 된다. 

// 일반 함수와 생성자 함수에 특별한 형식적 차이는 없다.
// ❕ 따라서 생성자 함수는 일반적으로 첫 문자를 대문자로 기술하는 파스칼 케이스로 명명하여 일반 함수로 구별할 수 있도록 노력한다. 


// 17.2.7 new.target
// 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 파스칼 케이스 컨벤션을 사용한다 하더라도 실수는 언제나 발생할 수 없다.
// 이러한 위험성을 회피하기 위해 ES6에서는 new.target을 지원한다.

// new.target은 this와 유사하게 constructor인 모든 함수 내부에서 암묵적인 지역 변수와 같이 사용되며 메타 프로퍼티라고 부른다.
// IE는 new.target을 지원하지 않는다.

// ❕ 함수 내부에서 new.target을 사용하면 new 연산자와 함께 생성자 함수로서 호출되었는지 확인할 수 있다.
// new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.
// new 연산자 없이 일반 함수로서 노출된 함수 내부의 new.target은 undefined이다.

// 따라서 함수 내부에서 new.target을 사용하여 new 연산자와 생성자 함수로서 호출했는지 확인하여 
// 그렇지 않은 경우 new 연산자와 함께 재귀 호출을 통해 생성자 함수로서 호출할 수 있다.

// 생성자 함수
function Circle9(radius) {
  // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined이다.
  if(!new.target) {
    // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
    return new Circle9(radius);
    // alert(1);
  }
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}
// const circle9 = new Circle9(3);

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle9 = Circle9(3); 
console.log(circle9.getDiameter()); // 6

// - 스코프 세이브 생성자 패턴 scope-safe constructor
// new.target은 ES6에서 도입된 최신 문법으로 IE에서는 지원하지 않는다. 
// new.target을 사용할 수 없는 상황이라면 스코프 세이프 생성자 패턴을 사용할 수 있다.
function Circle10(radius) {
  // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
  // this에 바인딩한다. 이때 this와 Circle은 프로토타입에 의해 연결된다.

  // 이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킨다.
  // 즉 this와 Circle10은 프로토타입에 의해 연결되지 않는다.
  if( !(this instanceof Circle10) ) {
    return new Circle10(radius);
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다
const circle10 = Circle10(5);
console.log( circle10.getDiameter() ); // 10

// new 연산자와 함께 생성자 함수에 의해 생성된 객체(인스턴스)는 프로토타입에 의해 생성자 함수와 연결된다.
// 이를 이용해 new 연산자와 함께 호출되었는지 확인할 수 있다.
// 프로토타입과 instanceof 연산자에 대해서는 19장 "프로토타입"에서 살펴볼 것이다.

// 참고로 대부분의 빌트인 생성자 함수(Object, String, Number, Boolean, Function, Array, Date, RegExp, Promise 등)는 new 연산자와 함께 호출되었는지를 확인한 후 적절한 값을 반환한다.

// 예를들어, Object와 Function 생성자 함수는 new 연산자 없이 호출해도 new 연산자와 함께 호출했을 때와 동일하게 동작한다.

let obj2 = new Object();
console.log(obj2); // {}

obj2 = Object();
console.log(obj2); // {}

let f = new Function('x', 'return x ** x');
console.log(f); // ƒ anonymous(x) { return x ** x }
f = Function('x', 'return x ** x');
console.log(f); // ƒ anonymous(x) { return x ** x }

// 하지만 String, Number, Boolean 생성자 함수는 new 연산자와 함께 호출했을 때 String, Number, Boolean 객체를 생성하여 반환하지만 new 연산자 없이 호출하면 문자열, 숫자, 불리언 값을 반환한다. 
// ❕ 이를 통해 데이터 타입을 변환하기도 한다.
// -> 실제로 내가 이렇게 타입변환했었음...

const str = String(123);
console.log(str, typeof str); // 123 string

const numbe = Number('123');
console.log(numbe, typeof numbe); // 123 'number'

const boolea = Boolean('true');
console.log(boolea, typeof boolea); // true boolean


