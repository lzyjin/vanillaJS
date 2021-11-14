'use strict';

// 콜백함수란
// 1. 다른 함수의 인자로써 이용되는 함수
// 2. 어떤 이벤트에 의해 호출되어지는 함수
// "called at the back" of the other function.


// Synchronous callback
function printImmediately(print) {
  print();
} 
// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}


// JavaScript is synchronous. 자바스크립트는 동기적이다.
// Execute the code block by order after hoisting.
// hoisting: var, function declaration 등이 자동으로 제일 위로 올라가는것. 
console.log('1');
setTimeout(() => console.log('2'), 1000); // () => console.log('2') 이게 콜백함수. 내가 만든 함수를 나중에 다시 불러줘 해서 call back 
console.log('3');
printImmediately( () => console.log('hello') );
printWithDelay( () => console.log('async callback'), 2000 );

// 자바스크립트는 함수를 콜백형태의 인자로 다른 함수에 전달할 수도 있고, 변수에 할당할 수도 있다. 


// 콜백 지옥 체험 ㅋㅋ
// Callback Hell example
// 문제점: 
// 가독성이 떨어지고 읽기가 거북하다.
// 비지니스로직을 한눈에 알아보기 힘들다.
// 에러가 발생하거나 디버깅할때도 힘들다. 
// 유지보수도 어렵다.
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout( () => {
      if( (id === 'ellie' && password == 'dream') || (id === 'coder' && password == 'academy') ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout( () => {
      if(user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError( new Error('no access') );
      }
    }, 1000 );
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  (user) => {
    userStorage.getRoles(
      user, 
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`);
      },
      error => {
        console.log(error);
      });
  }, 
  (error) => {
  console.log(error);
  }
);