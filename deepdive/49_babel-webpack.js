// 49장 Babel과 Webpack을 이용한 ES6+/ES.NEXT 개발 환경 구축

// 크롬, 사파리, 파이어폭스, 엣지 같은 에버그린 브라우저(웹표준을 준수하기 위해 지속적으로 업데이트를 지원하는 모던 브라우저)의 ES6 지원율은 약 98%로
// 거의 대부분의 ES6 사양을 지원한다.

// 하지만 IE11의 ES6 지원율은 약 11%다.
// 그리고 매년 새롭게 도입되는 ES6 이상의 버전(ES6+)과 제안 단계에 있는 ES 제안 사양(ES.NEXT)은 브라우저에 따라 지원율이 제각각이다.

// 따라서 ES6+와 ES.NEXT의 최신 ECMAScript 사양을 사용하여 프로젝트를 진행하려면 최신 사양으로 작성된 코드를 경우에 따라 IE를 포함한 구형 브라우저에서
// 문제 없이 동작시키기 위한 개발 환경을 구축하는 거이 필요하다.

// 또한 대부분의 프로젝트가 모듈을 사용하므로 모듈 로더도 필요하다.
// ES6 모듈(ESM)은 대부분의 모던 브라우저(Chrome 61, FF 60, SF 10.1, Edge 16 이상)에서 사용할 수 있다.
// 하지만 다음과 같은 이유로 아직까지는 ESM보다는 별도의 모듈 로더를 사용하는 것이 일반적이다.

// - IE를 포함한 구형 브라우저는 ESM을 지원하지 않는다.
// - ESM을 사용하더라도 트랜스파일링이나 번들링이 필요한 것은 변함이 없다.
// - ESM이 아직 지원하지 않는 기능(bare import 등)이 있고 점차 해결되고는 있지만 아직 몇 가지 이슈가 존재한다.

// 이번 장에서는 트랜스파일러(transpiler)인 Babel과 모듈 번들러(module bundler)인 Webpack을 이용하여 ES6+/ES.NEXT 개발 환경을 구축해 보자.
// 아울러 Webpack을 통해 Babel을 로드하여 ES6+/ES.NEXT 사양의 소스코드를 IE 같은 구형 브라우저엣도 동작하도록 ES5 사양의 소스코드로 트랜스파일링하는
// 방법도 알아볼 것이다.

// 이 책에서 사용한 Node.js와 npm의 버전은 다음과 같다.

// - Node.js: 14.3.0
// - npm: 6.14.5

// Babel, Webpack, 플러그인의 버전은 다음과 같다.
// 패키지/플러그인       | 패키지 이름                                  | 버전
// Babel             | @babel/cli                                 | 7.10.3
//                   | @babel/core                                | 7.10.3
// Babel 프리셋        | @babel/preset-env                          | 7.10.3
// Babel 플러그인      | @babel/plugin-proposal-class-properties    | 7.10.1
//                   | @babel/polyfill                            | 7.10.1
// Webpack           | webpack                                    | 4.43.0
//                   | webpack-cli                                | 3.3.12
// Webpack 플러그인    | babel-loader                               | 8.1.0


// 👉 Babel
// 다음 예제에서는 ES6의 화살표 함수와 ES7의 지수 연산자를 사용하고 있다.
{
    [1, 2, 3].map(n => n ** n);
}

// IE같은 구형 브라우저에서는 ES6의 화살표 함수와 ES7의 지수 연산자를 지원하지 않을 수 있다.
// Babel을 사용하면 위 코드를 다음과 같이 ES5 사양으로 변환할 수 있다.
{
    "use strict";

    [1, 2, 3].map(function (n) {
        return Math.pow(n, n);
    });
}

// 이처럼 Babel은 ES6+/ES.NEXT로 구현된 최신 사양의 소스코드를 IE같은 구형 브라우저에서도 동작하는 ES5 사양의 소스코드로 변환(트랜스파일)할 수 있다.
// Babel을 사용하기 위한 개발 환경을 구축해 보자.

// 📌 Babel 설치
// npm을 이용하여 Babel을 설치해 보자.
// 터미널에서 다음과 같이 명령어를 입력하여 Babel을 설치한다.

// # 프로젝트 폴더 생성
// $ mkdir esnext-project && cd esnext-project
// # package.json 생성
// $ npm init -y
// # babel-core, babel-cli 설치
// $ npm install --save-dev @babel/core @babel/cli

// 설치가 완료된 이후 package.json 파일은 다음과 같다.
// 불필요한 설정은 삭제했다.
// {
//     "name": "esnext-project",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//         "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "devDependencies": {
//     "@babel/cli": "^7.10.3",
//         "@babel/core": "^7.10.3"
//     }
// }

// 참고로 Babel, Webpack, 플러그인의 버전은 빈번하게 업그레이드 된다.
// npm install은 언제나 최신 버전의 패키지를 설치하므로 위 버전과는 다른 최신 버전의 패키지가 설치될 수도 있다.
// 만약 위 버전 그대로 설치하고 싶다면 다음과 같이 패키지 이름 뒤에 @과 설치하고 싶은 버전을 지정한다.

// # 버전 지정 설치
// nmp install --save-dev @babel/core@7.10.3 @babel/cli@7.10.3


// 📌 Babel 프리셋 설치와 babel.config.json 설정 파일 작성
// Babel을 사용하려면 @babel/preset-env를 설치해야 한다.
// @babel/preset-env는 함께 사용되어야 하는 Babel 플러그인을 모아 둔 것으로 Babel 프리셋이라고 부른다.
// pre-set: 사전 설정
// Babel이 제공하는 공식 Babel 프리셋(official preset)은 다음과 같다.

// - @babel/preset-env
// - @babel/preset-flow
// - @babel/preset-react
// - @babel/preset-typescript

// ❗️ @babel/preset-env는 필요한 플러그인들을 프로젝트 지원 환경에 맞춰 동적으로 결정해 준다.
// ❗️ 프로젝트 지원 환경은 Browserlist 형식으로 .browserslistrc 파일에 상세히 설정할 수 있다.
// 만약 프로젝트 지원 환경 설정 작업을 생략하면 기본값으로 설정된다.

// 일단은 기본 설정으로 진행하자.
// 기본 설정은 모든 ES6+/ES.NEXT 사양의 소스코드를 변환한다.

// # @babel/preset-env 설치
// $ npm install --save-dev @babel/preset-env

// 설치가 완료된 이후 packgage.json 파일은 다음과 같다.

// {
//     "name": "esnext-project",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//          "test": "echo \"Error: no test specified\" && exit 1"
//      },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "devDependencies": {
//     "@babel/cli": "^7.10.3",
//         "@babel/core": "^7.10.3",
//         "@babel/preset-env": "^7.19.4"
//      }
// }




























