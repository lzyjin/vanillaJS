// 27장 배열


// 👉 배열이란?
// 배열은 여러 개의 값을 순차적으로 나열한 자료 구조

// 배열 리터럴을 통해 배열 생성
const arr = ['apple', 'banana', 'orange'];

// 요소(element): 배열이 가지고 있는 값
// 자바스크립트의 모든 값은 배열의 요소가 될 수 있다.

// 인덱스(index): 배열에서 요소의 위치를 나타내는 0이상의 정수
// 인덱스는 배열의 요소에 접근할 때 사용한다.

// 위 예제의 배열 arr은 3개의 요소 'apple', 'banana', 'orange'로 구성되어 있다.
// 'apple'의 인덱스는 0, 'banana'의 인덱스는 1, 'orange'의 인덱스는 2

// 요소에 접근할 때는 대괄호 표기법을 사용한다.
// 대괄호 내에 접근하고 싶은 요소의 인덱스를 지정한다.
arr[0] // -> 'apple'
arr[1] // -> 'banana'
arr[2] // -> 'orange'

// 배열은 length 프로퍼티를 갖는다.
// length 프로퍼티는 배열의 길이(요소의 개수)
console.log(arr.length); // 3

// 배열은 인덱스와 length를 갖기 때문에 for문을 통해 순차적으로 요소에 접근할 수 있다.
for (let i=0; i < arr.length; i++) {
    console.log(arr[i]); // apple banana orange
}

// 자바스크립트에 배열이라는 타입은 없다.
// 배열은 객체타입이다.
console.log(typeof arr); // object

// 배열 리터럴, Array 생성자 함수, Array.of, Array.from 메서드로 배열을 생성할 수 있다.
// 배열의 생성자 함수는 Array
// 배열의 프로토타입 객체는 Array.prototype
// Array.prototype 객체는 배열을 위한 빌트인 메서드를 제공한다.
const array = [1, 2, 3];
console.log(array.constructor === Array); // true
console.log(Object.getPrototypeOf(array) === Array.prototype); // true

// 배열은 객체지만 일반 객체와는 구별되는 특징이 있다.
// 구분           | 객체                 | 배열
// ----------------------------------------------------
// 구조           | 프로퍼티 키와 프로퍼티 값 | 인덱스와 요소
// 값의 참조       | 프로퍼티 키            | 인덱스
// 값의 순서       | 없음                 | 있음
// length 프로퍼티 | 없음                 | 있음

// 일반 객체와 배열을 구분하는 가장 명확한 차이는 '값의 순서'와 'length 프로퍼티'다
// 인덱스로 표현되는 값의 순서와 length 프로퍼티를 갖는 배열은 반복문을 통해 순차적으로 값에 접근하기 적합한 자료구조다.

// 반복문으로 자료구조를 순서대로 순회하기 위해서는
// 자료구조의 요소에 순서대로 접근할 수 있어야 하며
// 자료구조의 길이를 알 수 있어야 한다.
for (let i = 0; i < array.length; i++ ) {
    console.log(array[i]); // 1 2 3
}

// 배열의 장점
// 처음부터 순차적으로 요소에 접근할 수도 있다.
// 마지막부터 역순으로 요소에 접근할 수도 있다.
// 특정 위치부터 순차적으로 요소에 접근할 수도 있다.
// 가능한 이유: 값의 순서(인덱스)와 length 프로퍼티를 갖기 때문에



// 👉 자바스크립트 배열은 배열이 아니다
// 자료구조에서 말하는 배열은 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료구조를 말한다.
// 즉, 배열의 요소는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다.
// = 밀집 배열(dense array)

// 이처럼 일반적인 의미의 배열은 인덱스를 통해 단 한 번의 연산으로 임의의 요소에 접근할 수 있다. (매우 효율적, 고속)
// 하지만 정렬되지 않은 배열에서 특정한 요소를 검색하는 경우 배열의 모든 요소를 처음부터 특정 요소를 발견할 때까지 차례대로 겁색해야한다.
// 또한 배열에 요소를 삽입하거나 삭제하는 경우 배열의 요소를 연속적으로 유지하기 위해 요소를 이동시켜야 하는 단점도 있다.

// 자바스크립트의 배열은 자료구조에서 말하는 일반적인 의미의 배열과 다르다.
// 배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며,
// 연속적으로 이어져 있지 않을 수도 있다.
// = 희소 배열(spare array)

// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체다.
console.log(array);
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
//  {
//      0: {value: 1, writable: true, enumerable: true, configurable: true}
//      1: {value: 2, writable: true, enumerable: true, configurable: true}
//      2: {value: 3, writable: true, enumerable: true, configurable: true}
//      length: {value: 3, writable: true, enumerable: false, configurable: false}
//      [[Prototype]]: Object
//  }

// 이처럼 자바스크립트 배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 가지며, length 프로퍼티를 갖는 특수한 객체다.
// 자바스크립트 배열의 요소는 사실 프로퍼티 값이다.
// 자바스크립트에서 사용할 수 있는 모든 값은 객체의 프로퍼티 값이 될 수 있으므로 어떤 타입의 값이라도 배열의 요소가 될 수 있다.

const arr2 = [
    'string',
    10,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [ ],
    { },
    function () {},
];

// 일반적인 배열은 인덱스로 요소에 빠르게 접근할 수 있다.
// 하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 효율적이지 않다.
// 자바스크립트 배열은 해시 테이블로 구현된 객체이므로 인덱스로 요소에 접근하는 경우 일반적인 배열보다 성능적인 면에서 느릴 수밖에 없는 구조적인 단점이 있다.
// 하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대할 수 있다.

const arr3 = [];
console.time('배열 성능 테스트');
for (let i = 0; i < 10000000; i++) {
    arr3[i] = i;
}
console.timeEnd('배열 성능 테스트'); // 200ms대

const obj = {};
console.time('객체 성능 테스트');
for (let i = 0; i < 10000000; i++) {
    obj[i] = i;
}
console.timeEnd('객체 성능 테스트'); // 400ms대

// 위와 같이 배열과 일반 객체의 성능을 테스트해 보면 배열이 일반 객체보다 약 2배 빠르다는 것을 알 수 있다.



// 👉 length 프로퍼티와 희소 배열
// length 프로퍼티는 배열의 요소의 개수(배열의 길이)를 나타내는 0이상의 정수를 값으로 갖는다.
// length 프로퍼티의 값은 빈 배열일 경우 0, 빈 배열이 아닐 경우 가장 큰 인덱스에 1을 더한 것과 같다.
console.log([].length); // 0
console.log([1, 2, 'haha'].length); // 3

// length 프로퍼티의 값은 0과 2의32승 - 1(4,294,967,296 - 1) 미만의 양의 정수다.
// 배열은 요소를 최대 2의32승 - 1(4,294,967,296 - 1)개 가질 수 있다.
// 따라서 배열에서 사용할 수 있는 가장 작은 인덱스는 0이며, 가장 큰 인덱스는 2의32승 - 1(4,294,967,296 - 1)다.
// 42억 9천 4백 9십 6만 7천 2백 9십 5개

// length 프로퍼티의 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.
const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.length); // 5

// 요소 추가
arr4.push(6);
// 요소를 추가하면 length 프로퍼티의 값이 자동 갱신된다.
console.log(arr4.length); // 6

// 요소 삭제
arr4.pop();
// 요소를 삭제하면 length 프로퍼티의 값이 자동 갱신된다.
console.log(arr4.length); // 5

// ❕ length 프로퍼티 값은 요소의 개수, 즉 배열의 길이를 바탕으로 결정되지만
// 임의의 숫자 값을 명시적으로 할당할 수도 있다.
// 현재 length 프로퍼티 값보다 작은 숫자 값을 할당하면 배열의 길이가 줄어든다.
console.log(arr4.length); // 5
arr4.length = 2;
// 배열의 길이가 5에서 2로 줄어든다.
console.log(arr4); // [1, 2]

//❕ 주의할 것은 현재 length 프로퍼티 값보다 큰 숫자 값을 할당하는 경우다.
// 이때 length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않는다.
const arr5 = [1];
arr5.length = 10;
console.log(arr5.length); // 10
console.log(arr5); // [1, 비어 있음 × 9]
// 위 예제의 출력 결과에서 비어 있음 × 9는 실제로 추가된 배열의 요소가 아니다.
// 즉, arr5[2], arr5[3], ... arr5[9], arr5[10]에는 값이 존재하지 않는다.

// 이처럼 현재 length 프로퍼티 값보다 큰 숫자 값을 length 프로퍼티에 할당하는 경우
// length 프로퍼티 값은 성공적으로 변경되지만 실제 배열에는 아무 변화가 없다.
// 값 없이 비어 있는 요소를 위해 메모리 공간을 확보하지 않으며 빈 요소를 생성하지도 않는다.

console.log(Object.getOwnPropertyDescriptors(arr5));
//  {
//      0: {value: 1, writable: true, enumerable: true, configurable: true}
//      length: {value: 10, writable: true, enumerable: false, configurable: false}
//      [[Prototype]]: Object
//  }

// 희소 배열: 이처럼 배열의 요소가 연속적으로 위치하지 않고 일부가 비어 있는 배열
// 자바스크립트는 문법적으로 희소 배열을 허용한다.
// 위 예제는 배열의 뒷부분만 비어 있어서 요소가 연속적으로 위치하는 것처럼 보일 수 있으나 중간이나 앞부분이 비어 있을 수도 있다.

// 희소 배열
// sparse : 희박한, 드문, 빈, 듬성듬섬
const sparse = [ , 2, , 4];

// ❕ 희소 배열의 length 프로퍼티 값은 요소의 개수와 일치하지 않는다.
console.log(sparse.length); // 4
console.log(sparse); // [비어 있음, 2, 비어 있음, 4]

// 배열 sparse에는 인덱스가 0, 3인 요소가 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(sparse));
// {
//     1: {value: 2, writable: true, enumerable: true, configurable: true}
//     3: {value: 4, writable: true, enumerable: true, configurable: true}
//     length: {value: 4, writable: true, enumerable: false, configurable: false}
//     [[Prototype]]: Object
// }

