import React, {useState} from 'react';
import "./App.css"

function App() {
  const [todo, setTodos] = useState([]);
  const [id, setIds] = useState(todo.length);
  const [content, setContents] = useState('');
  const contentHandler = (e) => {setContents(e.target.value)};

  const addTodo = () => {
    const newId = id + 1;
    setIds(newId);

    const newTodo = {
      id: newId,
      content
    };
    setTodos([...todo, newTodo]);

    // input 초기화
    setContents("");
  };

  return (
    <>
      <header className='todo_header'>
        <input type='text' value={content} onChange={contentHandler}></input>
        <button onClick={addTodo}>추가하기</button>
        <h2>Todo List</h2>
      </header>

      <div className='main_top'>
        {todo.map((item) => {
          return <div className='main_middle'>{item.content}</div>
        })}
     </div>
    </>
  )
}

export default App
