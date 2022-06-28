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
