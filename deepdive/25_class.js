// 25장 클래스

// 👉 25.1 클래스는 프로토타입의 문법적 설탕인가?
// 자바스크립트는 프로토타입 기반 객체지향 언어다.
// 자바스크립트는 강력한 객체지향 프로그래밍 능력을 지니고 있다.

// 프로토타입 기반 객체지향 언어는 클래스가 필요없는(class free) 객체지향 프로그랴밍 언어다.
// ES5에서는 클래스 없이도 다음과 같이 생성자 함수와 프로토타입을 통해 객체지향 언어의 상속을 구현할 수 있다.

{
  // ES5 생성자 함수
  var Person = (function() {

    // 생성자 함수
    function Person(name) {
      this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHi = function() {
      console.log( 'Hi! My name is ' + this.name );
    };

    // 생성자 함수 반환
    return Person;
  }());

  // 인스턴스 생성
  var me = new Person('Lee');
  me.sayHi(); // Hi! My name is Lee
}

// ES6에서 도입된 클래스는 기존 프로토타입 기반 객체지향 프로그래밍보다 자바나 C#과 같은 클래스 기반 객체지향 프로그래밍에 익숙한 프로그래머가 더욱 빠르게 학습할 수 있도록 클래스 기반 객체지향 프로그래밍 언어와  매우 흡사한 새로운 객체 생성 메커니즘을 제시한다.

// 그렇다고 ES6의 클래스가 기존의 프로토타입 기반 객체지향 모델을 폐지하고 새롭게 클래스 기반 객체지향 모델을 제공하는 것은 아니다.
// 사실 클래스는 함수이며 기존 프로토타입 기반 패턴을 클래스 기반 패턴처럼 사용할 수 있도록 하는 문법적 설탕 syntatic sugar이라고 볼 수도 있다.

// 클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지는 않는다.
// 클래스는 생성자 함수보다 엄격하며 생성자 함수에서는 제공하지 않는 기능도 제공한다.
// 클래스는 생성자 함수와 매우 유사하게 동작하지만 다음과 같이 몇 가지 차이가 있다.

// 1. 클래스를 new 연산자 없이 호출하면 에러가 발생한다.
//    하지만 생성자 함수를 new 연산자 없이 호출하면 일반 함수로서 호출된다.
// 2. 클래스는 상속을 지원하는 extends와 super 키워드를 제공한다.
//    하지만 생성자 함수는 extends와 super 키워드를 지원하지 않는다.
// 3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다.
//    하지만 함수 선언문으로 정의된 생성자 함수는 함수 호이스팅이, 
//    함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생한다.
// 4. 클래스 내 모든 코드에는 암묵적으로 strict mode가 지정되어 실행되며 strict mode를 해제할 수 없다. 하지만 생성자 함수는 암묵적으로 strict mode가 지정되지 않는다.
// 5. 클래스의 constructor, 프로토타입 메서드, 정적 메서드는 모두 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false다. 다시 말해, 열거되지 않는다.

// 생성자 함수와 클래스는 프로토타입 기반의 객체지향을 구현했다는 점에서 매우 유사하다.
// 하지만 클래스는 생성자 함수 기반의 객체 생성 방식보다 견고하고 명료하다.
// 특히 클래스의 extends와 super 키워드는 상속 관계 구현을 더욱 간결하고 명료하게 한다.

// 따라서 클래스를 새로운 객체 생성 메커니즘으로 보는 것이 좀 더 합당하다.

// 👉 25.2 클래스 정의
// 클래스는 class 키워드를 사용하여 정의한다.
// 클래스 이름은 생성자 함수와 마찬가지로 파스칼 케이스를 사용하는 것이 일반적이다.
// 파스칼 케이스를 사용하지 않아도 에러가 발생하지 않는다.
{
  // 클래스 선언문 
  class Person {}
}

// 일반적이지는 않지만 함수와 마찬가지로 표현식으로 클래스를 정의할 수도 있다.
// 이때 클래스는 함수와 마찬가지로 이름을 가질 수도 있고, 갖지 않을 수도 있다. 
{
  // 익명 클래스 표현식
  const Fruit = class {};

  // 기명 클래스 표현식
  const Person = class MyClass {};
}

// 클래스를 표현식으로 정의할 수 있다는 것은 클래스가 값으로 사용할 수 있는 일급 객체라는 것을 의미한다.
// 클래스는 일급 객체로서 다음과 같은 특징을 갖는다.

// 1. 무명의 리터럴로 생성할 수 있다. (런타임에 생성 가능하다)
// 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
// 3. 함수의 매개변수에게 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.

// 클래스 몸체에는 0개 이상의 메서드만 정의할 수 있다.
// 클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자), 프로토타입 메서드, 정적 메서드의 세 가지가 있다.
{
  // 클래스 선언문
  class Person {
    // 생성자
    constructor(name) {
      // 인스턴스 생성 및 초기화
      this.name = name;
    }

    // 프로토타입 메서드
    sayHi() {
      console.log( `Hi! My name is ${this.name}` );
    }

    // 정적 메서드
    static sayHello() {
      console.log( 'Hello!' );
    }
  }

  // 인스턴스 생성
  const me = new Person('Lee');

  // 인스턴스의 프로퍼티 참조
  console.log( me.name ); // Lee

  // 프로토타입 메서드 호출
  me.sayHi(); // Hi! My name is Lee

  // 정적 메서드 호출
  Person.sayHello(); // Hello!
}

// 👉 25.3 클래스 호이스팅
// 클래스는 함수로 평가된다.
{
  // 클래스 선언문
  class Person {}

  console.log( typeof Person ); // function
}
// 클래스 선언문으로 정의한 클래스는 함수 선언문과 같이 소스코드 평가 과정, 즉 런타임 이전에 먼저 평가되어 함수 객체를 생성한다.
// 이때 클래스가 평가되어 생성된 함수 객체는 생성자 함수로서 호출할 수 있는 함수, 즉 constructor다.
// 생성자 함수로서 호출할 수 있는 함수는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
// 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재하기 때문이다. 

// 단, 클래스는 클래스 정의 이전에 참조할 수 없다.
{
  // console.log( Person ); // ReferenceError: Cannot access 'Person' before initialization

  // 클래스 선언문
  class Person {}
}
// 클래스 선언문은 마치 호이스팅이 발생하지 않는 것처럼 보이나 그렇지 않다.

{
  const Person = '';

  {
    // 호이스팅이 발생하지 않는다면 ''이 출력되어야 한다.
    // console.log( Person ); // ReferenceError: Cannot access 'Person' before initialization

    // 클래스 선언문
    class Person {}
  }
}
// 클래스 선언문도 변수 선언, 함수 정의와 마찬가지로 호이스팅이 발생한다.
// 단 클래스는 let, const 키워드로 선언한 변수처럼 호이스팅된다. 
// 따라서 클래스 선언문 이전에 일시적 사각지대에 빠지기 때문에 호이스팅이 발생하지 않는 것처럼 동작한다.

// ❕ var, let, const, function, function*, class 키워드를 사용하여 선언된 모든 식별자는 호이스팅 된다. 
// 모든 선언문을 런타임 이전에 먼저 실행되기 때문이다.

// 👉 25.4 인스턴스 생성
// 클래스는 생성자 함수이며 new 연산자와 함께 호출되어 인스턴스를 생성한다.
{
  class Person {}

  // 인스턴스 생성
  const me = new Person();
  console.log( me ); // Person {}
}

// 함수는 new 연산자의 사용 여부에 따라 일반 함수로 호출되거나 인스턴스 생성을 위한 생성자 함수로 호출되지만 클래스는 인스턴스를 생성하는 것이 유일한 존재 이므로 반드시 new 연산자와 함께 호출해야 한다. 

{
  class Person {}

  // 클래스를 new 연산자 없이 호출하면 타입 에러가 발생한다.
  // const me = Person(); // TypeError: Class constructor Person cannot be invoked without 'new'
}

// 클래스 표현식으로 정의된 클래스의 경우 다음 예제와 같이 클래스를 가리키는 식별자(Person)를 사용해 인스턴스를 생성하지 않고 기명 클래스 표현식의 클래스 이름(MyClass)을 사용해 인스턴스를 생성하면 에러가 발생한다.
{
  const Person = class MyClass {};

  const me = new Person();

  // 클래스 이름 MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자다.
  // console.log( MyClass ); // ReferenceError: MyClass is not defined

  // const you = new MyClass(); // ReferenceError: MyClass is not defined
}
// 이는 기명 함수 표현식과 마찬가지로 클래스 표현식에서 사용한 클래스 이름은 외부 코드에서 접근 불가능하기 때문이다. 

// 👉 25.5 메서드
// 클래스 몸체에는 0개 이상의 메서드만 정의할 수 있다.
// 클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자), 프로토타입 메서드, 정적 메서드의 세 가지가 있다.

// 📌 25.5.1 constructor
// constructor는 인스턴스를 생성하고 초기화하기 위한 특수한 메서드다.
// constructor는 이름을 변경할 수 없다.
{
  class Person {
    // 생성자
    constructor(name) {
      // 인스턴스 생성 및 초기화
      this.name = name;
    }
  }
}

// 클래스는 인스턴스를 생성하기 위한 생성자 함수다.
// 클래스의 내부를 들여다보기 위해 다음 코드를 크롬 브라우저의 개발자 도구에서 실행해보자.
{
  class Person {
    // 생성자
    constructor(name) {
      // 인스턴스 생성 및 초기화
      this.name = name;
    }
  }

  // 클래스는 함수다.
  console.log( typeof Person ); // function
  console.dir( Person );
}
// 이처럼 클래스는 평가되어 함수 객체가 된다.
// 18.2절 "함수 객체의 프로퍼티"에서 살펴보았듯이 클래스도 함수 객체 고유의 프로퍼티를 모두 갖고 있다.
// 함수와 동일하게 프로토타입과 연결되어 있으며 자신의 스코프 체인을 구성한다.

// 모든 함수 객체가 가지고 있는 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor 프로퍼티는 클래스 자신을 가리키고 있다.
// 이는 클래스가 인스턴스를 생성하는 생성자 함수라는 것을 의미한다.
// 즉, new 연산자와 함께 클래스를 호출하면 클래스는 인스턴스를 생성한다.

// 이번에는 클래스가 생성한 인스턴스의 내부를 들여다보기 위해 다음 코드를 크롬 브라우저의 개발자 도구에서 실행해보자.
{
  class Person2 {
    constructor(name) {
      this.name = name;
    }
  }

  const me = new Person2('Lee');
  console.log( me );
}
// Person2 클래스의 constructor 내부에서 추가한 name 프로퍼티가 클래스가 생성한 인스턴스의 프로퍼티로 추가된 것을 확인할 수 있다.
// 즉, 생성자 함수와 마찬가지로 constructor 내부에서 this에 추가한 프로퍼티는 인스턴스 프로퍼티가 된다.
// constructor 내부의 this는 생성자 함수와 마찬가지로 클래스가 생성한 인스턴스를 가리킨다.

{
  // 클래스
  class Person3 {
    // 생성자
    constructor(name) {
      // 인스턴스 생성 및 초기화
      this.name = name;
    }
  }

  // 생성자 함수
  function Person4(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}
// 그런데 흥미로운 것은 클래스가 평가되어 생성된 함수 객체나 클래스가 생성한 인스턴스 어디에도 constructor 메서드가 보이지 않는다는 것이다. 
// 이는 클래스 몸체에 정의한 constructor 메서드가 단순한 메서드가 아니라는 것을 의미한다.

// constructor는 메서드로 해석되는 것이 아니라 클래스가 평가되어 생성한 함수 객체 코드의 일부가 된다.
// 다시 말해, 클래스 정의가 평가되면 constructor의 기술된 동작을 하는 함수 객체가 생성된다.

// * 클래스의 constructor 메서드와 프로토타입의 constructor 프로퍼티는 이름이 같아 혼동하기 쉽지만 직접적인 관련이 없다.
// 프로토타입의 constructor 프로퍼티는 모든 프로토타입이 가지고 있는 프로퍼티이며, 생성자 함수를 가리킨다.


// constructor는 생성자 함수와 유사하지만 몇 가지 차이가 있다.
// 1. constructor는 클래스 내에 최대 한 개만 존재할 수 있다.
// 만약 클래스가 2개 이상의 constructor를 포함하면 문법 에러(SyntaxError)가 발생한다.
{
  class Bread {
    constructor() {}
    // constructor() {} // SyntaxError: A class may only have one constructor
  }
}

// 2. constructor는 생략할 수 있다.
{
  class Bread {}
}

// 3. constructor를 생략하면 클래스에 다음과 같이 빈 constructor가 암묵적으로 정의된다.
// constructor를 생략한 클래스는 빈 constructor에 의해 빈 객체를 생성한다.
{
  class Bread {
    // constructor는 생략하면 아래와 같이 빈 constructor가 암묵적으로 정의된다.
    constructor() {}
  }

  // 빈 객체가 생성된다.
  const cake = new Bread();
  console.log( cake ); // Bread {}
}

// 4. 프로퍼티가 추가되어 초기화된 인스턴스를 생성하려면 constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다.
{
  class Puppy {
    constructor() {
      // 고정값으로 인스턴스 초기화
      this.name = 'Wangja';
      this.address = 'Texas';
    }
  }

  // 인스턴스 프로퍼티가 추가된다.
  const wangja = new Puppy();
  console.log(wangja); // Puppy {name: 'Wangja', address: 'Texas'}
}

// 5. 인스턴스를 생성할 때 클래스 외부에서 인스턴스 프로퍼티의 초기값을 전달하려면 다음과 같이 constructor에 매개변수를 선언하고 인스턴스를 생성할 때 초기값을 전달한다.
// 이때 초기값은 constructor의 매개변수에게 전달된다.
{
  class Puppy {
    constructor(name, address) {
      // 인수로 인스턴스 초기화
      this.name = name;
      this.address = address;
    }
  }

  // 인수로 초기값을 전달한다. 초기값은 constructor에 전달된다.
  const gongju = new Puppy('Gongju', 'USA');
  console.log( gongju ); // Puppy {name: 'Gongju', address: 'USA'}
}
// 이처럼 constructor 내에서는 인스턴스의 생성과 동시에 인스턴스 프로퍼티 추가를 통해 인스턴스의 초기화를 실행한다.
// ❕ 따라서 인스턴스를 초기화하려면 constructor를 생략해서는 안된다.

// 6. constructor를 별도의 반환문을 갖지 않아야 한다.
// new 연산자와 함께 클래스가 호출되면 생성자 함수와 동일하게 암묵적으로 this, 즉 인스턴스를 반환하기 때문이다.
// 만약 this가 아닌 다른 객체를 명시적으로 반환하면 this, 즉 인스턴스가 반환되지 못하고 return 문에 명시한 객체가 반환된다.
{
  class Puppy {
    constructor(name) {
      this.name = name;
      
      // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
      return {};
    }
  }

  // constructor에서 명시적으로 반환한 빈 객체가 반환된다.
  const badugi = new Puppy('Badugi');
  console.log( badugi ); // {}
}

// 하지만 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
{
  class Puppy {
    constructor(name) {
      this.name = name;
      
      // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
      return 100;
    }
  }

  const badugi = new Puppy('Badugi');
  console.log( badugi ); // Puppy {name: 'Badugi'}
}
// 이처럼 constructor 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 클래스의 기본 동작을 훼손한다.
// 따라서 constructor 내부에서 return 문은 반드시 생략해야 한다.


// 📌 25.5.2 프로토타입 메서드
// 생성자 함수를 사용하여 인스턴스를 생성하는 경우 프로토타입 메서드를 생성하기 위해서는 다음과 같이 명시적으로 프로토타입에 메서드를 추가해야 한다.
{
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log( `Hi! My name is ${this.name}` );
  };

  const me = new Person('Kim');
  me.sayHi(); // Hi! My name is Kim
}

// 클래스 몸체에서 정의한 메서드는 생성자 함수에 의한 객체 생성 방식과는 다르게 클래스의 prototype 프로퍼티에 메서드를 추가하지 않아도 기본적으로 프로토타입 메서드가 된다.
{
  class Person {
    // 생성자
    constructor(name) {
      // 인스턴스 생성 및 초기화
      this.name = name;
    }

    // 프로토타입 메서드
    sayHi() {
      console.log( `Hi! My name is ${this.name}` );
    }
  }

  const me = new Person('Lee');
  me.sayHi(); // Hi! My name is Lee


  // 생성자 함수와 마찬가지로 클래스가 생성한 인스턴스는 프로토타입 체인의 일원이 된다

  // me 객체의 프로토타입은 Person.prototype이다.
  console.log( Object.getPrototypeOf(me) === Person.prototype ); // true

  // Person.prototype의 프로토타입은 Object.prototype이다.
  console.log( Object.getPrototypeOf(Person.prototype) === Object.prototype ); // true

  // me 객체의 constructor는 Person 클래스다.
  console.log( me.constructor === Person ); // true
}
// 클래스 몸체에서 정의한 메서드는 인스턴스의 프로토타입에 존재하는 프로토타입 메서드가 된다.
// 인스턴스는 프로토타입 메서드를 상속받아 사용할 수 있다.

// 프로토타입 체인은 기존의 모든 객체 생성 방식(객체 리터럴, 생성자 함수, Object.create 메서드 등)뿐만 아니라 클래스에 의해 생성된 인스턴스에도 동일하게 적용된다.
// 생성자 함수의 역할을 클래스가 할 뿐이다.

// 결국 클래스는 생성자 함수와 같이 인스턴스를 생성하는 생성자 함수라고 볼 수 있다.
// 다시 말해, 클래스는 생성자 함수와 마찬가지로 프로토타입 기반의 객체 생성 메커니즘이다.


// 📌 25.5.3 정적 메서드
// 정적(static) 메서드는 인스턴스를 생성하지 않아도 호출할 수 있는 메서드를 말한다.
// 생성자 함수의 경우 정적 메서드를 생성하기 위해서는 다음과 같이 명시적으로 생성자 함수에 메서드를 추가해야 한다.
{
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }
  
  // 정적 메서드
  Person.sayHi = function () {
    console.log( `Hi!` );
  };

  // 정적 메서드 호출
  Person.sayHi(); // Hi!
}

