// 30장 Date

// 표준 빌트인 객체인 Date는 날짜와 시간을 위한 메서드를 제공하는 빌트인 객체이면서 생성자 함수
// 현재 날짜와 시간은 자바스크립트 코드가 실행된 시스템의 시계에 의해 결정된다.

// 👉 Date 생성자 함수 -----------------------------------------------------------
// Date는 생성자 함수다.
// Date 생성자 함수로 생성한 Date 객체는 날짜와 시간을 나타내는 정수값을 갖는다.
// 이 값은 1970년 1월 1일 00:00:00을 기점으로 Date 객체가 나타내는 날짜와 시간까지의 밀리초를 나타낸다.
// 1970년 1월 1일 00:00:00을 나타내는 Date 객체는 0.

// Date 생성자 함수로 생성한 Date 객체는 기본적으로 현재 날짜와 시간을 나타내는 정수값을 가진다.
// 현재가 아닌 다른 날짜와 시간을 가지는 Date 객체를 다루고싶으면 Date 생성자 함수의 인수로 지정한다.


// 📌 new Date()
// Date 생성자 함수를 인수 없이 new 연산자와 함께 호출하면 현재 날짜와 시간을 가지는 Date 객체를 반환한다.
// Date 객체는 내부적으로는 날짜와 시간을 나타내는 정수값을 갖지만, 
// 콘솔에 출력하면 날짜와 시간을 나타내는 정보를 출력한다.
console.log( new Date(), typeof new Date() ); //  type이 object

// new 연산자 없이 호출하면 
console.log( Date(), typeof Date() ); // type이 string


// 📌 new Date(milliseconds)
// Date 생성자 함수에 숫자 타입의 인수를 전달하면
// 1970년 1월 1일 00:00:00 을 기점으로 인수로 전달된 밀리초만큼 경과된 날짜와 시간을 나타내는 Date 객체를 반환한다.
// 86400000밀리초는 1일
console.log( new Date(86400000) ); 


// 📌 new Date(datestring)
// Date 생성자 함수에 날짜와 시간을 나타내는 문자열을 인수로 전달하면
// 지정된 날짜와 시간을 나타내는 Date 객체를 반환한다.
// 인수로 전달한 문자열은 Date.parse 메서드에 의해 해석 가능한 형식이어야 한다.
console.log( new Date('June 26, 2022 08:00:00') );
console.log( new Date('2022/06/26 08:00:00') );
console.log( new Date('2022-06-26 08:00:00') );


// 📌 new Date(year, month[, day, hour, minute, second, millisecond])
// Date 생성자 함수에 연, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 인수로 전달하면 
// 지정된 날짜와 시간을 나타내는 Date 함수를 반환한다.
// 단, 연, 월은 반드시 지정해야한다.
// 지정하지 않은 정보는 0 또는 1로 초기화된다.
// 주의: 월은 0부터 시작, 1월은 0
console.log( new Date(2025, 11, 31) );
console.log( new Date(2025, 11, 31, 23, 50, 0) );




// 👉 Date 메서드 -----------------------------------------------------------
// 📌 Date.now
// 1970년 1월 1일 0시0분0초를 기점으로 현재까지 경과한 밀리초를 숫자로 반환한다.
console.log( Date.now() );


// 📌 Date.parse
// 1970년 1월 1일 0시0분0초를 기점으로 인수로 지정한 날짜와 시간까지 경과한 밀리초를 숫자로 반환한다.
console.log( Date.parse('2022-06-26 08:00:00') ); // 1656198000000
console.log( Date.parse('2022/06/26 08:00:00') ); // 1656198000000
console.log( Date.parse('June 26, 2022 08:00:00') ); // 1656198000000


// 📌 Date.UTC
// 1970년 1월 1일 0시0분0초(UTC)를 기점으로 인수로 지정한 날짜와 시간까지 경과한 밀리초를 숫자로 반환한다.
// new Date(year, month[, day, hour, minute, second, millisecond]) 형식의 인수를 사용해야한다.
// Date.UTC의 인수는 로컬 타임(KST)가 아닌 (UTC)로 인식된다.
// 주의: 월은 0부터 시작, 1월은 0
console.log( Date.UTC('2022/06/17') ); // NaN
console.log( Date.UTC(2022, 06, 17) ); // 1658016000000


