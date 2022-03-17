// 10장 객체 리터럴
// 👉 10.1 객체란?
//  자바스크립트에서 원시값을 제외한 나머지 값은 모두 객체다.
// 객체 타입은 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조다.
// 원시 타입의 값은 변경불 가능한 값, 객체 타입의 값은 변경 가능한 값이다.

// 객체는 0개 이상의 프로퍼티로 구성된 집합.
// 프로퍼티는 키(key)와 값(value)로 구성된다

// 자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다.
// 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메서드(method)라 부른다

// 객체는 프로퍼티와 메서드로 구성된 집합체 
// 프로퍼티: 객체의 상태를 나타내는 값
// 메서드: 프로퍼티를 참조하고 조작할 수 잇는 동작

// 객체는 객체의 상태를 나타내는 프로퍼티, 프로퍼티를 참조하고 조작할 수 있는 동작을 모두 포함할 수 있기 때문에 
// 상태와 동작을 하나의 단위로 구조화할 수 있어 유용하다


// 👉 10.2 객체 리터럴에 의한 객체 생성
// 자바스크립트는 프로토타입 기반 객체지향 언어로서 다양한 객체 생성 방법을 지원한다
// - 객체 리터럴
// - Object 생성자 함수
// - 생성자 함수
// - Object.create 메서드
// - 클래스(ES6)

// 객체 생성 방법 중 가장 일반적이고 간단한 방법은 객체 리터럴을 사용하는 방법.
// 객체 리터럴: 객체를 생성하기 위한 표기법
// 중괄호 {}안에 0개 이상의 프로퍼티를 정의한다. 
// 변수에 할당되는 시점에 자바스크립트 엔진이 객체 리터럴을 해석해서 객체를 생성한다!

var person = {
  name: 'Lee',
  sayHello: function() {
    console.log(`Hello! My name is ${this.name}`);
  }
};
console.log(typeof person); // object
console.log(person); // {name: 'Lee', sayHello: ƒ}

// 중괄호 안에 프로퍼티를 정의하지 않으면 빈 객체가 생성된다
var empty = {};
console.log(empty); // {}

// 객체 리터럴의 중괄호는 코드 블럭을 의미하지 않는다
// 객체 리터럴은 값으로 평가되는 표현식이다
// -> 객체 리터럴의 닫는 중괄호 뒤에 세미콜론;을 붙인다

// 객체 리터럴 외의 객체 생성 방식은 모두 함수를 사용한다


// 👉 10.3 프로퍼티 
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: 'Lee',
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20
};

// 프로퍼티를 나열할 때는 쉼표(,)로 구분한다
// 일반적으로 마지막 프로퍼티에는 쉼표를 사용하지 않지만 사용해도 좋다
// 프로퍼티 키: 빈 문자열을 포함하는 모든 문자열
// 프로퍼티 값: 자바스크립트에서 사용할 수 있는 모든 값

// 프로퍼티 키는 프로퍼티 값에 접근할 수 있는 이름으로서 식별자 역할을 한다.
// 심벌 값도 프로퍼티 키로 사용할 수 있지만 일반적으로 문자열을 사용한다.
// 식별자 네이밍 규칙을 준수하는 이름 ( = 자바스크립트에서 사용 가능한 유효한 이름)의 경우 따옴표를 생략할 수 있다 
// = 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용해야 한다!
var person = {
  firstName: 'Ung-mo',
  'last-name': 'Lee'
  // last-name: 'Lee' // SyntaxError: Unexpected token '-'
};
console.log(person); // {firstName: 'Ung-mo', last-name: 'Lee'}

// ❕ 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다. 
// 이 경우에는 프로퍼티 키로 사용할 표현식을 대괄호[]로 묶어야 한다
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성-
obj[key] = 'world';
console.log(obj); // {hello: 'world'}

// ES6: 계산된 프로퍼티 이름
var obj = { [key]: 'world' };
console.log(obj); // {hello: 'world'}


// 빈 문자열을 프로퍼티 키로 사용해도 에러가 발생하지 않지만, 키로서 의미를 갖지 못하므로 권장하지 않는다
var foo = {
  '': ''
};
console.log(foo); // {"": ''}

// 프로퍼티 키에 문자열이나 심벌 값 외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 된다
var foo = {
  0: 1,
  1: 2,
  2: 3 
};
console.log(foo); // {0: 1, 1: 2, 2: 3}

