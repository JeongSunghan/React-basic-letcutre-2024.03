let s = `She said, "I am happy."`; // templete literal
console.log(s);
let year = new Date().getFullYear();
console.log(`올해는 ${year}년 입니다.`);

let toggle = true; // on/off 반복
for (let i = 0; i < 4; i++) {
  toggle = !toggle;
  console.log(!toggle,);
}

console.log(`2 == '2' is ${2 == '2'}`);   // true, 값은 같음
console.log(`2 === '2' is ${2 === '2'}`); // false, 값은 같으나 자료형이 다름