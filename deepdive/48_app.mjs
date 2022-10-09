/*
// 같은 폴더 내의 lib.mjs 모듈이 export한 식별자 이름으로 import해야 한다.
// ESM의 경우 파일 확장자를 생략할 수 없다.
import { pi, square, Person } from "./48_lib.mjs";
// import { pi, square, Person } from "48_lib.mjs"; // TypeError: Module specifier, '48_lib.mjs' does not start with "/", "./", or "../". Referenced from

console.log(pi); // 3.141592653589793
console.log(square(10)); // 100
console.log(new Person('Lee')); // Person {name: "Lee"}
*/




/*
// lib.mjs 모듈이 export한 모든 식별자를 lib 객체의 프로퍼티로 모아 import한다.
import * as lib from './48_lib.mjs';

console.log(lib.pi); // 3.141592653589793
console.log(lib.square(20)); // 400
console.log(new lib.Person('Kim')); // Person {name: "Kim"}
*/




/*
// lib.mjs 모듈이 export한 식별자 이름을 변경하여 import한다.
import { pi as PI, square as sq, Person as P } from './48_lib.mjs';

console.log(PI); // 3.141592653589793
console.log(sq(4)); // 16
console.log(new P('Park')); // Person {name: "Park"}
*/




// default 키워드와 함께 export한 모듈은 {} 없이 임의의 이름으로 import한다.
import square from './48_lib2.mjs';
console.log(square(3)); // 9




// * 절대경로 상대경로 참고 *
// 1) '/' : root(가장 최상의 디렉토리로 이동)
// 2) './' : 현재 디렉토리
// 3) '../' : 상위 디렉토리
// 4) '../../' : 두 단계 상위 디렉토리