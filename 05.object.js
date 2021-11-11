'use strict';

// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const name = 'ellie';
const age = 4;
print(name, age);
// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = {
  name: 'ellie',
  age: 4
};
print(ellie);

// object를 만드는 방법 2가지
const obj1 = {}; // 'object literal' syntax 
const obj2 = new Object(); // 'object constructor' syntax

// 자바스크립트는 런타임시 타입이 결정되는 언어라서 이런것도 가능하다
// 객체를 만들고 난 다음에 뒤늦게 프로퍼티를 추가할 수 있다
// 하지만 유지보수힘들고 에러발생할 가능성이 높으므로 사용하지말자 
ellie.hasJob = true;
console.log(ellie.hasJob); // true

// ㄷ ㄷ object 바깥에서 object의 프로퍼티를 삭제하는것도 가능하다
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined


// 2. Computed properties: object.['key']
// 객체(object)의 값에 접근 하는 방법 2가지
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);

// delete한 hasJob에 다시 값을 할당하면
ellie['hasJob'] = true;
console.log(ellie.hasJob); // true ㄷ ㄷ ㄷ ㄷ 

// 보통 코딩할때는 .으로 접근하는게 맞고,
// 실시간으로 데이터에 접근해야하는 경우 computed properties를 사용한다

// 예시
function printValue(obj, key) {
  // console.log(obj.key); // undefined
  console.log(obj[key]); // ellie
}
// key를 사용자에게 입력받아서 obj의 key에 해당하는 value를 출력한다고 하면 
// 함수안에서 obj.key 라고 하게되면 코딩하는 시점에서는 저 key값이 무엇인지 알 수 없다.
printValue(ellie, 'name');

// 연산 프로퍼티는 동적으로 key에 관련된 value를 받아와야할 때 유용하게 사용할 수 있다. 


// 3. Property value shorthand (단축 속성명)
// property shorthand는 객체를 정의 할 때 객체의 key값과 value의 값이 같으면, key 와 value 값을 각각 표기하지 않고 한 번만 표기하는 것을 의미합니다.
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'deve', age: 4 };
// person객체를 만들때 똑같은 프로퍼티를 반복해서 작성하는게 귀찮으니까 함수로 만들어서 객체를 만들면 편리하겠다!
function makePerson(name, age) {
  return {
    // name : name,
    // age : age
    name,
    age
  }
}
const person4 = makePerson('yejin', '26');
console.log(person4); // 정상출력


// 하지만 이렇게 객체(object)를 생성하는 함수는 보통 아래와 같이 작성한다
// 4. Constructor function 
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
const person5 = new Person('hyun', '29');
console.log(person5);


// 5. in operator: property existence check (key in obj)
// key가 object 안에 있는지 없는지 확인
console.log('name' in ellie); // true
console.log('height' in ellie); // false
console.log(ellie.height); // undefined


console.clear();
// 6. for..in vs for..of
// for (key in obj)
// object의 모든 프로퍼티(key)를 순회 
for (var key in ellie) {
  console.log(key);
}

// for (value of iterable)
// 반복할 수 있는 객체(Array, Map, Set, arguments..)를 순회
const array = [1, 2, 4, 5];
for(var value of array) {
  console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
// user2.name = 'coder';
console.log(user); // { name: 'coder', age:'20' }
// user2와 user는 object를 참조하는 동일한 주소를 가지고 있기 때문에 
// user2.name으로 값을 바꾸면 user.name도 바뀌는 것임

// object 자체를 복제하고 싶으면 ?
// old way
const user3 = {};
for (var key in user) {
  user3[key] = user[key];
}
console.log(user3);

// 지금 쓰는 방법 
const user4 = {}; // target
Object.assign(user4, user); // user는 source
console.log(user4);
// 위 코드를 한줄로 쓰면
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에오는값이 우선되어 앞선 값을 덮어씀 
// -> mixed는 fruit2의 복제 object 
console.log(mixed.color); // blue
console.log(mixed.size); // big

