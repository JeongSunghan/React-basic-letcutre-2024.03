import { useState } from 'react';
import './App.css';
import CardInput from '../components/CardInput';
import CardInput2 from '../components/CardInput2';

function App() {  
  // 사용자가 좋아하는 음식들의 목록을 저장하는 상태 변수
  const [foods, setFoods] = useState(['피자', '삽겹살', '불고기']);

  return (
    <>
    <div className='card'>

      <ul>내가 좋아하는 음식</ul>
      {
        foods.map((food, idx) => (    //.map = > 그 결과로 새 배열을 생성하는 함수
          <li key={idx}>{food}</li> 
          //키 값을 붙여주면 안정적이라고 함?
          //key는 React가 어떤 항목이 변경되었는지, 추가되었는지, 제거되었는지를 식별하는 데 도움
        ))
      }

      {/* 버튼을 이용해 음식을 추가하는 방법 */}
      <button onClick={() => {
        const item = prompt('좋아하는 음식을 입력하세요');
        setFoods([...foods, item]);  //item => 내가 입력한 음식
      }}>메뉴 추가</button>
      </div>
    </>
  );
}

export default App;