// 일반적인 배열의 length는 배열 요소의 개수, 즉 배열의 길이와 언제나 일치한다.
// 하지만 희소 배열은 length와 배열 요소의 개수가 일치하지 않는다.
// 희소 배열의 실제 요소 개수보다 언제나 크다.

// 자바스크립트는 문법적으로 희소 배열을 허용하지만 사용하지 않는 것이 좋다.
// 희소 배열은 연속적인 값의 집합이라는 배열의 기본적인 개념과 맞지 않으며, 성능에도 좋지 않은 영향을 준다.

// 배열을 생성할 경우에는 희소 배열을 생성하지 않도록 주의하자.
// 배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선이다.



// 👉 배열 생성
// 📌 배열 리터럴
// 객체와 마찬가지로 배열도 다양한 생성 방식이 있다.
// 배열 리터럴: 가장 일반적이고 간편한 배열 생성 방식
// 배열 리터럴은 0개 이상의 요소를 쉼표로 구분하여 대괄호[]로 묶는다.
// 배열 리터럴은 객체 리터럴과 달리 프로퍼티 키가 없고 값만 존재한다.
{
    const arr = [1, 2, 3];
    console.log(arr.length); // 3
}

// 배열 리터럴에 요소를 하나도 추가하지 않으면 배열의 길이, 즉 length 프로퍼티 값이 0인 빈 배열이 된다.
{
    const arr = [];
    console.log(arr.length); // 0
}

// 배열 리터럴에 요소를 생략하면 희소 배열이 생성된다.
{
    const arr = [1, , 3];
    // 희소 배열의 length는 배열의 실제 요소 개수보다 언제나 크다
    console.log(arr.length); // 3
    console.log(arr); // [1, 비어 있음, 3]
    console.log(arr[1]); // undefined
}
// arr은 인덱스가 1인 요소를 갖지 않는 희소 배열이다.
// arr[1]이 undefined인 이유는 사실은 객체인 arr에 프로퍼티 키가 '1'인 프로퍼티가 존재하지 않기 때문이다.

// 📌 Array 생성자 함수
// Array 생성자 함수를 통해 배열을 생성할 수도 있다.
// Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작하므로 주의가 필요하다.

// 전달된 인수가 1개이고 숫자인 경우) length 프로퍼티 값이 인수인 배열을 생성한다.
{
    const arr = new Array(7);
    console.log(arr); // [비어 있음 × 7]
    console.log(arr.length); // 7

    // 이때 생성된 배열은 희소 배열이다.
    // length 프로퍼티 값은 0이 아니지만 실제 배열의 요소는 존재하지 않는다.
    console.log(Object.getOwnPropertyDescriptors(arr));
    //  {
    //     length: {value: 7, writable: true, enumerable: false, configurable: false}
    //     [[Prototype]]: Object
    //  }

    // 배열은 요소를 최대 2의32승 - 1(4,294,967,296 - 1)개 가질 수 있다.
    // 따라서 Array 생성자 함수에 전달할 인수는 0 또는 2의32승 - 1(4,294,967,296 - 1) 이하인 양의 정수이어야 한다.
    // 전달된 인수가 범위를 벗어나면 RangeError가 발생한다.
    new Array(4294967295);
    // new Array(4294967296); // RangeError: Invalid array length
    // new Array(-1); // RangeError: Invalid array length
}

// 전달된 인수가 없는 경우) 빈 배열을 생성한다.
// 배열 리터럴 []과 같다
{
    console.log(new Array()); // []
}

// 전달된 인수가 2개 이상이거나 숫자가 아닌 경우)
// 인수를 요소로 갖는 배열을 생성한다.
{
    // 전달된 인수가 2개 이상
    console.log(new Array(1, 2, 3)); // [1, 2, 3]
    // 전달된 인수가 1개이지만 숫자가 아님
    console.log(new Array({})); // [{}]
}

// Array 생성자 함수는 new 연산자와 함께 호출하지 않더라도
// 즉 일반 함수로서 호출해도 배열을 생성하는 생성자 함수로 동작한다.
// 이는 Array 생성자 함수 내부에서 new.target을 확인하기 때문이다.
{
    console.log(Array(1, 3, 4)); // [1, 3, 4]
}

// 📌 Array.of
// ES6에서 도입된 Array.of 메서드는 전달된 인수를 요소로 갖는 배열을 생성한다.
// Array 생성자 함수와 다르게 전달된 인수가 1개이고 숫자이더라도 인수를 요소를 갖는 배얄을 생성한다.
{
    console.log(Array.of(1)); // [1]
    console.log(Array.of(1, 2, 3)); // [1, 2, 3]
    console.log(Array.of('string')); // ['string']
}

// 📌 Array.from
// Array.from(arrayLike[, mapFn[, thisArg]])
// 매개변수 arrayLike: 배열로 변환하고자 하는 유사 배열 객체나 반복 가능한 객체
// 매개변수 mapFn: 배열의 모든 요소에 대해 호출할 맵핑 함수
// 매개변수 thisArg: mapFn 실행 시에 this로 사용할 값
// 유사배열객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다.
{
    console.clear();
    console.log(Array.from({ length: 2, 0: 'a', 1: 'b' })); // ['a', 'b']

    // 문자열은 이터러블이다.
    console.log(Array.from('hello')); // ['h', 'e', 'l', 'l', 'o']

    // Array.from을 사용하면 두 번째 인수로 전달한 콜백 함수를 통해 값을 만들면서 요소를 채울 수 있다.
    // Array.from 메서드는 두 번째 인수로 전달한 콜백 함수에 첫 번째 인수에 의해 생성된 배열의 요소값과 인덱스를 순차적으로 전달하면서 호출하고, 콜백 함수의 반환값으로 구성된 배열을 반환한다.

    // Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다.
    console.log(Array.from({length: 3})); // [undefined, undefined, undefined]

    // Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다.
    console.log(Array.from({length: 3}, (v, i) => i)); // [0, 1, 2]
    console.log(Array.from({length: 3}, (v, i) => v)); // [undefined, undefined, undefined]
}

// 유사 배열 객체와 이터러블 객체
// 유사 배열 객체(array-like object)는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고, length 프로퍼티를 갖는 객체를 말한다.
// 유사 배열 객체는 배열처럼 for문으로 순회할 수 있다.
{
    const arrayLike = {
        0: 'apple',
        1: 'banana',
        2: 'cherry',
        length: 3
    };

    for (let i = 0; i < arrayLike.length; i++) {
        console.log(arrayLike[i]); // apple banana cherry
    }
}
// 이터러블 객체(iterable object)는 Symbol.iterator 메서드를 구현하여 for...of 문으로 순회할 수 있으며,
// 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있는 객체를 말한다.



// 👉 배열 요소의 참조
// 배열의 요소를 참조할 때에는 대괄호[] 표기법을 사용한다.
// 대괄호 안에는 인덱스가 있어야 한다.
// 정수로 평가되는 표현식이라면 인덱스 대신 사용할 수 있다.
// 인덱스는 값을 참조할 수 있다는 의미에서 객체의 프로퍼티 키와 같은 역할을 한다.
{
    const arr = [1, 2];

    // 인덱스가 0인 요소를 참조
    console.log(arr[0]); // 1
    // 인덱스가 1인 요소를 참조
    console.log(arr[1]); // 2

    // 존재하지 않는 요소에 접근하면 undefined를 반환한다.
    console.log(arr[2]); // undefined

    // 배열은 사실 인덱스를 나타내는 문자열을 프로퍼티 키로 갖는 객체다.
    // 따라서 존재하지 않는 프로퍼티 키로 객체에 접근했을 때 undefined를 반환하는 것처럼, 배열도 존재하지 않는 요소를 참조하면 undefined를 반환한다.
    // 같은 이유로 희소 배열의 존재하지 않는 요소를 참조해도 undefined를 반환한다.
    const sparseArr = [1, , 3];
    // 배열 sparseArr에는 인덱스가 1인 요소가 존재하지 않는다.
    console.log(Object.getOwnPropertyDescriptors(sparseArr));
    // {
    //     0: {value: 1, writable: true, enumerable: true, configurable: true}
    //     2: {value: 3, writable: true, enumerable: true, configurable: true}
    //     length: {value: 3, writable: true, enumerable: false, configurable: false}
    //     [[Prototype]]: Object
    // }

    // 존재하지 않는 요소를 참조하면 undefined가 반환된다.
    console.log(sparseArr[1]); // undefined
    console.log(sparseArr[5]); // undefined
}


// 👉 배열 요소의 추가와 갱신
// 객체에 프로퍼티를 동적으로 추가할 수 있는 것처럼 배열에도 요소를 동적으로 추가할 수 있다.
// 배열에 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가된다.
// 이때 length 프로퍼티는 자동으로 갱신된다.
{
    const arr = [0];

    console.log(arr); // [0]
    console.log(arr.length); // 1

    // 배열 요소의 추가
    arr[1] = 2;

    console.log(arr); // [0, 2]
    console.log(arr.length); // 2
}

// 만약 현재 배열의 length 프로퍼티의 값보다 큰 인덱스로 새로운 요소를 추가하면 희소 배열이 된다.
{
    const arr = [0];

    arr[100] = 100;

    console.log(arr); // [0, 비어 있음 × 99, 100]
    console.log(arr.length) // 101

    // 인덱스로 요소에 접근하여 명시적으로 값을 할당하지 않은 요소는 생성되지 않는다.
    console.log(Object.getOwnPropertyDescriptors(arr));
    //  {
    //      0: {value: 0, writable: true, enumerable: true, configurable: true}
    //      100: {value: 100, writable: true, enumerable: true, configurable: true}
    //      length: {value: 101, writable: true, enumerable: false, configurable: false}
    //      [[Prototype]]: Object
    //  }

    // 이미 요소가 존재하는 요소에 값을 재할당하면 요소값이 갱신된다.
    arr[0] = 5;
    console.log(arr); // [5, 비어 있음 × 99, 100]
}

