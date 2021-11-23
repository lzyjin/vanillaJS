
// 211123
// Don't give up!

// 함수는 어떤 프로그래밍 언어이든 딱 2가지만 이해하면 된다
// 그 뒤로는 줄기를 쳐나가면 된다

// 1. 함수 선언
// 2. 함수 호출 

// 함수 선언
// - 기능을 수행하고 끝나는 함수
function doSomething() {
  console.log('hello');
}
// - 계산하고 특정한 값을 전달(리턴)하는 함수
function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
doSomething();
const result = add(1, 2);
console.log(result);



// 함수를 인자로 전달
function doSomething2(multiple) {
  console.log(multiple);

  // 나중에 추가
  const result = multiple(1, 3);
  console.log(result);
}
function multiple(a, b) {
  const result = a * b;
  return result;
}

// 함수 전달은 함수의 이름만 인자로 들어가야한다
// doSomething2(multiple);
// doSomething2(multiple()); // 결과는 NaN 이 된다. 이유: 아무런 인자가 없이 호출되었기 때문에 숫자가 아닌것들을 곱해서 결과는 NaN(Not a Number)이 된다
// doSomething2(multiple(1, 2)); // 이건 함수 전달이 아님. 이유: 함수를 호출한 뒤 리턴된 값이 전달되기 때문

doSomething2(multiple);



// 결론
// 함수에는 선언과 호출이 있다 
// 함수 선언은 어떤값을 전달받아올건지 인자를 정의하고나서 코드블럭(중괄호)을 작성한다
// 선언만으론 코드블럭이 실행되지 않는다
// 정의한 선언한 함수를 수행하기 위해서는 함수를 호출해야한다 
// 함수를 호출하기 위해서는 함수이름(인자) 형태로 호출해야한다
// 함수 이름은 함수를 가르키는 함수 자체가 된다 
// ()괄호를 쓰지 않고 함수 이름만 다른 함수의 인자로 전달하거나 다른 변수에 할당하면 함수 자체를 가르키는 것이다

const addFun = add;
console.log(add); // add 함수 자체를 출력
console.log(addFun(3, 5)); // add함수의 return값인 8이 출력 