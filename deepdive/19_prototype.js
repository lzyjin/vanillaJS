// 19장 프로토타입
// 자바스크립트는 명령형imperative, 함수형functional, 프로토타입 기반prototype-based, 객체지향 프로그래밍oop을 지원하는 멀티 패러다임 프로그래밍 언어다.

// - 클래스class
// ES6에서 클래스가 도입되었다. 하지만 클래스가 기존의 프로토타입 기반 객체지향 모델을 폐지하고 새로운 객체지향 모델을 제공하는 것은 아니다.
// 사실 클래스도 함수이며, 기존 프로토타입 기반 패턴의 문법적 설탕syntax sugar이라고 볼 수 있다.
// 클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하지만, 정확히 동일하게 동작하지는 않는다.
// 클래스는 생성자 함수보다 엄격하며 클래스는 생성자 함수가 제공하지 않는 기능도 제공한다.
// 따라서 클래스를 새로운 객체 생성 메커니즘으로 보는 것이 좀 더 합당하다.

// 자바스크립트는 객체 기반의 프로그래밍 언어이며, 자바스크립트를 이루고 잇는 거의 "모든 것"이 객체다.
// 원시 타입의 값을 제외한 나머지 값들이 모두 객체다.

// 👉 19.1 객체지향 프로그래밍
// 객체지향 프로그래밍은 전통적인 명령형 프로그래밍imperative-programming(프로그램을 명령어 또는 함수의 목록으로 보는)의 절차지향적 관점에서 벗어나 객체object(여러 개의 독립적 단위)의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 말한다.

// 객체지향 프로그래밍은 실세계의 실체를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작한다.
// 실체는 특징이나 성질을 나타내는 속성attribute/property을 가지고 있고, 이를 통해 실체를 인식하거나 구별할 수 있다.
// ex) 사람- 이름,주소,성별,나이,신장,체중,학력,성격,직업... 다양한 속성을 가짐. 속성을 구체적으로 표현하면 특정한 사람을 다른 사람과 구별하여 인식할 수 있다.

// 사람에게는 다양한 속성이 있으나 우리가 구현하려는 프로그램에서는 사람의 "이름"과 "주소"라는 속성에만 관심이 있다고 가정하자.
// 이처럼 다양한 속성 중에서 프로그램에 필요한 속성만 간추려 내어 표현하는 것을 추상화abstaction이라 한다.

// 이름과 주소라는 속성을 갖는 person 이라는 객체를 자바스크립트로 표현하면?
// 이름과 주소 속성을 갖는 객체
const person = {
  name: 'Lee',
  address: 'Seoul'
};
console.log(person); // { address: "Seoul", name: "Lee"}

// 프로그래머는 이름과 주소 속성으로 표현된 객체object인 person을 다른 객체와 구별하여 인식할 수 있다.
// ❕이처럼 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라고 하며,
// 객체지향 프로그래밍은 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다.

// 원Circle이라는 개념을 객체로 만들어보자.
// 원에는 반지름이라는 속성이 있다. 반지름을 가지고 원의 지름, 둘레, 넓이를 구할 수 있다.
// 이때 반지름은 원의 상태를 나타내는 데이터이며, 원의 지름, 둘레, 넓이를 구하는 것은 동작이다.

const circle = {
  radius: 5, // 반지름

  // 원의 지름: 2r
  getDiameter() {
    return 2 * this.radius;
  },
  // 원의 둘레: 2πr
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
  // 원의 넓이: πrr
  getArea() {
    return Math.PI * this.radius **2;
  }
};
console.log(circle); // {radius: 5, getDiameter: ƒ, getPerimeter: ƒ, getArea: ƒ}
console.log(circle.getDiameter()); // 10
console.log(circle.getPerimeter()); // 31.41592653589793
console.log(circle.getArea()); // 78.53981633974483

// 이처럼 객체지향 프로그래밍은 객체의 상태state를 나타내는 데이터와 상태 데이터르 조작할 수 있는 동작behvior을 하나의 논리적인 단위로 묶어 생각한다.
// 따라서 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조라고 할 수 있다.
// 이때 객체의 상태 데이터를 프로퍼티proerty, 동작을 메서드method라 부른다.

