// 43장 Ajax

// 👉 Ajax란?

// Ajax(Asynchronous JavaScript and XML)란 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를
// 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식을 말한다.
// Ajax는 브라우저에게 제공하는 Web API인 XMLHttpRequest 객체를 기반으로 동작한다.
// XMLHttpRequest는 HTTP 비동기 통신을 위한 메서드와 프로퍼티를 제공한다.

// 1999년 마이크로소프트가 개발한 XMLHttpRequest는 그다지 큰 주목을 받지 못하다가 2005년 구글이 발표한 구글 맵스를 통해 웹 애플리케이션 개발
// 프로그래밍 언어로서 자바스크립트의 가능성을 확인하는 계기를 마련했다.
// 웹 브라우저에서 자바스크립트와 Ajax를 기반으로 동작하는 구글 맵스가 데스크톱 애플리케이션과 비교해 손색이 없을 정도로 퍼포먼스와 부드러운 화면 전환 효과를
// 보여준 것이다.

// 이전의 웹페이지는 html 태그로 시작해서 html 태그로 끝나는 완전한 HTML을 서버로부터 전송받아 웹페이지 전체를 다시 렌더링하는 방식으로 동작했다.
// 따라서 화면이 전환되면 서버로부터 새로운 HTML을 전송받아 웹페이지 전체를 처음부터 다시 렌더링했다.

// 이러한 전통적인 방식은 다음과 같은 단점이 있다.
// 1. 이전 웹페이지와 차이가 없어서 변경할 필요가 없는 부분까지 포함된 완전한 HTML을 서버로부터 매번 다시 전송받기 때문에 불필요한 데이터 통신이 발생한다.
// 2. 변경할 필요가 없는 부분까지 처음부터 다시 렌더링한다. 이로 인해 화면 전환이 일어나면 화면이 순간적으로 깜박이는 현상이 발생한다.
// 3. 클라이언트와 서버와의 통신이 동기 방식으로 동작하기 때문에 서버로부터 응답이 있을때까지 다음 처리는 블로킹된다.

// Ajax의 등장은 이전의 전ㅌ오적인 패러다임을 획기적으로 전환했다.
// 즉, 서버로부터 웹페이지의 변경에 필요한 데이터만 비동기 방식으로 전송받아 웹페이지를 변경할 필요가 없는 부분은 다시 렌더링하지 않고, 변경할 필요가 있는
// 부분만 한정적으로 렌더링하는 방식이 가능해진 것이다.
// 이를 통해 브라우저에서도 데스크톱 애플리케이션과 유사한 빠른 퍼포먼스와 부드러운 화면 전환이 가능해졌다.

// Ajax는 전통적인 방식과 비교했을 때 다음과 같은 장점이 있다.
// 1. 변경할 부분을 갱신하는 데 필요한 데이터만 서버로부터 전송받기 때문에 불필요한 데이터 통신이 발생하지 않는다.
// 2. 변경할 필요가 없는 부분은 다시 렌더링하지 않는다. 따라서 화면이 순간적으로 깜박이는 현상이 발생하지 않는다.
// 3. 클라이언트와 서버와의 통신이 비동기 방식으로 동작하기 때문에 서버에게 요청을 보낸 이후 블로킹이 발생하지 않는다.


// 👉 JSON
// ❗️ JSON(Javascript Object Notation)은 크라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷이다.
// ❗️ 자바스크립트에 종속되지 않는 언어 독립형 데이터 포맷으로, 대부분의 프로그래밍 언어에서 사용할 수 있다.

// 📌 JSON 표기 방식
// ❗️ JSON은 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트다.
/*
{
    "name": "Lee",
    "age": 20,
    "alive": true,
    "hobby": ["traveling", "tennis"]
}
*/

// ❗️ JSON의 키는 반드시 큰따옴표(작은따옴표 사용 불가)로 묶어야 한다.
// ❗ 값은 객체 리터럴과 같은 표기법을 그대로 사용할 수 있다.
// ❗️ 하지만 문자열은 반드시 큰 따옴표(작은따옴표 사용 불가)로 묶어야 한다.

// 📌 JSON.stringify
// https://ko.javascript.info/json -----------
// - JSON.stringify: 객체를 JSON으로 바꿔준다.
// - JSON.parse: JSON을 객체로 바꿔준다

