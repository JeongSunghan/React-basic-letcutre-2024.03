import { useState } from 'react';
import '../apps/App.css';

export default function User() {

  // 초기 사용자 데이터
  const initUsers = [
    { id: 1, name: 'admin', email: 'admin@human.com' },
    { id: 2, name: 'james', email: 'james@naver.com' }
  ];

  // 사용자 목록 상태와 해당 상태를 업데이트할 함수
  const [users, setUsers] = useState(initUsers);

  // 입력 폼 상태 (각 필드 값 저장) 및 상태 업데이트 함수
  const [form, setForm] = useState({ id: '', name: '', email: '' });

  // 폼 제출 처리 함수
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출에 의한 페이지 리로드 방지

    //수정 로직
    const exitUser = users.find(user => user.id == form.id);    //users라는 array를 순회
    const newUsers = [];
    if (exitUser) {

      //3.29 refactoring = user.id가 form.id와 같으면 form을 주고 아니면 user, 아래의 for문을 없애도 된다
      setUsers(users.map (user => user.id == form.id ?  form : user))
      // for (let user of users)
      //   if (user.id == form.id)
      //     newUsers.push(form);
      //   else {
      //     newUsers.push(user);
      //     setUsers(newUsers);
      //   }
    }
    else
      setUsers([...users, form]); // 현재 폼 데이터를 users 배열에 추가
  };

  // 폼 필드 값 변경 처리 함수
  const handleChange = (event) => {
    const { name, value } = event.target; // 이벤트 발생한 필드의 이름과 값을 추출
    setForm({ ...form, [name]: value }); // 해당 필드 값만 form 상태에 업데이트
  };

  return (
    <div className="card">
      <h1>사용자 목록</h1>
      <table border={1}>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>이메일</th>
        </tr>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </table>
      <br />

      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>아이디:</label>
        <input type='text' id='id' name='id' value={form.id}
          onChange={handleChange}
        /><br />

        <label htmlFor='name'>이름:</label>
        <input type='text' id='name' name='name' value={form.name}
          onChange={handleChange}
        /><br />

        <label htmlFor='email'>이메일:</label>
        <input type='text' id='email' name='email' value={form.email}
          onChange={handleChange}
        /><br />
        <button>추가 / 수정</button>
      </form>

      <button onClick={() => {
        const id = prompt('삭제할 ID값을 입력하세요.')
        setUsers(users.filter(user => user.id != id));
      }}>삭제</button>
    </div>
  );
}