// 📌 Date.prototype.getFullYear
// Date 객체의 연도를 나타내는 정수를 반환한다
console.log(new Date('2020/05/12').getFullYear()); // 2020

// 📌 Date.prototype.setFullYear
// Date 객체의 연도를 나타내는 정수를 설정한다
// 옵션으로 연도 이외에 월, 일도 설정할 수 있다.
const today = new Date();
today.setFullYear(2025);
console.log( today.getFullYear() ); // 2025


// 📌 Date.prototype.getMonth
// Date 객체의 월을 나타내는 정수를 반환한다
// 0~11 사이의 정수
// 1월은 0, 12월은 11
console.log( new Date('2030-07-14').getMonth() ); // 6

// 📌 Date.prototype.setMonth
// Date 객체에 월을 나타내느 정수를 설정한다.
// 0~11 사이의 정수
// 1월은 0, 12월은 11
// 옵션으로 월 이외에 일도 설정 가능
const date = new Date();
date.setMonth(8);
console.log(date.getMonth()); // 8

const date2 = new Date();
date2.setMonth(8, 15);
console.log(date2); // Thu Sep 15 2022 23:40:12 GMT+0900 (한국 표준시)


// 📌 Date.prototype.getDate
// Date 객체의 날짜(1~31)를 나타내는 정수를 반환한다.
console.log( new Date().getDate() );
console.log( new Date('2024/03/29').getDate() ); // 29

// 📌 Date.prototype.setDate
// Date 객체에 날짜(1~31)를 나타내는 정수를 설정한다
const date3 = new Date();
date3.setDate(25);
console.log( date3.getDate() ); // 25


// 📌 Date.prototype.getDay
// Date 객체의 요일(0~6)을 나타내는 정수를 반환한다.
// 일요일 0, 월요일 1, ... 토요일 6
console.log( new Date().getDay() );


// 📌 Date.prototype.getHours
// Date 객체의 시간(0~23)을 나타내는 정수를 반환한다
console.log( new Date('2022/06/18 13:30:00').getHours() ); // 13

// 📌 Date.prototype.setHours
// Date 객체에 시간(0~23)을 나타내는 정수를 설정한다.
// 옵션으로 시간 이외에 분, 초, 밀리초도 설정할 수 있다.
const date4 = new Date();
console.log(date4.getHours());
date4.setHours(17);
console.log(date4.getHours()); // 17
date4.setHours(20, 45, 1, 0) // 20:45:01:0
console.log(date4.getHours()); // 20


// 📌 Date.prototype.getMinutes
// Date 객체의 분(0~59)을 나타내는 정수를 반환한다.
console.log( new Date('2022/08/27 09:55:00').getMinutes() ); // 55

// 📌 Date.prototype.setMinutes
// Date 객체에 분(0~59)을 나타내는 정수를 설정한다.
// 옵션으로 분 이외에 초, 밀리초도 설정할 수 있다.
const date5 = new Date();
console.log( date5.getMinutes() ); // 
date5.setMinutes(24);
console.log( date5.getMinutes() ); // 24

date5.setMinutes(5, 10, 999); // HH:05:10:999
console.log(date5.getMinutes());


// 📌 Date.prototype.getSeconds
// Date 객체의 초(0~59)를 나타내는 정수를 반환한다.
console.log( new Date('2022/06/18 08:40:55').getSeconds() ); // 55

// 📌 Date.prototype.setSeconds
// Date 객체에 초(0~59)를 나타내는 정수를 설정한다.
// 옵션으로 초 이외에 밀리초도 설정할 수 있다.
const date6 = new Date();
console.log( date6.getSeconds() );
date6.setSeconds(35);
console.log( date6.getSeconds() ); // 35
date6.setSeconds(25, 0); // HH:MM:25:00
console.log( date6.getSeconds() ); // 25


// 📌 Date.prototype.getMilliseconds
// Date 객체의 밀리초(0~999)를 나타내는 정수를 반환한다.
console.log( new Date('2020/07/24 12:30:10:150').getMilliseconds() ); // 150

