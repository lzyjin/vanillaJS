// 26장 ES6 함수의 추가 기능

// 👉 함수의 구분
// ES6 이전까지 자바스크립트의 함수는 별다른 구분 없이 다양한 목적으로 사용되었다.
// 일반적인 함수로서 호출할 수도 있고, new 연산자와 함께 호출하여 인스턴스를 생성할 수 있는 생성자 함수로서 호출할 수도 있고, 객체에 바인딩되어 메서드로서 호출할 수도 있다.
// 이는 실수를 유발할 수 있으며 성능면에서도 손해다
{
    var foo = function () {
        return 1;
    };

    // 일반적인 함수로서 호출
    foo();

    // 생성자 함수로서 호출
    new foo();

    // 메서드로서 호출
    var obj = {
        foo: foo,
    };
    obj.foo();
}

// ES6 이전의 모든 함수는 일반 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수도 있다.
// 다시 말해 ES6 이전의 모든 함수는 callable이면서 constructor다.
{
    var foo = function () {};

    foo(); // undefined
    new foo(); // foo {}
}

// callable: 호출할 수 있는 함수 객체
// constructor: 인스턴스를 생성할 수 있는 함수 객체
// non-constructor: 인스턴스를 생성할 수 없는 함수 객체

// 주의할 것은 ES6 이전에 일반적으로 메서드라고 부르던 객체에 바인딩된 함수도 callable이며 constructor라는 것이다.
// 따라서 객체에 바인딩된 함수도 일반 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수도 있다.
{
    // 프로퍼티 f에 바인딩된 함수는 callable이며 constructor다.
    var obj = {
        x: 10,
        f: function () {
            return this.x;
        }
    };

    // 프로퍼티 f에 바인딩된 함수를 메서드로서 호출
    console.log(obj.f()); // 10

    // 프로퍼티 f에 바인딩된 함수를 일반 함수로서 호출
    var bar = obj.f;
    console.log(bar()); // undefined

    // 프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
    console.log(new obj.f()); // f {}
}

// 위와 같이 객체에 바인딩된 함수를 생성자 함수로 호출하는 경우가 흔치는 않겠지만 문법상 가능하다는 것은 문제가 있다.
// 그리고 이는 성능 면에서도 문제가 있다.
// 객체에 바인딩된 함수가 constructor라는 것은 객체에 바인딩된 함수가 prototype 프로퍼티를 가지며, 프로토타입 객체도 생성한다는 것을 의미하기 때문이다.
// 함수에 전달되어 보조 함수의 역할을 수행하는 콜백 함수도 마찬가지다.
// 콜백 함수도 constructor이기 때문에 불필요한 프로토타입 객체를 생성한다.
{
    // 콜백 함수를 사용하는 고차 함수 map.
    // 콜백 함수도 constructor이며 프로토타입을 생성한다.
    [1, 2, 3].map(function (v) {
        return v * 2;
    });
}

// ES6 이전의 모든 함수는 사용 목적에 따라 명확한 구분이 없으므로 호출 방식에 특별한 제약이 없고 생성자 함수로 호출하지 ㅇ낳아도 프로토타입 객체를 생성한다.
// 이는 혼란스러우며 실수를 유발할 가능성이 있고 성능에도 좋지 않다.

// 이러한 문제를 해결하기 위해 ES6에서는 함수를 사용 목적에 따라 세 가지 종류로 명확히 구분했다.
// ES6 함수의 구분       | constructor | prototype | super | arguments
// ------------------------------------------------------------------
// 일반 함수(Normal)    |      O      |     O     |   X   |    O
// 메서드(Method)      |      X      |     X     |   O   |    O
// 화살표 함수(Arrow)   |      X      |     X     |   X   |    X

// 일반 함수는 함수 선언문이나 함수 표현식으로 정의한 함수를 말하며, ES6 이전의 함수와 차이가 없다.
// 하지만 ES6의 메서드와 화살표 함수는 ES6 이전의 함수와 명확한 차이가 있다.
// 일반 함수는 constructor이지만 ES6의 메서드와 화살표 함수는 non-constructor다.

