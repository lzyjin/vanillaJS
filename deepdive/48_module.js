// 48장 모듈

// 👉 모듈의 일반적 의미
// 모듈(module)이란 애플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드 조각을 말한다.
// 일반적으로 모듈은 기능을 기준으로 파일 단위로 분리한다.
// 이때 모듈이 성립하려면 모듈은 자신만의 파일 스코프(모듈 스코프)를 가질 수 있어야 한다.

// 자신만의 파일 스코프를 갖는 모듈의 자산(모듈에 포함되어 있는 변수, 함수, 객체 등)은 기본적으로 비공개 상태다.
// ❗️다시 말해, 자신만의 파일 스코프를 갖는 모듈의 모든 자산은 캡슐화되어 다른 모듈에서 접근할 수 없다.
// ❗즉, 모듈은 개별적 존재로서 애플리케이션과 분리되어 존재한다.

// 하지만 애플리케이션과 완전히 분리되어 개별적으로 존재하는 모듈은 재사용이 불가느하므로 존재의 의미가 없다.
// 모듈은 애플리케이션이나 다른 모듈에 의해 재사용되어야 의미가 있다.
// ❗️따라서 모듈은 공개가 필요한 자산에 한정하여 명시적으로 선택적 공개가 가능하다.
// ❗️이를 export라 한다.

// 공개(export)된 모듈의 자산은 다른 모듈에서 재사용할 수 있다.
// ❗️이때 공개된 모듈의 자산을 사용하는 모듈을 모듈 사용자(module consumer)라 한다.
// ❗️모듈 사용자는 모듈이 공개(export)한 자산 중 일부 또는 전체를 선택해 자신의 스코프 내로 불러들여 재사용할 수 있다.
// ❗️이를 import라 한다.

// 이처럼 모듈은 애플리케이션과 분리되어 개별적으로 존재하다가 필요에 따라 다른 모듈에 의해 재사용된다.
// 모듈은 기능별로 분리되어 개별적인 파일로 작성된다.
// 따라서 코드의 단위를 명확히 분리하여 애플리케이션을 구성할 수 있고, 재사용성이 좋아서 개발 효율성과 유지보수성을 높일 수 있다.


// 👉 자바스크립트와 모듈
// 자바스크립트는 웹페이지의 단순한 보조 기능을 처리하기 위한 제한적인 용도를 목적으로 태어났다.
// 이러한 태생적 한계로 인해 다른 프로그래밍 언어와 비교하 ㄹ때 부족한 부분이 있는 것이 사실이다.
// 대표적인 것이 모듈 시스템을 지원하지 않는다는 것이다.
// 다시 말해, 자바스크립트는 모듈이 성립하기 위해 필요한 파일 스코프와 import, export를 지원하지 않았다.

// C 언어는 #include, 자바는 import 등 대부분의 프로그래밍 언어는 모듈 기능을 가지고 있다.
// ❗️하지만 클라이언트 사이드 자바스크립트는 script 태그를 사용하여 외부의 자바스크립트 파일을 로드할 수는 있지만 파일마다 독립적인 파일 스코프를 갖지 않는다.

// ❗️다시 말해, 자바스크립트 파일을 여러 개의 파일로 분리하여 script 태그로 로드해도 분리된 자바스크립트 파일들은 결국 하나의 자바스크립트 파일 내에 있는 것처럼 동작한다.
// ❗️즉, 모든 자바스크립트 파일은 하나의 전역을 공유한다.
// ❗️따라서 분리된 자바스크립트 파일들의 전역 변수가 중복되는 등의 문제가 발생할 수 있다.
// 이것으로는 모듈을 구현할 수 없다.

// 자바스크립트를 클라이언트 사이드, 즉 브라우저 환경에 국한하지 않고 범용적으로 사용하려는 움직임이 생기면서 모듈 시스템은 반드시 해결해야 하는 핵심 과제가 되었다.
// 이런 상황에서 제안된 것이 CommonJS와 AMD(Asynchronous Module Definition)다.

