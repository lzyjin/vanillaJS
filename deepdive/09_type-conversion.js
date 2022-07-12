// 9장 타입 변환과 단축 평가


// 👉 9.1 타입변환이란?
// 개발자가 의도적으로 값의 타입을 변환함
// 명시적 타입 변환(타입개스팅)
var x = 10;
var str = x.toString();
console.log(x, str); // 10, '10'
console.log(typeof x, typeof str); // number string
// x의 값이 변경된 것은 아니다

// 개발자 의도와 상관없이 자바스크립트 엔진에 의해 타입이 자동으로 변함
// 암묵적 타입 변환 (강제 타입 변환)
var x = 10;
var str = x + '';
console.log(x, str); // 10, '10'
console.log(typeof x, typeof str); // number string



// 👉 9.2 암묵적 타입 변환
// 📌 9.2.1 문자열 타입으로 변환
// +연산자는 피연산자 중 하나 이상이 문자열일 때 문자열 연결 연산자로 동작한다
// +문자열 연결 연산자의 역할은 문자열 값을 만드는 것
// 자바스크리브 엔진은 문자열 연결 연산자의 피연산자 중 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 타입 변환한다
console.log(1 + '2'); // '12'


// 📌 9.2.2 숫자 타입으로 변환
// 산술연산자의 역할은 숫자 값을 만드는 것.
// 그래서 숫자타입이 아닌 피연산자는 숫자 타입으로 암묵적 타입변환 한다
// 09-07
console.log(1 - '1'); // 0
console.log(1 * '10'); // 10
console.log(1 / 'one'); // NaN

// 비교연산자의 역할은 불리언 값을 만드는 것
// 09-08
console.log('1' > 0); // true
// > 비교연산자는 피연산자의 크기를 비교하므로 피연산자는 코드 문맥상 숫자 타입이어야한다.
// 따라서 숫자타입이 아닌 피연산자를 암묵적 타입변환한다

// 09-09
// + 단항연산자는 숫자타입이 아닌 피연산자를 숫자타입으로 암묵적 타입변환한다
// 문자열타입 -> 숫자타입
console.log(+''); // 0
console.log(+'0'); // 0
console.log(+'5'); // 5
console.log(+'string'); // NaN
// 불리언타입 -> 숫자타입
console.log(+true); // 1
console.log(+false); // 0
// null타입 -> 숫자타입
console.log(+null); // 0
// undefined타입 -> 숫자타입
console.log(+undefined); // NaN
// 심벌타입 -> 숫자타입
// console.log(+Symbol()); // TypeError
// 객체타입 -> 숫자타입
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+[10,20]); // NaN
console.log(+(function(){})); // NaN

// 빈 배열 +[] -> 0
// +null -> 0
// +'' -> 0
// +false -> 0

// +true -> 1

// +undefined -> NaN
// 값을 가진 배열 +[1, 2, 4] -> NaN
// 객체 +{} -> NaN


// 📌 9.2.3 불리언 타입으로 변환
if('') {
  console.log(x); // 아무것도 출력 안됌
}

// 자바스크립트 엔진은 불리언타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다
// 불리언 값으로 평가되어야 할 문맥에서 Truthy 값은 true로,
// Falsy값은 false로 암묵적 타입변환된다

// Falsy 값: false, 0, -0, null, undefined, NaN
// Falsy 값 외의 모든 값은 모두 true로 평가되는 Truthy 값이다

// 아래의 조건문은 모두 코드 블록을 실행한다
if(!false) console.log(false + ' is falsy value');
if(!undefined) console.log(undefined + ' is falsy value');
if(!null) console.log(null + ' is falsy value');
if(!0) console.log(0 + ' is falsy value');
if(!NaN) console.log(NaN + ' is falsy value');
if(!'') console.log('' + ' is falsy value');

console.clear();



// 👉 9.3 명시적 타입 변환
// 📌 9.3.1 문자열 타입으로 변환
// 방법 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 방법 2. Object.prototype.toString 메서드를 사용하는 방법
// 방법 3. 문자열 연결 연산자를 이용하는 방법

