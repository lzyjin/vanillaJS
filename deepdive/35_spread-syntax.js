// 35장 스프레드 문법

// 👉 스프레드 문법
// ES6에서 도입된 스프레드 문법(spread syntax) ...은 하나로 뭉쳐 있는 여러 값들의 집합을
// 펼쳐서(전개, 분산하여 spread) 개별적인 값들의 목록으로 만든다.

// 스프레드 문법을 사용할 수 있는 대상은 Array, String, Map, Set, DOMCollection, arguments 와 같이
// for...of 문으로 순회할 수 있는 이터러블에 한정된다.
{
    // ...[1, 2, 3]은 [1, 2, 3]을 개별 요소로 분리한다
    console.log(...[1, 2, 3]); // 1 2 3

    // 문자열을 이터러블이다.
    console.log(...'Hello'); // H e l l o

    // Map과 Set은 이터러블이다.
    console.log(...new Map([['a', '1'], ['b', '2']])); // ['a', '1'] ['b', '2']
    console.log(...new Set([1, 2, 3])); // 1 2 3

    // 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다.
    // console.log(...{ a: 1, b: 2 }); // TypeError: Found non-callable @@iterator
}

// 위 예제에서 ...[1, 2, 3]은 이터러블인 배열을 펼쳐서 요소들을 개별적인 값들의 목록 1 2 3으로 만든다.
// 이때 1 2 3은 값이 아니라 값들의 목록이다.
// 즉, 스프레드 문법의 결과는 값이 아니다.
// 이는 스프레드 문법 ...이 피연산자를 연산하여 값을 생성하는 연산자가 아님을 의미한다.
// 따라서 스프레드 문법의 결과는 변수에 할당할 수 없다.
{
    // 스프레드 문법의 결과는 값이 아니다.
    // const list = ...[1, 2, 3]; // SyntaxError: Unexpected token '...'
}

// 이처럼 스프레드 문법의 결과물은 값으로 사용할 수 없고, 다음과 같이 쉼표로 구분한 값의 목록을 사용하는 문맥에서만 사용할 수 있다.
// - 함수 호출문의 인수 목록
// - 배열 리터럴의 요소 목록
// - 객체 리터럴의 프로퍼티 목록


// 👉 함수 호출문의 인수 목록에서 사용하는 경우
// 요소들의 집합인 배열을 펼쳐서 개별적인 값들의 목록으로 만든 후, 이를 함수의 인수 목록으로 전달해야 하는 경우가 있다.
{
    const arr = [1, 2, 3];

    // 배열 arr의 요소 중에서 최대값을 구하기 위해 Math.max()를 사용한다.
    const max = Math.max(arr);
    console.log(max); // NaN
}

// Math.max 메서드는 매개변수 개수를 확정할 수 없는 가변 인자 함수다.
// 다음과 같이 개수가 정해져 있지 않은 여러 개의 숫자를 인수로 전달받아 인수 중에서 최대값을 반환한다.
{
    console.log(Math.max(1)); // 1
    console.log(Math.max(1, 2)); // 2
    console.log(Math.max(1, 2, 3)); // 3
    console.log(Math.max()); // -Infinity
}

// 만약 Math.max 메서드에 숫자가 아닌 배열을 인수로 전달하면 최대값을 구할 수 없으므로 NaN을 반환한다.
{
    console.log(Math.max([1, 2, 3])); // NaN
}

// 이 같은 문제를 해결하기 위해 배열을 펼쳐서 요소들을 개별적인 값들의 목록으로 만든 후, Math.max 메서드의 인수로 전달해야 한다.
// 즉, [1, 2, 3]을 1, 2, 3으로 펼쳐서 Math.max 메서드의 인수로 전달해야 한다.
// 스프레드 문법이 제공되기 이전에는 배열을 펼쳐서 요소들의 목록을 함수의 인수로 전달하고 싶은 경우 Function.prototype.apply를 사용했다.
{
    var arr = [1, 2, 3];

    // apply 함수의 2번째 인수(배열)는 apply 함수가 호출하는 함수의 인수 목록이다.
    // 따라서 배열이 펼쳐져서 인수로 전달되는 효과가 있다.
    var max = Math.max.apply(null, arr);
    console.log(max); // 3
}

// 스프레드 문법을 사용하면 더 간결하고 가독성이 좋다.
{
    const arr = [1, 2, 3];

    const max = Math.max(...arr);
    console.log(max); // 3
}