// var, function과 같은 예약어를 프로퍼티 키 사용해도 에러가 발생하지 않는다.
// 하지만 비추

// 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다
// 에러가 발생하지 않으니 주의
var foo = {
  name: 'Yejin',
  name: 'Kim'
};
console.log(foo); // {name: "Kim"}

// 👉 10.4 메서드
// 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라 부른다
// 즉, 메서드는 객체에 묶여 있는 함수
var circle = {
  // 프로퍼티
  radius: 5, 
  // 메서드
  getDiameter: function() {
    // this 키워드는 객체 자신을 가리키는 참조변수
    return 2 * this.radius;
  }
};
console.log(circle.getDiameter());

// 👉 10.5 프로퍼티 접근
// ❕ 프로퍼티에 접근하는 방법 2가지
// .를 사용하는 마침표 표기법
// []를 사용하는 대괄호 표기법
// 프로퍼티 키가 식별자 네이밍 규칙을 준수하는 이름이면 두 표기법을 모두 사용할 수 있다
var person = {
  name: 'Lee'
};
console.log(person.name);
console.log(person['name']);

// ❕ 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다
var person = {
  name: 'Lee'
};
console.log(person[name]); // undefined

// 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다
// 이때 ReferenceError가 발생하지 않는다
var person = {
  name: 'Lee'
};
console.log(person.age); // undefined

// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름이면 반드시 대괄호 표기법을 사용해야한다
// 단 프로퍼티 키가 숫자로 이루어진 문자열이면 따옴표를 생략할 수 있다
var person = {
  'last-name': 'Lee',
  1: 10
};
// console.log(person.'last-name'); // SyntaxError
// console.log(person.last-name); // NaN
// console.log(person[last-name]); // ReferenceError: last is not defined
console.log(person['last-name']); // Lee

// console.log(person.1); // error
// console.log(person.'1'); // error
console.log(person[1]); // 10
console.log(person['1']); // 10

// 👉 10.6 프로퍼티 값 갱신
// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다
var person = {
  name: 'Lee'
};
person.name = 'Kim';
console.log(person); // {name: 'Kim'}

// 👉 10.7 프로퍼티 동적 생성
// 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다
var person = {
  name: 'Lee'
};
person.age = 27;
console.log(person); // {name: 'Lee', age: 27}

// 👉 10.8 프로퍼티 삭제
// delete 연산자는 객체의 프로퍼티를 삭제한다. 
// delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야한다.
// 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다
var person = {
  name: 'Kim'
};
person.age = 20;
delete person.age;
console.log(person); // {name: 'Kim'}
delete person.address;
console.log(person); // {name: 'Kim'}

// 👉 10.9 ES6에서 추가된 객체 리터럴의 확장 기능
// 📌 10.9.1 프로퍼티 축약 표현
// 프로퍼티 값은 변수에 할당된 값(식별자 표현식)일 수 있다
// ES6에서는 프로퍼티 값으로 변수를 사용하는 경우, 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략(property shorthand)할 수 있다
// 프로퍼티 키는 변수 이름으로 자동 생성된다
// ES5
var x = 1, y = 2;
var obj = {
  x: x,
  y: y
};
console.log(obj); // {x:1, y:2}

// ES6
// let x = 1, y = 2;
// const obj = {x,y};
// console.log(obj); // {x: 1, y:2}

// 📌 10.9.2 계산된 프로퍼티 이름
// 문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다
// 단, 프로퍼티 키를 사용할 표현식을 대괄호[]로 묶어야한다 
// ES5
var prefix = 'prop';
var i = 0;
var obj = {};
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다
// ES6
const prefix2 = 'prop';
let i2 = 0;
const obj2 = {
  [`${prefix2}-${++i2}`]: i2,
  [`${prefix2}-${++i2}`]: i2,
  [`${prefix2}-${++i2}`]: i2
};
console.log(obj2); // {prop-1: 1, prop-2: 2, prop-3: 3}

// 📌 10.9.3 메서드 축약 표현
// ES5
var obj = {
  name: 'Lee',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};
obj.sayHi(); // Hi! Lee

// ES6에서는 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다
// ES6
const obj3 = {
  name: 'Lee',
  sayHi() {
    console.log('Hi! ' + this.name);
  }
}
obj3.sayHi(); // Hi! Lee

// ES6의 메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당한함수와 다르게 동작한다



