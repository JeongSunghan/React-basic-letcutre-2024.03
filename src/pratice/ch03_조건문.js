let date = new Date().getDate();
console.log(date);
console.log(`오늘의 날짜는 ${date % 2 == 0 ? '짝수' : '홀수'}입니다.`);

let test;    // null, undefined, '', 0, {}, []만 false, 나머지는 true (값이 있으면)
test = test ? test : '초기값';
console.log(test);
