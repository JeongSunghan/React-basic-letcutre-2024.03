// lifeCycle = 생명주기 메서드
//컴포넌트가 브라우저상에 나타나고, 업데이트되고, 사라지게 될 때 호출되는 메서드
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);     //빈 array 생성
  const [checked, setChecked] = useState(false);
  const handleFile = () => {
    fetch('data/products.json')   //파일을 읽음
      .then(res => res.json())         // JSON parsing
      .then(data => {
        console.log('데이터를 네트워크에 받아옴')
        console.log(data);
        setProducts(data);
      });
  }
  useEffect(() => {
    fetch('data/products.json')
      .then(res => res.json())
      .then(data => {
        console.log('데이터를 네트워크에 받아옴')
        console.log(data);
        setProducts(data);
      });
    return () => {
      console.log('죽을 때 마지막으로 실행되어야 하는 코드');
    }

  }, []);     // }, []); => 최초 1번 실행 = checked가 true일 때(변화했을 때)

  return (
    <div className='card'>
      {/* products 목록 가져오기 */}
      <ul>프로덕트 목록
        {
          products.map((product, index) => (
            <li key={index}>
              {product.name}
              {product.price}
            </li>
          ))
        }
      </ul>

      <button onClick={handleFile}>파일 읽기</button>
    </div>
  );
}

export default App;