// 클래스에서는 메서드에 static 키워드를 붙이면 정적 메서드(클래스 메서드)가 된다.
{
  class Person {
    // 생성자
    constructor(name) {
      // 인스턴스 생성 및 초기화
      this.name = name;
    }

    // 정적 메서드
    static sayHi() {
      console.log( 'Hi!' );
    }
  }
}
// 정적 메서드는 클래스에 바인딩된 메서드가 된다.
// 클래스는 함수 객체로 평가되므로 자신의 프로퍼티/메서드를 소유할 수 있다.
// 클래스는 클래스 정의(클래스 선언문이나 클래스 표현식)가 평가되는 시점에 함수 객체가 되므로 인스턴스와 달리 별다른 생성 과정이 필요 없다.
// 따라서 정적 메서드는 클래스 정의 이후 인스턴스를 생성하지 않아도 호출할 수 있다.
// 정적 메서드는 프로토타입 메서드처럼 인스턴스로 호출하지 않고 클래스로 호출한다.
{
  class Person {
    // 생성자
    constructor(name) {
      // 인스턴스 생성 및 초기화
      this.name = name;
    }

    // 정적 메서드
    static sayHi() {
      console.log( 'Hi!' );
    }
  }

  // 정적 메서드는 클래스로 호출한다.
  // 정적 메서드는 인스턴스 없이도 호출할 수 있다.
  Person.sayHi(); // Hi!

  // ❕ 정적 메서드는 인스턴스로 호출할 수 없다.
  // 정적 메서드가 바인딩된 클래스는 인스턴스의 프로토타입 체인 상에 존재하지 않기 때문이다.
  // 다시 말해, 인스턴스의 체인 상에는 클래스가 존재하지 않기 때문에 인스턴스로 클래스의 메서드를 상속받을 수 없다.
  const me = new Person('YJYJ');
  // me.sayHi(); // TypeError: me.sayHi is not a function
}

