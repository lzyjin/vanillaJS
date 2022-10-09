var x = 'foo';
// x 변수는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
console.log(x); // foo
console.log(window.x); // undefined

const a = 'foo의 a입니다.';