// 각 객체는 고유의 기능을 갖는 독립적인 부품으로 볼 수 있지만, 자신의 고유한 기능을 수행하면서 다른 객체와 관계성relationship을 가질 수 있다.
// 다른 객체와 메시지를 주고받거나 데이터를 처리할 수도 있다.
// 또는 다른 객체의 상태 데이터나 동작을 상속받아 사용하기도 한다.

// 👉 19.2 상속과 프로토타입
// 상속은 객체지향 프로그래밍의 핵심 개념을, 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.
// 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다.
// 중복을 제거하는 방법은 기존의 코드를 적극적으로 재사용하는 것이다.
// 코드 재사용은 개발 비요을 현저히 줄일 수 있는 잠재력이 있으므로 매우 중요하다.

// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function() {
    return Math.PI * this.radius ** 2;
  };
}
// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
console.log( circle1.getArea === circle2.getArea ); // false

console.log( circle1.getArea ); // ƒ () { return Math.PI * this.radius ** 2; }
console.log( circle1.getArea() ); // 3.141592653589793
console.log( circle2.getArea() ); // 12.566370614359172

// 17.2절 생성자 함수에서 살펴본 바와 같이 생성자 함수는 동일한 프로퍼티(메서드 포함) 구조를 갖는 객체를 여러 개 생성할 때 유용하다. 
// 하지만 위 예제의 생성자 함수는 문제가 있다.

// Circle 생성자가 생성하는 모든 객체(인스턴스)는 radius 프로퍼티와 getAera 메서드를 갖는다.
// radius 프로퍼티 값은 일반적으로 인스턴스마다 다르다.
// 하지만 getArea 메서드는 모든 인스턴스가 동일한 내용의 메서드를 사용하므로 단 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
// 그런데 Circle 생성자 함수는 인스턴스를 생성할 때마다 getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.

// 이처럼 동일한 생성자 함수에 의해 생성된 모든 인스터스가 동일한 메서드를 중복 소유하는 것은 메모리를 불필요하게 낭비한다.
// 또한 인스턴스를 생성할 때마다 메서드를 생성하므로 퍼포먼스에도 악영향을 준다.
// 만약 10개의 인스턴스를 생성하면 내용이 동일한 메서드도 10개 생성된다.

// 상속을 통해 불필요한 중복을 제거해보자.
// 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.

