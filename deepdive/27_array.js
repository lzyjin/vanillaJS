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
// Array.prototype.push, Array.prototype.pop, Array.prototype.shift, Array.prototype.unshift, Array.prototype.splice, Array.prototype.reserve, Array.prototype.fill,
// 원본 배열 변경하지 않는 메서드:
// Array.isArray, Array.prototype.indexOf, Array.prototype.concat, Array.prototype.slice, Array.prototype.join, Array.prototype.includes, Array.prototype.flat

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
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.
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
// slice 메서드는 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다.
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