// 👉 메서드
// ES6 이전 사양에는 메서드에 대한 명확한 정의가 없었다.
// 일반적으로 메서드는 객체에 바인딩된 함수를 일컫는 의미로 사용되었다.
// ES6 사양에서는 메서드에 대한 정의가 명확하게 규정되었다.
// ES6 사양에서 메서드는 메서드 축약 표현으로 정의된 함수만을 의미한다.
{
    const obj = {
        x: 1,
        // foo는 메서드다.
        foo() {
            return this.x;
        },
        // bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
        bar: function () {
            return this.x;
        },
    };


    // ES6 사양에서 정의한 메서드(이하 ES6 메서드)는 인스턴스를 생성할 수 없는 non-constructor다.
    // 따라서 ES6 메서드는 생성자 함수로서 호출할 수 없다.
    // new obj.foo(); //  TypeError: obj.foo is not a constructor
    console.log(new obj.bar()); // bar {}

    // ES6 메서드는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.
    // obj.foo는 constructor가 아닌 ES6 메서드이므로 prototype 프로퍼티가 없다.
    console.log(obj.foo.hasOwnProperty('prototype')); // false
    // obj.bar는 constructor인 일반 함수이므로 prototype 프로퍼티가 있다.
    console.log(obj.bar.hasOwnProperty('prototype')); // true
    console.log(obj.bar.prototype); // {constructor: ƒ}
}

// 표준 빌트인 깩체가 제공하는 프로토타입 메서드와 정적 메서드는 모두 non-constructor다.
{
    console.log(String.prototype.toUpperCase.prototype); // undefined
    console.log(String.fromCharCode.prototype); // undefined

    console.log(Number.prototype.toFixed.prototype); // undefined
    console.log(Number.isFinite.prototype); // undefined

    console.log(Array.prototype.map.prototype); // undefined
    console.log(Array.from.prototype); // undefined
}

// ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[HomeObject]]를 갖는다.
// super 참조는 내부 슬롯 [[HomeObject]]를 사용하여 수퍼클래스의 메서드를 참조하므로
// 내부 슬롯 [[HomeObject]]를 갖는 ES6 메서드는 super 키워드를 사용할 수 있다.
{
    const base = {
        name: 'Lee',
        sayHi() {
            return `Hi! ${this.name}`;
        },
    };

    const derived = {
        __proto__: base,

        // sayHi는 ES6 메서드다. ES6 메서드는 [[HomeObject]]를 갖는다.
        // sayHi의 [[HomeObject]]는 derived.prototype을 가리키고
        // supter는 sayHi의 [[HomeObject]]의 프로토타입인 base.prototype을 가리킨다.
        sayHi() {
            return `${super.sayHi()}. how are you doing?`;
        },
    };

    console.log(derived.sayHi()); // Hi! Lee. how are you doing?
}

// ES6 메서드가 아닌 함수는 super 키워드를 사용할 수 없다.
// ES6 메서드가 아닌 함수는 [[HomeObjcet]]를 갖지 않기 때문이다.
{
    const base = {
        name: 'Lee',
        sayHi() {
            return `Hi! ${this.name}`;
        },
    };

    const derived = {
        __proto__: base,

        // sayHi는 ES6 메서드가 아니다.
        // 따라서 sayHi는  [[HomeObjcet]]를 갖지 않으므로 super 키워드를 사용할 수 없다.
        sayHi: function () {
            // return `${super.sayHi()}`; // SyntaxError: 'super' keyword unexpected here
        },
    };

}

// 이처럼 ES6 메서드는 본연의 기능(super)을 추가하고 의미적으로 맞지 않는 기능(constructor)은 제거했다.
// 따라서 메서드를 정의할 때 프로퍼티 값으로 익명 함수 표현식을 할당하는 Es6 이전의 방식은 사용하지 않는 것이 좋다.



// 👉 화살표 함수
// 화살표 함수(arrow function)는 function 키워드 대신 화살표(=>, fat arrow)를 사용하여 기존의 함수 정의 방식보다 간략하게 함수를 정의할 수 있다.
// 화살표 함수는 표현만 간략한 것이 아니라 내부 동작도 기존의 함수보다 간략하다.
// 특히 화살표 함수는 콜백 함수 내부에서 this가 전역 객체를 가리키는 문제를 해결하기 위한 대안으로 유용하다.