// 📌 25.5.2 정적 메서드와 프로토타입 메서드의 차이
// 정적 메서드와 프로토타입 메서드는 무엇이 다르며, 무엇을 기준으로 구분하여 정의해야 할지 생각해보자.
// 정적 메서드와 프로토타입 메서드의 차이는 다음과 같다.
// 1. 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다.
// 2. 정적 메서드는 클래스로 호출하고, 프로토타입 메서드는 인스턴스로 호출한다.
// 3. 정적 메서드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메서드는 인스턴스 프로퍼티를 참조할 수 있다.

{
  class Square {
    // 정적 메서드
    static area(width, height) {
      return width * height;
    }
  }

  console.log( Square.area(10, 10) ); // 100
}
// 정적 메서드 area는 2개의 인수를 전달받아 면적을 계산한다.
// 이때 정적 메서드 area는 인스턴스 프로퍼티를 참조하지 않는다.
// 만약 인스턴스 프로퍼티를 참조해야 한다면 정적 메서드 대신 프로토타입 메서드를 사용해야 한다.
{
  class Square {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    // 프로토타입 메서드
    area() {
      return this.width * this.height;
    }
  }

  const square = new Square(10, 20);
  console.log( square.area() ); // 200
}
// 메서드 내부의 this는 메서드를 소유한 객체가 아니라 메서드를 호출한 객체, 즉 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체에 바인딩된다.

