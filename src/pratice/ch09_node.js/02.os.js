/*  
    OS 모듈 : 운영체재 대한 정보와 기능 제공
*/

//require => import와 비슷함
const { copyFileSync } = require('fs');
const os = require('os');
console.log(os.hostname(), os.platform(), os.type());


//URL의 정보를 가져오고 출력 => URL을 구성하는 다양한 부분에 쉽게 접근
const url = new URL("https://www.hanbit.co.kr/academy/books/book_view.html?p_code=B2376027111");
console.log(url.href);
console.log(url.protocol);
console.log(url.pathname);
console.log(url.search);
console.log(url.searchParams);




