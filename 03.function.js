'use strict'

// Function
// fundamental building block in the program
// subprogram can be used multiple times
// performs a task or calculates a value

// 1. fuction declaration
// fuction name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
	console.log('Hello');
}
printHello();

function log(message) {
	console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// primitive parameters: passed by balue
// object parameters: passed by reference
function changeName(obj) {
	obj.name = 'coder';
}
const ellie = {
	name: 'ellie'
};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
	console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
	// for (let i = 0; i < args.length; i++) {
	// 	console.log(args[i]);
	// }

	// or

	// for(const arg of args) {
	// 	console.log(arg);
	// }

	// or

	args.forEach(
		(arg) => console.log(arg)
	);
}
printAll('dream', 'coding', 'ellie');

// function이름에 .을 찍으면 객체처럼 사용할 수 있다. 

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
	let message = 'local';
	console.log(message);
	console.log(globalMessage);
	function printAnother() {
		console.log(message);
		let childMessage = 'child';
	}
	// console.log(childMessage); // error
}

// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
// 또한 부모함수에서는 자식함수 안을 볼 수 없고, 자식함수 안에서만 부모함수를 볼 수 있다.
printMessage();
// console.log(message); // error

console.log(sum(100, 300)); // function declaration은 호이스팅때문에  에러 안남

// 6. Return a value
function sum(a, b) {
	return a + b;
}
const result = sum(1, 3);
console.log(result);

// return 이 없는것은 return undefined;가 있는것과 동일

// 7. Early return, early exit
// bad
function upgradeUser(user) {
	if(user.point > 10) {
		// long upgrade logic...
	}
}

// good
function upgradeUser(user) {
	if(user.point <= 10) {
		return;
	}
	// long upgrade logic...
}
// 조건이 맞지 않을 땐 빨리 return 해서 빨리 함수를 종료하도록




// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression 함수 표현식
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() { // anoymous function
	console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 함수를 선언함과 동시에 print라는 변수에 할당한다.
// function에 아무 이름이 없고, function 키워드를 사용해 함수를 선언

// 이름이 없는 함수를 anonymous function
// 이름이 있는 함수를 named function 이라고 한다

// 함수 선언과 함수 표현의 가장 큰 차이점은
// 함수 표현은 변수에 할당된 다음부터 호출이 가능하다
// 함수 선언은 호이스팅이 일어나 함수가 선언되기 이전에 호출이 가능하다.

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	if(answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
}

// anonymous function
const printYes = function() {
	console.log('yes!');
}
// named function
// better debugging in debugger's stack traces
const printNo = function print() {
	console.log('no!');
}
randomQuiz('wrong', printYes, printNo); // no! 출력
randomQuiz('love you', printYes, printNo); // yes! 출력

// 3. Arrow function
// always anonymous 
const simplePrint = function() {
	console.log('simplePrint!');
}
const simplePrint2 = () => console.log('simplePrint!');

const add2 = function(a, b) { 
	return a + b
};
const add3 = (a, b) => a + b;
// 또는
const simpleMultiply = (a, b) => {
	// do something more
	return a * b // 한줄로 못써서 {}안에 작성할 경우 return 키워드를 사용해야함
};

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 사용하려면
(function hello() {
	console.log('IIFE');
})();

// quiz 
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
const calculate = function(command, a, b) {
	switch(command) {
		case 'add':
			console.log(a + b);
		break;
		case 'substract':
			console.log(a - b);
		break;
		case 'divide':
			console.log(a / b);
		break;
		case 'multiply':
			console.log(a * b);
		break;
		case 'remainder':
			console.log(a % b);
		break;
		default:
			console.log("insert other command");
		break;
	}
}
calculate('add', 500, 500);

// ellie 의 방법
function calc(command, a, b) {
	switch(command) {
		case 'add':
			return a + b;
		break;
		case 'substract':
			return a - b;
		break;
		case 'divide':
			return a / b;
		break;
		case 'multiply':
			return a * b;
		break;
		case 'remainder':
			return a % b;
		break;
		default:
      throw Error('unknown command');
	}
}
console.log(calc('add', 2, 5));