// 프로토타입 메서드는 인스턴스로 호출해야 하믈 프로토타입 메서드 내부의 this는 프로토타입 메서드를 호출한 인스턴스를 가리킨다.
// 위 예제의 경우 square 객체로 프로토타입 메서드 area를 호출했기 때문에 area 내부의 this는 square 객체를 가리킨다.

// 정적 메서드는 클래스로 호출해야 하므로 정적 메서드 내부의 this는 인스턴스가 아닌 클래스를 가리킨다.
// 즉, 프로토타입 메서드와 정적 메서드 내부의 this 바인딩이 다르다.

// 따라서 메서드 내부에서 인스턴스 프로퍼티를 참조할 필요가 있다면 this를 사용해야 하며, 이러한 경우 프로토타입 메서드로 정의해야 한다.
// 하지만 메서드 내부에서 인스턴스 프로퍼티를 참조해야 할 필요가 없다면 this를 사용하지 않게 된다.

// 물론 메서드 내부에서 this를 사용하지 않더라도 프로토타입 메서드로 정의할수 있다.
// 하지만 반드시 인스턴스를 생성한 다음 인스턴스로 호출해야 하므로 this를 사용하지 않는 메서드는 정적 메서드로 정의하는 것이 좋다.

// 표준 빌트인 객체인 Math, Number, JSON, Object, Reflect 등은 다양한 정적 메서드를 가지고 있다.
// 이들 정적 메서드는 애플리케이션 전역에서 사용할 유틸리티 함수다.
// 예를 들어, 전달받은 인수 중에서 가장 큰 수를 반환하는 정적 메서드 Math.max는 인스턴스와 상관없이 애플리케이션 전역에서 사용할 유틸리티 함수다.
{
  // 표준 빌트인 객체의 정적 메서드
  console.log( Math.max(1, 2, 3) ); // 3
  console.log( Number.isNaN(NaN) ); // true
  console.log( JSON.stringify({a:1}) ); // {"a":1}
  console.log( Object.is({}, {}) ); // false
  console.log( Reflect.has({a:1}, 'a') ); // true
}
// 이처럼 클래스 또는 생성자 함수를 하나의 네임스페이스로 사용하여 정적 메서드를 모아 놓으면 이름 충돌 가능성을 줄여 주고 관련 함수들을 구조화할 수 있는 효과가 있다.
// 이 같은 이유로 정적 메서드는 애플리케이션 전역에서 사용할 유틸리티 함수를 전역 함수로 정의하지 않고 메서드로 구조화할 때 유용하다.