// 📌 Date.prototype.setMilliseconds
// Date 객체에 밀리초(0~999)를 나타내는 정수를 설정한다.
const date7 = new Date();
date7.setMilliseconds(999);
console.log(date7.getMilliseconds()); // 999


// 📌 Date.prototype.getTime
// 1970년 1월 1일 0시 0분 0초를 기점으로 Date 객체의 시간까지 경과된 밀리초를 반환한다.
console.log( new Date('2022/06/18 08:50').getTime() ); // 1655509800000

// 📌 Date.prototype.setTime
// Date 객체에 1970년 1월 1일 0시 0분 0초를 기점으로 경과된 밀리초를 설정한다.
const date8 = new Date();
date8.setTime(86400000);
console.log(date8); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)

// 📌 Date.prototype.getTimezoneOffset
// UTC와 Date 객체에 지정된 locale 시간과의 차이를 분 단위로 반환한다.
// KST는 UTC에 9시간을 더한 시간이다.
// UTC = KST + 9
const date9 = new Date();
console.log( date9.getTimezoneOffset() ); // -640
console.log( date9.getTimezoneOffset() / 60 ); // -9

// 📌 Date.prototype.toDateString
// Date 객체의 날짜를 사람이 읽을 수 있는 형식의 문자열로 반환한다.
const date10 = new Date('2020/07/24 12:30');
console.log(date10.toString()); // Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)
console.log(date10.toDateString()); // Fri Jul 24 2020

// 📌 Date.prototype.toTimeString
// Date 객체의 시간을 사람이 읽을 수 있는 형식의 문자열로 반환한다.
const date11 = new Date('2020/07/24 12:30');
console.log(date11.toString()); // Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)
console.log(date11.toTimeString()); // 12:30:00 GMT+0900 (한국 표준시)

// 📌 Date.prototype.toISOString
// Date 객체의 날짜와 시간을 ISO 8601 형식으로 표현한 문자열을 반환한다.
const date12 = new Date('2020/07/24 12:30');
console.log(date12.toString()); // Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)
console.log(date12.toISOString()); // 2020-07-24T03:30:00.000Z
console.log(date12.toISOString().slice(0, 10)); // 2020-07-24
console.log(date12.toISOString().slice(0, 10).replace(/-/g, '')); // 20200724

// 📌 Date.prototype.toLocaleString
// 인수로 전달한 locale을 기준으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환한다.
// 인수를 생략한 경우 브라우저가 동작 중인 시스템의 locale을 적용한다.
const date13 = new Date('2020/07/24 15:30');
console.log(date13.toString()); // Fri Jul 24 2020 15:30:00 GMT+0900 (한국 표준시)
console.log(date13.toLocaleString()); // 2020. 7. 24. 오후 3:30:00
console.log(date13.toLocaleString('ko-KR')); // 2020. 7. 24. 오후 3:30:00
console.log(date13.toLocaleString('en-US')); // 7/24/2020, 3:30:00 PM
console.log(date13.toLocaleString('ja-JP')); // 2020/7/24 15:30:00

// 📌 Date.prototype.toLocaleTimeString
// 인수로 전달한 locale을 기준으로 Date 객체의 시간을 표현한 문자열을 반환한다.
// 인수를 생략한 경우 브라우저가 동작 중인 시스템의 locale을 적용한다.
const date14 = new Date('2020/07/24 15:30');
console.log(date14.toLocaleTimeString()); // 오후 3:30:00
console.log(date14.toLocaleTimeString('ko-KR')); // 오후 3:30:00
console.log(date14.toLocaleTimeString('en-US')); // 3:30:00 PM
console.log(date14.toLocaleTimeString('ja-JP')); // 15:30:00


// 👉 Date를 활용한 시계 예제 -----------------------------------------------------------
(function printNow() {
  const today = new Date();

  const dayNames = [
    '(일요일)',
    '(월요일)',
    '(화요일)',
    '(수요일)',
    '(목요일)',
    '(금요일)',
    '(토요일)',
  ];

  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? '오후' : '오전';

  // 12시간제로 변경
  hour %= 12;
  hour = hour || 12; // hour이 0이면 12를 재할당

  // 10 미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${ampm} ${hour}:${minute}:${second}`;
  console.log(now);

  // 1초마다 printNow 함수를 재귀 호출한다.
  setTimeout(printNow, 1000);
})();