// 생성자 함수
function Circle2(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle2.prototype.getArea = function() {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle3 = new Circle2(1);
const circle4 = new Circle2(2);

// Circle2 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
//❕ 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log( circle3.getArea === circle4.getArea ); // true

console.log( circle3.getArea() ); // 3.141592653589793
console.log( circle4.getArea() ); // 12.566370614359172

// Circle 생성자 함수가 생성한 모든 인스턴스는 자신의 프로토타입, 즉 상위(부모) 객체 역할을 하는 Circle.prototype의 모든 프로퍼티와 메서드를 상속받는다.
// getArea 메서드는 단 하나만 생성되어 프로토타입인 Circle.prototype의 메서드로 할당되어 있다.
// 즉, 자신의 상태를 나타내는 radius 프로퍼티만 개별적으로 소유하고 내용이 동일한 메서드는 상속을 통해 공유하여 사용하는 것이다.

// 상속은 코드의 재사용이란 관점에서 매우 유용하다.
// 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메서드를 프로토타입에 미리 구현해 두면 생성자 함수가 생성할 모든 인스턴스는 별도의 구현없이
// 상위(부모) 객체인 프로토타입의 자산을 공유하여 사용할 수 있다.

// 👉 19.3 프로토타입 객체
// 프로토타입 객체란 객체지향 프로그래밍의 근간을 이루는 객체 간 상속을 구현하기 위해 사용된다.
// 프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티(메서드 포함)를 제공한다. 
// ❕ 프로토타입을 상속받은 하위(자식) 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용할 수 있다.

// 모든 객체는 [[Prototype]]이라는 내부 슬롯을 가지며, 이 내부 슬롯의 값은 프로토타입의 참조다.
// [[Prototype]]에 저장되는 프로토타입은 객체 생성 방식에 의해 결정된다. 
// 즉, 객체가 생성될 때 객체 생성 방식에 따라 프로토타입이 결정되고 [[Prototype]]에 저장된다.

// 예를들어, 객체 리터럴에 의해 생성된 객체의 프로토타입은 Object.prototype이고 
// 생성자 함수에 의해 생성된 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체다.

// ❕ 모든 객체는 하나의 프로토타입을 갖는다.
// 그리고 모든 프로토타입은 생성자 함수와 연결되어 있다.
// 즉, 객체와 프로토타입과 생성자 함수는 다음 그림과 같이 서로 연결되어 있다.

// ❕ 객체는 [[Prototype]] 내부 슬롯에는 직접 접근할 수 없지만, __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 자신의 [[Prototype]] 내부 슬롯이 가리키는 프로퍼티에 간접적으로 접근할 수 있다.
// 프로토타입은 자신의 constructor 프로퍼티를 통해 생성자 함수에 접근할 수 있고,
// 생성자 함수는 자신의 prototype 프로퍼티를 통해 프로토타입에 접근할 수 있다.

// 📌 19.3.1 __proto__ 접근자 프로퍼티
// ❕ 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.
// 다음 예제를 크롬 브라우저의 콘솔에서 출력해보자
const person2 = {name: 'Kim'};
console.log(person2); 

// 빨간 박스로 표시한 것이 person2 객체의 프로토타입인 Object.prototype이다.
// 이는 __proto__ 접근자 프로퍼티를 통해 person2 객체의 [[Prototype]] 내부 슬롯이 가리키는 객체인 Object.prototype에 접근한 결과를 크롬 브라우저가 콘솔에 표시한 것이다.
// 이처럼 모든 객체는 __proto__ 접근자 프로퍼티를 통해 프로토타입을 가리키는 [[Prototype]] 내부 슬롯에 접근할 수 있다.

// - __proto__는 접근자 프로퍼티다.
// 16.1 절 "내부 슬롯과 내부 메서드"에서 살펴보았듯이 내부 슬롯은 프로퍼티가 아니다.
// 따라서 자바스크립트는 원칙적으로 내부 슬롯과 내부 메서드에 직접적으로 접근하거나 호출할 수 있는 방법을 제공하지 않는다.
// 다느 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
// __ proto__ 접근자 프로퍼티를 통해 간접적으로 [[Prototype]] 내부 슬롯의 값, 즉 프로토타입에 접근할 수 있다.

// 접근자 프로퍼팉는 자체적으로 값([[Value]]) 프로퍼티(어트리뷰트)르 갖지 않고, 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수(accessor function), 즉 [[Get]], [[Set]] 프로퍼티 어트리뷰트로 구성된 프로퍼티다.

console.log( Object.getOwnPropertyDescriptor(Object.prototype, '__proto__') ); // { configurable: true,enumerable: false, get: ƒ __proto__(), set: ƒ __proto__() }

// Object.prototype의 접근자 프로퍼티인 __proto__는 getter/setter 함수라고 부르는 접근자 함수를 통해 [[Prototype]] 내부 슬롯의 값, 즉 프로토타입을 취득하거나 할당한다.
// __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하면 내부적으로 __proto__ 접근자 프로퍼티의 getter 함수인 [[Get]]이 호출된다.
// __proto__ 접근자 프로퍼티를 통해 새로운 프로토타입을 할당하면 __proto__ 접근자 프로퍼티의 getter 함수인 [[Set]]이 호출된다.

const obj = {};
const parent = {x: 1};
console.log(obj); // {}
// getter 함수인 get__proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;
// setter 함수인 set__proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x); // 1

// - __proto__ 접근자 프로퍼티는 상속을 통해 사용된다.
// __proto__ 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 Object.prototype의 프로퍼티다.
// 모든 객체는 상속을 통해 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다.

const apple = { color: 'red' };
// apple 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log( apple.hasOwnProperty('__proto__') ); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototyp의 접근자 프로퍼티다. 
console.log( Object.getOwnPropertyDescriptor(Object.prototype, '__proto__') ); // { configurable: true,enumerable: false, get: ƒ __proto__(), set: ƒ __proto__() }

// ❕ 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true
console.log(apple.__proto__ === Object.prototype); // true

// - Object.prototype
// 모든 객체는 프로토타입의 계층 구조인 프로토타입 체인에 묶여 있다.
// 자바스크립트 엔진은 객체의 프로퍼티(메서드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 __proto__ 접근자 프로퍼티가 가리키는 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다.
// 프로토타입 체인의 종점, 즉 프로토타입 체인의 최상위 객체는 Object.prototype이며, 이 객체의 프로퍼티와 메서드는 모든 객체에 상속된다.

// - __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
// 상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서다.

const parentObj = {};
const childObj = {};

// child의 프로토타입을 parentObj로 설정
childObj.__proto__ = parentObj;
// parent의 프로토타입을 childObj로 설정
// parentObj.__proto__ = childObj; // TypeError: Cyclic __proto__ value at Object.set __proto__ [as __proto__] (<anonymous>)

// 위 예제에서는 parentObj 객체를 childObj 객체의 프로토타입으로 설정한 후, childObj 객체를 parentObj 객체의 프로토타입으로 설정했다.
// 이러한 코드가 에러 없이 정상적으로 처리되면 서로가 자신의 프로토타입이 되는 비정상적인 프로토타입 체인이 만들어지기 때문에 __proto__ 접근자 프로퍼ㅌ는 에러를 발생시킨다.

// 프로토타입 체인은 단방향 링크드 리스트로 구현되어야 한다.
// 즉, 프로퍼티 검색 방햐이 한쪽 방향으로만 흘러가야한다.
// 하지만 위 그림과 같이 서로가 자신의 프로토타입이 되는 비정상적인 프로토타입 체인, 다시 말해 순환 참조circular reference하는 프로토타입 체인이 만들어지면
// 프로토타입 체인 종점이 존재하지 않기 때문에 프로토타입 체인에서 프로퍼티를 검색할 때 무한 루프에 빠진다.
// ❕ 따라서 아무런 체크 없이 무조건적으로 프로토타입을 교체할 수 없도록 __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하고 교체하도록 구현되어 있다.

// - __proto__ 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다.
// 모든 객체가 __proto__ 접근자 프로퍼티를 사용할 수 있는 것은 아니기 때문이다.
// 직접 상속을 통해 다음과 같이 Object.prototype을 상속받지 않는 객체를 생성할 수도 있기 때문에 __proto__ 접근자 프로퍼티를 사용할 수 없는 경우가 있다.

// objj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다.
const objj = Object.create(null);

// objj는 Object.__proto__를 상속받을 수 없다.
console.log( objj.__proto__ ); // undefined

// 따라서 __proto__보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다
console.log( Object.getPrototypeOf(objj) ); // null

// 따라서 __proto__ 접근자 프로퍼티 대신 프로토타입의 참조를 취득하고 싶은 경우에는 Object.getPrototypeOf 메서드를 사용하고,
// 프로토타입을 교체하고 싶은 경우에는 Object.setPrototypeOf 메서드를 사용할 것을 권장한다.

const objjj = {};
const parenttt = {x: 1};

// objjj 객체의 프로토타입을 취득
console.log(Object.getPrototypeOf(objjj)); // constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// objjj 객체의 프로토타입을 교체
Object.setPrototypeOf(objjj, parenttt);

console.log(objjj.x); // 1

// Object.getPrototypeOf 메서드와 get Object.prototype.__proto__, 
// Object.setPrototypeOf 메서드와 set Object.prototype.__proto__는 처리 내용이 정확히 일치한다.
// Object.getPrototypeOf: ES5에서 도입, Object.setPrototypeOf: ES6에 도입

// 📌 19.3.2 함수 객체의 prototype 프로퍼티
// 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.

// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log( (function() {}).hasOwnProperty('prototype') ); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.

console.log( ({}).hasOwnProperty('prototype') ); // false

// prototype 프로퍼티는 생성자 함수가 생성할 객체(인스턴스)의 프로토타입을 가리킨다.
// 따라서 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는 prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성되지 않는다.

// 화살표 함수는 non-constructor다
const Banana = color => {
  this.color = color;
};
// non-constructor는 prototype 프로퍼티를 소유하지 않는다 
console.log( Banana.hasOwnProperty('prototype') ); // false

// non-constructor는 프로토타입을 생성하지 않는다
console.log( Banana.prototype ); // undefined

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor다.
const melon = {
  foo() {}
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다
console.log( melon.foo.hasOwnProperty('prototype') ); // false

// non-constructor는 프로토타입을 생성하지 않는다
console.log( melon.foo.prototype ); // undefined

// 생성자 함수로 호출하기 위해 정의하지 않은 일반 함수(함수 선언문, 함수 표현식)도 prototype 프로퍼티를 소유하지만, 객체를 생성하지 않는 일반 함수의 prototype 프로퍼티는 아무 의미가 없다.

// ❕ 모든 객체가 가지고 있는(엄밀히 말하면 Object.prototype으로부터 상속받은) __proto__ 접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.
// 하지만 이들 프로퍼티를 사용하는 주체가 다르다.

// ❕ 구분                     소유          값             사용 주체
// __proto__ 접근자 프로퍼티   모든 객체      프로토타입의 참조  모든 객체    객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용
// prototype 프로퍼티        constructor  프로토타입의 참조  생성자 함수   생성자 함수가 자신이 생성할 객체(인스턴스)의 프로토타입을 할당하기 위해 사용

// 예를 들어 생성자 함수로 객체를 생성한 후 __proto__ 접근자 프로퍼티와 prototype 프로퍼티로 프로토타입 객체에 접근해보자

// 생성자 함수
function Cherry(color) {
  this.color = color;
}
const cherry1 = new Cherry('pink');
// 결국 cherry1.__proto__와 Cheery.prototype은 동일한 프로토타입을 가리킨다.
console.log(cherry1.__proto__ === Cherry.prototype); // true


// 📌 19.3.3 프로토타입의 constructor 프로퍼티와 생성자 함수
// 모든 프로토타입은 constructor 프로퍼티를 갖는다.
// 이 constructor 프로퍼티는 prototype 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다.
// 이 연결은 생성자 함수가 생성될 때, 즉 함수 객체가 생성될 때 이뤄진다

// 생성자 함수
function Kid(name) {
  this.name = name;
}
const me = new Kid('Kim');
// me 객체의 생성자 함수는 Kid다
console.log( me.constructor === Kid); // true

// 위 예제에서 Kid 생성자 함수는 me 객체를 생성한다.
// 이때 me 객체는 프로토타입의 constructor 프로퍼티를 통해 생성자 함수와 연결된다.
// ❕ me 객체에는 constructor 프로퍼티가 없지만 me 객체의 프로토타입인 Kid.prototype에는 constructor 프로퍼티가 있다.
// ❕ 따라서 me 객체는 프로토타입인 Kid.prototype의 constructor 프로퍼티를 상속받아 사용할 수 있다.

// 👉 19.4 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입
// 생성자 함수에 의해 생성된 인스턴스는 프로토타입의 constructor 프로퍼티에 의해 생성자 함수와 연결된다.
// 이때 constructor 프로퍼티가 가리키는 생성자 함수는 인스턴스를 생성한 생성자 함수다.

// obj2 객체를 생성한 생성자 함수는 Object다.
const obj2 = new Object();
console.log( obj2.constructor === Object ); // true

// add 함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function('a', 'b', 'return a + b');
console.log( add.constructor === Function ); // true

// 생성자 함수
function Dog(name) {
  this.name = name;
}

// badugi 객체를 생성한 생성자 함수는 Dog이다
const badugi = new Dog('badugi');
console.log( badugi.constructor === Dog ); // true

// 하지만 리터럴 표기법에 의한 생성 방식과 같이
// 명시적으로 new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하지 않는 객체 생성 방식도 있다.

// 객체 리터럴
const obj3 = {};

// 함수 리터럴
const add2 = function (a, b) { return a + b };

// 배열 리터럴
const arr = [1, 2, 3];

// 정규 표현식 리터럴
const regexp = /is/ig;

// 리터럴 표기법에 의해 생성된 객체도 물론 프로토타입이 존재한다.
// 하지만 리터럴 표기법에 의해 생성된 객체의 경우 프로토타입의 constructor 프로퍼티가 가리키는 생성자 함수가 반드시
// 객체를 생성한 생성자 함수라고 단정할 수는 없다.

// obj4 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
const obj4 = {};
// 하지만 obj4 객체의 생성자 함수는 Object 생성자 함수다
console.log( obj4.constructor === Object ); // true

// 위 예제의 obj4 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴에 의해 생성된 객체다.
// 하지만 ob4 객체는 Object 생성자 함수와 constructor 프로퍼티로 연결되어 있다.

// 2. Object 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다
let obj5 = new Object();
console.log( obj5 ); // {}

// 1. new.target이 undefined나 Object가 아닌 경우
// 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인이 생성된다
class Foo extends Object {}
new Foo();

// 3. 인수가 전달된 경우에는 인수를 객체로 변환한다.
// Number 객체 생성
obj5 = new Object(123);
console.log(obj5); // Number {123}

// String 객체 생성
obj5 = new Object('123');
console.log(obj5); // String {'123'}

// 객체 리터럴이 평가될 때는 다음과 같이 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성하고 프로퍼티를 추가하도록 정의되어 있다.

// Object 생성자 함수 호출과 객체 리터럴의 평가는 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성하는 점에서 동일하나 new.target의 확인이나 프로퍼티를 추가하는 처리 등 세부 내용은 다르다.
// ❕ 따라서 객체 리터럴에 의해 생성된 객체는 Object 생성자 함수가 생성한 객체가 아니다.

// 함수 객체의 경우 차이가 더 명확하다.
// 12.4.4절 Function 생성자 함수에서 살펴보았듯이 Function 생성자 함수를 호출하여 생성한 함수는 렉시컬 스코프를 만들지 않고 전역 함수인 것처럼 스코프를 생성하며 클로저도 만들지 않는다.
// 따라서 함수 선언문과 함수 표현식을 평가하여 함수 객체를 생성한것은 Function 생성자 함수가 아니다.
// 하지만 constructor 프로퍼티를 통해 확인해보면 foo 함수의 생성자 함수는 Function 생성자 함수다.

// foo 함수는 Function 생성자 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성했다
function foo2() {}

// 하지만 constructor 프로퍼티를 통해 확인해보면 함수 foo의 생성자 함수는 Function 생성자 함수다.
console.log( foo2.constructor === Function ); // true

// 리터럴 표기법에 의해 생성된 객체도 상속을 위해 프로토타입이 필요하다.
// 따라서 리터럴 표기법에 의해 생성된 객체도 가상적인 생성자 함수를 갖는다.
// 프로토타입은 생성자 함수와 더불어 생성되며 prototype, constructor 프로퍼티에 의해 연결되어 있기 때문이다.
// ❕ 다시말해 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍pair로 존재한다.

// 리터럴 표기법(객체 리터럴, 함수 리터럴, 배열 리터럴, 정규 표현식 리터럴 등)에 의해 생성된 객체는 생성자 함수에 의해 생성된 객체는 아니다.
// 생성 과정에 미묘한 차이는 있지만 결국 객체로서 동일한 특성을 갖는다.

// 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입
// 리터럴 표기법      생성자 함수       프로토타입
// ---------------------------------------------
// 객체 리터럴       Object          Object.prototype
// 함수 리터럴       Function        Function.prototype
// 배열 리터럴       Array           Array.prototype
// 정규 표현식 리터럴  RegExp          RegExp.prototype


// 👉 19.5 프로토타입의 생성 시점
// 리터럴 표기법에 의해 생성된 객체도 생성자 함수와 연결되는 것을 살펴보았다.
// ❕ 객체는 리터럴 표기법 또는 생성자 함수에 의해 생성되므로 결국 모든 객체는 생성자 함수와 연결되어 있다.

// 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다.
// 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍로 존재하기 때문이다.

// 생성자 함수는 
// 1. 사용자가 직접 정의한 사용자 정의 생성자 함수,
// 2. 자바스크립트가 기본 제공하는 빌트인 생성자 함수로 구분할 수 있다.

// 📌 19.5.1 사용자 정의 생성자 함수와 프로토타입 생성 시점
// [[Construct]]를 갖는 함수 객체, 즉 화살표 함수나 ES6의 메서드 축약 표현으로 정의하지 않고 일반 함수(함수 선언문, 함수 표현식)으로 정의한 함수 객체는 new 연산자와 함께 생성자 함수로서 호출할 수 있다.

// ❕생성자 함수로서 호출할 수 있는 함수, 즉 constructor는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.

// 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타임도 더불어 생성된다.
console.log( Lemon.prototype ); // {constructor: ƒ}
// 생성자 함수
function Lemon(color) {
  this.color = color;
}

// 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor는 프로토타입이 생성되지 않는다.
// 화살표 함수는 non-constructor다.
const Lime = (color) => {
  this.color = color;
};
console.log( Lime.prototype ); // undefined

// 함수 선언문은 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행된다.
// 따라서 함수 선언문으로 정의된 Lemon 생성자 함수는 어떤 코드보다 먼저 평가되어 함수 객체가 된다.
// 이때 프로토타입도 더불어 생성된다. ( 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다)
// 생성된 프로토타입은 Lemon 생성자 함수의 prototype 프로퍼티에 바인딩된다.

// 생성된 프로토타입은 오직 constructor 프로퍼티만을 갖는 객체다. 
// 프로토타입도 객체이고 모든 객체는 프로토타입을 가지므로 프로토타입도 자신의 프로토타입을 갖는다.
// 생성된 프로토타입의 프로토타입은 Object.prototype이다.

// ❕ 이처럼 빌트인 생성자 함수가 아닌 사용자 정의 생성자 함수는 자신이 평가되어 함수 객체로 생성되는 시점에 프로토타입도 더불어 생성되며, 생성된 프로토타입의 프로토타입은 언제나 Object.prototype이다.

// 📌 19.5.2 빌트인 생성자 함수와 프로토타입 생성 시점
// Object, String, Number, Boolean, Function, Array, Date, RegExp, Promise 등과 같은 빌트인 생성자 함수도 일반 함수와 마찬가지로 빌트인 생성자 함수가 생성되는 시점에 프로토타입이 생성된다.
// 모든 빌트인 생성자 함수는 전역 객체가 생성되는 시점에 생성된다.
// 생성된 프로토타입은 빌트인 생성자 함수의 prototype 프로퍼티에 바인딩된다.

// -전역 객체
// 전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 생성되는 특수한 객체다.
// 전역 객체는 클라이언트 사이드 환경(브라우저)에서는 window, 서버 사이드 환경(Node.js)에서는 global 객체를 의미한다.
// 전역 객체는 표준 빌트인 객체(Object, String, Number, ...)들과 
// 환경에 따른 호스트 객체(클라이언트 Web API 또는 Node.js의 호스트 API), 
// 그리고 var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티로 갖는다.

// 이처럼 객체가 생성되기 이전에 생성자 함수와 프로토타입은 이미 객체화되어 존재한다.
// 이후 생성자 함수 또는 리터럴 표기법으로 객체를 생성하면 프로토타입은 생성된 객체의 [[Prototype]] 내부 슬롯에 할당된다.
// 이로써 생성된 객체는 프로토타입을 상속받는다.


// 👉 19.6 객체 생성 방식과 프로토타입의 결정

// 객체는 다음과 같이 다양한 생성 방법이 있다.
// - 객체 리터럴
// - Object 생성자 함수
// - 생성자 함수
// - Object.create 메서드
// - 클래스(ES6)

// 다양한 방식으로 생성된 모든 객체는 각 방식마다 세부적인 객체 생성 방식의 차이는 있으나 추상 연산 OrdinaryObjectCreate에 의해 생성된다는 공통점이 있다.
// 추상 연산 OrdinaryObjectCreate는 필수적으로 자신이 생성할 객체의 프로토타입을 인수로 전달받는다.
// 그리고 자신이 생성할 객체에 추가할 프로퍼티 목록을 옵션으로 전달할 수 있다.
// 추상 연산 OrdinaryObjectCreate는 빈 객체를 생성한 후, 객체에 추가할 프로퍼티 목록이 인수로 전달된 경우 프로퍼티를 객체에 추가한다.
// 그리고 인수로 전달받은 프로토타입을 자신이 생성한 객체의 [[Prototype]] 내부 슬롯에 할당한 다음, 생성한 객체를 반환한다.
// 즉, 프로토타입은 추상 연산 OrdinaryObjectCreate에 전달되는 인수에 의해 결정된다.
// 이 인수는 객체가 생성되는 시점에 객체 생성 방식에 의해 결정된다.

// 📌 19.6.1 객체 리터럴에 의해 생성된 객체의 프로토타입
// 자바스크립트 엔진은 객체 리터럴을 평가하여 객체를 생성할 때 추상 연산 OrdinaryObjectCreate를 호출한다.
// 이때 추상 연산 OrdinaryObjectCreate에 전달되는 프로토타입은 Object.prototype이다.
// ❕ 즉, 객체 리터럴에 의해 생성되는 객체의 프로토타입은 Object.prototype이다.

const obj6 = { x: 1 };
// 위 객체 리터럴이 평가되면 추상 연산 OrdinaryObjectCreate에 의해 다음과 같이 Object 생성자 함수와 Object.prototype과 생성된 객체 사이에 연결이 만들어진다.

// ❕ 이처럼 객체 리터럴에 의해 생성된 obj6 객체는 Object.prototype을 프로토타입으로 갖게 되며, 이로써 Object.prototype을 상속받는다.
// obj6 객체는 constructor 프로퍼티와 hasOwnProperty 메서드 등을 소유하지 않지만 자신의 프로토타입인 Object.prototype의 constructor 프로퍼티와 hasOwnProperty 메서드를 자신의 자산인 것처럼 자유롭게 사용할 수 있다.
// 이는 obj6 객체가 자신의 프로토타입인 Object.prototype 객체를 상속받았기 때문이다.

console.log( obj6.constructor === Object ); // true
console.log( obj6.hasOwnProperty('x') ); // true

// 📌 19.6.2 Object 생성자 함수에 의해 생성된 객체의 프로토타입
// Object 생성자 함수를 인수 없이 호출하면 빈 객체가 생성된다.
// Object 생성자 함수를 호출하면 객체 리터럴과 마찬가지로 추상 연산 OrdinaryObjectCreate가 호출된다.
// 이때 추상 연산 OrdinaryObjectCreate에 전달되는 프로토타입은 Object.prototype이다.
// 즉, Object 생성자 함수에 의해 생성되는 객체의 프로토타입은 Object.prototype이다.

const obj7 = new Object();
obj7.x = 1;
// Object 생성자 함수에 의해 생성된 obj7 객체는 Object.prototype을 상속받는다.
console.log( obj7.constructor === Object ); // true
console.log( obj7.hasOwnProperty('x') ); // true

// 객체 리터럴과 Object 생성자 함수에 의한 객체 생성 방식의 차이는 프로퍼티를 추가하는 방식에 있다.
// 객체 리터럴 방식은 객체 리터럴 내부에 프로퍼티를 추가하지만, Object 생성자 함수 방식은 일단 빈 객체를 생성한 이후 프로퍼티를 추가해야한다.

// 📌 19.6.3 생성자 함수에 의해 생성된 객체의 프로토타입
// new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하면 다른 객체 생성 방식과 마찬가지로 추상 연산 OrdinaryObjectCreate가 호출된다.
// 이때 추상 연산 OrdinaryObjectCreate에 전달되는 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체다.
// 즉, 생성자 함수에 의해 생성되는 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체다.

function Women(name) {
  this.name = name;
}
const yj = new Women('Kim');

// 사용자 정의 생성자 함수 Women과 더불어 생성된 프로토타입 Women.prototype의 프로퍼티는 constructor 뿐이다.

// 프로토타입 Women.prototype에 프로퍼티를 추가하여 하위(자식) 객체가 상속받을 수 있도록 구현해보자.
// 프로토타입은 객체다.
// 따라서 일반 객체와 같이 프로토타입에도 프로퍼티를 추가/삭제할 수 있다.
// 그리고 이렇게 추가/삭제된 프로퍼티는 프로토타입 체인에 즉각 반영된다.

// 프로토타입 메서드
Women.prototype.sayHello = function () {
  console.log( `Hi! My name is ${this.name}` );
};

const lee = new Women('Lee');

yj.sayHello(); // Hi! My name is Kim
lee.sayHello(); // Hi! My name is Lee

// ❕ Women 생성자 함수를 통해 생성된 모든 객체는 프로토타입에 추가된 sayHello 메서드를 상속받아 자신의 메서드처럼 사용할 수 있다.

// 👉 19.7 프로토타입 체인
{
  function Person(name) {
    this.name = name;
  }
  
  // 프로토타입 메서드
  Person.prototype.sayHello = function() {
    console.log( `Hi! My name is ${this.name}` );
  };

  const me = new Person('Lee');

  me.sayHello(); // Hi! My name is Lee
  // hasOwnProperty는 Object.prototype의 메서드다
  console.log( me.hasOwnProperty('name') ); // true

  // ❕ Person 생성자 함수에 의해 생성된 me 객체는 Object.prototype의 메서드인 hasOwnProperty를 호출할 수 있다.
  // 이것은 me 객체가 Person.prototype뿐만 아니라 Object.prototype도 상속받았다는 것을 의미한다.
  // me 객체의 프로토타입은 Person.prototype이다.
  console.log( Object.getPrototypeOf(me) === Person.prototype ); // true

  // Person.prototype의 프로토타입은 Object.prototype이다.
  // 프로토타입의 프로토타입은 언제나 Object.prototype이다.
  console.log( Object.getPrototypeOf(Person.prototype) === Object.prototype ); // true
}

