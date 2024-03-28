import { useState } from 'react';
import './App.css';

function App() {
  // 카운트를 관리하기 위한 상태(count)와 이 상태를 업데이트하는 함수(setCount)를 선언, 초기값은 0
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);
  //버튼 클릭 이벤트에 반응하여 실행하는 함수 :카운트를 1 증가시키고, 업데이트된 값을 numbers 배열에 추가
  const handleClick = () => {     
    setCount(count+1);
    setNumbers([...numbers, count+1]);    // 새로운 객체를 참조하는 방법
    // numbers.push(count+1);   // 리액트에서 권장하는 방법 아님
    console.log(count);
  }
  return (
    <>    
      <div style={{fontSize: '5rem'}}>{count}</div>
      <h3>{numbers}</h3>  {/* 카운트된 숫자들을 배열에서 차례대로 나열 */}
      <button onClick={handleClick}>증가하기</button>   {/* 클릭하면 handleClick의 함수 호출 */}
      
    </>
  );
}

export default App;