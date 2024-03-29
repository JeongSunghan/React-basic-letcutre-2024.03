import { useEffect, useState } from 'react';
import '../apps/App.css';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList({ filter }) {
  /*
    text = 입력 필드에 입력된 text 저장
    toods = 할 일 목록을 저장 => 각 할 일은, id,work,status를 속성으로 가짐
 */

  const initData = readFromLocalStorage()
  const [todos, setTodos] = useState(initData);

  const handleUpdate = updated =>
    setTodos(todos.map(todo => (todo.id === updated.id) ? updated : todo));

  const handleDelete = deleted =>
    setTodos(todos.filter(todo => todo.id !== deleted.id));

  const handleAdd = todo => setTodos([...todos, todo]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = getFilteredTodos(todos, filter);
  return (
    <div>
      {/* 할 일 목록을 표시하는 <ul>과 <li> 태그: todos 배열을 map 함수를 사용하여 순회하고, 
      각 할 일에 대한 체크박스, 내용, 삭제 버튼을 표시  => form 태그에 추가*/}


      {/* 각각의 기능        
          3. handleSubmit - 할 일 추가하는 폼 제출, toods 배열에 추가
          4. handleAdd = 입력 필드에 텍스트를 입력할 때 text 상태를 업데이트        
        */}

      <ul>
        {
          filteredTodos.map(todo => (
            <Todo todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}

function readFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  console.log(todos);
  return todos ? JSON.parse(todos) : [];
}

function getFilteredTodos(todos, filter) {
  if (filter === 'all')
    return todos;
  return todos.filter(todo => todo.status === filter);
}