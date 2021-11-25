// const num = 1;
// const num2 = 2;
// const result = num + num2;
// console.log(result);

// const num3 = 1;
// const num4 = 2;
// const result2 = num3 + num4;
// console.log(result2);

// 프로그래밍을 할 때 반복되는 로직을 함수로 만든다
// 함수로 만들면 재사용할 수 있으니까 

// 함수 정의
function add(a, b) { // 함수를 사용(호출)하기 전까진 a와 b는 값이 없다. a와 b는 매개변수.... 나 인자(인수)랑 매개변수를 완전히 반대로 알고있었다..
  return a + b;
}

// 함수 호출
const sum = add(5, 7);
console.log(`sum: ${sum}`);

// 사실 add의 함수 블럭이 어딘가에 들어있고, add(함수이름)는 변수처럼 그 함수가 정의된 곳을 가리키고있는 reference를 담고 있다.

const doSomething = add;
// doSomething도 add와 똑같은 곳을 가리키고 있다.

// 이 함수를 실행하기 위해서는 ()를 붙이고 인수를 넣어준다.
const result = doSomething(7, 8); //이부분이 포인트!
console.log(result); // 15
const result2 = add(7, 8);
console.log(result2); // 15
// 똑같은 결과!

function print() {
  console.log('print');
}
print(1); // print
print('a', 'b'); // print
// 매개변수가 없는 함수를 호출할 때 인수를 넣으면 필요가없기 때문에 아무것도 출력되지 않는다. 무시된다.





// 재미있는 함수를 만들어보자 ~!
function divide(num1, num2) {
  return num1 / num2;
}
function surprise(operator) { 
  // const result = operator();
  const result = operator(10, 20); // add(10, 20)과 같다. 이 operator는 add를 가리키기 때문에 인자 2개를 가져야한다.
  console.log(result);
}

// surprise(); // Uncaught TypeError: operator is not a function

//surprise(add); // NaN
// surprise의 인자로 add의 ref가 전달된다
// surprise(add)는 console.log(add()); 와 동일하다

// surprise(add(10, 20)); // Uncaught TypeError: operator is not a function

// operator()를 operator(10, 20)으로 바꾼 후
surprise(add); // 30 


// 함수의 이름을 변수에 할당하거나 다른 함수의 인자로 전달한다는 것은 이름이 가리키고 있는 함수의 레퍼런스를 전달하는것.
// 그래서 이름을 통해서 함수를 호출할 수 있는 것. 


surprise(divide); // 0.5 