// 인덱스는 요소의 위치를 나타내므로 반드시 0 이상의 정수(또는 정수 형태의 문자열)를 사용해야 한다.
// 만약 정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다.
// 이때 추가된 프로퍼티는 length 프로퍼티 값에 영향을 주지 않는다.
{
    const arr = [];

    // 배열 요소 추가
    arr[0] = 1;
    arr['1'] = 2;

    // 프로퍼티 추가
    arr['foo'] = 3;
    arr.bar = 4;
    arr[1.1] = 5;
    arr[-1] = 6;

    console.log(arr); //  [1, 2, foo: 3, bar: 4, 1.1: 5, -1: 6]

    // 프로퍼티는 배열의 length에 영향을 주지 않는다.
    console.log(arr.length); // 2
}


// 👉 배열 요소의 삭제
// 배열은 사실 객체이기 때문에 배열의 특정 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다.
{
    const arr = [1, 2, 3];

    // 배열 요소의 삭제
    delete arr[1];
    console.log(arr); // [1, 비어 있음, 3]

    // length 프로퍼티에 영향을 주지 않는다. 즉, 희소 배열이 된다.
    console.log(arr.length); // 3
}

// delete 연산자는 객체의 프로퍼티를 삭제한다.
// 따라서 delete arr[1]은 arr에서 프로퍼티 키가 '1'인 프로퍼티를 삭제한다.
// 이때 배열은 희소 배열이 되며 length 프로퍼티 값은 변하지 않는다.
// 희소 배열을 만드는 delete 연산자는 사용하지 않는 것이 좋다.

// 희소 배열을 만들지 않으면서 배열의 특정 요소를 완전히 삭제하려면 Array.prototype.splice 메서드를 사용한다.
{
    const arr = [1, 2, 3];

    // Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 개수)
    // arr[1]부터 1개의 요소를 제거
    arr.splice(1, 1);

    console.log(arr); // [1, 3]
    console.log(arr.length); // 2
}


// 👉 배열 메서드
// 자바스크립트는 배열을 다룰 때 유용한 다양한 빌트인 메서드를 제공한다.
// Array 생성자 함수는 정적 메서드를 제공하며,
// Array.prototype은 프로토타입 메서드를 제공한다.

// ❕ 배열 메서드는 결과물을 반환하는 패턴이 두 가지이므로 주의가 필요하다.
// 원본 배열(배열 메서드를 호출한 배열)을 직접 변경하는 메서드(mutator mathod)와
// 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드(accessor method)가 있다.

// 원본 배열 변경하는 메서드:
// Array.prototype.push, Array.prototype.pop, Array.prototype.shift, Array.prototype.unshift, Array.prototype.splice,
// Array.prototype.reserve, Array.prototype.fill,
// 원본 배열 변경하지 않는 메서드:
// Array.isArray, Array.prototype.indexOf, Array.prototype.concat, Array.prototype.slice, Array.prototype.join,
// Array.prototype.includes, Array.prototype.flat

{
    const arr = [1];

    // push 메서드는 원본 배열(arr)을 직접 변경한다.
    arr.push(2);
    console.log(arr); // [1, 2]

    // concat 메서드는 원본 배열(arr)을 직접 변겨앟지 않고 새로운 배열을 생성하여 반환한다.
    const result = arr.concat(3);
    console.log(arr); // [1, 2]
    console.log(result); // [1, 2, 3]
}

// 📌 Array.isArray
// Array 생성자 함수의 정적 메서드
// 전달된 인수가 배열이면 true, 배열이 아니면 false를 반환한다.
{
    console.log(Array.isArray([])); // true
    console.log(Array.isArray([1, 2])); // true
    console.log(Array.isArray(new Array())); // true


    console.log(Array.isArray()); // false
    console.log(Array.isArray({})); // false
    console.log(Array.isArray(null)); // false
    console.log(Array.isArray(undefined)); // false
    console.log(Array.isArray(1)); // false
    console.log(Array.isArray('Array')); // false
    console.log(Array.isArray(true)); // false
    console.log(Array.isArray(false)); // false
    console.log(Array.isArray({0: 1, length: 1})); // false
}

// 📌 Array.prototype.indexOf
// 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.
// 인수로 전달된 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환한다.
// 인수로 전달된 요소가 존재하지 않으면 -1을 반환한다.
// 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인덱스를 생략하면 처음부터 검색한다.
{
    const arr = [1, 2, 2, 3];

    console.log(arr.indexOf(3)); // 3
    console.log(arr.indexOf(2)); // 1
    console.log(arr.indexOf(10)); // -1
    console.log(arr.indexOf(2, 2)); // 2
}

// indexOf 메서드는 배열에 특정 요소가 존재하는지 확인할 때 유용하다.
{
    const foods = ['apple', 'banana', 'cherry'];

    if (foods.indexOf('cherry') === -1) {
        foods.push('cherry');
    }

    console.log(foods); // ['apple', 'banana', 'cherry']
}

// indexOf 메서드 대신 ES7에서 도입된 Array.prototype.includes 메서드를 사용하면 가독성이 더 좋다.
{
    const foods = ['apple', 'banana', 'cherry'];

    if (!foods.includes('blueberry')) {
        foods.push('blueberry');
    }

    console.log(foods); // ['apple', 'banana', 'cherry', 'blueberry']
}


// 📌 Array.prototype.push
// push 메서드는 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고, 변경된 length 프로퍼티 값을 반환한다.
// 원본 배열을 직접 변경한다.
{
    const arr = [1, 2];

    let result = arr.push(3, 4);
    console.log(result); // 4

    // push 메서드는 원본 배열을 직접 변경한다.
    console.log(arr); // [1, 2, 3, 4]
}

// push 메서드는 성능 면에서 좋지 않다.
// 마지막 요소로 추가할 요소가 하나뿐이라면 push 메서드를 사용하지 않고 length 프로퍼티를 사용하여 배열의 마지막에 요소를 직접 추가할 수도 있다.
// 이 방법이 push 메서드보다 빠르다.
{
    const arr = [1, 2];

    // arr.push(3)과 동일한 처리를 한다.
    arr[arr.length] = 3;

    console.log(arr); // [1, 2, 3]
}

// push 메서드는 원본 배열을 직접 변경하는 부수 효과가 있다.
// 따라서 push 메서드보다는 ES6의 스프레드 문법을 사용하는 편이 좋다.
{
    const arr = [1, 2];

    // ES6 스프레드 문법
    const newArr = [...arr, 3];

    console.log(newArr); // [1, 2, 3]
    console.log(arr); // [1, 2]
}


// 📌 Array.prototype.pop
// pop 메서드는 배열의 마지막 요소를 제거하고, 제거한 요소를 반환한다.
// 원본 배열이 빈 배열이면 undefined를 반환한다.
// 원본 배열을 직접 변경한다.
{
    const arr = [1, 2];

    let result = arr.pop();

    console.log(result); // 2
    console.log(arr); // [1]
}

// 📌 Array.prototype.unshift
// unshift 메서드는 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고, 변경된 length 프로퍼티 값을 반환한다.
// 원본 배열을 직접 변경한다.
{
    const arr = [1, 2];

    let result = arr.unshift(4, 5);

    console.log(result); // 4
    console.log(arr); // [4, 5, 1, 2]
}

// unshift 메서드는 원본 배열을 직접 변경하는 부수 효과가 있다.
// 따라서 unshift 메서드보다는 ES6의 스프레드 문법을 사용하는 편이 좋다.
{
    const arr = [1, 2];

    // ES6 스프레드 문법
    const newArr = [4, 5, ...arr];

    console.log(newArr); // [4, 5, 1, 2]
    console.log(arr); // [1, 2]
}

// 📌 Array.prototype.shift
// shift 메서드는 원본 배열에서 첫 번째 요소를 제거하고, 제거한 요소를 반환한다.
// 원본 배열이 빈 배열이면 undefined를 반환한다.
// 원본 배열을 직접 변경한다.
{
    const arr = [1, 2];

    let result = arr.shift();

    console.log(result); // 1
    console.log(arr); // [2]
}

// 📌 Array.prototype.concat
// concat 메서드는 인수로 전달된 값들(배열 또는 원시값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다.
// ❕ 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.
// 원본 배열을 변경하지 않는다.
{
    const arr1 = [1, 2];
    const arr2 = [3, 4];

    // 새로운 배열을 만들어 arr1의 마지막 요소로 arr2를 추가한다.
    let result = arr1.concat(arr2);
    console.log(result); // [1, 2, 3, 4]

    // 새로운 배열을 만들어 arr1의 마지막 요소로 3를 추가한다.
    result = arr1.concat(3);
    console.log(result); // [1, 2, 3]

    // 새로운 배열을 만들어 arr1의 마지막 요소로 arr2와 5를 추가한다.
    result = arr1.concat(arr2, 5);
    console.log(result); // [1, 2, 3, 4, 5]

    // 원본 배열은 변경되지 않는다.
    console.log(arr1); // [1, 2]
}

// push와 unshift 메서드는 concat 메서드로 대체할 수 있다.
// push와 unshift 메서드는 concat 메서드와 유사하게 동작하지만 다음과 같이 미묘한 차이가 있다.
// push와 unshift 메서드는 원본배열을 직접 변경한다. -> 원본 배열을 반드시 변수에 저장해 두어야한다.
// concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다. -> 반환값을 반드시 변수에 할당받아야 한다.
{
    const arr1 = [3, 4];

    // unshift 메서드는 원본 배열을 직접 변경한다.
    // 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
    arr1.unshift(1, 2);
    // unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있다.
    console.log(arr1); // [1, 2, 3, 4]

    // push 메서드는 원본 배열을 직접 변경한다.
    // 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
    arr1.push(5, 6);
    // push 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있다.
    console.log(arr1); // [1, 2, 3, 4, 5, 6]


    // unshift와 push 메서드는 concat 메서드로 대체할 수 있다.
    const arr2 = [3, 4];

    // concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
    // arr1.unshift(1, 2)는 다음과 같이 대체할 수 있다.
    let result = [1, 2].concat(arr2);
    console.log(result); // [1, 2, 3, 4]

    // arr1.push(5, 6)를 다음과 같이 대체할 수 있다.
    result = result.concat(5, 6);
    console.log(result); // [1, 2, 3, 4, 5, 6]
}

