// 28장 Number

// 👉 Number 생성자 함수
// 표준 빌트인 객체인 Number 객체는 생성자 함수 객체다.
// 따라서 new 연산자와 함께 호출하여 Number 인스턴스를 생성할 수 있다.

// Number 생성자 함수에 인수를 전달하지 않고 new 연산자와 함께 호출하면 [[NumberData]] 내부 슬롯에 0을 할당한 Number 래퍼 객체를 생성한다.
// 래퍼 객체: 21.3절 "원시 값과 래퍼 객체"
{
    const numObj = new Number();
    console.log(numObj); // Number {[[PrimitiveValue]]: 0}
}

// 위 예제를 크롬 브라우저의 개발자 도구에서 실행해보면 [[PrimitiveValue]]라는 접근할 수 없는 프로퍼티가 보인다.
// 이는 [[NumberData]] 내부 슬롯을 가리킨다.
// ES5에서는 [[NumberData]]를 [[PrimitiveValue]] 라 불렀다.

// Number 생성자 함수의 인수로 숫자를 전달하면서 new 연산자와 함께 호출하면 [[NumberData]] 내부 슬롯에 인수로 전달받은 숫자를 할당한
// Number 래퍼 객체를 생성한다.
{
    const numObj = new Number(10);
    console.log(numObj); // Number {[[PrimitiveValue]]: 10}
}

// Number 생성자 함수의 인수로 숫자가 아닌 값을 전달하면 인수를 숫자로 강제 변환한 후,
// [[NumberData]] 내부 슬롯에 변환된 숫자를 할당한 Number 래퍼 객체를 생성한다.
// 인수를 숫자로 변환할 수 없다면 NaN을 [[NumberData]] 내부 슬롯에 할당한 Number 래퍼 객체를 생성한다.
{
    let numObj = new Number('10');
    console.log(numObj); // Number {[[PrimitiveValue]]: 10}

    numObj = new Number('Hello');
    console.log(numObj); // Number {[[PrimitiveValue]]: NaN}
}

// ❕ 9.3절 "명시적 타입 변환"에서 살펴보았듯이 new 연산자를 사용하지 않고 Number 생성자 함수를 호출하면 Number 인스턴스가 아닌 숫자를 반환한다.
// 이를 이용하여 명시적으로 타입을 변환하기도 한다.
{
    // 문자열 타입 -> 숫자 타입
    console.log(Number('0')); // 0
    console.log(Number('-1')); // -1
    console.log(Number('10.53')); // 10.53

    // 불리언 타입 -> 숫자 타입
    console.log(Number(true)); // 1
    console.log(Number(false)); // 0
}


// 👉 Number 프로퍼티
// 📌 Number.EPSILON
// ES6에서 도입된 Number.EPSILON은 1과 1보다 큰 숫자 중에서 가장 작은 숫자와의 차이와 같다.

// 다음 예제와 같이 부동소수점 산술 연산은 정확한 결과를 기대하기 어렵다.
// 정수는 2진법으로 오차 없이 저장 가능하지만 부동소수점을 표현하기 위해 가장 널리 쓰이는 표준인 IEEE 754는 2진법으로 변환했을 때 무한소수가 되어 미세한 오차가 발생할 수 밖에 없는 구조적 한계가 있다.
{
    console.log(0.1 + 0.2); // 0.30000000000000004
    console.log(0.1 + 0.2 === 0.3); // false
}

// Number.EPSILON은 부동소수점으로 인해 발생하는 오차를 해결하기 위해 사용한다.
// 다음 예제는 Number.EPSILON을 사용하여 부동소수점을 비교하는 함수다.
{
    function isEqual(a, b) {
        // a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
        return Math.abs(a - b) < Number.EPSILON;
    }

    console.log(isEqual(0.1 + 0.2, 0.3)); // true
}


// 📌 Number.MAX_VALUE
// Number.MAX_VALUE는 자바스크립트에서 표현할 수 있는 가장 큰 양수값이다.
// Number.MAX_VALUE보다 큰 숫자는 Infinity다.
{
    console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
    console.log(Number.MAX_VALUE < Infinity); // true
}


// 📌 Number.MIN_VALUE
// Number.MIN_VALUE는 자바스크립트에서 표현할 수 있는 가장 작은 양수값이다.
// Number.MIN_VALUE보다 작은 값은 0이다.
{
    console.log(Number.MIN_VALUE); // 5e-324
    console.log(Number.MIN_VALUE > 0); // true
}


// 📌 Number.MAX_SAFE_INTEGER
// 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수값.
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// 📌 Number.MIN_SAFE_INTEGER
// 자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수값.
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// 📌 Number.POSITIVE_INFINITY
// 양의 무한대를 나타내는 숫자값 Infinity와 같다
console.log(Number.POSITIVE_INFINITY); // Infinity

