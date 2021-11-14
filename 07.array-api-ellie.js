
// Q1. make a string out of an array
// join: 배열의 모든 데이터를 하나의 문자열로 합침
{
  const fruits = ['apple', 'banana', 'orange'];
  // let arr = fruits.join(', ');
  // let arr = fruits.join();
  let result = fruits.join(' and ');
  console.log(result);
}


// Q2. make an array out of a string
// split: 문자열을 전달된 구분자로 분리하여, 전달된 limit길이 만큼의 배열을 반환한다
// 구분자는 필수로 넣어줘야함
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  // let result = fruits.split(',');
  let result = fruits.split(',', 2);
  console.log(result);
}


// Q3. make this array look like this: [5, 4, 3, 2, 1]
// reverse: 배열의 순서를 거꾸로 만들어준다
// 원본 배열의 순서도 바뀌므로 주의!!!
{
  const array = [1, 2, 3, 4, 5];
  let result = array.reverse();
  console.log(result);
  console.log(array);
}


// Q4. make new array without the first two elements **********
// splice: 어디서부터 몇개나 지울건지 말하면 배열에서 그만큼 삭제해주고, 삭제한것을 리턴한다
// 이 문제에서 splice를 쓰면 새로운 배열을 리턴하는 것이 아니기 때문에 splice가 아니라 slice를 쓴다
// splice는 배열 자체를 수정, slice는 배열에서 원하는 부분만 리턴
// slice: 시작인덱스와 끝인덱스를 설정해 그부분만 따로 배열로 만들어 리턴한다. 끝인덱스는 포함하지 않음
{
  const array = [1, 2, 3, 4, 5];
  // let result = array.splice(0, 2);
  let result = array.slice(2, 5);
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]
}


class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];


// Q5. find a student with the score 90 ************
// find: 파라미터 콜백함수는 배열의 모든 요소 마다 호출되는데, 콜백함수가 true를 리턴하면 함술호출을 멈추고 해당 요소를 리턴(첫번째로 해당하는 요소). 콜백함수가 true를 리턴하지않으면 undefined를 리턴
{
  // const result = students.find(function(student, index) {
  //   return student.score == 90;
  // });
  // 화살표함수로 작성 가능
  const result = students.find( (student) => student.score == 90 );
  console.log(result);
}


// Q6. make an array of enrolled students *************
// filter: 배열에서 원하는 조건에 해당하는 요소만 리턴한다
{
  const result = students.filter( (student) => student.enrolled );
  console.log(result);
}


// Q7. make an array containing only the students' scores ***************
// result should be: [45, 80, 90, 66, 88]
// map: 배열을 내가 원하는 대로 변환한다
// 콜백함수를 적을때 파라미터값을 쉽게 이해할 수 있는 이름으로 짓는게 좋다. (배열명과 관련있게)
{
  const result = students.map( (student) => student.score );
  // const result = students.map( (student) => student.score * 2 );
  console.log(result);
}


// Q8. check if there is a student with the score lower than 50 *******************
// some: 배열에서 조건에 맞는 요소가 있는지 없는지 확인하는 api. 조건에 만족하는 요소가 하나라도 있으면 true를 리턴한다
// every: 배열에서 모든요소가 조건에 충족되어야 true를 리턴한다
{
  console.clear();
  // 조건에 따라 some과 every를 적절하게 사용하자
  // 지금의 경우 some을 쓰는것이 이해하기 쉽고 간편하다
  const result1 = students.some( (student) => student.score < 50 );
  const result2 = !students.every( (student) => student.score >= 50 );
  console.log(result1); // true
  console.log(result2); // true
}


// Q9. compute students' average score **************
// reduce: 원하는 시작점부터 모든 배열의 요소를 돌면서 어떤 값을 누적할 때 사용
// reduceRight: 배열의 제일 뒤에서부터 모든 배열의 요소를 돌면서 어떤 값을 누적할 때 사용
// previousValue: 이전 콜백함수에서 return된 값이 전달되어 온것
// currentValue: 배열의 요소를 순차적으로 전달받는다
// 0은 initialValue 
{
  // const result = students.reduceRight( (prev, curr) => {
  const result = students.reduce( (prev, curr) => {
    console.log('----------');
    console.log('prev', prev);
    console.log('curr', curr);
    return prev + curr.score;
  }, 0 );
  // arrow function을 사용해서 정리해보면
  const result2 = students.reduce( (prev, curr) => prev + curr.score, 0 );
  console.log(result / students.length);
  console.log(result2 / students.length);
}


console.clear();
// 위에서 배운걸로 내가 다시 풀어보기


// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map( (student) => student.score )
    .join();
  console.log(result);
}


// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// sort: a는 이전값, b는 현재값이 전달되는데 마이너스값을 리턴하면 b가 더 큰값이라고 간주되어 정렬된다 == 오름차순
// 반대로 하고 싶으면 a - b 가 아니라 b - a 로 하면 된다
{
  const result = students
    .map( (student) => student.score )
    .sort( (a, b) => a - b )
    .join()
    console.log(result);
}


// 오늘 배운 api
// join, split, reverse, splice, slice, find, filter, map, some, every, reduce, sort
// 더 익혀봐야 할 api
// splice, slice, find, filter, map, some, every, reduce, sort