// 인수로 전달받은 값이 배열인 경우 push와 unshift 메서드는 배열을 그대로 원본 배열의 마지막/첫번째 요소로 추가하지만,
// concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 마지막 요소로 추가한다.
{
    const arr = [3, 4];

    // push와 unshift 메서드는 배열을 그대로 원본 배열의 마지막/첫번째 요소로 추가한다
    arr.unshift([1, 2]);
    arr.push([5, 6]);
    console.log(arr); // [[1, 2], 3, 4, [5, 6]]

    // concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 요소로 추가한다.
    let result = [1, 2].concat([3, 4]);
    result = result.concat([5, 6]);
    console.log(result); // [1, 2, 3, 4, 5, 6]
}

// concat 메서드는 ES6의 스프레드 문법으로 대체할 수 있다.
{
    let result = [1, 2].concat([3, 4]);
    console.log(result); // [1, 2, 3, 4]

    result = [...[1, 2], ...[3,4]];
    console.log(result); // [1, 2, 3, 4]
}
// ❕ 결론적으로 push/unshift 메서드와 concat 메서드를 사용하는 대신 ES6의 스프레드 문법을 일관성 있게 사용하는 것을 권장한다.


// 📌 Array.prototype.splice
// 위의 push, pop, unshift, shift 메서드는 모두 원본 배열을 직접 변경하고, 원본 배열의 처음이나 마지막에 요소를 추가하거나 제거한다.
// splice 메서드는 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거한다.
// 3개의 매개변수가 있으며, 원본 배열을 직접 변경한다.
// - start: 원본 배열의 요소를 제거하기 시작할 인덱스. 인덱스가 음수일 경우 배열의 끝에서의 인덱스. -1 -> 마지막요소
// - deleteCount: 제거할 요소의 개수, 0 -> 아무것도 제거하지 않음
// - items: 제거한 위치에 삽입할 요소들의 목록
{
    const arr = [1, 2, 3, 4];

    // 원본 배열의 인덱스 1부터 2개의 요소를 제거하고, 그자리에 새로운 요소 20, 30을 삽입한다.
    const result = arr.splice(1, 2, 20, 30);

    // 제거한 요소가 배열로 반환된다.
    console.log(result); // [2, 3]
    // splice 메서드는 원본 배열을 직접 변경한다.
    console.log(arr); // [1, 20, 30, 4]
}

// splice 메서드의 두 번째 인수, 즉 제거할 요소의 개수를 0으로 지정하면 아무런 요소도 제거하지 않고 새로운 요소를 삽입한다.
{
    const arr = [1, 2, 3, 4];

    const result = arr.splice(1, 0, 100, 200);

    console.log(result); // []
    console.log(arr); // [1, 100, 200, 2, 3, 4]
}

{
    const arr = [1, 2, 3, 4];

    const result = arr.splice(2, 1, 100, 200);

    console.log(result); // [3]
    console.log(arr); // [1, 2, 100, 200, 4]
}

// splice 메서드의 세 번째 인수, 즉 제거한 위치에 추가할 요소들의 목록을 전달하지 않으면 원본 배열에서 지정된 요소를 제거하기만 한다.
{
    const arr = [1, 2, 3, 4];

    const result = arr.splice(2, 1);

    console.log(result); // [3]
    console.log(arr); // [1, 2, 4]
}

// splice 메서드의 두 번째 인수, 즉 제거할 요소의 개수를 생략하면 첫 번째 인수로 전달된 시작 인덱스부터 모든 요소를 제거한다.
{
    const arr = [1, 2, 3, 4];

    const result = arr.splice(1);

    console.log(result); // [2, 3, 4]
    console.log(arr); // [1]
}

//  배열에서 특정 요소를 제거하려면 indexOf 메서드를 통해 특정 요소의 인덱스를 취득한 다음 splice 메서드를 사용한다
{
    const arr = ['a', 'b', 'c', 'a', 'b'];

    // 배열 array에서 item 요소를 제거한다. item 요소가 여러 개 존재하면 첫 번째 요소만 제거한다.
    function remove(array, item) {

        // 제거할 요소의 인덱스를 취득한다.
        const index = array.indexOf(item);

        // 제거할 item 요소가 존재하면 제거한다.
        if (index !== -1) {
            array.splice(index, 1);
        }

        return array;
    }

    console.log(remove(arr, 'b')); // ['a', 'c', 'a', 'b']
    console.log(remove(arr, 'z')); // ['a', 'c', 'a', 'b']
}

// filter 메서드를 사용하여 특정 요소를 제거할 수도 있다.
// 하지만 특정 요소가 중복된 경우 모두 제거된다.
{
    const arr = ['a', 'b', 'c', 'a', 'b'];

    function removeAll(array, item) {
        return array.filter(v => v !== item);
    }

    console.log(removeAll(arr, 'b')); // ['a', 'c', 'a']
}

// 📌 Array.prototype.slice
// ❕ slice 메서드는 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다.
// 원본 배열을 변경되지 않는다.
// - start: 복사를 시작할 인덱스
// - end: 복사를 종료할 인덱스, 이 인덱스에 해당하는 요소는 복사되지 않는다.
{
    const arr = [1, 2, 3];

    console.log(arr.slice(0, 2)); // [1, 2]
    console.log(arr); // [1, 2, 3]
}


// slice 메서드의 두 번째 인수(end)를 생략하면 첫 번째 인수(start)로 전달받은 인덱스로부터 모든 요소를 복사하여 배열로 반환한다.
{
    const arr = [1, 2, 3];

    // arr[1]부터 모든 요소를 복사한다.
    console.log(arr.slice(1)); // [2, 3]
}

// slice 메서드의 첫 번째 인수가 음수인 경우 배열의 끝에서부터 요소를 복사하여 배열로 반환한다.
{
    const arr = [1, 2, 3];

    console.log(arr.slice(-1)); // [3]
    console.log(arr.slice(-2)); // [2, 3]
    console.log(arr.slice(-3)); // [1, 2, 3]
}

// slice 메서드의 인수를 모두 생략하면 원본 배열의 복사본을 반환한다.
{
    const arr = [1, 2, 3];

    console.log(arr.slice()); // [1, 2, 3]
}

// 이때 생성된 복사본은 얕은 복사를 통해 생성된다.
{
    const todos = [
        {
            id: 1,
            content: 'HTML',
            completed: false
        },
        {
            id: 2,
            content: 'CSS',
            completed: true
        },
        {
            id: 3,
            content: 'JavaScript',
            completed: false
        },
    ];

    // 얕은 복사
    const _todos = todos.slice();

    // _todos와 todos는 참조값이 다른 별개의 객체다
    console.log(_todos === todos); // false

    // 배열 요소의 참조값이 같다. 즉 얕은 복사 되었다.
    console.log(_todos[0] === todos[0]);
}

// 얕은 복사와 깊은 복사
// slice 메서드, 스프레드 문법, Object.assign 메서드는 모두 얕은 복사를 수행한다.
// 깊은 복사를 위해서는 Lodash 라이브러리의 cloneDeep 메서드를 사용하는 것을 추천한다.

// 📌 Array.prototype.join
// join 메서드는 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열, 즉 구분자로 연결한 문자열을 반환한다.
// 구분자는 생략 가능하며 기본 구분자는 콤마(',')다.
// 원본 배열은 변경되지 않는다.
{
    const arr = [1, 2, 3, 4];

    // 기본 구분자는 콤마다, 콤마로 연결
    console.log(arr.join()); '1,2,3,4'
    // 빈 문자열로 연결
    console.log(arr.join('')); '1234'
    // -로 연결
    console.log(arr.join('-')); '1-2-3-4'
}

// 📌 Array.prototype.reverse
// reverse 메서드는 원본 배열의 순서를 반대로 뒤집는다.
// 이때 원본 배열이 변경된다.
{
    const arr = [1, 2, 3];
    const result = arr.reverse();

    console.log(result); // [3, 2, 1]
    console.log(arr); // [3, 2, 1]
}

// 📌 Array.prototype.fill
// ES6에서 도입된 fill 메서드는 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.
// 원본 배열이 변경된다.
{
    const arr = [1, 2, 3];

    const result = arr.fill(0);

    console.log(result); // [0, 0, 0]
    console.log(arr); // [0, 0, 0]
}

// 두 번째 인수로 요소 채우기를 시작할 인덱스를 전달할 수 있다.
{
    const arr = [1, 2, 3];

    arr.fill(0, 1);
    console.log(arr); // [1, 0, 0]
}

// 세 번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.
// 세 번째 인수의 인덱스 이전(해당 인덱스 미포함)까지 요소를 채운다.
{
    const arr = [1, 2, 3, 4, 5];

    arr.fill(0, 1, 3);
    console.log(arr); // [1, 0, 0, 4, 5]
}

// 배열을 생성하면서 특정 값으로 요소를 채울 수 있다.
{
    const arr = new Array(3);
    console.log(arr); // [비어 있음 × 3]

    const result = arr.fill(1);
    console.log(result); // [1, 1, 1]
    console.log(arr); // [1, 1, 1]
}

// fill 메서드로 요소를 채울 경우 모든 요소를 하나의 값만으로 채울 수밖에 없다는 단점이 있다.
// Array.from 메서드를 사용하면 두 번째 인수로 전달한 콜백 함수를 통해 요소 값을 만들면서 배열을 채울 수 있다.
// Array.from 메서드는 두 번째 인수로 전달한 콜백 함수에 첫 번째 인수에 의해 생성된 배열의 요소 값과 인덱스를 순차적으로 전달하면서 호출하고, 콜백 함수의 반환값으로 구성된 배열을 반환한다.
{
    const sequences = (length = 0) => Array.from({length}, (_, i) => i);
    console.log(sequences(3)); // [0, 1, 2]
}