// 📌 Number.NEGATIVE_INFINITY
// 음의 무한대를 나타내는 숫자값 -Infinity와 같다
console.log(Number.NEGATIVE_INFINITY); // -Infinity

// 📌 Number.NaN
// 숫자가 아님(Not-a-Number)을 나타내는 숫자값이다.
// Number.NaN은 window.NaN과 같다.
console.log(Number.NaN); // NaN



// 👉 Number 메서드
// 📌 Number.isFinite
// ES6에서 도입된 Number.isFinite 정적 메서드는 인수로 전달된 값이 정상적인 유한수,
// 즉 Infinity 또는 -Infinity가 아닌지 검사하여 그 결과를 불리언 값으로 반환한다.

// 만약 인수가 NaN이면 언제나 false를 반환한다
{
    console.log(Number.isFinite(0)); // true
    console.log(Number.isFinite(Number.MAX_VALUE)); // true
    console.log(Number.isFinite(Number.MIN_VALUE)); // true

    console.log(Number.isFinite(Infinity)); // false
    console.log(Number.isFinite(-Infinity)); // false
    console.log(Number.isFinite(NaN )); // false
}

// Number.isFinite 메서드는 빌트인 전역 함수 isFinite와 차이가 있다.
// ❕ 빌트인 전역 함수 isFinite는 전달받은 인수를 숫자로 암묵적 타입 변환하여 검사를 수행하지만,
// ❕ Number.isFinite는 전달받은 인수를 숫자로 암묵적 타입 변환하지 않는다.
// 따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false다.
{
    // Number.isFinite는 인수를 숫자로 암묵적 타입 변환하지 않는다.
    console.log(Number.isFinite(null)); // false
    console.log(Number.isFinite('0')); // false

    // isFinite는 인수를 숫자로 암묵적 타입 변환한다.
    // null은 0으로 암묵적 타입 변환한다.
    console.log(isFinite(null)); // true
    console.log(isFinite('0')); // true
}

// 📌 Number.isInteger
// ES6에서 도입된 Number.isInteger 정적 메서드는 인수로 전달된 숫자값이 정수인지 검사하여 그 결과를 불리언 값으로 반환한다.
// ❕ 검사하기 전에 인수를 숫자로 암묵적 타입 변환하지 않는다.
{
    // 인수가 정수이면 true를 반환한다.
    console.log(Number.isInteger(0)); // true
    console.log(Number.isInteger(123)); // true
    console.log(Number.isInteger(-123)); // true

    // 0.5는 정수가 아니다
    console.log(Number.isInteger(0.5)); // false

    // '123'을 숫자로 암묵적 타입 변환하지 않는다.
    console.log(Number.isInteger('123')); // false

    // false를 숫자로 암묵적 타입 변환하지 않는다.
    console.log(Number.isInteger(false)); // false

    // Infinity, -Infinity는 정수가 아니다.
    console.log(Number.isInteger(Infinity)); // false
    console.log(Number.isInteger(-Infinity)); // false
}


// 📌 Number.isNaN
// ES6에서 도입된 Number.isNaN 정적 메서드는 인수로 전달된 숫자값이 NaN인지 검사하여 그 결과를 불리언값으로 반환한다.
{
    console.log(Number.isNaN(NaN)); // true
}

// Number.isNaN 메서드는 빌트인 전역 함수 isNaN과 차이가 있다,
// 빌트인 전역 함수 isNaN은 전달받은 인수를 숫자로 암묵적 타입 변환하여 검사를 수행하지만
// Number.isNaN 메서드는 전달받은 인수를 숫자로 암묵적 타입변환하지 않는다.
// 따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false다.
{
    // Number.isNaN 메서드는 전달받은 인수를 숫자로 암묵적 타입변환하지 않는다.
    console.log(Number.isNaN(undefined)); // false

    // isNaN은 인수를 숫자로 암묵적 타입 변환한다.
    // undefined는 NaN로 암묵적 타입 변환된다.
    console.log(isNaN(undefined)); // true
}


// 📌 Number.isSafeInteger
// // ES6에서 도입된 Number.isSafeInteger 정적 메서드는 인수로 전달된 숫자값이 안전한 정수인지 검사하여 그 결과를 불리언값으로 반환한다.
// 안전한 정수는 -(253-1)과 253 - 1사이의 정수값이다.
// 검사전에 인수를 숫자로 암묵적 타입 변환하지 않는다.
{
    console.log(Number.isSafeInteger(0)); // true
    console.log(Number.isSafeInteger(1000000000000000)); // true
    console.log(Number.isSafeInteger(10000000000000001)); // false

    console.log(Number.isSafeInteger(0.5)); // false
    console.log(Number.isSafeInteger('123')); // false
    console.log(Number.isSafeInteger(false)); // false
    console.log(Number.isSafeInteger(Infinity)); // false
}


