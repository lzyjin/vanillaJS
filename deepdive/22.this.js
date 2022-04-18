// 22장 this

// 👉 22. 1 this 키워드
// 19.1장 "객체지향 프로그래밍"에서 살펴보았듯이 객체는 상태를 나타내는 프로퍼티와 동작을 나타내는 메서드를 하나의 논리적인 단위로 묶은 복합적인 자료구조다.
// 동작을 나타내는 메서드는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고 변경할 수 있어야 한다.
// 이때 메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.
// 객체 리터럴 방식으로 생성한 객체의 경우 메서드 내부에서 메서드 자신이 속한 객체를 가리키는 식별자를 재귀적으로 참조할 수 있다.
{
  const circle = {
    // 프로퍼티: 객체 고유의 상태 데이터
    radius: 5,
    // 메서드: 상태 데이터를 참조하고 조작하는 동작
    getDiameter() {
      // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
      // 자신이 속한 객체인 circle을 참조할 수 있어야 한다.
      return 2 * circle.radius;
    }
  };
  console.log(circle.getDiameter()); // 10
} 

// getDiameter 메서드 내에서 메서드 자신이 속한 객체를 가리키는 식별자 circle을 참조하고 있다.
// 이 참조 표현식이 평가되는 시점은 getDiameter 메서드가 호출되어 함수 몸체가 실행되는 시점이다.
// 위 예제의 객체 리터럴은 circle 변수에 할당되기 직전에 평가된다. 
// 따라서 getDiameter 메서드가 호출되는 시점에는 이미 객체 리터럴의 평가가 완료되어 객체가 생성되었고 circle 식별자에 생성된 객체가 할당된 이후다. 따라서 메서드 내부에서 circle 식별자를 참조할 수 있다.

// 하지만 자기 자신이 속한 객체를 재귀적으로 참조하는 방식은 일반적이지 않으며 바람적이지 않다.
// 생성자 함수 방식으로 인스턴스를 생성하는 경우를 생각해보자.
{
  function Circle(radius) {
    // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
    // ????.radius = radius;
  }
  
  Circle.prototype.getDiameter = function() { 
    // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다
    // return 2 * ????.radius;
  };

  // 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다.
  const circle = new Circle(5);
}

// 생성자 함수 내부에서는 프로퍼티 또는 메서드를 추가하기 위해 자신이 생성할 인스턴스를 참조할 수 있어야 한다.
// 하지만 생성자 함수에 의한 객체 생성 방식은 먼저 생성자 함수를 정의한 이후 new 연산자와 함께 생성자 함수를 호출하는 단계가 추가로 필요하다. 다시 말해 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수가 존재해야 한다.

// ❕ 생성자 함수를 정의하는 시점에는 아직 인스턴스를 생성하기 이전이므로 생성자 함수가 생성할 인스턴스를 가리키는 식별자를 알 수 없다. 
// 따라서 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 특수한 식별자가 필요하다.
// 이를 위해 자바스크립트는 this라는 특수한 식별자를 제공한다.

// ❕ this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수self-referencing variable이다.
// this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.

// this는 자바스크립트 엔진에 의해 암묵적으로 생성되며, 코드 어디서든 참조할 수 있다.
// 함수를 호출하면 arguments 객체와 this가 암묵적으로 함수 내부에 전달된다.
// 함수 내부에서 arguments 객체를 지역 변수처럼 사용할 수 있는 것처럼 this도 지역 변수처럼 사용할 수 있다.
//❕  단, this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

// ❕ this 바인딩
// 바인딩이란 식별자와 값을 연결하는 과정
// 예를들어 변수 선언은 변수이름(식별자)과 확보된 메모리 공간의 주소를 바인딩 하는 것.
// this 바인딩은 this(키워드로 분류되지만 식별자 역할을 한다)와 this가 가리킬 객체를 바인딩하는 것.

// 위에서 살펴본 객체 리터럴과 생성자 함수의 예제를 this를 사용해 수정해 보자.
{
  // 객체 리터럴
  const circle = {
    radius: 5,
    getDiameter() {
      // this는 메서드를 호출한 객체를 가리킨다.
      return 2 * this.radius;
    }
  };
  console.log(circle.getDiameter());
}
// ❕ 객체 리터럴의 메서드 내부에서의 this는 메서드를 호출한 객체, 즉 circle을 가리킨다.

{
  // 생성자 함수
  function Circle(radius) {
    // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
  }

  Circle.prototype.getDiameter = function() {
    // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    return 2 * this.radius;
  };

  // 인스턴스 생성
  const circle = new Circle(10);
  console.log( circle.getDiameter() ); // 20
}
// ❕ 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
// 이처럼 this는 상황에 따라 가리키는 대상이 다르다.

// 자바나 c++같은 클래스 기반 언어에서 this는 언제나 클래스가 생성하는 인스턴스를 가리킨다.
// 하지만 자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값, 즉 this 바인딩이 동적으로 결정된다.
// 또한 strict mode 역시 this 바인딩에 영향을 준다.

// this는 코드 어디에서든 참조 가능하다. 전역에서도 함수 내부에서도 참조할 수 있다.
console.log(this); // Window
{
  console.log(this); // Window

  function square(number) {
    // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다
    console.log(this); // Window
    return number * number;
  }
  square(2);

  const person = {
    name: 'Lee',
    getName() {
      // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
      console.log(this); // {name: 'Lee', getName: ƒ}
      return this.name;
    }
  };
  console.log( person.getName() ); // Lee

  function Person(name) {
    this.name = name;
    // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    console.log( this ); // Person {name: 'Kim'}
  }
  const me = new Person('Kim');
}

