'use strict';

// class
// - 붕어빵틀
// - template
// - declare once
// - no data in

// object 
// - 붕어빵
// -instance of a class
// created many times
// data in

// Object-oriented programming
// class: template
// object: instance of template
// JavaScript classes
// - introduced in ES6
// syntatical sugar over prototype-based inheritance

// 1. Class declaration
class Person {
	// constructor
	constructor(name, age) {
		// fields
		this.name = name;
		this.age = age;
	}

	// methods
	speak() {
		console.log(`${this.name} : hello!`);
	}
}

const ellie = new Person('ellie', '20');
console.log(ellie);
ellie.speak();

// 2. Getter and setters
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	get age() {
		return this._age;
	}
	set age(value) {
		this._age = value < 0 ? 0 : value;
	}
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1);

// 3. Fields (public, private)
// Too soon!
class Experiment {
	// public field
	publicField = 2;
	// private field는 변수명 앞에 #를 붙인다
	#privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undifined

// Static properties and methods
// Too soon!
class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
// static은 object마다 할당되어지는것이 아니라 class자체에 할당되기때문 
console.log(Article.publisher); // Dream Coding
Article.printPublisher();
// object와 상관없이 공통적으로 class에서 사용할 수 있는 거라면 static과 static method를 이용해서 작성하는것이 메모리에 효율적이다 

// 5. Inheritance
// a way for one class to extend another class
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}
	draw() {
		console.log(`drawing ${this.color} color of`);
	}
	getArea() {
		return this.width * this.height;
	}
}
class Rectangle extends Shape {}
class Triangle extends Shape {
	// overiding
	draw() {
		super.draw(); // 부모의 메소드
		console.log('▲');
	}
	getArea() {
		return (this.width * this.height) / 2;
	}
}

const rectangle = new Rectangle(20, 30, 'blue');
rectangle.draw();
console.log(rectangle.getArea()); 
const triangle = new Triangle(50, 10, 'red');
triangle.draw();
console.log(triangle.getArea()); // 오버라이딩한 method를 호출

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true !!! 
// 모든 class 들은 Object를 상속했다.

