import { useState } from 'react';
import '../apps/App.css';

export default function CardInput2(props) {

  //초기값으로 props로부터 받은 name과 email 값을 객체로 저장
  const [form, setForm] = useState({name:props.name, email:props.email});

  //폼 제출에 의한 페이지 리로드를 방지
  const handleSubmit = (event) => {
    event.preventDefault();   // submit button을 누르면 페이지가 자동적으로 바뀌는 것을 방지
    console.log(form);
  }

  // [name]: value 구문을 통해 동적으로 특정 필드의 값을 업데이트
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }
  return (
    <div className="card">   

      <div style={{fontSize: '5rem'}}>{form.name}</div>
      <h3>{form.email}</h3>
      <br />

      {/* 사용자 입력이 있을 때마다 form 상태를 업데이트하도록 설정 */}
      <form onSubmit={handleSubmit}>

        <label htmlFor='name'>이름:</label>
        <input type='text' id='name' name='name' value={form.name} 
          onChange={handleChange} 
        /><br />

        <label htmlFor='email'>이메일:</label>
        <input type='text' id='email' name='email' value={form.email} 
          onChange={handleChange} 
        /><br />

        <button>제출</button>
      </form>
    </div>
  );
}
