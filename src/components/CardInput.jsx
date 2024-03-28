import { useState } from 'react';
import '../apps/App.css';

export default function CardInput(props) {
  const [name, setName] = useState(props.name);
  const [content, setContent] = useState('');
  return (
    <div className="card">    
      <div style={{fontSize: '5rem'}}>{name}</div>
      <h3>{content}</h3>
      <br />
      <button onClick={() => {
        const newName = prompt('이름을 입력하세요.');
        setName(newName);
      }}>이름 바꾸기</button>
      <br />
      <input type="text" onChange={event => {
        setContent(event.target.value);
      }} />
    </div>
  );
}
