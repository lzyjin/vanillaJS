var x = '1';

// 문자열 타입 -> 숫자 타입 
console.log(x); // '1'
console.log(+x); // 1

// 불리언 타입 -> 숫자 타입
x = true;
console.log(x); // true
console.log(+x); // 1

// 불리언 타입 -> 숫자 타입 
x = false;
console.log(x); // false
console.log(+x); // 0

// 문자열을 숫자로 변환할 수 없어서 NaN을 반환
x = 'hello';
console.log(x); // 'hello'
console.log(+x); // NaN