// 211127

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean


// boolean에 대해서

let num; // undefined
if(num) {
  console.log('true!!');
} else {
  console.log('false!!');
}

// false: 0, -0, '', null, undefined, NaN
// true: -1. 'hello', 'false', {}, []

// 0은 다 false이고 다른 모든 숫자들은 true이다.
// 텅 빈 문자열은 false이고 값이 들어있는 모든 문자열은 true이다.
// object({})나 텅 빈 배열([])은 true이다. (객체 자체는 만들어졌고 데이터가 없으니까)

// 프로그래밍에서 데이터가 없고 비어있는 것들은 false에 속한다.
// 할당되지 않은 변수는 undefined이므로 false이다.





// && 연산자
let value;

value && console.log(value);
// && 연산자는 앞의 조건이 true여야 뒤의 조건을 실행하므로 
// value가 true이면 value가 출력되고
// value가 false이면 아무것도 실행되지 않는다.
// 이 구문은 아래 구문과 같다
if(value) {
  console.log(value);
}




// && 연산자를 사용하는 이유

// let obj;
let obj = {
  name: 'ellie'
};

//console.log(obj.name); // obj에 아무것도 할당되어 있지 않은데 name에 접근하면 에러가 난다
// 없는 데이터에 접근했기 때문에 프로그램이 죽는다.

// 그러면 obj가 없다면 name에 접근하지 못하게 하는것이 다음 코드이다.
obj && console.log(obj.name);