// 이로써 자바스크립트의 모듈 시스템은 크게 CommonJS와 AMD 진영으로 나뉘게 되었고
// 브라우저 환경에서 모듈을 사용하기 위해서는 CommonJS 또는 AMD를 구현한 모듈 로더 라이브러리를 사용해야 하는 상황이 되었다.

// 자바스크립트 런타임 환경인 Node.js는 모듈 시스템의 사실상 표준인 CommonJS를 채택했고 독자적인 진화를 거쳐, 현재는 CommonJS 사양과 100% 동일하지는 않지만 기본적으로 CommonJS 사양을 따르고 있다.
// ❗️즉, Node.js는 ECMAScript 표준 사양은 아니지만 모듈 시스템을 지원한다.
// ❗️따라서 Node.js 환경에서는 파일 별로 독립적인 파일 스코프(모듈 스코프)를 갖는다.


// 👉 ES6 모듈(ESM)
// 이러한 상황에서 ES6에서는 클라이언트 사이드 자바스크립트에서도 동작하는 모듈 기능을 추가했다.
// IE를 제외한 대부분의 브라우저(Chrome 61, FF 60, SF 10.1, Edge 16 이상)에서 ES6 모듈을 사용할 수 있다.

// ES6 모듈(앞으로 ESM이라 부른다)의 사용법은 간단하다.
// ❗️script 태그에 type="module" 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작한다.
// ❗️일반적인 자바스크립트 파일이 아닌 ESM임을 명확히 하기 위해 ESM의 파일 확장자는 mjs를 사용할 것을 권장한다.

// <script type="module" src="app.mjs"></script>

// ESM에는 클래스와 마찬가지로 기본적으로 strict mode가 적용된다.

// 📌 모듈 스코프
// ESM은 독자적인 모듈 스코프를 갖는다.
// ESM이 아닌 일반적인 자바스크립트 파일은 script 태그로 분리해서 로드해도 독자적인 모듈 스코프를 갖지 않는다.
// 다음 예제를 살펴보자.

// foo.js
// x 변수는 전역 변수다.
// var x = 'foo';
// console.log(window.x); // foo

// bar.js
// x 변수는 전역 변수다.
// foo.js에서 선언한 전역 변수 x와 중복된 선언이다.
// var x = 'bar';
// foo.js에서 선언한 전역 변수 x의 값이 재할당되었다.
// console.log(window.x); // bar

// <script src="48_foo.js" ></script>
// <script src="48_bar.js" ></script>

// 위 예제의 HTML에서 script 태그로 분리해서 로드된 2개의 자바스크립트 파일은 하나의 자바스크립트 파일 내에 있는 것처럼 동작한다.
// 즉, 하나의 전역을 공유한다.
// 따라서 foo.js에서 선언한 x 변수와 bar.js에서 선언한 x 변수는 중복 선언되며 의도치 않게 x 변수의 값이 덮어써진다.


// ESM은 파일 자체의 독자적인 모듈 스코프를 제공한다.
// ❗️따라서 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.

// foo.mjs
// var x = 'foo';
// // x 변수는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
// console.log(x); // foo
// console.log(window.x); // undefined

// bar.mjs
// x 변수는 전역 변수다.
// foo.js에서 선언한 전역 변수 x와 중복된 선언이다.
// var x = 'bar';
// // foo.js에서 선언한 전역 변수 x의 값이 재할당되었다.
// console.log(window.x); // bar

// <script type="module" src="48_foo.mjs" ></script>
// <script type="module" src="48_bar.mjs" ></script>


// ❗️ 모듈 내에서 선언한 식별자는 모듈 외부에서 참조할 수 없다.
// 모듈 스코프가 다르기 때문이다.

// foo.mjs
// const a = 'foo의 a입니다.';

// bar.mjs
// foo.mjs에서 선언&할당한 변수 a
// console.log(a); // ReferenceError: Can't find variable: a

