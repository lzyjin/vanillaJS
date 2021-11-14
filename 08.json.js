
// JSON
// JavaScript Object Notation



// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); // 배열처럼 보이는 문자열

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // symbol: Symbol('id'),
  jump: () => {
    console.log(`${this.name} can jump`);
  }
};

json = JSON.stringify(rabbit);
console.log(json); // jump함수는 제외하고 출력됨. 함수는 object안에 있는 데이터가 아니기 때문에
// symbol도 포함되지 않음

// 두번째 파라미터로 콜백함수를 전달해도 되지만 배열형태도 가능하다
// 배열의 프로퍼티 이름만 전달하면 원하는 프로퍼티만 json으로 변환된다
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

// 데이터를 세밀하게 통제하고 싶을 때 콜백함수를 사용한다
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key === 'name' ? 'ellie' : value;
});
console.log(json);




// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
// obj.jumb(); //error!  rabbit을 json으로 만들때 함수가 포함되지 않았기 때문에 obj에는 jump가 없다

console.log(rabbit.birthDate.getDate()); // 오늘 날짜
// console.log(obj.birthDate.getDate()); // error! obj.birthDate는 문자열이기 때문
console.log(obj.birthDate);

// 문자열인 obj.birthDate를 다시 object로 변환하고싶으면 콜백함수를 이용하면 된다
const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
  // return value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate()); // 원하는대로 birthDate가 출력됐다!


// 유용한 사이트
// 1. JSON Diff.com
// 서버에게 요청했을 때 첫번째로 받아온 데이터와 두번째로 받아온 데이터가 어떻게 다른지 비교할 수 있는 사이트
// 2. JSON Beautifier
// 서버에서 받아온 json을 붙여넣으면 포맷이 망가질 때가 있다. 그 코드를 보기쉽게 고쳐주는 사이트
// 3. JSON Parser
// json을 object타입으로 보고싶을 때 사용하는 사이트
// 4. JSON Validator
// json 코드 유효성검사 - 어디가 잘못되었는지, 문법상 잘못된것 등 찾을 수 있는 사이트
// 등등   ㄹ

