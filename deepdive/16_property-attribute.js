// 'use strict';

// 16장 프로퍼티 어트리뷰트
// 16.1 내부 슬롯과 내부 메서드
// 내부 슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는 의사 프로퍼티pseudo property와 의사 메서드pseudo method다. 
// ECMAScript 사양에 등장하는 이중 대괄호[[]]로 감싼 이름들이 내부 슬롯과 내부 메서드다.
// 내부 스롯과 내부 메서드는 자바스크립트 엔진의 내부 로직이므로 원칙적으로 자바스크립트는 내부 슬롯과 내ㅜㅂ 메서드에 직접적으로 접근하거나 호출할 수 있는 방법을 제공하지 않는다.
// 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
// 예를 들어, 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다. [[Prototype]] 내부 슬롯의 경우, __proto__를 통해 간접적으로 접근할 수 있다.
const o = {};
//o.[[Prototype]] // SyntaxError: Unexpected token '['
console.log(o.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
// ❕ 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
// 프로퍼티의 상태란 프로퍼티의 값value, 값의 갱신 가능 여부writable, 열거 가능 여부enumerable, 재정의 가능 여부configurable를 말한다
// 프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값meta-property인 내부 슬록 [[Value]], [[Writable]], [[Enumerable]], [[Configuarble]]이다.
// 따라서 프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPeopertyDescriptor 메서드를 사용하여 간접적으로 확인할수는 있다.
const person = {
  name: 'Lee'
};
console.log( Object.getOwnPropertyDescriptor(person, 'name') ); // {value: 'Lee', writable: true, enumerable: true, configurable: true}

// Object.getOwnPropertyDescriptor 메서드를 호출할 때 첫 번째 매개변수에는 객체의 참졸르 전달하고, 두번째 매개변수에는 프로퍼티 키를 문자열로 전달한다.
// 이때 Object.getOwnPropertyDescriptor 메서드는 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터PropertyDescriptor 객체를 반환한다.
// 만약 존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한 프로퍼티 디스크립터를 요구하면 undefined가 반환된다.
console.log( Object.getOwnPropertyDescriptor(person, 'height') ); // undefined

// 프로퍼티 동적 생성
person.age = 20;

// ES8에서 도입된 Object.getOwnPropertyDescriptors 메서드는 모든 프로퍼티의 프로퍼티 어트리 뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
console.log( Object.getOwnPropertyDescriptors(person) ); // {name: {…}, age: {…}}

// 16.3 데이터 프로퍼티와 접근자 프로퍼티
// 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.
// - 데이터 프로퍼티data property
// : 키와 값으로 구성된 일반적인 프로퍼티다. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.
// - 접근자 프로퍼티accessor property
// : 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수accessor function로 구성된 프로퍼티다.

// 16.3.1 데이터 프로퍼티
// 데이터 프로퍼티는 다음과 같은 프로퍼티 어트리뷰트를 갖는다.
// 이 프로퍼티 어트리뷰트는 자바스크립트 엔진이 프로퍼티를 생성할 때 기본값으로 자동 정의된다.

// 프로퍼티 어트리뷰트      프로퍼티 디스크립터 객체의 프로퍼티     설명
// [[Value]]            value                         - 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
//                                                    - 프로퍼티 키를 통해 프로퍼티 값을 변경하면 [[Value]]에 값을 재할당한다. 
//                                                    - 이때 프로퍼티가 없으면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 [[Value]]에 값을 저장한다

// [[Writable]]         writable                      - 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.
//                                                    - [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없는 읽기 전용 프로퍼티가 된다.

// [[Enumerable]]       enumerable                    - 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다.
//                                                    - [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for...in문이나 Object.keys 메서드 등으로 열거할 수 없다.

// [[Configuarble]]     configurable                  - 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다.
//                                                    - [[Configuarble]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의 변경이 금지된다.
//                                                    - 단, [[Writable]]이 true인 경우 [[Value]]의 변경과 [[Writable]]을 false로 변경하는 것은 허용된다.

const person2 = {
  name: 'Lee'
};
// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
console.log(Object.getOwnPropertyDescriptor(person2, 'name')); // {value: 'Lee', writable: true, enumerable: true, configurable: true}
// value 프로퍼티의 값은 'Lee'이다. 이것은 프로퍼티 어트리뷰트 [[Value]]의 값이 'Lee'인 것을 의미한다.
// 그리고 writable, enumerable, configurable 프로퍼티의 값은 모두 trueㄷ. 이것은 프로퍼티 어트리뷰트 [[Writable]], [[Enumerable]], [[Configuarble]]의 값이 모두 true인 것을 의미한다.

// 이처럼 프로퍼티가 생성될 대 [[Value]]의 값은 프로퍼티 값으로 초기화되며, [[Writable]], [[Enumerable]], [[Configuarble]]의 은 true로 초기화된다.
// 이것은 프로퍼티를 동적 추가해도 마찬가지다.
const person3 = {
  name: 'Lee'
};
person3.age = 20;
console.log(Object.getOwnPropertyDescriptors(person3));
// { age: {value: 20, writable: true, enumerable: true, configurable: true}, name: {value: 'Lee', writable: true, enumerable: true, configurable: true} }


// 16.3.2 접근자 프로퍼티
// 접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터의 프로퍼티를ㄹ 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.
// 접근자 프로퍼티는 다음과 같은 프로퍼티 어트리뷰트를 갖는다.

// 프로퍼티 어트리뷰트      프로퍼티 디스크립터 객체의 프로퍼티     설명
// [[Get]]             get                            -접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수.
//                                                    -즉, 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다.
// [[Set]]             set                            -접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호추되는 접근자 함수다. 
//                                                    -즉, 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]의 값, 즉 setter 함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다.
// [[Enumerable]]      enumerable                     -데이터 프로퍼티의 [[Enumerable]]와 같다.
// [[Configurable]]    configurable                   -데이터 프로퍼티의 [[Configurable]]와 같다.

// 접근자 함수는 getter/setter 함수라고도 부른다.
// 접근자 프로퍼티는 getter와 setter 함수를 모두 정의할 수도 있고 하나만 정의할 수도 있다.

const person4 = {
  // 데이터 프로퍼티
  firstName: 'Ungmo',
  lastName: 'Lee',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    // 31.1 배열 디스트럭처링 하당 참고
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log( person4.firstName + ' ' + person4.lastName ); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person4.fullName = 'Yejin Kim';
console.log( person4 ); // {firstName: 'Yejin', lastName: 'Kim'}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log( person4.fullName ); // Yejin Kim

// firstName은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person4, 'firstName');
console.log(descriptor); // {value: 'Yejin', writable: true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person4, 'fullName');
console.log(descriptor); // {enumerable: true, configurable: true, get: ƒ, set: ƒ}

// person4 객체의 firstName과 lastName 프로퍼티는 일반적인 데이터 프로퍼티다.
// ❕ 메서드 앞에 get, set이 붙은 메서드가 있는데 이것들이 바로 getter와 setter 함수이고, getter/setter 함수의 이름 fullName이 접근자 프로퍼티다.
// 접근자 프로퍼티는 자체적으로 값(프로퍼티 어트리뷰트 [[Value]])을 가지지 않으며 다만 데이터 프로퍼티의 값을 읽거나 저장할 때 관여할 뿐이다.


// 접근자 프로퍼티와 데이터 프로퍼티를 구별하는 방법은 다음과 같다.

// 일반 객체의 __proto__는 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')); // {enumerable: false, configurable: true, get: ƒ, set: ƒ}
// 함수 객체의 prototype은 데이터 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype')); //{value: {…}, writable: true, enumerable: false, configurable: false}

// Object.getOwnPropertyDescriptor 메서드가 반환한 프로퍼티 어트리뷰트를 객체로 표현한 프로퍼티 디스크립터 객체를 유심히 살펴보자.
// 접근자 프로퍼티와 데이터 프로퍼티의 프로퍼티 디스크립터 객체의 프로퍼티가 다른것을 알 수 있다.

// 16.4 프로퍼티 정의
// 프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말한다.
// 예를 들어, 프로퍼티 값을 갱신 가능하도록 할 것인지, 프로퍼티를 열거 가능하도록 할 것인지, 프로퍼티를 재정의 가능하도록 할 것인지를 정의할 수 있다. 
// 이를 통해 객체의 프로퍼티가 어떻게 동작해야 하는지를 명확히 정의할 수 있다.

// Object.defineProperty 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다.
// 인수로는 객체의 참조와 데이터 프로퍼티 키인 문자열, 프로퍼티 디스크립터 객체를 전달한다.

const person5 = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person5, 'firstName', {
  value: 'Ungmo',
  writable: true,
  enumerable: true,
  configurable: true
});
Object.defineProperty(person5, 'lastName', {
  value: 'Lee'
});
let descriptor2 = Object.getOwnPropertyDescriptor(person5, 'firstName');
console.log('firstName', descriptor2); // firstName {value: 'Ungmo', writable: true, enumerable: true, configurable: true}

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
descriptor2 = Object.getOwnPropertyDescriptor(person5, 'lastName');
console.log('lastName', descriptor2); // lastName {value: 'Lee', writable: false, enumerable: false, configurable: false}

// [[Enumerable]]의 값이 false인 경우
// 해당 프로퍼티는 for...in문이나 Object.keys 등으로 열거할 수 없다.
// lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log( Object.keys(person5) ); // ['firstName']

// [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
// lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
// 이때 값을 변경하면 에러는 발생하지 않고 무시된다.
// person5.lastName = 'Kim'; // strict mode일 경우 에러 발생: TypeError: Cannot assign to read only property 'lastName' of object '#<Object>'

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
// Object.defineProperty(person5, 'lastName', {enumerable: true}); // TypeError: Cannot redefine property: lastName at Function.defineProperty (<anonymous>)

descriptor2 = Object.getOwnPropertyDescriptor(person5, 'lastName');
console.log('lastName', descriptor2); // lastName {value: 'Lee', writable: false, enumerable: false, configurable: false}

// 접근자 프로퍼티 정의
Object.defineProperty(person5, 'fullName', {
  // getter 함수
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set(name) {
    // [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,
  configurable: true
});

descriptor2 = Object.getOwnPropertyDescriptor(person5, 'fullName');
console.log('fullName', descriptor2); // fullName {enumerable: true, configurable: true, get: ƒ, set: ƒ}

person5.fullName = 'Heegun Lee';
console.log(person5); // {firstName: 'Heegun', lastName: 'Lee'}


// Object.defineProperty 메서드로 프로퍼티를 정의할 때 프로퍼티 디스크립터 객체의 프로퍼티를 일부 생략할 수 있다.
// 프로퍼티 디스크립터 객체에서 생략된 어트리뷰트는 다음과 같이 기본값이 적용된다.
// 프로퍼티 디스크립터 객체의 프로퍼티        대응하는 프로퍼티 어트리뷰트        생략했을 때의 기본값
// value                             [[Value]]                     undefined
// get                               [[get]]                       undefined
// set                               [[set]]                       undefined
// writable                          [[writable]]                  false
// enumerable                        [[enumerable]]                false
// configurable                      [[configurable]]              false

// Object.defineProperty 메서드는 한번에 하나의 프로퍼티만 정의할 수 있다.
// Object.defineProperties 메서드를 사용하면 여러개의 프로퍼티를 한 번에 정의할 수 있다.

const person6 = {};

Object.defineProperties(person6, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  // 접근자 프로퍼티 정의
  fullName: {
    // getter 함수
    get() {
      // return ${this.firstName} ${this.lastName};
    },
    // setter 함수
    set(name) {
      [this.firstName, this.lasName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
  }
});
person6.fullName = 'Heegun Lee';
console.log(person6); // {firstName: 'Heegun', lastName: 'Lee', lasName: 'Lee'}

// 16.5 객체 변경 방지
// 객체는 변경 가능한 값이므로 재할당 없이 직접 변경할 수 있다.
// 즉, 프로퍼티를 추가하거나 삭제할 수 있고, 프로퍼티 값을 갱신할 수 있으며, Object.defineProperty 또는 Object.defineProperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의할 수도 있다.


// ❕ 자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공한다.
// 구분           메서드                      프로퍼티 추가  프로퍼티 삭제  프로퍼티 값 읽기  프로퍼티 값 쓰기  프로퍼티 어트리뷰트 재정의
// 객체 확장 금지   Object.preventExtensions   x           o           o             o             o
// 객체 밀봉       Object.seal                x           x           o             o             x
// 객체 동겨       Object.freeze              x           x           o             x             x

// 16.5.1 객체 확장 금지
// Object.preventExtensions 메서드: 객체의 확장을 금지한다.
// Object.isExtensible 메서드: 확장이 가능한 객체인지 여부 판별
// 객체 확장 금지 = 프로퍼티 추가 금지
// 프로퍼티는 프로퍼티 동적 추가와 Object.defineProperty 메서드로 추가할 수 있으므로, 두 가지 방법 모두 금지된다.

const person7 = { name: 'Lee' };

// person7 객체는 확장이 금지된 객체가 아니다.
console.log( Object.isExtensible(person7) ); // true

// person7 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person7);

// person7 객체는 확장이 금지된 객체다.
console.log( Object.isExtensible(person7) ); // false

// 프로퍼티 추가가 금지된다
// 무시. strict mode에서는 에러 발생
// person7.age = 20; // TypeError: Cannot assign to read only property 'lastName' of object '#<Object>'
console.log(person7); // {name: 'Lee'}

// 프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person7.name;
console.log(person7); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
// Object.defineProperty(person7, 'age', { value: 20 }); // TypeError: Cannot define property age, object is not extensible at Function.defineProperty (<anonymous>)


// 16.5.2 객체 밀봉
// Object.seal 메서드: 객체를 밀봉한다.
// Object.isSealed 메서드: 밀봉된 객체인지 여부 판별하는
// 객체 밀봉seal이란 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지를 의미한다
// 즉 밀봉된 객체는 읽기와 쓰기만 가능하다.


const person8 = { name: 'Lee' };

// person8 객체는 밀봉된 객체가 아니다.
console.log( Object.isSealed(person8) ); // false

// 객체를 미봉하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
Object.seal(person8);

// peron8 객체는 밀봉된 객체다.
console.log( Object.isSealed(person8) ); // true

// 밀봉된 객체는 configurable이 fales다.
console.log( Object.getOwnPropertyDescriptors(person8) ); //{name: {value: 'Lee', writable: true, enumerable: true, configurable: false}}

// 프로퍼티 추가가 금지된다.
// person8.age = 20; // 무시. strict mode에서는 에러 발생: TypeError: Cannot assign to read only property 'lastName' of object '#<Object>'

// 프로퍼티 삭제가 금지된다.
// delete person8.name; // 무시. strict mode에서는 에러 발생: TypeError: Cannot assign to read only property 'lastName' of object '#<Object>'

// 프로퍼티 값 갱신은 가능하다.
person8.name = 'Kim';
console.log(person8); // {name: 'Kim'}

// 프로퍼티 어트리뷰트 재정의가 금지된다 
// Object.defineProperty(person8, 'name', { configurable: true }); // TypeError: Cannot redefine property: name at Function.defineProperty (<anonymous>)


// 16.5.3 객체 동결
// Object.freeze 메서드: 객체를 동결한다.
// Object.isFrozen 메서드: 동결된 객체인지 여부 판별
// 객체 동결freeze란 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지, 프로퍼티 값 갱신 금지를 의미한다.
// 즉, 동결된 객체는 읽기만 가능하다.

const person9 = { name: 'Lee' };

// person9 객체는 동결된 객체가 아니다.
console.log( Object.isFrozen(person9) ); // false

// person9 객체를 동결하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지한다.
Object.freeze(person9);

// person9 객체는 동결된 객체다.
console.log( Object.isFrozen(person9) ); // true

// 동결된 객체는 writable과 configurable이 false다.
console.log( Object.getOwnPropertyDescriptors(person9) ); // {name: {value: 'Lee', writable: false, enumerable: true, configurable: false}}

// 프로퍼티 추가가 금지된다.
// person9.age = 20; // 무시. strict mode에서는 에러 발생: TypeError: Cannot add property age, object is not extensible
console.log(person9); // {name: 'Lee'}

// 프로퍼티 삭제가 금지된다.
// delete person9.name; // 무시. strict mode에서는 에러 발생: TypeError: Cannot delete property 'name' of #<Object>
console.log(person9); // {name: 'Lee'}

// 프로퍼티 값 갱신이 금지된다.
person9.name = 'Kim'; // 무시. strict mode에서는 에러 발생: TypeError: Cannot assign to read only property 'name' of object '#<Object>'
console.log(person9); // {name: 'Lee'}

// 프로퍼티 어트리뷰트 재정의가 금지된다.
// Object.defineProperty(person9, 'name', { configurable: true }); // TypeError: Cannot redefine property: name at Function.defineProperty (<anonymous>)


// 16.5.4 불변 객체
// 지금까지 살펴본 변경 방지 메서드들은 얕은 변경 방지로, 직속 프로퍼티만 변경이 방지되고 중처 객체까지는 영향을 주지는 못한다.
// 따라서 Object.freeze 메서드로 객체를 동결하여도 중첩 객체까지 동결할 수는 없다.
const person10 = {
  name: 'Lee',
  address: { city: 'Seoul' }
};

// 얕은 객체 동결
Object.freeze(person10);

// 직속 프로퍼티만 동결한다.
console.log( Object.isFrozen(person10) ); // true
// 중첩 객체까지 동결하지 못한다.
console.log( Object.isFrozen(person10.address) ); // false

person10.address.city = 'Busan';
console.log(person10); // {name: 'Lee', address: {city: 'Busan'}}

// ❕ 객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면 
// 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야 한다.

function deepFreeze(target) {
  // 객체가 아니거나 동결된 객체는 무시하고, 동결되지 않은 객체만 동결한다.
  if( target && typeof target === 'object' && !Object.isFrozen(target) ) {
    Object.freeze(target);
    // 모든 프로퍼티를 순회하며 재귀적으로 동결한다.
    // Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다. - 9.14.2절 참고
    // forEach 메서드는 배열을 순회하며 배열의 각 요소에 대하여 콜백함수를 실행한다.- 27.9.2절 참고
    Object.keys(target).forEach(key => deepFreeze(target[key]));
  }
  return target;
}

const person11 = {
  name: 'Lee',
  address: { city: 'Seoul' }
};

// 깊은 객체 동결
deepFreeze(person11);

console.log( Object.isFrozen(person11) ); // true
// 중첩 객체까지 동결한다.
console.log( Object.isFrozen(person11.address) ); // true

person11.address = 'Busan';
// address도 동결되어서 재정의 되지 않는다.
console.log( person11 ); // {name: 'Lee', address: {city: 'Seoul'}}