// 📌 Array.prototype.includes
// ES7에서 도입된 includes 메서드는 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환한다.
// 첫 번째 인수로 검색할 대상을 지정한다.
// 두 번째 인수로 검색을 시작할 인덱스를 지정한다. 생략하면 기본값 0으로 설정된다.
{
    const arr = ['a', 'b', 'c'];

    console.log(arr.includes('a')); // true
    console.log(arr.includes(1)); // false
}

// 만약 두 번째 인수에 음수를 전달하면 length 프로퍼티 값과 음수 인덱스를 합산하여 검색 시작 인덱스를 설정한다.
{
    const arr = ['a', 'b', 'c'];

    // 배열에 요소 a가 포함되어 있는지 인덱스 1부터 확인한다.
    console.log(arr.includes('a', 1)); // false

    // 배열에 요소 c가 포함되어 있는지 인덱스 2(arr.length - 1)부터 확인한다.
    console.log(arr.includes('c', -1)); // false
}

// 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환하는 indexOf 메서드를 사용하여도 배열 내에 특정 요소가 포함되어 있는지 확인할 수 있다.
// 하지만 indexOf 메서드를 사용하면 반환값이 -1인지 확인해 보아야 하고, 배열에 NaN이 포함되어 있는지 확인할 수 없다는 문제가 있다.
{
    console.log([NaN].indexOf(NaN)); // -1 (없다는 뜻)
    console.log([NaN].includes(NaN)); // true
}

// 📌 Array.prototype.flat
// ES10에서 도입된 flat 메서드는 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화한다.
// 원본 배열은 변경되지 않는다.
{
    const arr = [1, [2, [3, [4, [5]]]]];
    const result = arr.flat();
    console.log(result); // [1, 2, [3, [4, [5]]]]
    console.log(arr); // [1, [2, [3, [4, [5]]]]] // 원본 배열은 변하지 않음

    // 중첩 배열을 평탄화할 깊이를 인수로 전달할 수 있다.
    // 인수를 생략할 경우 기본값은 1이다.
    // 인수로 Infinity를 전달하면 중첩 배열 모두를 평탄화한다.

    // 중첩 배열을 평탄화하기 위한 깊이 값의 기본값은 1이다.
    console.log([1, [2, [3, [4, [5]]]]].flat()); // [1, 2, [3, [4, [5]]]]
    console.log([1, [2, [3, [4, [5]]]]].flat(1)); // [1, 2, [3, [4, [5]]]]

    // 중첩 배열을 평탄화하기 위한 깊이 값을 2로 지정하여 2단계 깊이까지 평탄화한다.
    console.log([1, [2, [3, [4, [5]]]]].flat(2)); // [1, 2, 3, [4, [5]]]
    // 2번 평탄화한 것과 동일하다.
    console.log([1, [2, [3, [4, [5]]]]].flat().flat()); // [1, 2, 3, [4, [5]]]

    // 중첩 배열을 평탄화하기 위한 깊이 값을 Infinity로 지정하여 중첩 배열 모두를 평탄화한다.
    console.log([1, [2, [3, [4, [5]]]]].flat(Infinity)); // [1, 2, 3, 4, 5]
}


// 👉 배열 고차 함수
// ❕ 고차함수(High-Order Function, HOF): 함수를 인수로 전달받거나 함수를 반환하는 함수.
// 고차 함수는 외부 상태의 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반을 두고 있다.

// 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하고 상태 변경을 피하려는 프로그래밍 패러다임이다.
// 함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이려는 노력의 일환이라고 할 수 있다.

// Array.prototype.sort, Array.prototype.forEach, Array.prototype.map, Array.prototype.filter, Array.prototype.reduce,
// Array.prototype.some, Array.prototype.every, Array.prototype.find, Array.prototype.findIndex, Array.prototype.flapMap

// 📌 Array.prototype.sort
// sort 메서드는 배열의 요소를 정렬한다.
// 원본 배열을 직접 변경하며, 정렬된 배열을 반환한다.
// 기본적으로 오름차순으로 요소를 정렬한다.
{
    let arr = ['b', 'a', 'c'];

    console.log(arr.sort()); // ['a', 'b', 'c']
}

// 한글 문자열인 요소도 오름차순으로 정렬된다.
{
    const arr = ['다', '가', '나'];
    console.log(arr.sort()); // ['가', '나', '다']
}

// sort 메서드는 기본적으로 오름차순으로 요소를 정렬한다.
// 따라서 내림차순으로 정렬하려면 sort 메서드를 사용하여 요소를 오름차순으로 정렬한 뒤 reserve 메서드를 사용하여 요소의 순서를 뒤집는다.
{
    const arr = ['f', 'a', 'e', 'd', 'b', 'c'];

    // sort 메서드는 원본 배열을 직접 변경한다.
    console.log(arr.sort()); // ['a', 'b', 'c', 'd', 'e', 'f']

    // reserve 메서드도 원본 배열을 직접 변경한다.
    console.log(arr.sort().reverse()); // ['f', 'e', 'd', 'c', 'b', 'a']
}

// 문자열 요소로 이루어진 배열의 정렬은 아무런 문제가 없다.
// 하지만 숫자 요소로 이루어진 배열을 정렬할 때는 주의가 필요하다.
{
    const points = [40, 100, 1, 5, 2, 25, 10];

    points.sort();

    // 숫자 요소로 이루어진 배열은 의도한 대로 정렬되지 않는다.
    console.log(points); // [1, 10, 100, 2, 25, 40, 5]
}
// sort 메서드의 기본 정렬 순서는 유니코드 코드 포인트의 순서를 따른다.
// 배열의 요소가 숫자 타입이라 할지라도 배열의 요소를 일시적으로 문자열로 변환한 후 유니코드 코드 포인트의 순서를 기준으로 정렬한다.

// '1'의 유니코드 코드 포인트는 U+0031,  '2'의 유니코드 코드 포인트는 U+0032.
// 이처럼 문자열 '1' 의 유니코드 코드 포인트 순서가 문자열 '2'의 유니코드 코드 포인트 순서보다 앞서므로 문자열 배열 ['2', '1']을 sort 메서드로 정렬하면 ['1', '2']로 정렬된다.
{
    console.log(['2', '1'].sort()); // ['1', '2']
    console.log([2, 1].sort()); // [1, 2]
}

// 하지만 문자열 '10'의 유니코드 코드 포인트는 U+0031U+0030이다. 따라서 문자열 배열 ['2, '10']을 sort 메서드로 정렬하면
// 문자열 '10'의 유니코드 코드 포인트는 U+0031U+0030이 문자열 '2'의 유니코드 코드 포인트는 U+0032보다 앞서므로 ['10', '2']로 정렬된다.
// sort 메서드는 배열의 요소를 일시적으로 문자열로 변환한 후 정렬하므로 숫자 배열 [2, 10]을 sort 메서드로 정렬해도 [10, 2]로 정렬된다.
{
    console.log(['2', '10'].sort()); // ['10', '2']
    console.log([2, 10].sort()); // [10, 2]
}

// 따라서 숫자 요소를 정렬할 때는 sort 메서드에 정렬 순서를 정의하는 비교 함수를 인수로 전달해야 한다.
// 비교 함수는 양수나 음수 또는 0을 반환해야 한다.
// 비교 함수의 반환값이 0보다 작으면 비교 함수의 첫 번째 인수를 우선으로 정렬하고, 0이면 정렬하지 않으며, 0보다 크면 두 번째 인수를 우선하여 정렬한다.
{
    const points = [40, 100, 1, 5, 2, 25, 10];

    // 숫자 배열의 오름차순 정렬. 비교 함수의 반환값이 0보다 작으면 a를 우선으로 정렬한다.
    points.sort((a, b) => a - b);
    console.log(points); // [1, 2, 5, 10, 25, 40, 100]

    // 숫자 배열에서 최소/최대값 취득
    console.log(points[0], points[points.length - 1]); // 1 100

    // 숫자 배열의 내림차순 정렬. 비교 함수의 반환값이 0보다 크면 b를 우선으로 정렬한다.
    points.sort((a, b) => b - a);
    console.log(points); // [100, 40, 25, 10, 5, 2, 1]

    // 숫자 배열에서 최소/최대값 취득
    console.log(points[points.length - 1], points[0]); // 1 100
}

// 객체를 요소로 갖는 배열을 정렬하는 예제
{
    const todos = [
        {
            id: 4,
            content: 'JavaScript'
        },
        {
            id: 1,
            content: 'HTML'
        },
        {
            id: 2,
            content: 'CSS'
        },
    ];

    // id를 기준으로 오름차순 정렬
    // todos.sort((a, b) => a.id - b.id );
    // console.log(todos);
    // [
    //      0: {id: 1, content: 'HTML'}
    //      1: {id: 2, content: 'CSS'}
    //      2: {id: 4, content: 'JavaScript'}
    // ]

    // content를 기준으로 오름차순 정렬
    // ❕ 프로퍼티 값이 문자열인 경우 - 산술연산으로 비교하면 NaN이 나오므로 비교 연산을 사용하자.
    todos.sort((a, b) => a.content - b.content );
    console.log(todos[0].content - todos[1].content); // NaN


    // 비교 함수. 매개변수 key는 프로퍼티 키다.
    function compare(key) {
        // 프로퍼티 값이 문자열인 경우 - 산술연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
        // 비교 함수는 양수/음수/0을 반환하면 되므로 - 산술 연산 대신 비교 연산을 사용할 수 있다.
        return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
    }

    // id를 기준으로 오름차순 정렬
    todos.sort(compare('id'));
    console.log(todos);
    // [
    //      0: {id: 1, content: 'HTML'}
    //      1: {id: 2, content: 'CSS'}
    //      2: {id: 4, content: 'JavaScript'}
    // ]

    // content를 기준으로 오름차순 정렬
    todos.sort(compare('content'));
    console.log(todos);
    // [
    //      0: {id: 2, content: 'CSS'}
    //      1: {id: 1, content: 'HTML'}
    //      2: {id: 4, content: 'JavaScript'}
    // ]
}

