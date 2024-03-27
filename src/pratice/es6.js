// Destructuring

//객체 구조 분해 할당
let person = {name: 'James', age:25, job:'Programmer'};
const {name, age} = person;
console.log(name, age);

//객체 재할당과 구조 분해 할당
person = {name, age, job:'Traveler'};       //job 속성값 변경
console.log(person);

//배열 구조 분해 할당
let fruits = ['apple' , 'banana' , 'cherry'];
const[a, b, c] = fruits;        // fruits 배열의 첫 번째, 두 번째, 세 번째 요소를 각각 a, b, c라는 변수에 저장
console.log(a, b, c);

const [x, y] = fruits;      //에러없이 정상 작동, 체리만 제외
console.log(x, y);

//Reset Operator, 나머지 연산자와 배열 구조 분해 할당 (... = 스프레드연산자)
 const [l, ...m] = fruits;
 console.log(l, m);     // l => apple에 할당, ...m => 나머지는 배열에 할당

 //기존 배열을 변경하지 않고 새로운 요소를 포함하는 새 배열을 쉽게 생성
 let newFruits = [...fruits, 'melon'];      //fruits는 배열에 할당하고 + 배열에 멜론을 추가
 
 //두 결과차이 비교
 console.log(newFruits);
 //fruits 배열의 모든 요소를 개별 요소로 펼치고, 그 뒤에 'melon'을 추가하여 newFruits 배열을 생성


 console.log([fruits, 'melon']);       
 //fruits 배열 자체가 하나의 요소로 포함된 더 큰 배열이 되며, 두 번째 요소로는 'melon'이 온다.

 //첫 번째 방식은 배열의 요소를 새 배열에 개별적으로 펼쳐서 새 요소를 추가하는 방법 
 //두 번째 방식은 기존 배열을 하나의 요소로 포함하는 더 큰 배열을 만드는 방법

 let str = 'Java';
 console.log(...str);       //글자가 하나씩 배치 (J a v a)

 let newPerson = {...person, gender:'Male'};        //멜론 추가와 같은 방식
 console.log(newPerson);