// 📌 화살표 함수 정의
// 🌷 함수 정의
// 화살표 함수는 함수 선언문으로 정의할 수 없고 함수 표현식으로 정의해야 한다.
// 호출 방식은 기존 함수와 동일하다.
{
    const multiply = (x, y) => x * y;
    console.log(multiply(2, 3)); // 6
}

// 🌷 매개변수 선언
// 매개변수가 여러 개인 경우 소괄호 () 안에 매개변수를 선언한다.
{
    const arrow = (x, y) => {};
}

// 매개변수가 한 개인 경우 소괄호 ()를 생략할 수 있다.
{
    const arrow = x => {};
    const arrow2 = (x) => {};
}

// 매개변수가 없는 경우 소괄호 ()를 생략할 수 없다.
{
    // const arrow =  => {};
    const arrow2 = () => {};
}

// 🌷 함수 몸체 정의
// 함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략할 수 있다.
// 이때 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식인 문이라면 암묵적으로 반환된다.
// (= return 키워드가 없어도 반환한다는 뜻)
{
    // concise body
    const power = x => x ** 2;
    console.log(power(2)); // 4

    // 위 표현은 다음과 동일하다.
    // block body
    const power2 = x => { return x ** 2; };
    console.log(power2(2)); // 4
}

// 함수 몸체를 감싸는 중괄호 {}를 생략한 경우 함수 몸체 내부의 문이 표현식이 아닌 문이라면 에러가 발생한다.
// 표현식이 아닌 문은 반환할 수 없기 때문이다.
{
    // const arrow = () => const x = 1; // SyntaxError: Unexpected token 'const'

    // 위 표현은 다음과 같이 해석된다.
    // const arrow = () => { return const x = 1; };
}

// ❕ 따라서 함수 몸체가 하나의 문으로 구성된다 해도 함수 몸체의 문이 표현식이 아닌 문이라면 중괄호를 생략할 수 없다.
{
    const arrow = () => { const x = 1; };
}

// 객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호 ()로 감싸 주어야 한다.
{
    const create = (id, content) => ({ id, content });
    console.log(create(1, 'JavaScript')); // {id: 1, content: 'JavaScript'}

    // 위 표현은 다음과 동일하다.
    const create2 = (id, content) => { return {id, content} };
    console.log(create2(1, 'JavaScript')); // {id: 1, content: 'JavaScript'}
}

// 객체 리터럴을 소괄호 ()로 감싸지 않으면 객체 리터럴의 중괄호 {}를 함수 몸체를 감싸는 중괄호 {}로 잘못 해석한다.
{
    // { id, content }를 함수 몸체 내의 쉼표 연산자문으로 해석한다.
    const create = (id, content) => { id, content };
    console.log(create(1, 'JavaScript')); // undefined
}

// 함수 몸체가 여러 개의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략할 수 없다.
// 이때 반환값이 있다면 명시적으로 반환해야 한다.
// (= return 키워드 생략 불가능)
{
    const sum = (a, b) => {
        const result = a + b;
        return result;
    };
}

// 화살표 함수도 즉시 실행 함수로 사용할 수 있다.
{
    const person = (name => ({
        sayHi() { return `Hi? My name is ${name}`; }
    }))('Lee');

    console.log(person.sayHi()); // Hi? My name is Lee
}

// 화살표 함수도 일급 객체이므로 Array.prototype.map, Array.prototype.filter, Array.prototype.reduce와 같은 고차 함수에 인수로 전달할 수 있다.
// 이 경우 일반적인 함수 표현식보다 표현이 간결하고 가독성이 좋다.
{
    // ES5
    [1, 2, 3].map(function (v) {
        return v * 2;
    });

    // ES6
    [1, 2, 3].map(v => v * 2);
}

// 이처럼 화살표 함수는 콜백 함수로서 정의할 때 유용하다.
// 화살표 함수는 표현만 간략한 것이 아니다.
// 화살표 함수는 일반 함수의 기능을 간략화했으며 this도 편리하게 설계되었다.
// 일반 함수와 화살표 함수의 차이에 대해 살펴보자.


