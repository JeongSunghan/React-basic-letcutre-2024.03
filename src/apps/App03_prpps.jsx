import './App.css';
import Card from '../components/Card2';

function App() {
  const james = {id:1, name:'James', job:'Back-end programmer'};
  const maria = {id:2, name:'Maria', job:'React JS programmer'};
  return (
    <>    
     {/* 각 James와 Maria에 대한 정보를 객체 형태로 정의합니다. 이 객체들은 각각의 Card 컴포넌트에 전달 */}
      <Card person={james} />
      <br />
      <Card person={maria} />
    </>
  );
}

export default App;