// 📌 25.5.5 클래스에서 정의한 메서드의 특징
// 클래스에서 정의한 메서드는 다음과 같은 특징을 갖는다.
// 1. function 키워드를 생략한 메서드 축약 표현을 사용한다.
// 2. 객체 리터럴과는 다르게 클래스에 메서드를 정의할 때는 콤마가 필요 없다.
// 3. 암묵적으로 strict mode로 실행된다.
// 4. for...in문이나 Object.keys 메서드 등으로 열거할 수 없다. 즉, 프로퍼티 열거 가능 여부를 나타내며 불리언 값을 갖는 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false다.
// 5. 내부 메서드 [[Construct]]를 갖지 않는 non-constructor다. 따라서 new 연산자와 함께 호출할 수 없다.

// 👉 25.6 클래스의 인스턴스 생성 과정
// new 연산자와 함께 클래스를 호출하면 생성자 함수와 마찬가지로 클래스의 내부 메서드 [[Construct]]가 호출된다.
// 클래스는 new 연산자 없이 호출할 수 없다.

// 1 .인스턴스 생성과 this 바인딩
// new 연산자와 함께 클래스를 호출하면 constructor의 내부 코드가 실행되기에 앞서 암묵적으로 빈 객체가 생성된다.
// 이 빈 객체가 바로 (아직 완성되지는 않았지만) 클래스가 생성한 인스턴스다.
// 이때 클래스가 생성한 인스턴스의 프로토타입으로 클래스의 prototype 프로퍼티가 가리키는 객체가 설정된다.
// 그리고 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩된다.
// 따라서 constructor 내부의 this는 클래스가 생성한 인스턴스를 가리킨다.