// 📌 화살표 함수와 일반 함수의 차이
// 1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.
// 2. 중복된 매개변수 이름을 선언할 수 없다.
// 3. 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.

// 1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.
// 화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.
{
    const Foo = () => {};

    // 화살표 함수는 생성자 함수로서 호출할 수 없다.
    // new Foo(); // TypeError: Foo is not a constructor

    // 화살표 함수는 prototype 프로퍼티가 없다.
    console.log(Foo.hasOwnProperty('prototype')); // false
}

// 2. 중복된 매개변수 이름을 선언할 수 없다.
// 일반 함수는 중복된 매개변수 이름을 선언해도 에러가 발생하지 않는다.
{
    function normal(a, a) { return a + a; }

    console.log(normal(1, 2)); // 4
}

// 단, strict mode에서 중복된 매개변수 이름을 선언하면 에러가 발생한다.
{
    // 'use strict';

    function normal(a, a) { return a + a; }

    console.log(normal(1, 2)); // 4
}

// 화살표 함수에서도 중복된 매개변수 이름을 선언하면 에러가 발생한다.
{
    // const arrow = (a, a) => a + a; // SyntaxError: Duplicate parameter name not allowed in this context
}

// 3. 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.
// 따라서 화살표 함수 내부에서 this, arguments, super, new.target을 참조하면 스코프 체인을 통해 상위 스코프의 this, arguments, super, new.target을 참조한다.
// 만약 화살표 함수와 화살표 함수가 중첩되어 있다면 상위 화살표 함수에도 this, arguments, super, new.target 바인딩이 없으므로
// 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this, arguments, super, new.target을 참조한다.


// 📌 this
// 화살표 함수가 일반 함수와 구별되는 가장 큰 특징은 바로 this다.
// 그리고 화살표 함수는 다른 함수의 인수로 전달되어 콜백 함수로 사용하는 경우가 많다.

// 화살표 함수의 this는 일반 함수의 this와 다르게 동작한다.
// 이는 "콜백 함수 내부의 this문제", 즉 콜백 함수 내부의 this가 외부 함수의 this와 다르기 때문에 발생하는 문제를 해결하기 위해 의도적으로 설계된 것이다.

// 22장 "this"에서 살펴보았듯이 this 바인딩은 함수의 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.
// 다시 말해, 함수를 정의할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고,
// 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.

// 이때 주의할 것은 일반 함수로서 호출되는 콜백 함수의 경우다.
// 고차 함수의 인수로 전달되어 고차 함수 내부에서 호출되는 콜백 함수도 중첩 함수라고 할 수 있다.
// 주어진 배열의 각 요소에 접두어를 추가하는 다음 예제를 살펴보자.
{
    class Prefixer {
        constructor(prefix) {
            this.prefix = prefix;
        }

        // add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다.
        // 1)
        add(arr) {
            return arr.map(function (v) {
                // return this.prefix + v; // 2)
                // TypeError: Cannot read properties of undefined (reading 'prefix')
            });
        }
    }

    const prefixer = new Prefixer('-webkit-');
    console.log(prefixer.add(['transition', 'user-select']));
}

// 위 예제를 실행했을 때 기대하는 결과는 ['-webkit-transition', '-webkit-user-select']다.
// 하지만 TypeError가 발생한다.

// 프로토타입 메서드 내부인 1)에서 this는 메서드를 호출한 객체(위 예제의 경우 prefixer 객체)를 가리킨다.
// 그런데 Array.prototype.map의 인수로 전달된 콜백 함수의 내부인 2)에서 this는 undefined를 가리킨다.
// 이는 Array.prototype.map 메서드가 콜백 함수를 일반 함수로서 호출하기 때문이다.

// 22장 "this"에서 살펴보았듯이 일반 함수로서 호출되는 함수 내부의 this는 전역 객체를 가리킨다.
// 그런데 클래스 내부의 모든 코드에는 strict mode가 적용된다.
// strict mode에서 일반 함수로서 호출된 모든 함수 내부의 this에는 전역 객체가 아니라 undefined가 바인딩되므로,
// 일반 함수로서 호출되는 Array.prototype.map 메서드의 콜백 함수 내부의 this에는 undefined가 바인딩된다.
































