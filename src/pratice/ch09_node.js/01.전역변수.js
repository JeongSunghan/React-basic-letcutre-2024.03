//실행중인 스크립트 파일의 절대경로
console.log(__filename);

//스크립트 파일이 있는 디렉토리의 절대 경로
console.log(__dirname);

//JAVA_HOME 환경 변수가 설정되어 있는 경로가 출력
console.log(process.env.JAVA_HOME);
//process.env => 시스템 환경 변수에 접근

for (let i = 0; i < 10; i++) {
    if (i == 5)     //5가 되면 프로그램 종료
        process.exit();
    else
        console.log(i);
}