// 2. 인스턴스 초기화
// constructor의 내부 코드가 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.
// 즉, this에 바인딩되어 있는 인스턴스에 프로퍼티를 추가하고 constructor가 인수로 전달받은 초기값으로 인스턴스의 프로퍼티 값을 초기화한다.
// 만약 constructor가 생략되었다면 이 과정도 생략된다.

// 3. 인스턴스 반환
// 클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
{
  class Person {
    // 생성자
    constructor(name) {
      // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
      console.log(this); // Person {}
      console.log( Object.getPrototypeOf(this) === Person.prototype ); // true

      // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
      this.name = name;

      // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    }
  }
}

// 👉 25.7 프로퍼티
// 📌 25.7.1 인스턴스 프로퍼티
// 인스턴스 프로퍼티는 constructor 내부에서 정의해야 한다.
{
  class Person {
    constructor(name) {
      // 인스턴스 프로퍼티
      this.name = name;
    }
  }

  const me = new Person('Lee');
  console.log(me); // Person {name: 'Lee'}
}
// constructor 내부 코드가 실행되기 이전에 constructor 내부의 this에는 이미 클래스가 암묵적으로 생성한 인스턴스인 빈 객체가 바인딩되어 있다.

// 생성자 함수에서 생성자 함수가 생성할 인스턴스의 프로퍼티를 정의하는 것과 마찬가지로 constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다.
// 이로써 클래스가 암묵적으로 생성한 빈 객체, 즉 인스턴스에 프로퍼티가 추가되어 인스턴스가 초기화된다.
{
  class Person {
    constructor( name) {
      // 인스턴스 프로퍼티
      this.name = name; // name 프로퍼티는 public하다
    }
  }

  const me = new Person('nila');

  // name은 public하다
  console.log( me.name ); // nila
}
// constructor 내부에서 this에 추가한 프로퍼티는 언제나 클래스가 생성한 인스턴스의 프로퍼티가 된다.
// ES6의 다른 객체지향언어처럼 private, public, protected 키워드와 같은 접근제한자를 지원하지 않는다.
// ❕ 따라서 인스턴스 프로퍼티는 언제나 public하다.
// 다행히도 private한 프로퍼티를 정의할 수 있는 사양이 현재 제안중에 있다. ( private 필드 정의 제안 )

// 📌 25.7.2 접근자 프로퍼티
// 접근자 프로퍼티는 자체적으로는 값([[Value]]내부 슬롯)을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.
{
  const person = {
    // 데이터 프로퍼티
    firstName: 'Ungmo',
    lastName: 'Lee',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    // setter 함수
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(' ');
    }
  };

  // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
  console.log( `${person.firstName} ${person.lastName}` ); // Ungmo Lee

  // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
  // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
  person.fullName = 'Heegun Lee';
  console.log( person ); // {firstName: 'Heegun', lastName: 'Lee'}

  // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
  // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
  console.log( person.fullName ); // Heegun Lee

  // fullName은 접근자 프로퍼티다.
  // 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
  console.log( Object.getOwnPropertyDescriptor(person, 'fullName') ); // {enumerable: true, configurable: true, get: ƒ, set: ƒ}

}