// 방법 1 사용
console.log( String(1) ); // '1'
console.log( String(NaN) ); // 'NaN'
console.log( String(Infinity) ); // 'Infinity'
console.log( String(true) ); // 'true'
console.log( String(false) ); // 'false'
// 방법 2 사용
console.log( (1).toString() ); // '1'
console.log( (NaN).toString() ); // 'NaN'
console.log( (Infinity).toString() ); // 'Infinity'
console.log( (true).toString() ); // 'true'
console.log( (false).toString() ); // 'false'
// 방법 3 사용
console.log( 1 + '' ); // '1'
console.log( NaN + '' ); // 'NaN'
console.log( Infinity + '' ); // 'Infinity'
console.log( true + '' ); // 'true'
console.log( false + '' ); // 'false'


// 📌 9.3.2 숫자 타입으로 변환
// 방법 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 방법 2. parseInt, parseFloat 함수를 사용하는 방법 (문자열만 숫자타입으로 변환 가능)
// 방법 3. 단항 산술 연산자를 이용하는 방법
// 방법 4. * 연산자를 이용하는 방법

// 방법 1 사용
console.log( Number('0') ); // 0
console.log( Number('-1') ); // -1
console.log( Number('10.53') ); // 10.53
console.log( Number(true) ); // 1
console.log( Number(false) ); // 0

// 방법 2 사용
console.log( parseInt('0') ); // 0
console.log( parseInt('-1') ); // -1
console.log( parseFloat('10.53') ); // 10.53

// 방법 3 사용
console.log( +'0' ); // 0
console.log( +'-1' ); // -1
console.log( +'10.53' ); // 10.53
console.log( +true ); // 1
console.log( +false ); // 0

// 방법 4 사용
console.log( '0' * 1 ); // 0
console.log( '-1' * 1 ); // -1
console.log( '10.53' * 1 ); // 10.53
console.log( true * 1 ); // 1
console.log( false * 1 ); // 0

console.clear();


// 📌 9.3.3 불리언 타입으로 변환
// 방법 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 방법 2. ! 부정 논리 연산자를 두 번 사용하는 방법

// 방법 1 사용
console.log( Boolean('x') ); // true
console.log( Boolean('') ); // false
console.log( Boolean('false') ); // true
console.log( Boolean(0) ); // false
console.log( Boolean(1) ); // true
console.log( Boolean(NaN) ); // false
console.log( Boolean(Infinity) ); // true
console.log( Boolean(null) ); // false
console.log( Boolean(undefined) ); // false
console.log( Boolean({}) ); // true
console.log( Boolean([]) ); // true
// 방법 2 사용
console.log( !!'x' ); // true
console.log( !!'' ); // false
console.log( !!'false' ); // true
console.log( !!0 ); // false
console.log( !!1 ); // true
console.log( !!NaN ); // false
console.log( !!Infinity ); // true
console.log( !!null ); // false
console.log( !!undefined ); // false
console.log( !!{} ); // true
console.log( !![] ); // true


console.clear();



// 👉 9.4 단축평가
// 📌 9.4.1 논리 연산자를 사용한 단축 평가
// 논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다.
// 논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다
// 둘 모두 좌항에서 우항으로 평가가 진행된다

console.log( 'Cat' && 'Dog' ); // 'Dog'
// 논리곱(&&) 연산자는 두 개의 피연산자가 모두 true로 평가될 때 true를 반환한다
// 'Cat'은 Truthy 값이므로 true로 평가된다
// 두 번째 피연산자가 논리곱 연산자 표현식의 평가 결과를 결정한다
// 이 때 논리곱 연산자는 논리 연산의 결과를 결정하는 두 번째 피연산자, 즉 문자열 'Dog'를 그대로 반환한다

console.log( 'Cat' || 'Dog'  ); // 'Cat'
// 논리합(||) 연산자는 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다
// 'Cat'은 Truthy 값이므로 true로 평가된다.
// 이 시점에서 두 번째 피연산자까지 평가해보지 않아도 표현식을 평가할 수 있다
// 이때 논리합연산자는 논리 연산의 결과를 결정한 첫 번째 피연산자, 즉 문자열 'Cat'을 그대로 반환한다

// 이처럼 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 변환한다
// 이를 단축 평가(short-curcuit evaluation)라 한다

// 단축 평가란?
// 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것
//

// 단축 평가의 규칙
// 단축 평가 표현식        평가 결과
// true || anything    true
// false || anything   anything
// true && anything    anything
// false && anything   false