// 하지만 this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로 일반적으로 객체의 메서드 내부 또는 생성자 함수 내부에서만 의미가 있다.
// ❕ 따라서 strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩 된다.
// 일반 함수 내부에서 this를 사용할 필요가 없기 때문이다. 
{
  function square(number) {
    'use strict';
    console.log(this); // undefined
    return number * number;
  }
  square(2);
}

// 👉 22.2 함수 호출 방식과 this 바인딩
// this 바인딩(this에 바인딩 될 값)은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.

// 렉시컬 스코프와 this 바인딩은 결정 시기가 다르다
// 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정한다. 
// 하지만 this 바인딩은 함수 호출 시점에 결정된다.

// 주의할 것은 동일한 함수도 다양한 방식으로 호출될 수 있다는 것이다.
// 함수를 호출하는 방식은 다음과 같이 다양하다.
// 1. 일반 함수 호출
// 2. 메서드 호출
// 3. 생성자 함수 호출
// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
console.clear();
{
  // this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
  const foo = function() {
    console.dir(this);
  };

  // 동일한 함수도 다양한 방식으로 호출할 수 있다.

  // 1. 일반 함수 호출
  // foo 함수를 일반적인 방식으로 호출
  // foo 함수 내부의 this는 전역 객체 window를 가리킨다.
  foo(); // Window

  // 2. 메서드 호출
  // foo 함수를 프로퍼티로 값으로 할당하여 호출
  // foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다.
  const obj = {foo};
  obj.foo(); // Object

  // 3. 생성자 함수 호출
  // foo 함수를 new 연산자와 함께 생성자 함수로 호출
  // foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
  new foo(); // foo

  // 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
  // foo 함수 내부의 this는 인수에 의해 결정된다.
  const bar = { name: 'bar' };
  foo.call(bar); // Object
  foo.apply(bar); // Object
  foo.bind(bar)(); // Object
}

// 함수 호출 방식에 따라 this 바인딩이 어떻게 결정되는지 알아보자

// 📌 22.2.1 일반 함수 호출
// 기본적으로 this에는 전역 객체가 바인딩된다.
{
  function foo() {
    console.log("foo's this: ", this); // foo's this: Window
    function bar() {
      console.log("bar's this", this); // bar's this: Window
    }
    bar();
  }
  foo();
}

// 위 예제처럼 전역 함수는 물론이고 중첩 함수를 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩된다.
// 다만 this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로 객첼를 생성하지 않는 일반 함수에서 this는 의미가 없다.
// 따라서 다음 예제처럼 strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.
{
  function foo() {
    'use strict';

    console.log("foo's this: ", this); // foo's this:  undefined
    function bar() {
      console.log("bar's this", this); // bar's this:  undefined
    }
    bar();
  }
  foo();
}

// 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩된다.
{
  // var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
  var value = 1;
  // const 키워드로 선언한 전역 변수 value는 전역 개체의 프로퍼티가 아니다.
  // const value = 1;

  const obj = {
    value: 100,
    // 메서드
    foo() {
      console.log("foo's this: ", this); // foo's this:  {value: 100, foo: ƒ}
      console.log("foo's this.value: ", this.value); // foo's this.value:  100

      // 메서드 내에서 정의한 중첩 함수
      function bar() {
        console.log("bar's this: ", this); // bar's this:  Window 
        console.log("bar's this.value: ", this.value); // bar's this.value:  1
      }

      // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 
      // 전역 객체가 바인딩된다.
      bar();
    }
  };

  obj.foo();
}

// 콜백 함수가 일반 함수로 호출된다면 콜백 함수 내부의 this에도 전역 객체가 바인딩된다.
// 어떠한 함수라도 일반 함수로 호출되면 this에 전역 개체가 바인딩된다.
console.clear();
{
  var value2 = 1;

  const obj = {
    value2: 100,
    // 메서드
    foo() {
      console.log("foo's this: ", this); // foo's this:  {value2: 100, foo: ƒ}

      // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
      setTimeout( function() {
        console.log("callback's this: ", this); // callback's this:  Window
        console.log("callback's this.value2: ", this.value2); // callback's this.value2:  1
      }, 100);
    }
  };

  obj.foo();
}

// 이처럼 일반함수로 호출된 모든 함수(중첩 함수, 콜백 함수 포함) 내부의 this에는 전역 객체가 바인딩된다.

// 하지만 메서드 내에서 정의한 중첩 함수 또는 메서드에게 전달한 콜백 함수가 일반 함수로 호출될 때
// 메서드 내의 중첩 함수 또는 콜백 함수의 this가 전역 객체를 바인딩하는 것은 문제가 있다.
// 중첩 함수 또는 콜백 함수는 외부 함수를 돕는 헬퍼 함수의 역할을 하므로 외부 함수의 일부 로직을 대신하는 경우가 대부분이다.
// 하지만 외부 함수인 메서드와 중첩 함수 또는 콜백 함수의 this가 일치하지 않는 다는 것은 중첩 함수 또는 콜백 함수를 헬퍼 함수로 동작하기 어렵게 만든다.

// 메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위한 방법은 다음과 같다.
{
  var value3 = 1;
  const obj = {
    value3: 100,
    foo() {
      // this 바인딩(obj)를 변수 that에 할당한다.
      const that = this;

      // 콜백 함수 내부에서 this 대신 that을 참조한다.
      setTimeout(function() {
        console.log( that.value3 ); // 100
        // console.log( this ); // Window
      }, 100);
    }
  };
  obj.foo();
}

// 이 방법 이외에도 자바스크립트는 this를 명시적으로 바인딩 할 수 있는
// Function.prototype.apply, Function.prototype.call, Function.prototype.bind 메서드를 제공한다.
