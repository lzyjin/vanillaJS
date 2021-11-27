
// class & callback function

class Counter {

  // constructor() {
  //   this.counter = 0;
  // }
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  // 이렇게 했을 때 단점은 coolCounter를 사용하는 사람이 counter가 5배수일때마다 출력할 문구를 바꾸고싶다던가 팝업을 띄우고 싶으면 클래스 내부에 있기 때문에 컨트롤이 불가능하다.
  // increase() {
  //   this.counter++;
  //   console.log(this.counter);
  //   if(this.counter % 5 === 0) {
  //     console.log('yo!');
  //   }
  // } 

  // 원하는대로 counte를 사용하고 싶으면? 콜백함수를 사용하자
  // 장점: 원하는대로 함수를 만들어서 클래스에 적용시킬수 있다
  // increase(runIf5Times) {
  increase() {
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0) {
      // runIf5Times(this.counter);
      // this.callback(this.counter);
      this.callback && this.callback(this.counter);
    }
  } 
  // 하지만 increase()라는 함수를 호출할 때마다 내가 만든함수를 매번 인자로 전달해야하니 번거롭다
  // 그래서 보통 클래스의 함수에 콜백함수로 전달하지 않고, 생성자에 콜백함수로 전달한다
}

// const coolCounter = new Counter();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();

// const coolCounter = new Counter();
function printSomethig(num) {
  console.log(`wow! ${num}`);
}
function alertNum(num) {
  alert(`wow! ${num}`);
}
// coolCounter.increase(printSomethig);
// coolCounter.increase(printSomethig);
// coolCounter.increase(printSomethig);
// coolCounter.increase(printSomethig);
// coolCounter.increase(printSomethig);

// coolCounter.increase(printSomethig);
// coolCounter.increase(printSomethig);
// coolCounter.increase(printSomethig);
// coolCounter.increase(printSomethig);
// coolCounter.increase(alertNum);

// 클래스의 생성자에 콜백함수를 추가해서
// 클래스의 메소드에서 그 콜백함수를 불러오고 있으므로 
// increase()를 호출할 때 함수를 전달할 필요가 없음
// 대신에 클래스 객체를 생성할 때 인자로 전달해야함. 
// const coolCounter = new Counter(printSomethig);

// 그런데 만약 콜백함수없이 생성자를 만들면 어떻게 될까?
const coolCounter = new Counter();
// Uncaught TypeError: this.callback is not a function
// 클래스의 increase()메소드안에서 this.callback()을 호출하고 있는데 값이 없어서 callback은 undifined이 되므로 에러가 난 것
// 해결방법: callback이 함수일때만 실행하게 하면 된다
// this.callback && this.callback(this.counter); 이렇게! 

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

// 클래스 하나로 다른 기능을 하는 객체로 만들 수 있다
// 원하는 기능을 넣어서 클래스를 재조립한다는 느낌
const printCounter = new Counter(printSomethig);
const alertCounter = new Counter(alertNum);