import { useState } from 'react';
import '../apps/App.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './AddTodo';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, work, status } = todo;

  // handleChange - 체크박스 상태변경  
  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  }

  // handleDelete - 삭제 버튼 클릭 해당 할 일 목록 제거
  const handleDelete = () => onDelete(todo);

  return (
    <li className="todo-item">
      <input type='checkbox' id={id} checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor={id}>{work}</label>
      {/* 삭제 버튼 스타일 변경 */}
      <button onClick={handleDelete} className='todo-delete-btn' style={{ color: 'red', border: 'none', background: 'none' }}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
