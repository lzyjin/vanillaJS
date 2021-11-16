'use strict';

// Promise is a JavaScript object for asynchronous aperation.
// 프로미스는 비동기적인 것을 수행할 때 콜백함수 대신 사용
// State: pending -> fulfilled(성공) or rejected(실패)
// Producer vs Consumer

// 2가지 포인트를 잡고 공부하기
// 1. 상태 state - 기능수행중인지 기능수행이 끝나서 성공했는지 실패했는지
// 2. 데이터의 제공자(producer)와 소비자(consumer)를 제대로 이해하기

// 1. Producer
// 주의! when new Promis is created, the executor runs automatically.
const promise = new Promise( (resolve, reject) => {
    // doing some heavy work(network, read files)
    console.log('doing something...');

    setTimeout( () => {
      // 성공하면 
      resolve('ellie');
      // 실패하면
      // reject(new Error('no network'));
    }, 2000 );
} ); 

// 2. Consumer: then, catch, finally
promise
  .then( (value) => {
    console.log(value);
  } )                   // then 도 결국 promise를 리턴하기때문에 이 리턴값에 .catch를 사용할 수 있는 것 
  .catch( error => {
    console.log(error);
  } )
  .finally( () => {
      console.log('finally');
  } );

// 3. Promise chaining
const fetchNumber = new Promise( (resolve, reject) => {
  setTimeout( () => resolve(1), 1000 );
} );

// then은 값을 전달할 수도 있고, promise를 전달할 수도 있다
fetchNumber
  .then( num => num * 2 ) 
  .then( num =>  num * 3 )
  .then( num => {
    return new Promise( (resolve, reject) => {
      setTimeout( () => resolve(num - 1), 1000 );
    } );
  } )
  .then( num => console.log(num) );

// 4. Error Handling
const getHen = () => 
    new Promise( (resolve, reject) => {
      setTimeout( () => resolve('🐔'), 1000 );
    } );
const getEgg = hen => 
    new Promise( (resolve, reject) => {
      // setTimeout( () => resolve(`${hen} => 🥚`), 1000 );
      setTimeout( () => reject(new Error(`${hen} => 🥚`)), 1000 );
    } );
const cook = egg => 
    new Promise( (resolve, reject) => {
      setTimeout( () => resolve(`${egg} => 🍳`), 1000 );
    } );

// getHen()
//   .then(hen => getEgg(hen))
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal));

// 위 코드를 이렇게 적을 수 있음

getHen() //
  .then(getEgg)
  .catch( error =>{
    return '🍞';
  } )
  .then(cook)
  .then(console.log)
  .catch(console.log());