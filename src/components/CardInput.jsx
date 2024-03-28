import { useState } from 'react';
import '../apps/App.css';

export default function CardInput(props) {

  //이름 상태 및 설정 함수
  const [name, setName] = useState(props.name);

  // 내용 상태 및 설정 함수
  const [content, setContent] = useState('');
  
  return (
    <div className="card">    

      <div style={{fontSize: '5rem'}}>{name}</div>
      <h3>{content}</h3>    {/* 사용자가 입력할 내용을 표시 */}      
      <br />

       {/* 이름을 변경할 수 있는 버튼. 클릭 시 prompt 창을 통해 새 이름을 입력받음 */}
      <button onClick={() => {
        const newName = prompt('이름을 입력하세요.');
        setName(newName);   //새로운 이름으로 상태 업데이트
      }}>이름 바꾸기</button>

      <br />

       {/* 사용자 입력을 받는 텍스트 필드. 입력될 때마다 content 상태 업데이트 */}
      <input type="text" onChange={event => {
        setContent(event.target.value);  // 입력된 값으로 상태 업데이트
      }} />
    </div>
  );
}
