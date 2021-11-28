// 👉  Spread Syntax - Object

const item = { type: '👔', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// item과 detail이라는 object를 한번에 묶고 싶다!

// ❌ Bad Code 💩
item['price'] = detail.price;
// 기존의 object를 변경시키는 것은 좋지 않다.

// ❌ Bad Code 💩
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.prsizeice;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

// ❌ Bad Code 💩
const newObject2 = {
  type = item.type,
  size = item.prsizeice,
  price = detail.price,
  made = detail.made,
  gender = detail.gender
}

// ✅ Good Code ✨
const shirt0 = Object.assign(item, detail); // {type: '👔', size: 'M', price: 20, made: 'Korea', gender: 'M'}

// ✅ Better! Code ✨
const shirt1 = {...item, ...detail}; // {type: '👔', size: 'M', price: 20, made: 'Korea', gender: 'M'}