// 스프레드 문법은 앞에서 살펴본 Rest 파라미터와 형태가 동일하여 혼돌할 수 있으므로 주의하자.
// Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받기 위해 매개변수 이름 앞에 ...을 붙이는 것이다.
// 스프레드 문법은 여러 개의 갓이 하나로 뭉쳐 있는 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만드는 것이다.
// ❕ 따라서 Rest 파라미터와 스프레드 문법은 서로 반대의 개념이다.
{
    // Rest 파라미터는 인수들의 목록을 배열로 전달받는다.
    function foo(...rest) {
        console.log(rest); // [1, 2, 3]
    }

    // 스프레드 문법은 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만든다.
    // ...[1, 2, 3] = 1 2 3
    foo(...[1, 2, 3]);
}



// 👉 배열 리터럴의 요소 목록에서 사용하는 경우
// 스프레드 문법을 배열 리터럴에서 사용하면 ES5에서 사용하던 기존의 방식보다 더욱 간결하고 가독성 좋게 표현할 수 있다.
// ES5에서 사용하던 방식과 비교하여 살펴보자.


// 📌 concat
// ES5에서 2개의 배열을 1개의 배열로 결합하고 싶은 경우 배열 리터럴만으로 해결할 수 없고 concat 메서드를 사용해야 한다.
{
    // ES5
    var arr = [1, 2].concat([3, 4]);
    console.log(arr); // [1, 2, 3, 4]
}

// 스프레드 문법을 사용하면 별도의 메서드를 사용하지 않고 배열 리터럴만으로 2개의 배열을 1개의 배열로 결합할 수 있다.
{
    // ES6
    const arr = [...[1, 2], ...[3, 4]];
    console.log(arr); // [1, 2, 3, 4]
}

// 📌 splice
// ES5에서 어떤 배열의 중간에 다른 배열의 요소들을 추가하거나 제거하려면 splice 메서드를 사용한다.
// 이때 splice 메서드의 세 번째 인수로 배열을 전달하면 배열 자체가 추가된다.
{
    // ES5
    var arr1 = [1, 4];
    var arr2 = [2, 3];

    // splice 메서드는 원본 배열을 바꿈
    arr1.splice(1, 0, arr2);

    // [1, 2, 3, 4]를 기대했는데 이렇게 되지 않는다.
    console.log(arr1); // [1, [2, 3], 4]
}

// 위 예제의 경우 splice 메서드의 세 번째 인수 [2, 3]을 2, 3으로 해체하여 전달해야 한다.
// 그렇지 않으면 arr1에 arr2 배열 자체가 추가된다.
// 따라서 이러한 경우 Function.prototype.apply 메서드를 사용하여 splice 메서드를 호출해야 한다.
// apply 메서드의 두 번째 인수(베열)는 apply 메서드가 호출하는 함수에 해체되어 전달된다.
{
    // ES5
    var arr1 = [1, 4];
    var arr2 = [2, 3];

    // apply 메서드의 2번째 인수(베열)은 apply 메서드가 호출한 splice 메서드의 인수 목록이다.
    // apply 메서드의 2번째 인수 [1, 0].concat(arr2)는 [1, 0, 2, 3]으로 평가된다.
    // 따라서 splice 메서드에 apply 메서드의 2번째 인수 [1, 0, 2, 3]이 해체되어 전달된다.
    // 즉, arr1[1]부터 0개의 요소를 제거하고 그 자리(arr1[1])에 새로운 요소(2, 3)을 삽입한다.
    // ❓❓❓❓❓❓❓
    Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));
    console.log(arr1); // [1, 2, 3, 4]
}

// 스프레드 문법을 사용하면 다음과 같이 더욱 간결하고 가독성 좋게 표현할 수 있다.
{
    // ES6
    const arr1 = [1, 4];
    const arr2 = [2, 3];

    arr1.splice(1, 0, ...arr2);
    console.log(arr1); // [1, 2, 3, 4]
}


// 📌 배열 복사
// ES5에서 배열을 복사하려면 slice 메서드를 사용한다.
{
    // ES5
    var origin = [1, 2];
    var copy = origin.slice();

    console.log(copy); // [1, 2]
    console.log(origin === copy); // false
}

// 스프레드 문법을 사용하면 다음과 같이 더욱 간결하고 가독성 좋게 표현할 수 있다.
{
    // ES6
    const origin = [1, 2];
    const copy = [...origin];

    console.log(copy); // [1, 2]
    console.log(origin === copy); // false
}

// 이때 원본 배열의 각 요소를 얕은 복사하여 새로운 사본을 생성한다.
// 이는 slice 메서드도 마찬가지다.


// 📌 이터러블을 배열로 변환
// ES5에서 이터러블을 배열로 변환하려면 Function.prototype.apply 또는 Function.prototype.call 메서드를 사용하여 slice 메서드를 호출해야 한다.
{
    // ES5
    function sum() {
        // 이터러블이면서 유사 배열 객체인 arguments를 배열로 변환
        var args = Array.prototype.slice.call(arguments);

        return args.reduce(function(pre, cur) {
            return pre + cur;
        }, 0);
    }

    console.log(sum(1, 2, 3)); // 6
}

