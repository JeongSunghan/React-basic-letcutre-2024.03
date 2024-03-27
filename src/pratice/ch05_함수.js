
const anony = function () {  // anony or fn
  console.log('익명 함수');
}

function named() {
  console.log('선언적 함수');
}

anony(); named();    // anony(); or fn(); named();

const arrow = () => {
  console.log('화살표 함수, 람다 함수');
}
arrow();

// 파라메터가 1개 있으면 ()를 생략할 수 있음, 그러나 사용하길 권장
const param1 = x => {
  console.log('x=' + x);
}
param1(5);

// 함수내부의 실행문이 return 한개밖에 없으면 { } return을 생략 할 수 있음
const add = (a, b) => a + b;
console.log(`add(3, 4) = ${add(3, 4)}`);

const fn = (name, count) => {
  // if (count== undefinedd)    // level 1
  // count = 0;
  // count = count ? count : 0; // level 2
  count = count || 0;           // level 3
  console.log(`${name}: ${count}`);
}
fn('apple', 10);
fn('banana');


// callBack 함수
function call3Times(callback) {
  for (let i = 0; i < 3; i++)   // callback 3번 호출
    callback();
}


// call3Times(anony);
// call3Times(named);

call3Times(function () {    //함수 call3Times을 불러옴
  console.log('콜백 함수로 직접 익명함수를 생성') 
});

call3Times(() => {
  console.log('콜백 함수로 화살표 함수를 생성');
});



setTimeout(() => {    //handler = 함수
  console.log('1000ms 이후에 실행됩니다.');
}, 1000);         //1000ms = 1 sec

const si = setInterval(() => {
  console.log("0.5초 마다 실행");
}, 500);      // 0.5 sec

//3초 후에 반복 실행되는 코드 제거
setTimeout(() => {    
  clearInterval(si);
  console.log('3.1초 후에 반복실행되는 코드를 제거')
  
}, 3000);