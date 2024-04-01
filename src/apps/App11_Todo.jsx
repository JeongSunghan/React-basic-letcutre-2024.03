// lifeCycle = 생명주기 메서드
//컴포넌트가 브라우저상에 나타나고, 업데이트되고, 사라지게 될 때 호출되는 메서드
import { useEffect, useState } from 'react';
import './App.css';
import Header from '../todo_components/Header';
import TodoList from '../todo_components/TodoList'
import { FaCalendarAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState('all');
  return (
    // Bootstrap 컨테이너와 그림자 클래스를 사용
    <div className='custom-container shadow-lg p-3 mb-5 bg-body rounded mt-5'>
      <h3 className='text-white bg-primary p-2 text-center rounded'>
        <FaCalendarAlt /> To-Do List
      </h3>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;