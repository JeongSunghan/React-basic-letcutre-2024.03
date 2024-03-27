/* 표준 내장 객체 */

let str = 'c:/Temp/ss/profile/james.jpg';

//파일의 타입
let idx = str.lastIndexOf('.')      // str에 마지막으로 나타나는 .의 인덱스 위치 찾기'
console.log(str.substring(idx + 1));        //. 의 바로 다음부터 시작


//파일이 있는 제일 마지막 디렉토리명
let arr = str.split('/')            // '/'를 기준으로 나눠라
console.log(arr[arr.length - 2]);       //  생성된 배열의 길이에서 끝에서 두 번째 요소를 찾는다


const fruits = ['apple' , 'banana' , 'cherry'];
fruits.push('melon')    //함수에 값을 넣는다.
console.log(fruits.join(', '));         //배열의 모든 요소를 하나의 문자열로 결합


//배열을 정렬하는 방법
const numbers = [4, 7, 10, 9, 15, 6];
console.log(numbers.sort((x, y) => x - y ));        //오름차순,  y - x : 내림차순
console.log(numbers);

// fruits.forEach(value => { 
//     console.log(value);
// });

fruits.forEach((value, index, arr) => {         //요소의 값, 인덱스, 배열
    console.log(value, index, arr)            
});

let power = numbers.map(val => val * val);      //val의 제곱의 값을 리턴
console.log(power);

let even = numbers.filter(val => val % 2 == 0);     //2로 나눠서 나머지가 0인것들만 출력하는 함수ㅍ
console.log(even);

//필터를 이용해서 글자가 6글자 이상인 것만 출력
console.log(fruits.filter(val => val.length >= 6));

let sum = numbers.reduce((prev, curr) => prev + curr, 0);    
//prev => 리듀서 함수, curr => prev의 초기값 = 0;
  
console.log(sum);       //51, [4, 7, 10, 9, 15, 6]의 합
console.log(numbers.reduce((prev, curr) => prev * curr, 1));    //number의 곱

const complex = [
    {name: 'pad', price: 150000}, {name: 'mouse', price: 80000}, {name: 'pen', price: 30000}    
];
const jsonComplex =  JSON.stringify(complex);
console.log(jsonComplex);       //complex를 문자열로 변환

const parseComplex = JSON.parse(jsonComplex);
console.log(parseComplex);      //문자열을 JavaScript 객체로 변환