// 📌 Number.prototype.toExponential
// toExponential 메서드는 숫자를 지수 표기법으로 변환하여 문자열로 반환한다.
// 지수 표기법이란 매우 크거나 작은 숫자를 표기할 때 주로 사용하여 e(Exponent) 앞에 있는 숫자에 10의 n승을 곱하는 형시긍로 수를 나타내는 방식이다.
// 인수로 소수점 이하로 표현할 자릿수를 전달할 수 있다.
{
    console.log((77.1234).toExponential()); // 7.71234e+1
    console.log((77.1234).toExponential(4)); // 7.7123e+1
    console.log((77.1234).toExponential(2)); // 7.71e+1
}

// 참고로 다음과 같이 숫자 리터럴과 함께 Number 프로토타입 메서드를 사용할 경우 에러가 발생한다.
{
    // 77.toExponential(); // SyntaxError: Invalid or unexpected token
}
// 숫자 뒤의 .은 의미가 모호하다.
// 부동 소수점 숫자의 소수 구분 기호일 수도 있고 객체 프로퍼티에 접근하기 위한 프로퍼티 접근 연산자일 수도 있다.
// 자바스크립트 엔진은 숫자 뒤의 .을 부동 소수점 숫자의 소수 구분 기호로 해석한다.
// 그러나 77.toExponential()에서 77은 Number 래퍼 객체다.
// 따라서 77 뒤의 .을 소수 구분 기호로 해석하면 뒤에 이어지는 toExponential을 프로퍼티로 해석할 수 없으므로 에러가 발생한다.

{
    console.log(77.1234.toExponential()); // 7.71234e+1
}

// 위 예제의 경우 숫자 77 뒤의 .뒤에는 숫자가 이어지므로 .은 명백하게 부동 소수점 숫자의 소수 구분 기호다.
// 숫자에 소수점은 하나만 존재하므로 두 번째 .은 프로퍼티 접근 연산자로 해석된다.
// ❕ 따라서 숫자 리터럴과 함께 메서드를 사용할 경우 혼란을 방지하기 위해 그룹 연산자를 사용할 것을 권장한다.
{
    console.log((77).toExponential()); // 7.7e+1
}

// 다음과 같은 방법도 허용되기는 한다.
// 자바스크립트 숫자는 정수 부분과 소수 부분 사이에 공백을 포함할 수 없다.
// 따라서 숫자 뒤의 .뒤에 공백이 오면 .을 프로퍼티 접근 연산자로 해석하기 때문이다.
{
    console.log(77 .toExponential()); // 7.7e+1
}


// 📌 Number.prototype.toFixed
// toFixed 메서드는 숫자를 반올림하여 문자열로 반환한다.
// 반올림하는 소수점 이하 자릿수를 나타내는 0~20 사이의 정수값을 인수로 전달할 수 있다.
// 인수를 생략하면 기본값 0이 지정된다.
{
    // 소수점 이하 반올림
    console.log((12345.6789).toFixed()); // '12346'

    // 소수점 이하 1자리수 유효, 나머지 반올림
    console.log((12345.6789).toFixed(1)); // '12345.7'

    // 소수점 이하 2자리수 유효, 나머지 반올림
    console.log((12345.6789).toFixed(2)); // '12345.68'

    // 소수점 이하 3자리수 유효, 나머지 반올림
    console.log((12345.6789).toFixed(3)); // '12345.679'
}


// 📌 Number.prototype.toPrecision
// toPrecision 메서드는 인수로 전달받은 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다.
// 인수로 전달받은 전체 자릿수로 표현할 수 없는 경우 지수 표기법으로 결과를 반환한다.
// 전체 자릿수를 나타내는 0~21 사이의 정수값을 인수로 전달할 수 있다.
// 인수를 생략하면 기본값 0이 지정된다.
{
    // 전체 자릿수 유효
    console.log((12345.6789).toPrecision()); // 12345.6789

    // 전체 1자릿수 유효, 나머지 반올림
    console.log((12345.6789).toPrecision(1)); // 1e+4

    // 전체 2자릿수 유효, 나머지 반올림
    console.log((12345.6789).toPrecision(2)); // 1.2e+4

    // 전체 3자릿수 유효, 나머지 반올림
    console.log((12345.6789).toPrecision(3)); // 1.23e+4

    // 전체 6자릿수 유효, 나머지 반올림
    console.log((12345.6789).toPrecision(6)); // 12345.7
}


// 📌 Number.prototype.toString
// toString 메서드는 숫자를 문자열로 변환하여 반환한다.
// 진법을 나타내는 2~36 사이의 정수값을 인수로 전달할 수 있다.
// 인수를 생략하면 기본값 10진법이 지정된다.
{
    // 인수를 생략하면 10진수 문자열을 반환한다
    console.log((10).toString()); // 10

    // 2진수 문자열을 반환한다.
    console.log((16).toString(2)); // 10000

    // 8진수 문자열을 반환한다.
    console.log((16).toString(8)); // 20

    // 16진수 문자열을 반환한다.
    console.log((16).toString(16)); // 10
}










