{
  // 접근자 프로퍼티는 클래스에서도 사용할 수 있다.
  // 위 예제의 객체 리터럴을 클래스로 표현하면 다음과 같다.
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // setter 함수
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(' ');
    }
  
  }
  const me = new Person('Ungmo', 'Lee');

  // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
  console.log( `${me.firstName} ${me.lastName}` ); // Ungmo Lee

  // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
  // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
  me.fullName = 'Heegun Lee';
  console.log( me ); // Person {firstName: 'Heegun', lastName: 'Lee'}

  // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
  // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
  console.log( me.fullName ); // Heegun Lee

  // fullName은 접근자 프로퍼티다.
  // 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
  console.log( Object.getOwnPropertyDescriptor(Person.prototype, 'fullName') ); // {enumerable: false, configurable: true, get: ƒ, set: ƒ}

  // 접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수, 즉 getter 함수와 setter 함수로 구성되어 있다.

// getter는 인스턴스 프로퍼티에 접근할 때마다 프로퍼티 값을 조작하거나 별도의 행위가 필요할 때 사용한다.
// getter는 메서드 이름 앞에 get 키워드를 사용해 정의한다.

// setter는 인스턴스 프로퍼티에 값을 할당할 때마다 프로퍼티 값을 조작하거나 별도의 행위가 필요할 때 사용한다.
// setter는 메서드 이름 앞에 set 키워드를 사용해 정의한다.