// 📌 Array.prototype.forEach
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// - callback: 각 요소에 대해 실행할 함수. 다음 세 가지의 매개변수를 받는다.
//  -- currentValue: 처리할 현재 요소
//  -- index(Optional): 처리할 현재 요소의 인덱스.
//  -- array(Optional): forEach()를 호출한 배열
// - thisArg(Optional): callback을 실행할 때 this로 사용할 값.
// 반환값: undefined

// ❕ thisArg 매개변수를 forEach()에 제공한 경우 callback을 호출할 때 전달해 this의 값으로 쓰입니다.
// 전달하지 않으면 undefined를 사용하며, 최종 this 값은 함수의 this를 결정하는 평소 규칙을 따릅니다.

// 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임이다.
// 조건문이나 반복문은 로직의 흐름을 이해하기 어렵게 한다.
// 특히 for문은 반복을 위한 변수를 선언해야 하며 조건식과 증감식으로 이루어져 있어서 함수형 프로그래밍이 추구하는 바와 맞지 않는다.
{
    const numbers = [1, 2, 3];
    const pows = [];

    for (let i = 0; i < numbers.length; i++) {
        pows.push(numbers[i] ** 2);
    }

    console.log(pows); // [1, 4, 9]
}

// forEach 메서드는 for문을 대체할 수 있는 고차 함수다.
// forEach 메서드는 자신의 내부에서 반복문을 실행한다.
// 즉, forEach 메서드는 반복문을 추상화한 고차 함수로서, 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백 함수로 전달받아 반복 호출한다.
// for문으로 구현한 위 예제를 forEach 메서드로 구현하면 다음과 같다
{
    const numbers = [1, 2, 3];
    const pows = [];

    // forEach 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
    numbers.forEach(item => pows.push(item ** 2));
    console.log(pows);
}

// 위 예제의 경우 forEach 메서드는 numbers 배열의 모든 요소를 순회하며 콜백 함수를 반복 호출한다.
// numbers 배열의 요소가 3개이므로 콜백 함수도 3번 호출된다.
// 이때 콜백 함수를 호출하는 forEach 메서드는 콜백 함수에 인수를 전달할 수 있다.

// forEach 메서드는 콜백 함수를 호출할 때 3개의 인수, 즉
// 1) forEach 메서드를 호출한 배열의 요소값,
// 2) 인덱스,
// 3) forEach 메서드를 호출한 배열(this)
// 를 순차적으로 전달한다.
{
    [1, 2, 3].forEach((value, index, array) => {
        console.log(`요소값: ${value}, 인덱스: ${index}, this: ${JSON.stringify(array)}`);
    });

    // 요소값: 1, 인덱스: 0, this: [1,2,3]
    // 요소값: 2, 인덱스: 1, this: [1,2,3]
    // 요소값: 3, 인덱스: 2, this: [1,2,3]
}

// ❕ JSON.stringify 메서드
// JSON.stringify 메서드는 객체를 JSON 포맷의 문자열로 변환한다.
// 위 예제에서는 객체인 array를 문자열 형태로 출력하기 위해 사용했다.

// foreEach 메서드는 원본 배열(forEach 메서드를 호출한 배열, 즉 this)을 변경하지 않는다.
// 하지만 콜백 함수를 통해 원본 배열을 변경할 수는 있다.
{
    const numbers = [1, 2, 3];

    // 콜백 함수의 세 번째 매개변수 arr은 원본 배열 numbers를 가리킨다.
    // 따라서 콜백 함수의 세 번째 매개변수 arr을 직접 변경하면 원본 배열 numbers가 변경된다.
    numbers.forEach((v, i, a) => a[i] = v ** 2);
    console.log(numbers); // [1, 4, 9]
}

// forEach 메서드의 반환값은 언제나 undefined다.
{
    const result = [1, 2, 3].forEach(console.log);
    console.log(result); // undefined
}

// forEach 메서드의 두 번째 인수로 forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
{
    class Numbers {
        numberArray = [];

        multiply(arr) {
            arr.forEach(function (v) {
                this.numberArray.push(v * v);
            });
        }
    }

    const numbers = new Numbers();
    // numbers.multiply([1, 2, 3]); // TypeError: Cannot read properties of undefined (reading 'numberArray')
}

// forEach 메서드의 콜백 함수는 일반 함수로 호출되므로 콜백 함수 내부의 this는 undefined를 가리킨다.
// this는 전역 객체가 아닌 undefined를 가리키는 이유는 클래스 내부의 모든 코드에는 암묵적으로 strict mode가 적용되기 때문이다.

// forEach 메서드의 콜백 함수 내부의 this와 multiply 메서드 내부의 this를 일치시키려면 forEach 메서드의 두 번째 인수로 forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달한다.
// 아래의 예제의 경우 forEach 메서드의 두 번째 인수로 multiply 메서드 내부의 this를 전달하고 있다.
{
    class Numbers {
        numberArray = [];

        multiply(arr) {
            arr.forEach(function (v) {
                this.numberArray.push(v * v);
            }, this); // forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달
        }
    }

    const numbers = new Numbers();
    numbers.multiply([1, 2, 3]);
    console.log(numbers.numberArray); // [1, 4, 9]
}

// 더 나은 방법은 ES6의 화살표 함수를 사용하는 것이다.
// 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.
// 화살표 함수 내부에서 this를 참조하면 상위 스코프, 즉 multiply 메서드 내부의 this를 그대로 참조한다.
{
    class Numbers {
        numberArray = [];

        multiply(arr) {
            // 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.
            arr.forEach(v => this.numberArray.push(v * v));
        }
    }

    const numbers = new Numbers();
    numbers.multiply([1, 2, 3]);
    console.log(numbers.numberArray) // [1, 4, 9]
}

// forEach 메서드도 내부에서는 반복문(for문)을 통해 배열을 순회할 수밖에 없다.
// 단, 반복문을 메서드 내부로 은닉하여 로직의 흐름을 이해하기 쉽게 하고 복잡성을 해결한다.

// forEach 메서드는 for문과는 달리 break, continue 문을 사용할 수 없다.
// 배열의 모든 요소를 빠짐없이 모두 순회하며 중간에 순회를 중단할 수 없다.
{
    [1, 2, 3].forEach(v => {
        console.log(v);
        if (v > 1) {
            // break; // SyntaxError: Illegal break statement
        }
    });

    [1, 2, 3].forEach(v => {
        console.log(v);
        if (v > 1) {
             // continue; // SyntaxError: Illegal continue statement: no surrounding iteration statement
        }
    });
}

// 희소 배열의 경우 존재하지 않는 요소는 순회 대상에서 제외된다.
{
    const arr = [1, , 3];
    // for문으로 희소 배열을 순회
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); // 1 undefined 3
    }

    // ❕ forEach 메서드는 희소 배열의 존재하지 않는 요소를 순회 대상에서 제외한다
    arr.forEach(v => console.log(v)); // 1 3
}

// forEach 메서드는 for문에 비해 성능이 좋지는 않지만 가독성은 더 좋다.
// 따라서 요소가 대단히 많은 배열을 순회하거나 시간이 많이 걸리는 복잡한 코드 또는 높은 성능이 필요한 경우가 아니라면 for문 대신 forEach 메서드를 사용할 것을 권장한다.


// 📌 Array.prototype.map
// map 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다.
// ❕ 그리고 콜백 함수들의 반환값으로 구성된 새로운 배열을 반환한다.
// 이때 원본 배열은 변경되지 않는다.
{
    const numbers = [1, 4, 9];

    const roots = numbers.map(v => Math.sqrt(v));
    // 위 코드는 다음과 같다
    // const roots = numbers.map(Math.sqrt);

    // map 메서드는 새로운 배열을 반환한다.
    console.log(roots); // [1, 2, 3]
    // map 메서드는 원본 배열을 변경하지 않는다.
    console.log(numbers); // [1, 4, 9]
}

// ❕ forEach 메서드와 map 메서드의 공통점은 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다는 것이다.
// 하지만 forEach 메서드는 언제나 ㅕndefined를 반환하고, map 메서드는 콜백 함수의 반환값들로 구성된 새로운 배열을 반환하는 차이가 있다.
// 즉, forEach 메서드는 단순히 반복문을 대체하기 위한 고차 함수이고, map 메서드는 요소값을 다른 값으로 매핑(mapping)한 새로운 배열을 생성하기 위한 고차 함수다.

// map 메서드가 생성하여 반환하는 새로운 배열의 length 프로퍼티 값은
// map 메서드를 호출한 배열의 length 프로퍼티 값과 반드시 일치한다.
// ❕ 즉, map 메서드를 호출한 배열과 map 메서드가 생성하여 반환한 배열은 1:1 매핑한다.

// map 메서드의 콜백 함수는 forEach 메서드와 마찬가지로 map 메서드를 호출한 배열의 요소값, 인덱스, map 메서드를 호출한 배열 자체(this)를 순차적으로 전달받을 수 있다.
{
    [1, 2, 3].map((v, i, array) => {
        console.log(`요소값: ${v}, 인덱스: ${i}, this: ${JSON.stringify(array)}`);
        return v;
    });
    // 요소값: 1, 인덱스: 0, this: [1,2,3]
    // 요소값: 2, 인덱스: 1, this: [1,2,3]
    // 요소값: 3, 인덱스: 2, this: [1,2,3]
}

// forEach 메서드와 마찬가지로 map 메서드의 두 번째 인수로 map 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
{
    class Prefixer {
        constructor(prefix) {
            this.prefix = prefix;
        }

        add(arr) {
            return arr.map(function (v) {
                return this.prefix + v;
            }, this);
        }
    }

    const prefixer = new Prefixer('-webkit-');
    console.log(prefixer.add(['transition', 'user-select'])); // ['-webkit-transition', '-webkit-user-select']
}

