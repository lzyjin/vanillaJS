var x = 'bar';
// x 변수는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
// foo.mjs에서 선언한 x 변수와 스코프가 다른 변수다.
console.log(x); // bar
console.log(window.x); // undefined

// foo.mjs에서 선언&할당한 변수 a
console.log(a); // ReferenceError: Can't find variable: a