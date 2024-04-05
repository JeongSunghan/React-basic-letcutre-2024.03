import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Board() {

  // e => 이벤트를 받아서 처리
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();     //새로고침 방지
    navigate(`/board/${text}`);       //board{텍스트값}을 받은 페이지로 이동
    setText('');    //해당 경로로 이동 후, setText를 호줄하여 입력 필드를 비움

  }

  return (
    <div style={{ margin: '20px' }}>
      Board Page
      {/* return => handleSubmit 작동 */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="bid" value={text} placeholder="아이디를 입력하세요."
          // text가 value값에 찍힘
          // onChange 이벤트를 통해 사용자의 입력을 text 상태에 업데이트
          onChange={e => { setText(e.target.value) }} />
      </form>
    </div>

    /* 정리!!
      사용자가 입력한 텍스트를 받아서, 그 값을 URL 경로의 일부로 사용하여 
      다른 페이지로 이동하는 기능을 구현하는 로직    
    */

  );

}