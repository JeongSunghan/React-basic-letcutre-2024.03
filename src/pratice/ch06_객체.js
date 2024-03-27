//객체 생성
const obj = {name: 'james', age: 25, job: 'programer'} 

let age = 'age';        //변수를 선언하면 obj[age]도 가능

console.log(obj.name, obj.age, obj['job']);
//.(dot)을 이용해 접근 혹은 ['key값']로 접근

for(let key in obj) {       //반복문으로
    console.log(obj[key])
}
