import '../apps/App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaRegCalendarCheck } from "react-icons/fa";

//{onAdd} props 객체에서 직접 하나 이상의 속성을 추출, 별도의 변수 선언하지 않고 해당 속성 바로 사용
export default function AddTodo({ onAdd }) {      
  
  const [text, setText] = useState('');

  const handleChange = (event) => setText(event.target.value);
  //e.printStackTrace 와 같은 기능
  const handleSubmit = (e)  => {
    e.preventDefault();
    //양 사이드 공백을 지운다.
    if (text.trim().length === 0)  
      return;
    onAdd({id:uuidv4(), work:text, status: 'active'});
    setText('');
  }   

  return (
    <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
      <input type='text' placeholder='할 일을 입력하세요.' value={text}
        onChange={handleChange} />
      <button><FaRegCalendarCheck />추가</button>
    </form>    
  );
}

