/* File System 모듈 */
const fs = require('fs');       //파일을 읽고 불러온다.

// 1) 동기식으로 읽기
// const file01 = fs.readFileSync('./01.전역변수.js')      //함수를 사용해 '전역변수' 파일을 읽음
// console.log(file01.toString());        //내용이 바이트형태로 출력 + toString 사람이 읽을 수 있는 문자열로 반환
// console.log('=======================================')
// const file02 = fs.readFileSync('./02.os.js')
// console.log(file02.toString());
// console.log('=======================================')


// 2) 비동기식 읽기 - 올바르지 않은 방법
// fs.readFile('./01.전역변수.js', (err, data) => {
//     console.log(data.toString());
// });          
// console.log('=======================================')

// fs.readFile('./02.os.js', (err, data) => {
//  console.log(data.toString);
// });
// console.log('=======================================')


// 3) 올바른 비동기식 읽기
fs.readFile('./01.전역변수.js', (err, data) => {
    console.log(data.toString());
    console.log('=======================================');
});

fs.readFile('./02.os.js', (err, data) => {
    console.log(data.toString());
    console.log('=======================================');
});



