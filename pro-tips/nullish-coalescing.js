// 👉 Nullish coalescing operator
// leftExpr ?? rightExpr
// leftExpr가 null이거나 undefined일때만 rightExpr이 실행

// ❌ Bad Code 💩
function printMessage(text) {
  let message = text;
  if(text == null || text == undefined) {
    message = 'Nothing to display 🤪';
  }
  console.log(message);
}

// ✅ Good Code ✨
function printMessage2(text) {
  console.log( text ?? 'Nothing to display 🤪' );
}

printMessage2('hello'); // hello
printMessage2(null); // Nothing to display 🤪
printMessage2(undefined); // Nothing to display 🤪





// 그러면 위 방법 대신 default parameter를 쓰면 안되냐? 했을때
// 🚨 Default parameter is only for undefined
function printMessage3(text = 'Nothing to display 🤪') {
  console.log( text );
}

printMessage3('hello'); // hello
printMessage3(null); // null
printMessage3(undefined); // Nothing to display 🤪

// 주의) undefined이 전달되면 default parameter로 할당되지만
// null이 전달되면 default parameter로 할당되지 않는다




// Nullish coalescing operator 과 유사한 Logical OR operator
// leftExpr || rightExpr
// leftExpr가 falsy일때만 rightExpr이 실행
// falsy: undefined, null, false, 0, -0, NaN, '', "", ``
// 이 둘의 차이를 명확하게 알고 사용하는 것이 중요하다

// 🚨 Logcal OR operator ||
function printMessage4(text) {
  console.log(text || 'Nothing to display 🤪');
}
printMessage4('hello'); //hello
printMessage4(null); // null
printMessage4(undefined); // Nothing to display 🤪
printMessage4(0); // Nothing to display 🤪
printMessage4(''); // Nothing to display 🤪



// leftExpr ?? rightExpr
// value가 아니라 expression인 이유
// 값 자체가 null undefined인지 확인할 수도 있지만, 함수나 코드가 실행된 값을 확인할 때도 쓰인다
const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}
function fetchFromServer() {
  return 'Hiya from 💻';
}