// 더 나은 방법은 ES6의 화살표 함수를 사용하는 것이다.
// 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.
// 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프, 즉 add 메서드 내부의 this를 그대로 참조한다.
{
    class Prefixer {
        constructor(prefix) {
            this.prefix = prefix;
        }

        add(arr) {
            return arr.map(v => this.prefix + v);
        }
    }

    const prefixer = new Prefixer('-webkit-');
    console.log(prefixer.add(['transition', 'user-select'])); // ['-webkit-transition', '-webkit-user-select']
}


// 📌 Array.prototype.filter
// filter 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다.
// ❕ 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
// 이때 원본 배열은 변경되지 않는다.
{
    const numbers = [1, 2, 3, 4, 5];

    // filter 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
    // 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
    // 다음의 경우 numbers 배열에서 홀수인 요소만 필터링한다(1은 true로 평가된다)
    const odds = numbers.filter(v => v % 2);
    console.log(odds); // [1, 3, 5]
}

// forEach, map 메서드와 마찬가지로 filter 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다.
// forEach 메서드는 언제나 undefined를 반환하고, map 메서드는 콜백 함수의 반호나값들로 구성된 새로운 배열을 반환하지만,
// filter 메서드는 콜백 함수의 반환값이 true인 요소만 추출한 새로운 배열을 반환한다.

// ❕ filter 메서드는 자신을 호출한 배열에서 필터링 조건을 만족하는 특정 요소만 추출하여 새로운 배열을 만들고 싶을 때 사용한다.
// filter 메서드가 생서앟여 반환한 새로운 배열의 length 프로퍼티 값은 filter 메서드를 호출한 배열의 length 프로퍼티 값과 같거나 같다.
{
    // forEach, map 메서드와 마찬가지로 filter 메서드의 콜백 함수는 filter 메서드를 호출한 배열의 요소값과 인덱스, filter 메서드를 호출한 배열 자체(this)를 순차적으로 전달받을 수 있다.
    [1, 2, 3].filter((v, i, array) => {
        console.log(`요소값: ${v}, 인덱스: ${i}, this: ${JSON.stringify(array)}`);
        return v % 2;
    });
    // 요소값: 1, 인덱스: 0, this: [1,2,3]
    // 요소값: 2, 인덱스: 1, this: [1,2,3]
    // 요소값: 3, 인덱스: 2, this: [1,2,3]
}

// forEach, map 메서드와 마찬가지로 filter 메서드의 두 번째 인수로 filter 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
// 더 나은 방법은 화살표 함수를 사용하는 것이다.

// filter 메서드는 자신을 호출한 배열에서 특정 요소를 제거하기 위해 사용할 수도 있다.
{
    class Users {
        constructor() {
            this.users = [
                {
                    id: 1,
                    name: 'Lee'
                },
                {
                    id: 2,
                    name: 'Kim'
                },
            ];
        }

        // 요소 추출
        findById(id) {
            // id가 일치하는 사용자만 반환한다.
            return this.users.filter(user => user.id === id);
        }

        // 요소 제거
        remove(id) {
            // id가 일치하지 않는 사용자를 제거한다.
            this.users = this.users.filter(user => user.id !== id);
        }
    }

    const users = new Users();
    let user = users.findById(1);
    console.log(user); // [{id: 1, name: 'Lee'}]

    // id가 1인 사용자를 제거한다.
    users.remove(1);

    user = users.findById(1); // []
    console.log(user);
}

// filter 메서드는 사용해 특정 요소를 제거할 경우 특정 요소가 중복되어 있다면 중복된 요소가 모두 제거된다.
// 특정 요소 하나만 제거하려면 indexOf 메서드를 통해 특정 요소의 인덱스를 취득한 다음 splice 메서드를 사용한다.


// 📌 Array.prototype.reduce
// reduce 메서드는 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값을 다음 순회 시에 콜백 함수의 첫 번째 인수로 전달하면서 콜백 함수를 호출하여 하나의 결과값을 만들어 반환한다.
// 이때 원본 배열은 변경되지 않는다.

// reduce 메서드는 첫 번째 인수로 콜백함수, 두 번째 인수로 초기값을 전달받는다.
// reduce 메서드의 콜백 함수에는 4개의 인수, 초기값 또는 콜백 함수의 이전 반환값, reduce 메서드를 호출한 배열의 요소값과 인덱스, reduce 메서드를 초훌한 배열 자체(this)가 전달된다.

// 이 예제의 reduce 메서드는 2개의 인수, 즉 콜백 함수와 초기값 0을 전달받아 자신을 호출한 배열의 모든 요소를 누적한 결과를 반환한다.
{
    // 1부터 4까지의 누적을 구한다.
    const sum = [1, 2, 3, 4].reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 0);

    console.log(sum); // 10
}

// reduce 메서드의 콜백 함수는 4개의 인수를 전달받아 배열의 length만큼 총 4회 호출된다.
// 이처럼 reduce 메서드는 초기값과 배열의 첫 번째 요소값을 콜백 함수에게 인수로 전달하면서 호출하고,
// 다음 순회에는 콜백 함수의 반환값과 두 번째 요소값을 콜백 함수의 인수로 전달하면서 호출한다.
// 이러한 과정을 반복하여 reduce 메서드는 하나의 결과값을 반환한다.

// reduce 메서드는 자신을 호출한 배열의 모든 요소를 순회하며 하나의 결과값을 구해야 하는 경우에 사용한다.

// 🌷 평균 구하기
{
    const value = [1, 2, 3, 4, 5, 6];

    const average = value.reduce((previousValue, currentValue, currentIndex, array) => {
        // 마지막 순회가 아니면 누적값을 반환하고, 마지막 순회면 누적값으로 평균을 구해 반환한다.
        return currentIndex === array.length - 1 ?  ( previousValue + currentValue ) / array.length : previousValue + currentValue;
    }, 0);

    console.log(average); // 3.5
}

// 🌷 최대값 구하기
{
    const value = [1, 2, 3, 4, 5];

    const max = value.reduce((pv, cv, ci, arr) => {
        return pv > cv ? pv : cv;
    }, 0);
    console.log(max); // 5
}

// 최대 값을 구할때는 reduce 메서드보다 Math.max 메서드를 사용하는 방법이 더 직관적이다.
{
    const values = [1, 2, 3, 4, 5];

    const max = Math.max(...values); // Math.max(1, 2, 3, 4, 5) 이런 형태로 들어가야해서 스프레드 문법 사용
    console.log(max); // 5
}

// 🌷 요소의 중복 횟수 구하기
{
    const fruits = ['🍌', '🍎', '🍊', '🍊', '🍎'];

    const count = fruits.reduce((pv, cv, ci, arr) => {

        // 첫 번째 순회 시 pv는 초기 값인 {}이고, cv는 첫 번째 요소인 '🍌'다.
        // 초기값으로 전달받은 빈 객체에 요소값인 cv를 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로 할당한다.
        // 만약 프로퍼티 값이 undefined(처음 등장하는 요소)이면 프로퍼티 값을 1로 초기화한다.
        pv[cv] = (pv[cv] || 0 ) + 1;
        return pv;
    }, {});

    console.log(count); // {🍌: 1, 🍎: 2, 🍊: 2}
}

{
    const test = {
        id: 1,
        name: 'yejin'
    };
    console.log(test.password, test['password']);// undefined undefined
    console.log(test.id, test['id']); // 1 1
}

// 🌷 중첩 배열 평탄화
{
    const values = [1, [2, 3], 4, [5, 6]];

    // concat 메서드는 인수로 전달받은 배열을 해체하여 원본 배열의 마지막 요소로 추가하여 만든 새로운 배열을 반환한다.
    const flatten = values.reduce((pv, cv, ci, arr) => pv.concat(cv), []);
    console.log(flatten); // [1, 2, 3, 4, 5, 6]
}

// 중첩 배열을 평탄화할 때는 reduce 메서드보다 ES10에서 도입된 Array.prototype.flat 메서드를 사용하는 방법이 더 직관적이다.
{
    console.log([1, [2, 3, 4, 5]].flat()); // [1, 2, 3, 4, 5]

    // flat메서드의 인수는 중첩 배열을 평탄화하기 위한 깊이 값이다.
    console.log([1, [2, 3, [4, [5]]]].flat(1)); // [1, 2, 3, [4, [5]]]
    console.log([1, [2, 3, [4, [5]]]].flat(2)); // [1, 2, 3, 4, [5]]
}

// 🌷 중복 요소 제거
{
    const value = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

    const result = value.reduce((pv, cv, ci, arr) => {
        // 순회 중인 요소의 인덱스가 자신의 인덱스라면 처음 순회하는 요소다.
        // 이 요소만 초기값으로 전달받은 배열에 담아 반환한다.
        // 순회 중인 요소의 인덱스가 자신의 인덱스가 아니라면 중복된 요소다.
        if(arr.indexOf(cv) === ci) {
            pv.push(cv);
        }
        return pv;
    }, []);
    console.log(result); // [1, 2, 3, 5, 4]
}

// 중복 요소를 제거할 때는 reduce 메서드보다 filter 메서드를 사용하는 방법이 더 직관적이다.
{
    const value = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

    // 순회 중인 요소의 인덱스가 자신의 인덱스라면 처음 순회하는 요소다. 이 요소만 필터링 한다.
    const result = value.filter((v, i, arr) => arr.indexOf(v) === i);
    console.log(result); // [1, 2, 3, 5, 4]
}

// 또는 중복되지 않는 유일한 값들의 집합인 Set을 사용할 수도 있다.
// 중복 요소를 제거할 때는 이 방법을 추천한다.
{
    const value = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

    const result = [...new Set(value)];
    console.log(result); // [1, 2, 3, 5, 4]
}

// 이처럼 map, filter, some, every, find 같은 모든 배열의 고차 함수는 reduce 메서드로 구현할 수 있다.

// 앞서 살펴보았듯이 reduce 메서드의 두 번째 인수로 전달하는 초기값은 첫 번째 순회에 콜백 함수의 첫 번째 인수로 전달된다.
// 주의할 것은 두 번째 인수로 전달하는 초기값이 옵션이라는 것이다.
// 즉, reduce 메서드의 두 번째 인수로 전달하는 초기값은 생략할 수 있다.
{
    const sum = [1, 2, 3, 4].reduce((pv, cv, ci, arr) => pv + cv);
    console.log(sum); // 10
}

