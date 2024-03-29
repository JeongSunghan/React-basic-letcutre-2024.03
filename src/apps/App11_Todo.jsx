// lifeCycle = 생명주기 메서드
//컴포넌트가 브라우저상에 나타나고, 업데이트되고, 사라지게 될 때 호출되는 메서드
import { useEffect, useState } from 'react';
import './App.css';
import Header from '../todo_components/Header';
import TodoList from '../todo_components/TodoList'


function App() {

  return (
    <div className='card'>
      <Header />
      <TodoList />      
    </div>
  );
}

export default App;