// JSON.stringify(value[, replacer, space])
// value: 인코딩하려는 값
// replacer: JSON으로 인코딩하길 원하는 프로퍼티가 담긴 배열. 또는 매핑 함수 function(key, value)
// space: 서식 변경 목적으로 사용할 공백 문자 수 (가독성을 높이기 위해 중간에 삽입해 줄 공백 문자 수)
// space 없이 메서드를 호출하면 인코딩된 JSON에 들여쓰기나 여분의 공백 문자가 하나도 없다. space는 가독성을 높이기 위한 용도로 만들어졌기 때문에 단순
// 전달 목적이라면 space 없이 직렬화한다.
// 아래 예시처럼 space에 2를 넘겨주면 자바스크립트는 중첩 객체를 별도의 줄에 출력해주고 공백 문자 두 개를 들여쓰기해 준다.

// JSON.stringify 메서드는 객체를 JSON 포맷의 문자열로 변환한다.
// 클라이언트가 서버로 객체를 전송하려면 객체를 문자열화해야 하는데 이를 직렬화(serializing)라 한다.
{
    const obj = {
        name: 'Lee',
        age: 20,
        alive: true,
        hobby: ['traveling', 'tennis'],
    };

    // 객체를 JSON 포맷의 문자열로 변환한다.
    const json = JSON.stringify(obj);
    console.log(typeof json, json);
    // string {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

    // 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
    const prettyJson = JSON.stringify(obj, null, 2);
    console.log(typeof prettyJson, prettyJson);
    // string {
    //   "name": "Lee",
    //   "age": 20,
    //   "alive": true,
    //   "hobby": [
    //     "traveling",
    //     "tennis"
    //   ]
    // }

    const prettyJson2 = JSON.stringify(obj, null, 4);
    console.log(typeof prettyJson1, prettyJson2);
    // string {
    //     "name": "Lee",
    //     "age": 20,
    //     "alive": true,
    //     "hobby": [
    //         "traveling",
    //         "tennis"
    //     ]
    // }

    // replacer 함수. 값의 타입이 Number이면 필터링되어 반환되지 않는다.
    function filter(key, value) {
        // undefined: 반환하지 않음
        return typeof value === 'number' ? undefined : value;
    }

    // https://ko.javascript.info/json
    // replacer에 전달되는 함수는 프로퍼티 (키, 값) 쌍 전체를 대상으로 호출되는데, 반드시 기존 프로퍼티 값을 대신하여 사용할 값을 반환해야 한다.
    // 특정 프로퍼티를 직렬화해서 누락시키려면 반환 값을 undefined로 만들면 된다.

    // JSON.stringify 메서드에 두 번째 인수로 replacer 함수를 전달한다.
    const strFilteredObject = JSON.stringify(obj, filter, 2);
    console.log(typeof strFilteredObject, strFilteredObject);
    // string {
    //   "name": "Lee",
    //   "alive": true,
    //   "hobby": [
    //     "traveling",
    //     "tennis"
    //   ]
    // }

    // -> age 프로퍼티가 삭제됌
}

// JSON.stringify 메서드는 객체뿐만 아니라 배열도 JSON 포맷의 문자열로 변환한다.
{
    const todos = [
        { id: 1, content: 'HTML', completed: false, },
        { id: 2, content: 'CSS', completed: true, },
        { id: 3, content: 'JavaScript', completed: false, },
    ];

    // 배열을 JSON 포맷의 문자열로 변환한다.
    const json = JSON.stringify(todos, null, 2);
    console.log(typeof json, json);
    // string [
    //   {
    //     "id": 1,
    //     "content": "HTML",
    //     "completed": false
    //   },
    //   {
    //     "id": 2,
    //     "content": "CSS",
    //     "completed": true
    //   },
    //   {
    //     "id": 3,
    //     "content": "JavaScript",
    //     "completed": false
    //   }
    // ]
}


