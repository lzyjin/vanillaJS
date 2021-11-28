// 👉 Obtional Chaining
const bob = {
  name: 'Julia',
  age: 20
};
const anna = {
  name: 'Julia',
  age: 20,
  job: {
    title: 'Software Engineer'
  }
};

// ❌ Bad Code 💩
function displayJobTitle(person) {
  if(person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// ✅ Good Code ✨
function displayJobTitle(person) {
  if(person.job?.title) {
    console.log(person.job.title);
  }
}

// ✅ Good Code ✨
// Nullish coalescing operator까지 함께 이용하면
function displayJobTitle(person) {
  console.log( person.job?.title ?? 'No Job Yet 🔥' );
}