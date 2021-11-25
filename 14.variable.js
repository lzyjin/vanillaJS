
// 211124 
// 변수는 처리해야하는 데이터를 담고 있는 것
// 변수를 통해 데이터에 접근하고 데이터를 업데이트 할 수 있다

// let 키워드 사용
// primitive type(데이터가 작은 단위): numer, string, boolean, null, undefined
// 위 타입들을 제외한 모든것들은 object이다
// 변수명은 의미있는 이름으로 만들어라

let number = 2;
let number2 = number;

console.log(number); // 2
console.log(number2); // 2

number2 = 3;

console.log(number); // 2
console.log(number2); // 3



// object
const obj = {
  name: 'ellie',
  age: 5,
}

console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

// primitive type은 변수a에 변수b를 담으면 -> 변수a에는 변수b의 값이 저장되지만
// object는 변수에 값을 담는것이 아닌 데이터가 존재하는 주소값(ref)을 담으므로, 
// 변수a에 변수b를 담으면- > 변수a에는 변수b의 주소값이 저장된다

obj.name = 'james';

console.log(obj.name);
console.log(obj2.name);

// let 변수는 값을 바꿀 수 있다
let a = 1;
a = 3;
a = 6;

// const 상수는 값을 바꿀 수 없다
const b = 1;
// b = 5; // Uncaught TypeError: Assignment to constant variable.

// 위에서 obj는 const로 만들었는데 왜 값을 바꿀 수 있는거에요?!
// obj에는 데이터가 아닌 데이터가 있는 주소를 나타내는 reference를 담고있기 때문에 이 ref는 변하지 않는다

// 만약 아래처럼 새로운 데이터를 할당한다면?
// obj = {
//   name: 'tom',
//   age: 5
// }
// error !! 

// obj.name = 'lisa'; 이런식으로 가능한 이유는
// obj에는 데이터가 담겨있는 곳의 ref를 가리키고, 그 ref를 통해 데이터를 수정하는 것은 문제가 안되기 때문 
// 즉 ref를 바꾸는게 아니기 때문 == object 자체를 바꾸는것이 아님

// https://hyunseob.github.io/2016/11/21/misunderstanding-about-const/

// 1. 기본적으로는 const를 사용한다.
// 2. 재할당이 필요한 경우에만 let을 사용한다.
// 3. var은 ES2015에서는 쓰지 않는다..