// 이 방법은 이터러블 뿐만 아니라 이터러블이 아닌 유사 배열 객체도 배열로 변환할 수 있다.
{
    // 이터러블이 아닌 유사 배열 객체
    const arrayLike = {
        0: 1,
        1: 2,
        2: 3,
        length: 3
    };

    const arr = Array.prototype.slice.call(arrayLike);
    console.log(arr); // [1, 2, 3]
    console.log(Array.isArray(arr)); // true
}

// 스프레드 문법을 사용하면 좀 더 간편하게 이터러블을 배열로 변환할 수 있다.
// arguments 객체는 이터러블이면서 유사 배열 객체다.
// 따라서 스프레드 문법의 대상이 될 수 있다.
{
    function sum() {
        return [...arguments].reduce((pre, cur) => pre + cur, 0);
    }

    console.log(sum(1, 2, 3)); // 6
}

// 위 예제보다 나은 방법은 Rest 파라미터를 사용하는 것이다.
{
    // Rest 파라미터 args는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
    const sum = (...args) => args.reduce( (pv, cv) => pv + cv, 0 );

    console.log(sum(1, 2, 3)); // 6
}

// ❕ 단, 이터러블이 아닌 유사 배열 객체는 스프레드 문법의 대상이 될 수 없다.
{
    // 이터러블이 아닌 유사 배열 객체
    const arrayLike = {
        0: 1,
        1: 2,
        2: 3,
        length: 3
    };

    // const arr = [...arrayLike]; // TypeError: arrayLike is not iterable
}

// ❕ 이터러블이 아닌 유사 배열 객체를 배열로 변경하려면 ES6에서 도입된 Array.from 메서드를 사용한다.
//  Array.from 메서드는 이터러블 또는 유사 배열 객체를 배열로 변환한다.
{
    // 이터러블이 아닌 유사 배열 객체
    const arrayLike = {
        0: 1,
        1: 2,
        2: 3,
        length: 3
    };

    // Array.from은 유사 배열 객체 또는 이터러블을 배열로 반환한다.
    console.log(Array.from(arrayLike)); // [1, 2, 3]
}


// 👉 객체 리터럴 내부에서 사용하는 경우
// Rest 프로퍼티와 함께 2021년 1월 TC39 프로세스의 stage 4단계에 제안되어 있는 스프레드 프로퍼티를 사용하면
// 객체 리터럴의 프로퍼티 목록에서도 스프레드 문법을 사용할 수 있다.
// 스프레드 문법의 대상은 이터러블이어야 하지만 스프레드 프로퍼티 제안은 일반 객체를 대상으로도 스프레드 문법의 사용을 허용한다.
{
    // 스프레드 프로퍼티
    // 객체 복사 (얕은 복사)
    const obj = { x: 1,  y: 2 };
    const copy = { ...obj };

    console.log(copy); // {x: 1, y: 2}
    console.log(obj === copy); // false

    // 객체 병합
    const merged = {
        x: 1,
        y: 2,
        ...{ a: 3, b: 4 }
        // ...{ y: 3, b: 4 }
    };
    console.log(merged); // {x: 1, y: 2, a: 3, b: 4}
}

// 스프레드 프로퍼티가 제안되기 이전에는 ES6에서 도입된 Object.assign 메서드를 사용하여 여러 개의 객체를 병합하거나 특정 프로퍼티를 변경 또는 추가했다.
{
    // 객체 병합
    // 프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다.
    const merged = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });
    console.log(merged); // {x: 1, y: 10, z: 3}

    // 특정 프로퍼티 변경
    const changed = Object.assign({}, { x: 1, y: 2 }, { y: 100 });
    console.log(changed); // {x: 1, y: 100}

    // 프로퍼티 추가
    const added = Object.assign({}, { x: 1, y: 1 });
    console.log(added); // {x: 1, y: 1}
}

// 스프레드 문법은 Object.assign 메서드를 대체할 수 있는 간편한 문법이다.
{
    // 객체 병합
    // 프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다.
    const merged = { ...{x: 1, y: 2}, ...{ y: 10, z: 3 } };
    console.log(merged); // {x: 1, y: 10, z: 3}

    // 특정 프로퍼티 변경
    const changed = { ...{ x: 1, y: 2 }, y: 100 };
    console.log(changed); // {x: 1, y: 100}

    // 프로퍼티 추가
    const added = { ...{ x: 1, y: 2 }, z: 0 };
    console.log(added); // {x: 1, y: 2, z: 0}
}














