// ❕ 하지만 reduce 함수를 호출할 때는 언제나 초기값을 전달하는 것이 안전하다.
{
    // const sum = [].reduce((pv, cv, ci, arr) => pv + cv);
    // console.log(sum); // TypeError: Reduce of empty array with no initial value at Array.reduce
}
// 이처럼 빈 배열로 reduce 메서드를 호출하면 에러가 발생한다.
// 이때 reduce 메서드에 초기값을 전달하면 에러가 발생하지 않는다.
{
    const sum = [].reduce((pv, cv, ci, arr) => pv + cv, 0);
    console.log(sum); // 0
}

// reduce 메서드로 객체의 특정 프로퍼티 값을 합산하는 경우를 생각해 보자.
{
    const products = [
        {
            id: 1,
            price: 100,
        },
        {
            id: 2,
            price: 200,
        },
        {
            id: 3,
            price: 300,
        },
    ];

    const priceSum = products.reduce((pv, cv, ci, arr) => pv.price + cv.price);
    console.log(priceSum); // NaN
}
// 1번째 순회 시 pv는 { id: 1, price: 100 }, cv는 { id: 2, price: 200 }이다.
// 2번째 순회 시 pv는 300, cv는 { id: 3, price: 300 }다.
// 2번째 순회 시 pv에 객체가 아닌 숫자값이 전달된다. 이때 pv.price는 undefined이다.


// ❕ 이처럼 객체의 특정 프로퍼티 값을 합산하는 경우에는 반드시 초기값을 전달해야 한다.
{
    const products = [
        {
            id: 1,
            price: 100,
        },
        {
            id: 2,
            price: 200,
        },
        {
            id: 3,
            price: 300,
        },
    ];

    const priceSum = products.reduce((pv, cv, ci, arr) => pv + cv.price, 0);
    console.log(priceSum); // 600
}

// 이처럼 reduce 메서드를 호출할 때는 초기값을 생략하지 말고 언제나 전달하는 것이 안전하다.


// 📌 Array.prototype.some
// some 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출한다.
// 이때 some 메서드는 콜백 함수의 반환값이 단 한 번이라도 참이면 true, 모두 거짓이면 false를 반환한다.
// 즉, 배열의 요소 중에 콜백 함수를 통해 정의한 조건을 만족하는 요소가 1개 이상 존재하는지 확인하여 그 결과를 불리언 타입으로 반환한다.
// 단, some 메서드를 호출한 배열이 빈 배열인 경우 언제나 false를 반환하므로 주의하기 바란다.

// forEach, map, filter 메서드와 마찬가지로 some 메서드의 콜백 함수는 some 메서드를 호출한 요소값, 인덱스, some 메서드를 호출한 배열 자체(this)를 순차적으로 전달받을 수 있다.
{
    // 배열의 요소 중 10보다 큰 요소가 1개 이상 존재하는지 확인
    console.log([5, 10, 15].some(v => v > 10)); //  ture

    // 배열의 요소 중 0보다 작은 요소가 1개 이상 존재하는지 확인
    console.log([5, 10, 15].some(v => v < 0)); // false

    // 배열의 요소 중 'banana'가 1개 이상 존재하는지 확인
    console.log(['apple', 'banana','mango'].some(v => v === 'banana')); // true

    // 단, some 메서드를 호출한 배열이 빈 배열인 경우 언제나 false를 반환한다
    console.log([].some(v => v > 3)); // false
}

// forEach, map, filter 메서드와 마찬가지로 some 메서드의 두 번째 인수로 some 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
// 더 나은 방법은 화살표 함수를 사용하는 것이다.


// 📌 Array.prototype.every
// every 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출한다.
// 이때 every 메서드는 콜백 함수의 반환값이 모두 참이면 true, 단 한 번이라도 거짓이면 false를 반환한다.
// 즉, 배열의 모든 요소가 콜백 함수를 통해 정의한 조건을 모두 만족하는지 확인하여 그 결과를 불리언 타입으로 반환한다.
// 단, every 메서드를 호출한 배열이 빈 배열인 경우 언제나 true를 반환하므로 주의하기 바란다.

// forEach, map, filter 메서드와 마찬가지로 every 메서드의 콜백 함수는 some 메서드를 호출한 요소값, 인덱스, some 메서드를 호출한 배열 자체(this)를 순차적으로 전달받을 수 있다.
{
    // 배열의 모든 요소가 3보다 큰지 확인
    console.log([5, 10, 15].every(v => v > 3)); // true

    // 배열의 모든 요소가 10보다 큰지 확인
    console.log([5, 10, 15].every(v => v > 10)); // false

    // 단, some 메서드를 호출한 배열이 빈 배열인 경우 언제나 true를 반환한다
    console.log([].every(v => v > 10)); // true
}

// forEach, map, filter 메서드와 마찬가지로 every 메서드의 두 번째 인수로 every 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
// 더 나은 방법은 화살표 함수를 사용하는 것이다.


// 📌 Array.prototype.find
// ES6에서 도입된 find 메서드는 자신을 호출한 배열의 요소를 순회하면서
// 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소를 반환한다.
// 콜백 함수의 반환값이 true인 요소가 존재하지 않으면 undefined를 반환한다.

// forEach, map, filter 메서드와 마찬가지로 find 메서드의 콜백 함수는 some 메서드를 호출한 요소값, 인덱스, some 메서드를 호출한 배열 자체(this)를 순차적으로 전달받을 수 있다.

{
    const users = [
        {
            id: 1,
            name: 'Lee',
        },
        {
            id: 2,
            name: 'Kim',
        },
        {
            id: 2,
            name: 'Choi',
        },
        {
            id: 3,
            name: 'Park',
        },
    ];

    // id가 2인 첫 번째 요소를 반환한다.
    // find 메서드는 배열이 아니라 요소를 반환한다.
    console.log(users.find(v => v.id === 2)); // {id: 2, name: 'Kim'}
}

// filter 메서드는 콜백 함수의 호출 결과가 true인 요소만 추출한 새로운 배열을 반환한다.
// 따라서 filter 메서드의 반환값은 언제나 배열이다.
// 하지만 find 메서드는 콜백 함수의 반환값이 true인 첫 번째 요소를 반환하므로
// find 메서드의 반환값은 배열이 아닌 해당 요소값이다.
{
    console.log([1, 2, 2, 3].filter(v => v === 2)); // [2, 2]
    console.log([1, 2, 2, 3].find(v => v === 2)); // 2
}

// forEach, map, filter 메서드와 마찬가지로 find 메서드의 두 번째 인수로 find 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
// 더 나은 방법은 화살표 함수를 사용하는 것이다.


// 📌 Array.prototype.findIndex
// ES6에서 도입된 findIndex 메서드는 자신을 호출한 배열의 요소를 순회하면서
// 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소의 인덱스를 반환한다.
// 콜백 함수의 반환값이 true인 요소가 존재하지 않는다면 -1을 반환한다.

// forEach, map, filter 메서드와 마찬가지로 findIndex 메서드의 콜백 함수는 some 메서드를 호출한 요소값, 인덱스, some 메서드를 호출한 배열 자체(this)를 순차적으로 전달받을 수 있다.

{
    const users = [
        {
            id: 1,
            name: 'Lee',
        },
        {
            id: 2,
            name: 'Kim',
        },
        {
            id: 2,
            name: 'Choi',
        },
        {
            id: 3,
            name: 'Park',
        },
    ];

    // id가 2인 요소의 인덱스를 구한다.
    console.log(users.findIndex(v => v.id === 2)); // 1

    // name이 'Park'인 요소의 인덱스를 구한다.
    console.log(users.findIndex(v => v.name === 'Park')); // 3


    // 위와 같이 프로퍼티 키와 프로퍼티 값으로 요소의 인덱스를 구하는 경우 다음과 같이 콜백 함수를 추상화 할 수 있다.
    function predicate(key, value) {
        return v => v[key] === value;
    }

    console.log(users.findIndex(predicate('id', 2))); // 1
    console.log(users.findIndex(predicate('name', 'Park'))); // 3
}

// forEach, map, filter 메서드와 마찬가지로 findIndex 메서드의 두 번째 인수로 findIndex 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
// 더 나은 방법은 화살표 함수를 사용하는 것이다.


// 📌 Array.prototype.flatMap
// ES10에서 도입된 flatMap 메서드는 map 메서드를 통해 생성된 새로운 배열을 평탄화한다.
// 즉, map 메서드와 flat 메서드를 순차적으로 실행하는 효과가 있다.
{
    const arr = ['hello', 'world'];

    // map과 flat을 순차적으로 실행
    console.log( arr.map( v => v.split('') ) ); // [['h', 'e', 'l', 'l', 'o'], ['w', 'o', 'r', 'l', 'd']]
    console.log( arr.map( v => v.split('') ).flat() ); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

    // flatMap 메서드는 map을 통해 생성된 새로운 배열을 평탄화한다.
    console.log( arr.flatMap(v => v.split('') ) ); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
}

// 단, flatMap 메서드는 flat 메서드처럼 인수를 전달하여 평탄화 깊이를 지정할 수는 없고 1단계만 평탄화한다.
// map 메서드를 통해 생성된 중첩 배열의 평탄화 깊이를 지정해야 하면 flatMap 메서드를 사용하지 말고 map 메서드와 flat 메서드를 각각 호출한다.
{
    const arr = ['hello', 'world!'];

    // flatMap은 1단계만 평탄화한다.
    console.log( arr.flatMap( (v, i) => [i, [v, v.length]] ) ); // [0, ['hello', 5], 1, ['world!', 6]

    // 평탄화 깊이를 지정해야 하면 flatMap 메서드를 사용하지 말고 map 메서드와 flat 메서드를 각각 호출한다.
    console.log( arr.map( (v, i) => [i, [v, v.length]] ).flat(2) ); // [0, 'hello', 5, 1, 'world!', 6]
}


