// <script type="module" src="48_foo.mjs" ></script>
// <script type="module" src="48_bar.mjs" ></script>


// 📌 export 키워드
// ❗️모듈은 독자적인 모듈 스코프를 갖는다.
// ❗️따라서 모듈 내부에서 선언한 모든 식별자는 기본적으로 해당 모듈 내부에서만 참조할 수 있다.
// ❗️모듈 내부에서 선언한 식별자를 외부에 공개하여 다른 모듈들이 재사용할 수 있게 하려면 export 키워드를 사용한다.

// ❗️export 키워드는 선언문 앞에 사용한다.
// ❗️이로써 변수, 함수, 클래스 등 모든 식별자를 export할 수 있다.

// lib.mjs
// 변수의 공개
// export const pi = Math.PI;

// 함수의 공개
// export function square(x) {
//     return x * x;
// }

// 클래스의 공개
// export class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// 선언문 앞에 매번 export 키워드를 붙이는 것이 번거롭다면 export 한 대상을 하나의 객체로 구성하여 한 번에 export할 수도 있다.

// const pi = Math.PI;

// function square(x) {
//     return x * x;
// }

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // 변수, 함수, 클래스를 하나의 객체로 구성하여 공개
// ❗️export { pi, square, Person };


// 📌 import 키워드
// ❗️다른 모듈에서 공개(export)한 식별자를 자신의 모듈 스코프 내부로 로드하려면 import 키워드를 사용한다.
// ❗️다른 모듈이 export한 식별자 이름으로 import해야 하며 ESM의 경우 파일 확장자를 생략할 수 없다.

// 같은 폴더 내의 lib.mjs 모듈이 export한 식별자 이름으로 import해야 한다.
// ESM의 경우 파일 확장자를 생략할 수 없다.

// app.mjs
// import { pi, square, Person } from "./48_lib.mjs";
// console.log(pi); // 3.141592653589793
// console.log(square(10)); // 100
// console.log(new Person('Lee')); // Person {name: "Lee"}

// <script type="module" src="48_app.mjs" ></script>

// ❗️위 예제의 app.mjs는 애플리케이션의 진입점(entry point)이므로 반드시 script 태그로 로드해야 한다.
// ❗️하지만 lib.mjs는 app.mjs의 import 문에 의해 로드되는 의존성(dependency)이다.
// ❗️따라서 lib.mjs는 script 태그로 로드하지 않아도 된다.


// ❗️모듈이 export한 식별자 이름을 일일이 지정하지 않고 하나의 이름으로 한 번에 import할 수도 있다.
// ❗️이때 import되는 식별자는 as 뒤에 지정한 이름의 객체에 프로퍼티로 할당된다.

// app.mjs
// lib.mjs 모듈이 export한 모든 식별자를 lib 객체의 프로퍼티로 모아 import한다.
// import * as lib from './48_lib.mjs';
// console.log(lib.pi); // 3.141592653589793
// console.log(lib.square(20)); // 400
// console.log(new lib.Person('Kim')); // Person {name: "Kim"}


// ❗️모듈이 export한 식별자 이름을 변경하여 import할 수도 있다.

// app.mjs
// lib.mjs 모듈이 export한 식별자 이름을 변경하여 import한다.
// import { pi as PI, square as sq, Person as P } from './48_lib.mjs';
// console.log(PI); // 3.141592653589793
// console.log(sq(4)); // 16
// console.log(new P('Park')); // Person {name: "Park"}


// ❗️ 모듈에서 하나의 값만 export한다면 default 키워드를 사용할 수 있다.
// ❗️default 키워드를 사용하는 경우 기본적으로 이름 없이 하나의 값을 export한다.

// lib2.mjs
// export default x => x * x;
// export default const foo = () => {}; // SyntaxError: Unexpected keyword 'const'


// ❗️ default 키워드와 함께 export한 모듈은 {} 없이 임의의 이름으로 import한다.

// app.mjs
// import square from './48_lib2.mjs';
// console.log(square(3)); // 9