// 논리합(||)연산자
console.log( 'Cat' || 'Dog'); // 'Cat'
console.log( false || 'Dog'); // 'Dog'
console.log( 'Cat' || false); // 'Cat'
// 논리곱(&&)연산자
console.log( 'Cat' && 'Dog' ); // 'Dog'
console.log( false && 'Dog' ); // false
console.log( 'Cat' && false ); // false

// 단축 평가를 사용하면 if문을 대체할 수 있다
// 조건이 Truthy 값일 때 무언가를 해야한다면 논리곱(&&)연산자 표현식을 사용
var done = true;
var message = '';
// if문 사용
if(done) {
  message = '완료';
}
console.log(message); // '완료'
// 단축 평가 사용
// done이 true이면 message에 '완료'를 할당
message = done && '완료';
console.log(message); // '완료'

// 조건이 Truthy 값일 때 무언가를 해야한다면 논리곱(&&)연산자 표현식을 사용
var done = false;
var message = '';
// if문 사용
if(!done) message = '미완료';
console.log(message);
// 단축 평가 사용
// done이 false이면 message에 '미완료'를 할당
message = done || '미완료';
console.log(message); // 미완료

// 삼항 조건 연산자는 if...else문을 대체할 수 있다
var done = true;
var message = '';
// if...else 문 사용
if(done) message = '완료';
else message = '미완료';
console.log(message); // 완료
// 삼항 조건 연산자 사용
message = done ? '완료' : '미완료';
console.log(message);


console.clear();
// 단축 평가는 다음과 같은 상황에서 유용하게 사용된다
// : 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
// 객체는 키와 값으로 구성된 프로퍼티의 집합이다. 만약 객체를 가리키기를 기대하는 변수의 값이 객체가 아니라 null 또는 undefined인 경우 객체의 프로퍼티를 참조하면 타입 에러가 발생한다.
var elem = null;
// var value = elem.value; // TypeError

// 단축 평가를 사용하면 에러를 발생시키지 않는다
// elem이 null이나 undefined과 같은 Falsy값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다
var elem = null;
var value = elem && elem.value; // null
console.log(value); // null

// : 함수 매개변수에 기본값을 설정할 때
// 함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다
// 이때 단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다

// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  // str이 Falsy값이면 ''를 할당함
  str = str || '';
  return str.length;
}
console.log( getStringLength() ); // 0
console.log( getStringLength('hi') ); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength2( str = '' ) {
  return str.length;
}
console.log( getStringLength2() ); // 0
console.log( getStringLength2('hi') ); // 2


// 📌 9.4.2 옵셔널 체이닝 연산자
// ES11(ECMAScript2020)에 도입된 옵셔널 체이닝 연산자 ?.는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환한다.
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다
var elem = null;
var value = elem?.value;
console.log(value); // undefined

// 옵셔널 체이닝 연산자 ?.가 도입되기 이전에는 논리 연산자 &&를 사용한 단축 평가를 통해 변수가 null 또는 undefined인지 확인했다
var elem = null;
// elem이 Falsy 값이면 elem, Truthy 값이면 elem.value로 평가된다
var value = elem && elem.value;
console.log(value); // null

// 논리 연산자 &&는 좌항 피연산자가 false로 평가되는 Falsy 값(false, undefined, null, 0, -0, NaN, '')이면 좌항 피연산자를 그대로 반환한다.
// 하지만 옵셔널 체이닝 연산자 ?.는 좌항 피연산자가 false로 평가되는 Falsy 값(false, undefined, null, 0, -0, NaN, '')이라도 null 또는 undefined이 아니면 우항의 프로퍼티 참조를 이어간다
var str = '';
var length = str?.length;
console.log(length); // 0


// 📌 9.4.3 null 병합 연산자
// ES11(ECMAScript2020)에 도입된 null병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고,
// 그렇지 않으면 좌항의 피연산자를 반환한다
// null 병합 연산자 ??는 변수에 기본값을 설정할 때 유용하다
var foo = null ?? 'default string';
console.log(foo); // 'default string'

// null 병합 연산자 ??가 도입되기 이전에는 논리 연산자 ||를 사용한 단축 평가를 통해 변수에 기본값을 설정했다
var foo = '' || 'default string';
console.log(foo); // 'default string'

// 하지만 null 병합 연산자 ??는 좌항의 피연산자가 false로 평가되는 Falsy 값(false, undefined, null, 0, -0, NaN, '')이라도 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다
var foo = '' ?? 'default string';
console.log(foo); // ''