// 이때 getter와 setter 이름은 인스턴스 프로퍼티처럼 사용된다.
// 다시 말해 getter는 호출하는 것이 아니라 프로퍼티처럼 참조하는 형식으로 사용되며, 참조 시에 내부적으로 getter가 호출된다.
// setter도 호출하는 것이 아니라 프로퍼티처럼 값을 할당하는 형식으로 사용하면, 할당 시에 내부적으로 setter가 호출된다.

// getter는 이름 그대로 무언가를 취득할 때 사용하므로 반드시 무언가를 반환해야 하고, setter는 무언가를 프로퍼티에 할당해야 할 때 사용하므로 반드시 매개변수가 있어야 한다.
// setter는 단 하나의 값만 할당받기 때문에 단 하나의 매개변수만 선언할 수 있다.

// 클래스의 메서드는 기본적으로 프로토타입 메서드가 된다.
// 따라서 클래스의 접근자 프로퍼티 또한 인스턴스 프로퍼티가 아닌 프로토타입의 프로퍼티가 된다.
console.log(me);

// Object.getOwnPropertyNames는 비열거형(non-enumerable)을 포함한 모든 프로퍼티의 이름을 반환한다 (상속 제외)
console.log( Object.getOwnPropertyNames(me) ); // ['firstName', 'lastName']
console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(me)) ); // (2) ['constructor', 'fullName']
}

// 📌 25.7.3 클래스 필드 정의 제안
// 클래스 필드(필드 또는 멤버)는 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어다.
// 클래스 기반 객체지향 언어인 자바의 클래스 정의를 살펴보자.
// 자바의 클래스 필드는 마치 클래스 내부에서 변수처럼 사용된다.
{
  /*
  // 자바의 클래스 정의
  public class Person {
    // 1) 클래스 필드 정의
    // 클래스 필드는 클래스 몸체에 this 없이 선언해야 한다.
    private String firstName = '';
    private String lastName = '';

    // 생성자
    Person(String firstName, String lastName) {
      // 3) this는 언제나 클래스가 생성할 인스턴스를 가리킨다.
      this.firstName = firstName;
      this.lastName = lastName;
    }

    public String getFullName() {
      // 2) 클래스 필드 참조
      // this 없이도 클래스 필드를 참조할 수 있다.
      return firstName + ' ' + lastName;
    }
  }
  */
}
// 자바스크립트의 클래스에서 인스턴스 프로퍼티를 선언하고 초기화하려면 반드시 constrctor 내부에서 this에 프로퍼티를 추가해야 한다.
// 하지만 자바의 클래스에서는 위 예제의 1)과 같이 클래스 필드를 마치 변수처럼 클래스 몸체에 this 없이 선언한다.

// 또한 자바스크립트의 클래스에서 인스턴스 프로퍼티를 참조하려면 반드시 this를 사용하여 참조해야 한다.
// 하지만 자바의 클래스에서는 위 예제의 2)와 같이 this를 생략해도 클래스 필드를 참조할 수 있다.

// 클래스 기반 객체지향 언어의 this는 언제나 클래스가 생성할 인스턴스를 가리킨다.
// 위 예제의 3)과 같이 this는 주로 클래스 필드가 생성자 또는 메서드의 매개변수 이름과 동일할 때 클래스 필드임을 명확히 하기 위해 사용한다.

// 자바스크립트의 클래스 몸체에는 메서드만 선언할 수 있다.
// 따라서 클래스 몸체에 자바와 유사하게 클래스 필드를 선언하면 문법 에러가 발생한다.

{
  class Person {
    // 클래스 필드 정의
    name = 'Lee';

  }
  
  const me = new Person('Lee');
}
// 