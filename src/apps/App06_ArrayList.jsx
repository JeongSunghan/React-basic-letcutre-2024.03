import './App.css';
import CardInput from '../components/CardInput';
import CardInput2 from '../components/CardInput2';

function App() {
  const foods = ['피자', '삼겹살', '불고기'];
  return (
    <>
    <div className='card'>
      <ul>내가 좋아하는 음식</ul>
      {
        foods.map((food, idx) => (
          <li key={idx}>{food}</li> 
          //키 값을 붙여주면 안정적이라고 함?
        ))
      }
      {/* 버튼을 이용해 음식을 추가하는 방법 */}
      <button>메뉴 추가</button>
      </div>
    </>
  );
}

export default App;