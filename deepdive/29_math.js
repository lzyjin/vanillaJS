// 29장 Math

// 표준 빌트인 객체인 Math는 수학적인 상수와 함수를 위한 프로퍼티와 메서드를 제공한다.
// ❕ Math는 생성자 함수가 아니다.
// ❕ 따라서 Math는 정적 프로퍼티와 정적 메서드만 제공한다.


// 👉 Math 프로퍼티
// 📌 Math.PI
// 원주율 PI 값을 반환한다.
{
    console.log(Math.PI); // 3.141592653589793
}

// 👉 Math 메서드
// 📌 Math.abs
// Math.abs 메서드는 인수로 전달된 숫자의 절대값(absolute value)를 반환한다.
// 절대값은 반드시 0 또는 양수이어야 한다.
{
    console.log(Math.abs(-1)); // 1
    console.log(Math.abs('-1')); // 1
    console.log(Math.abs('')); // 0
    console.log(Math.abs([])); // 0
    console.log(Math.abs(null)); // 0

    console.log(Math.abs(undefined)); // NaN
    console.log(Math.abs({})); // NaN
    console.log(Math.abs('string')); // NaN
    console.log(Math.abs()); // NaN
}

// 📌 Math.round
// Math.round 메서드는 인수로 전달된 숫자의 소수점 이하를 반올림한 정수를 반환한다.
{
    console.log(Math.round(1.4)); // 1
    console.log(Math.round(1.67)); // 2
    console.log(Math.round(-1.4)); // -1
    console.log(Math.round(-1.6)); // -2
    console.log(Math.round(1)); // 1
    console.log(Math.round()); // NaN
}

// 📌 Math.ceil
// Math.ceil 메서드는 인수로 전달된 숫자의 소수점 이하를 올림한 정수를 반환한다.
// 소수점 이하를 올림하면 더 큰 정수가 된다.
{
    console.log(Math.ceil(1.4)); // 2
    console.log(Math.ceil(1.6)); // 2
    console.log(Math.ceil(-1.4)); // 1
    console.log(Math.ceil(-1.6)); // 1
    console.log(Math.ceil(1)); // 1
    console.log(Math.ceil()); // NaN
}


// 📌 Math.floor
// Math.floor 메서드는 인수로 전달된 숫자의 소수점 이하를 내림한 정수를 반환한다.
// 즉, Math.ceil 메서드의 반대 개념이다.
// 소수점 이하를 내림하면 더 작은 정수가 된다.
{
    console.log(Math.floor(1.9)); // 1
    console.log(Math.floor(9.1)); // 9
    console.log(Math.floor(-1.9)); // -2
    console.log(Math.floor(-9.1)); // -10
    console.log(Math.floor(1)); // 1
    console.log(Math.floor()); // NaN
}


// 📌 Math.sqrt
// Math.sqrt 메서드는 인수로 전달된 숫자의 제곱근을 반환한다.
{
    console.log(Math.sqrt(9)); // 3
    console.log(Math.sqrt(-9)); // NaN
    console.log(Math.sqrt(2)); // 1.4142135623730951
    console.log(Math.sqrt(1)); // 1
    console.log(Math.sqrt(0)); // 0
    console.log(Math.sqrt()); // NaN
}


// 📌 Math.random
// Math.random 메서드는 임의의 난수(랜덤 숫자)를 반환한다.
// Math.random 메서드가 반환한 난수는 0에서 1미만의 실수다.
// 즉, 0은 포함되지만 1은 포함되지 않는다.
{
    console.log(Math.random()); // 0에서 1미만의 랜덤 실수

    // 1에서 10 범위의 랜덤 정수 취득
    // 1. Math.random으로 0에서 1미만의 랜덤 실수를 구한 다음, 10을 곱해 0에서 10 미만의 랜덤 실수를 구한다.
    // 2. 0에서 10 미만의 랜덤 실수에 1을 더해 1에서 11미만의 랜덤 실수를 구한다.
    // 3. Math.floor로 1에서 10 범위의 랜덤 실수의 소수점 이하를 떼어 버린 다음 정수를 반환한다.
    const random = Math.random();
    console.log(random); // 0.3493157603448984
    console.log(random * 10); // 3.493157603448984
    console.log(random * 10 + 1); // 4.493157603448984

    // 1에서 10 범위의 정수
    console.log(Math.floor(random * 10 + 1)); // 4
}


// 📌 Math.pow
// Math.pow 메서드는 첫 번째 인수를 밑(base)으로, 두 번째 인수를 지수(exponent)로 거듭제곱한 결과를 반환한다.
{
    console.log(Math.pow(2, 8)); // 256
    console.log(Math.pow(2, -1)); // 0.5
    console.log(Math.pow(2)); // NaN
}

// ES7에서 도입된 지수 연산자를 사용하면 가독성이 더 좋다
{
    // ES7 지수 연산자
    console.log(2 ** 2 ** 2); // 16
    console.log(Math.pow(Math.pow(2, 2), 2)); // 16
}


// 📌 Math.max
// Math.max 메서드는 전달받은 인수 중에서 가장 큰 수를 반환한다.
// 인수가 전달되지 않으면 -Infinity를 반환한다.
{
    console.log(Math.max(1)); // 1
    console.log(Math.max(1, 2)); // 2
    console.log(Math.max(1, 2, 3)); // 3
    console.log(Math.max()); // -Infinity
}

// 배열을 인수로 전달받아 배열의 요소 중에서 최대값을 구하려면 Function.prototype.apply 메서드 또는 스프레드 문법을 사용해야 한다.
{
    // 배열의 요소 중에서 최대값 취득
    console.log(Math.max.apply(null, [1, 2, 3])); // 3

    // ES6 스프레드 문법
    console.log(Math.max(...[1, 2, 3])); // 3
}


// 📌 Math.min
// Math.min 메서드는 전달받은 인수 중에서 가장 작은 수를 반환한다.
// 인수가 전달되지 않으면 Infinity를 반환한다.
{
    console.log(Math.min(1)); // 1
    console.log(Math.min(1, 2)); // 1
    console.log(Math.min(1, 2, 3)); // 1
    console.log(Math.min()); // Infinity
}

// 배열을 인수로 전달받아 배열의 요소 중에서 최소값을 구하려면 Function.prototype.apply 메서드 또는 스프레드 문법을 사용해야 한다.
{
    // 배열의 요소 중에서 최소값 취득
    console.log(Math.min.apply(null, [1, 2, 3])); // 1

    // ES6 스프레드 문법
    console.log(Math.min(...[1, 2, 3])); // 1
}
































