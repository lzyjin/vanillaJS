/*
// 변수의 공개
export const pi = Math.PI;

// 함수의 공개
export function square(x) {
    return x * x;
}

// 클래스의 공개
export class Person {
    constructor(name) {
        this.name = name;
    }
}
*/



// 선언문 앞에 매번 export 키워드를 붙이는 것이 번거롭다면 export 한 대상을 하나의 객체로 구성하여 한 번에 export할 수도 있다.

const pi = Math.PI;

function square(x) {
    return x * x;
}

class Person {
    constructor(name) {
        this.name = name;
    }
}

// ❗️변수, 함수, 클래스를 하나의 객체로 구성하여 공개
export { pi, square, Person };
