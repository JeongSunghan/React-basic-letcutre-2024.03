import { useState } from 'react';
import '../apps/App.css';

export default function User() {
  const initUsers = [
    { id: 1, name: 'admin', email: 'admin@human.com' },
    { id: 2, name: 'james', email: 'james@naver.com' }
  ];
  const [users, setUsers] = useState(initUsers);
  return (
    <div className="card">
      <h1>사용작 목록</h1>
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
      <button onClick={() => {
        const id = prompt('Id 값을 입력하세요.')
        const name = prompt('이름을 입력하세요.')
        const email = prompt('이메일을 입력하세요.')

        setUsers([...users, { id, name, email }])   //prompt에서 불러와서 배열에 추가
      }}>추가</button>

      <button onClick={() => {
        const id = prompt('삭제할 ID값을 입력하세요.')
        const newUsers = users.filter(user => user.id != id);
        //입력하지 않은 id값만 필터링해서 통과시키기, 입력한 값이면 삭제

        /*
        조건에 맞는 항목들만 새로운 배열에 포함 
        입력한 ID와 일치하지 않는 사용자들만 새 배열에 포함시키며, 입력한 ID는 새 배열에 포함되지 않아 삭제
        */

        setUsers(newUsers);

        //다른 방법
        // let newUsers = users.filter(user => user.id != id);
        // newUsers = [];
        // for (let user of users)
        //   if (users.id != id)
        //     array.push(user);
        //   setUsers(newUsers);
      }}>삭제</button>
    </div>
  );
}
