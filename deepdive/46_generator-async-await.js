// 46장 제너레이터와 async/await

// 👉 제너레이터란?
// ES6에서 도입된 제너레이터(generator)는 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수다.
// 제너레이터와 일반 함수의 차이는 다음과 같다.

// 1. 제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다.
//      일반 함수를 호출하면 제어권이 함수에게 넘어가고 함수 코드를 일괄 실행한다.
//      즉, 함수 호출자(caller)는 함수르 호출한 이후 함수 실행을 제어할 수 없다.
//      제너레이터 함수는 함수 실행을 함수 호출자가 제어할 수 있다.
//      다시 말해, 함수 호출자가 함수 실해을 일시 중지시키거나 재개시킬 수 있다.
//      이는 함수의 제어권을 함수가 독점하는 것이 아니라 함수 호출자에게 양도(yield)할 수 있다는 것을 의미한다.
// 2. 제너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다.
//      일반 함수를 호출하면 매개변수를 통해 함수 외부에서 값을 주입받고 함수 코드를 일괄 실행하여 결과값을 함수 외부로 반환한다.
//      즉, 함수가 실행되고 있는 동안에는 함수 외부에서 함수 내부로 값을 전달하여 함수의 상태를 변경할 수 없다.
//      제너레이터 함수는 함수 호출자와 양방향으로 함수의 상태를 주고받을 수 있다.
//      다시 말해, 제너레이터 함수는 함수 호출자에게 상태를 전달할 수 있고 함수 호출자로부터 상태를 전달받을 수도 있다.
// 3. 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
//      일반 함수를 호출하면 함수 코드를 일괄 실행하고 값을 반환한다.
//      제너레이터 함수를 호출하면 함수 코드를 실행하는 것이 아니라 이터러블이면서 동시에 이터레이터인 제너레이터 객체를 반환한다.


// 👉 제너레이터 함수의 정의
// 제너레이터 함수는 function* 키워드로 선언한다.
// 그리고 하나 이상의 yield 표현식을 포함한다.
// 이것을 제외하면 일반 함수를 정의하는 방법과 같다.
{
    // 제너레이터 함수 선언문
    function* getDecFunc() {
        yield 1;
    }

    // 제너레이터 함수 표현식
    const getExpFunc = function* () {
        yield 1;
    };

    // 제너레이터 메서드
    const obj = {
        * genObjMethod() {
            yield 1;
        }
    };

    // 제너레이터 클래스 메서드
    class MyClass {
        * genClsMethod() {
            yield 1;
        }
    }
}

// 애스터리스크(*)의 위치는 function 키워드와 함수 이름 사이라면 어디든지 상관없다.
// 다음 예제의 제너레이터 함수는 모두 유효하다.
// 하지만 일관성을 유지하기 위해 function 키워드 바로 뒤에 붙이는 것을 권장한다.
{
    function* genFun() {}

    function * genFunc2() {}

    function *genFunc3() {}

    function*genFunc4() {}
}

// 제너레이터 함수는 화살표 함수로 정의할 수 없다.
{
    // const genArrowFunc = * () => {
    //     yield 1; // SyntaxError: Unexpected token '*' (at
    // };
}

// 제너레이터 함수는 new 연산자와 함께 생성자 함수로 호출할 수 없다.
{
    function* genFunc() {
        yield 1;
    }

    // new genFunc(); // TypeError: getFunc is not a constructor
}


// 👉 제너레이터 객체
// 제너레이터 함수를 호출하면 일반 함수처럼 함수 코드 블록을 실행하는 것이 아니라 제너레이터 객체를 생성해 반환한다.
// 제너렐이터 함수가 반환한 제너레이터 객체는 이터러블(iterable)이면서 동시에 이터레이터(iterator)다.
// 다시 말해, 제너레이터 객체는 Symbol.iterator 메서드를 상속받는 이터러블이면서
// value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환하는 next 메서드를 소유하는 이터레이터다.
// 제너레이터 객체는 next 메서드를 가지는 이터레이터이므로 Symbol.iterator 메서드를 호출해서 별도로 이터레이터를 생성할 필요가 없다.
{
    // 제너레이터 함수
    function* genFunc() {
        yield 1;
        yield 2;
        yield 3;
    }

    // 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
    const generator = genFunc();

    console.log(generator); // genFunc {<suspended>}

    // 제너레이터 객체는 이터러블이면서 동시에 이터레이터다.
    // 이터러블은 Symbol.iterator 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체다.
    console.log(Symbol.iterator in generator); // true

    // 이터레이터는 next 메서드를 갖는다.
    console.log('next' in generator); // true

    // * in 연산자는 명시된 속성이 명시된 객체에 존재하면 true를 반환한다.
    // 속성 in 객체명
}

// 제너레이터 객체는 next 메서드를 갖는 이터레이터이지만 이터레이터에는 없는 return, throw 메서드를 갖는다.
// 제너레이터 객체의 세 개의 메서드를 호출하면 다음과 같이 동작한다.

// - next 메서드를 호출하면 제너레잍 함수의 yield 표현식까지 코드 블록을 실행하고 yield된 값을 value 프로퍼티 값으로, false를 done 프로퍼티 값으로
//      갖는 이터레이터 리절트 객체를 반환한다.
// - return 메서드를 호출하면 인수로 전달받은 값을 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체를 반환한다.
{
    function* genFunc() {
        try {
            yield 1;
            yield 2;
            yield 3;
        } catch (e) {
            console.error(e);
        }
    }

    const generator = genFunc();

    console.log(generator.next()); // {value: 1, done: false}
    console.log(generator.next()); // {value: 2, done: false}
    console.log(generator.next()); // {value: 3, done: false}
    console.log(generator.next()); // {value: undefined, done: false}
    console.log(generator.return('End!')); // {value: 'End!', done: true}
}

// - throw 메서드를 호출하면 인수로 전달받은 에러를 발새잇키고 undefined를 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는 이터레이터
//      리절트 객체를 반환한다.
{
    function* genFunc() {
        try {
            yield 1;
            yield 2;
            yield 3;
        } catch (e) {
            console.error(e);
        }
    }

    const generator = genFunc();

    console.log(generator.next()); // {value: 1, done: false}
    console.log(generator.throw('Error!')); // Error! {value: undefined, done: true}
}


// 👉 제너레이터의 일시 중지와 재개
// 제너레이터는 yield 키워드와 next 메서드를 통해 실행을 일시 중지했다가 필요한 시점에 다시 재개할 수 있다.
// 일반 함수는 호출 이후 제어권을 함수가 독점하지만 제너레이터는 함수 호출자에게 제어권을 양도(yield)하여 필요한 시점에 함수 실행을 재개할 수 있다.


// 👉 제너레이터의 활용
// 📌 이터러블의 구현
// 📌 비동기 처리
// 👉 async/await
// 📌 async 함수
// 📌 await 키워드
