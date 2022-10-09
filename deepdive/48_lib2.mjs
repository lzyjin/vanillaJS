// ❗️ 모듈에서 하나의 값만 export한다면 default 키워드를 사용할 수 있다.
// ❗️default 키워드를 사용하는 경우 기본적으로 이름 없이 하나의 값을 export한다.
export default x => x * x;

// default 키워드를 사용하는 경우 var, let, const 키워드는 사용할 수 없다.
// export default const foo = () => {}; // SyntaxError: Unexpected keyword 'const'