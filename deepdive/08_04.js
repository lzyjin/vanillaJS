var x = 2;
var result;

if( x % 2 ) { // 0은 false로 암묵적으로 강제 타입 변환된다 
  result = '홀수';
} else {
  result = '짝수';
}

console.log(`result: ${result}`); // 짝수

result = x % 2 ? '홀수' : '짝수';
console.log(`result: ${result}`); // 짝수



// 경우가 세가지라면 ? 
var num = 2;
var kind = num ? ( num > 0 ? '양수' : '음수' ) : '영';
console.log(`kind: ${kind}`); // 양수



// switch문
// fall through 예시
var month = 11;
var monthName;

switch(month) {
  case 1: monthName = 'January';
  case 2: monthName = 'Fabruary';
  case 3: monthName = 'March';
  case 4: monthName = 'April';
  case 5: monthName = 'May';
  case 6: monthName = 'June';
  case 7: monthName = 'July';
  case 8: monthName = 'August';
  case 9: monthName = 'September';
  case 10: monthName = 'October';
  case 11: monthName = 'November';
  case 12: monthName = 'December';
  default: monthName = 'Invalid Month';
}

console.log(monthName); // Invalid Month

switch(month) {
  case 1: monthName = 'January';
    break;
  case 2: monthName = 'Fabruary';
    break;
  case 3: monthName = 'March';
    break;
  case 4: monthName = 'April';
    break;
  case 5: monthName = 'May';
    break;
  case 6: monthName = 'June';
    break;
  case 7: monthName = 'July';
    break;
  case 8: monthName = 'August';
    break;
  case 9: monthName = 'September';
    break;
  case 10: monthName = 'October';
    break;
  case 11: monthName = 'November';
    break;
  case 12: monthName = 'December';
    break;
  default: monthName = 'Invalid Month';
}

console.log(monthName); // December


// for문
// 이중 중첩 for문
// 두 개의 주사위를 던졌을 때 두 눈의 합이 6이 되는 모든 경우의 수
for(var i=1; i <= 6; i++) {
  for(var j=1; j <= 6; j++) {
    if(i + j === 6) {
      console.log(`[${i}], [${j}]`);
    }
  }
}



// while문
// 무한루프 탈출
var count = 0;
while(1) {
  console.log(count);
  count++;
  if(count === 3) {
    break;
  }
}


// do while문
var count = 0;
do {
  console.log(count);
  count++;
} while( count < 3 );


// break문은 레이블문, 반복문, switch문의 코드 블록을 탈출한다
// 레이블문은 식별자가 붙은 문
foo: {
  console.log('A');
  break foo; // foo 레이블 블록문 탈출
  console.log('B');
}
console.log('Done!');


outer: for(var i=0; i < 3; i++) {
  for(var j=0; j < 3; j++) {
    if(i + j === 3) {
      // 내부 for문 탈출 
      // break;

      // 외부 for문 탈출
      break outer;
    }
    console.log(`[${i}], [${j}]`);
  }
}
console.log('Done!');


// 문자열에서 특정 문자의 인덱스를 검색하는 예
var string = 'Hello World.';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for문으로 순회할 수 있다
for( var i=0; i < string.length; i++ ) {
  // 문자열의 개별 문자가 l이면
  if( string[i] === search ) {
    index = i;
    // for문 탈출
    break;
  }
}
console.log(`index: ${index}`); // 2

// 위와 동일한 결과
console.log(string.indexOf(search));

for( var i=0; i < string.length; i++ ) {
  // 'l'이 아니면 련 지점에서 실행을 중단하고 (아래의 증감식 안읽음) 반복문의 증감식으로 이동한다.
  if( string[i] !== search ) {
    continue;
  }
  count++;
}
console.log(count);

// String.prototype.match 메서드를 사용해도 같은 동작을 한다
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); // 3

// 위 예제의 for문은 아래와 동일하게 동작한다 
for( var i = 0; i < string.length; i++ ) {
  // 'l'이면 카운트를 증가시킨다
  if( string[i] === search ) {
    count++;
  }
}