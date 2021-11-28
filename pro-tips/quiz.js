// Quiz! Remove Duplicates!
const array = ['🐶', '🐱', '🐈', '🐶', '🦮', '🐱'];

console.log( new Set(array) ); // Set(4) {'🐶', '🐱', '🐈', '🦮'}

// ✨
console.log([...new Set(array)]); // (4) ['🐶', '🐱', '🐈', '🦮']
