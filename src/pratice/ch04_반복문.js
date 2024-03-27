let fruits = ['사과', '배', '감'];

for (let i = 0; i < fruits.length; i++)
  console.log(fruits[i]);

for (let fruit of fruits)
  console.log(fruit);

var x = 4;    // var는 재선언이 가능
var x = 6;
let y = 4;    // let은 재선언이 안됨
// let y = 6;