// 📌 JSON.parse
// JSON.parse 메서드는 JSON 포맷의 문자열을 객체로 변환한다.
// 서버로부터 클라이언트에게 전송된 JSON 데이터는 문자열이다.
// 이 문자열을 객체로서 사용하려면 JSON 포맷의 문자열을 객체화해야 하는데 이를 역직렬화(deserializing)라 한다.
{
    const obj = {
        name: 'Lee',
        age: 20,
        alive: true,
        hobby: ['traveling', 'tennis'],
    };

    // 객체를 JSON 포맷의 문자열로 변환한다.
    const json = JSON.stringify(obj);

    // JSON 포맷의 문자열을 객체로 변환한다.
    const parsed = JSON.parse(json);
    console.log(typeof parsed, parsed);
    // object {name: 'Lee', age: 20, alive: true, hobby: Array(2)}
}

// 배열이 JSON 포맷의 문자열로 변환되어 있는 경우 JSON.parse는 문자열을 배열 객체로 변환한다.
// 배열의 요소가 객체인 경우 배열의 요소까지 객체로 변환한다.
{
    const todos = [
        { id: 1, content: 'HTML', completed: false, },
        { id: 2, content: 'CSS', completed: true, },
        { id: 3, content: 'JavaScript', completed: false, },
    ];

    // 배열을 JSON 포맷의 문자열로 변환한다.
    const json = JSON.stringify(todos);

    // JSON 포맷의 문자열을 배열로 변환한다. 배열의 요소까지 객체로 변환한다.
    const parsed = JSON.parse(json);
    console.log(typeof parsed, parsed);
    // object (3) [{…}, {…}, {…}]
}


// 👉 XMLHttpRequest
// 브라우저는 주소창이나 HTML의 form 태그 또는 a 태그를 통해 HTTP 요청 전송 기능을 기본 제공한다.
// 자바스크립트를 사용하여 HTTP 요청을 전송하려면 XMLHttpRequest 객체를 사용한다.
// Web API인 XMLHttpRequest 객체는 HTTP 요청 전송과 HTTP 응답 수신을 위한 다양한 메서드와 프로퍼티를 제공한다.

// 📌 XMLHttpRequest 객체 생성
// XMLHttpRequest 객체는 XMLHttpRequest 생성자 함수를 호출하여 생성한다.
// XMLHttpRequest 객체는 브라우저에서 제공하는 Web API이므로 브라우저 환경에서만 정상적으로 실행된다.
{
    // XMLHttpRequest 객체의 생성
    const xhr = new XMLHttpRequest();
}

// 📌 XMLHttpRequest 객체의 프로퍼티와 메서드
// XMLHttpRequest 객체는 다양한 프로퍼티와 메서드를 제공한다.
// 대표적인 프로퍼티와 메서드는 다음과 같다.

// 🌷 XMLHttpRequest 객체의 프로토타입 프로퍼티
// 프로토타입 프로퍼티   | 설명
// readyState 중요   | HTTP 요청의 현재 상태를 나타내는 정수. 다음과 같은 XMLHttpRequest의 정적 프로퍼티를 값으로 갖는다.
//                    - UNSENT: 0
//                    - OPENED: 1
//                    - HEADERS_RECEIVED: 2
//                    - LOADING: 3
//                    - DONE: 4
// status 중요       | HTTP 요청에 대한 응답 상태(HTTP 상태 코드)를 나타내는 정수
//                    예) 200
// statusText 중요   | HTTP 요청에 대한 응답 메시지를 나타내는 문자열
//                    예) "OK"
// responseType 중요 | HTTP 응답 타입
//                    예) document, json, text, blob, arraybuffer
// response 중요     | HTTP 요청에 대한 응답 몸체(response body). responseType에 따라 타입이 다르다.
// responseText     | 서버가 전송한 HTTP 요청에 대한 응답 문자열

// 🌷 XMLHttpRequest 객체의 이벤트 핸들러 프로퍼티
// 이벤트 핸들러 프로퍼티       | 설명
// onreadystatechange 중요 | readyState 프로퍼티 값이 변경된 경우
//

// 🌷 XMLHttpRequest 객체의 메서드
// 🌷 XMLHttpRequest 객체의 정적 프로퍼티
// 📌 HTTP 요청 전송
// 🌷 XMLHttpRequest.prototype.open
// 🌷 XMLHttpRequest.prototype.send
// 🌷 XMLHttpRequest.prototype.setRequestHeader
// 📌 HTTP 응답 처리
