'use strict';

// async와 await은 새로운것이 추가된 것이 아니라 기존에 존재하는 promise 위에 간편한 api를 제공한다고 해서 
// syntatic sugar 이라고 부른다
// syntatic sugar에는 class가 있다
// class는 prototype을 베이스로 한 살짝 덧붙여진 syntaic sugar이다



// async & await
// clear style of using promise :)


// 1. async 
function fetchUser() {
  // do network request in 10 secs...
  // return 'ellie';

  // 프로미스를 사용하기
  // 프로미스: 내가 언제 user 데이터를 받아올 지 모르겠지만, 너가 then이라는 콜백함수만 등록해놓으면 user 데이터가 준비되는대로 너가 등록한 콜백함수를 불러줄게! 약속할게!
  return new Promise( (resolve, reject) => {
    resolve('ellie');
  } );
}

const user = fetchUser(); // 자바스크립트는 동기적 처리를 하기 때문에, 비동기 처리를 해주지 않으면 이 함수에서 10초가 걸리는 동안 다음 라인의 코드를 읽지 않는다 
user.then(console.log);
console.log(user);

// promise를 사용하지 않고 간편하게 비동기 처리 하기
// 함수앞에 async라는 키워드를 적으면, 함수의 블럭안의 코드를 자동으로 promise로 변환시켜준다
async function fetchUser2() {
  return 'ellie';
}
const user2 = fetchUser2();
// user2.then(console.log);
console.log(user2); // promise 리턴



// 2. await
// await 키워드는 async가 붙은 함수 안에서만 쓸 수 있다.
// 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);  // await은 delay(3000);가 끝날때까지 기다려준다
  return '🍎'; // 3초 후에 사과를 리턴하는 프로미스가 만들어진다(async 키워드가 있으니까)
}
async function getBanana() {
  // await delay(3000);
  await delay(2000);
  
  // 만약 에러가 발생했다면
  // throw 'error';

  return '🍌';
}

// 위 함수를 promise를 사용하는 형식으로 나타내보면
// chaining
// function getBanana() {
//   return delay(300)
//     .then( () => '🍌' )
// }

// promise 방식으로 만들면
// 이런 callback hell처럼 됐자나..?!
// function pickFruits() {
//   return getApple().then(apple => {
//       return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }

async function pickFruits() {

  // const apple = await getApple();
  // const banana = await getBanana();
  // return `${apple} + ${banana}`;
  // 이렇게 적으면 사과와 바나나를 받는데에 각각 3초씩 걸리므로 순차적으로 진행해서 비효율적이다.

  // 위 코드를 개선하면
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
  // 사과와 바나나를 동시에 받는 병렬적 처리가 가능 
  // 하지만 이런 경우 코드를 이런식으로 적지 않고 3번처럼 간단하게 적을 수 있다.

  // error handling
  // try {
  //   const apple = await getApple();
  //   const banana = await getBanana();
  //   return `${apple} + ${banana}`;
  // } catch() {

  // }
}

pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllFruits() {
  // all: promise 배열을 전달하면 모든 promise들이 병렬적으로 다 받을 때까지 모아준다
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+')); // 배열을 리턴하므로 join으로 문자열로 변환 
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  // race: 배열에 전달된 promise중에서 가장 먼저 값을 리턴한 promise만 전달된다
  // 사과는 3초 바나나는 2초로 바꾼 다음에 테스트
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log); // 🍌 가 출력된다