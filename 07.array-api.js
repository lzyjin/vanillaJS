// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  let arr = fruits.join(', ');
  console.log(arr);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  let arr = fruits.split(',');
  console.log(arr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  let arr = array.reverse();
  console.log(arr);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  let arr = array.splice(0, 2);
  console.log(array);
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

// Q5. find a student with the score 90
{
  students.forEach(function(student, index) {
    if(student.score == 90) {
      console.log(student);
    }
  });
}

// Q6. make an array of enrolled students
{
  let enrolledStudents = [];
  students.forEach(function(student, index) {
    if(student.enrolled == true) {
      enrolledStudents.push(student.name + ' ' + student.enrolled);
    }
  });
  console.log(enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  let scores = [];
  students.forEach(function(student, index) {
    scores.push(student.score);
  });
  console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
  let scores = [];
  for(student of students) {
    if(student.score < 50) {
      scores.push(student.score);
    }
  }
  console.log(scores);
}

// Q9. compute students' average score
{
  let averageScore = 0;
  for(student of students) {
    averageScore += student.score;
  }
  averageScore = averageScore / students.length;
  console.log('average score is ' + averageScore);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // 1. 점수만 들어있는 배열 만들기
  let scores = [];
  students.forEach(function(student, index) {
    scores.push(student.score);
  });
  // 2. 그 배열을 문자열로 변환 
  let result = scores.join(', ');
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  let scores = [];
  students.forEach(function(student, index) {
    scores.push(student.score);
  });
  scores.sort((a, b) => a - b);
  console.log(scores);
}