// * ES6(2015)문법중 중요한것 *
// Shorthand property names 객체 초기자
// Destructuring assignment 구조 분해 할당
// Spread syntax 전개 구문
// Default parameters 기본값 매개변수
// Ternary Operator
// Template Literals

// 👉 Shorthand property names
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
{
  const ellie1 = {
    name: 'ellie',
    age: '18'
  };

  const name = 'ellie';
  const age = '18';

  // 💩
  const ellie2 = {
    name: name,
    age: age
  }

  // ✨
  // object의 key와 value가 동일할 때는 하나로 합쳐서 쓸 수 있다!
  const ellie3 = {
    name,
    age
  }

  console.log(ellie1, ellie2, ellie3); // 셋이 똑같은 결과 
}




// 👉 Destructuring assignment
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
{
  // object
  const student = {
    name: 'Anna',
    level: 1
  }

  // 💩
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // ✨
  {
    // 변수이름 자리에 {객체의 키} = 객체
    const { name, level } = student;
    console.log(name, level);

    // 만약 변수명을 key와 다르게 하고싶다면?
    // 변수이름 자리에 {객체의 키: 새로정할 변수명}
    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ['🐱', '🐶', '🐹'];

  // 💩
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // ✨
  {
    const [first, second ] = animals;
    console.log(first, second);
  }

  // 변수명자리에 객체를 구조분해할당하려면 {}을 사용, 배열을 구조분해할당하려면 [] 사용
}




// 👉 Spread syntax
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// 오브젝트가 가리키고 있는 주소의 참조값만 복사해오기 때문에 원래의 오브젝트를 변경하면 Spread syntax를 이용해 복사한 결과물들에도 영향을 미친다(동일한 부분이 변경된다)
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);
  // ...배열명은 배열의 아이템을 하나하나를 복사해온다는 의미
  
  // 배열을 복사하고 아이템을 추가하고싶으면?
  const arrayCopy2 = [...array, { key: 'key3' }];
  // console.log(array, arrayCopy, arrayCopy2);
  
  // ...array는 배열의 주소값만 복사해온다. 실제 데이터가 들어있는게 아니다.
  // 그래서 동일한 object를 가리키고 있다
  // 그래서 만약 array의 obj1의 key에 해당하는 value를 변경하면 array를 복사한 다른 모든것들도 동일한 부분이 변경된다
  obj1.key = 'newKey';
  console.log(array, arrayCopy, arrayCopy2);


  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // 객체는 {}을 사용, 배열은 [] 사용

  // array concatenation (배열 병합)
  const fruit1 = ['🍑', '🍓'];
  const fruit2 = ['🍌', '🥝'];
  const fruits = [...fruit1, ...fruit2];
  console.log(fruits); // ['🍑', '🍓', '🍌', '🥝']

  // object merge
  // const dog1 = { dog1: '🐕' };
  // const dog2 = { dog2: '🐶' };
  // const dogs = { ...dog1, ...dog2 };
  // console.log(dogs); // {dog1: '🐕', dog2: '🐶'}

  // 주의할 점 
  // key가 동일한 오브젝트를 병합하면 
  // 뒤에오는 애가 앞에 오는 애를 덮어씀 
  const dog1 = { dog: '🐕' };
  const dog2 = { dog: '🐶' };
  const dogs = { ...dog1, ...dog2 };
  console.log(dogs); // {dog: '🐶'}
}




// 👉 Default parameters
{
  // 💩
  {
    function printMessage(message) {
      if(message == null) {
        message = 'default messgae';
      }
      console.log(message);
    }
    printMessage('hello');
    printMessage(); // 인자를 전달하지 않으면 undefined이 전달된다
  }

  // ✨
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }
}



// 👉 Ternary Operator
{
  const isCat = true;
  // 💩
  {
    let component;
    if(isCat) {
      component = '🐱';
    } else {
      component = '🐶';
    }
    console.log(component);
  }

  // ✨
  {
    const component = isCat ? '🐱' : '🐶';
    console.log(component);
    // or
    console.log(isCat ? '🐱' : '🐶');
  }
}



// 👉 Template Literals
{
  const weather = '⛅️';
  const temparature = '16°C';

  // 💩
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature
  );

  // ✨
  console.log(
    `Today weather is ${weather} and temparature is ${temparature}`
  );
}