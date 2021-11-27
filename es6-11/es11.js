// * ES11(2020)문법중 중요한것 *
// Optional chaining
// Nullish coalescing operator

// 👉 Optional chaining
{
  const person1 = {
    name: 'Ellie',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob'
      }
    }
  }
  const person2 = {
    name: 'John'
  }

  // 💩💩💩💩💩💩
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2); // error
  }

  // 💩💩💩
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager 
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // 💩
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name );
    }
    printManager(person1);
    printManager(person2);
  }

  // ✨
  // kotlin swift 같은 언어에도 있는 기능
  function printManager(person) {
    console.log(person.job?.manager?.name);
  }
  printManager(person1);
  printManager(person2);
}


// 👉 Nullish coalescing operator
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
{
  // Logical OR operator
  // false: false, '', 0, null, undefined, NaN
  {
    const name = 'Ellie';
    const userName = name || 'Guest';
    console.log(userName);
  }

  // 💩
  {
    const name = '';
    const userName = name || 'Guest';
    console.log(userName);
    const num = 0;
    const message = num || 'Guest';
    console.log(message);
    // null이 아니라 빈문자열이거나 0일때도 null 취급을 하는 버그 발생
  }

  // ✨
  // 널 병합 연산자(??)는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자
  {
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    const userNum = num ?? 'undefined';
    console.log(userNum);
  }
}