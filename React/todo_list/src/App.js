import React, { useState } from 'react';
import Todo from './components/Todo';
import "./App.css"

function App() {
  const [todo, setTodos] = useState([]);
  const [id, setIds] = useState(todo.length);   // id
  const [title, setTitles] = useState("");      // 제목
  const [content, setContents] = useState("");  // 내용

  const titleHandler = (e) => setTitles(e.target.value);
  const contentHandler = (e) => {setContents(e.target.value)};
  
  // 할 일 추가
  const addTodo = () => {
    setIds(id + 1);
    setTodos([...todo, {id, title, content, isDone:false}]);

    // 입력된 내용 초기화
    setTitles("");
    setContents("");
  };
  
  // 할 일 삭제
  const removeTodo = (id) => { setTodos(todo.filter((t) => t.id !== id)) };

  // 할 일 상태 변경
  const changeTodoState = (item) => {
    item.isDone = !item.isDone;
    setTodos([...todo]);
  };

  return (
    <div className='header_div'>
      <header>
        <div>My Todo List</div>
        <div>React</div>
      </header>

      <nav className='nav_top'>
        <div className='nav_middle'>
          <label className='nav_label'>제목 </label><input value={title} onChange={titleHandler}/>
          <label className='nav_label'>내용 </label><input value={content} onChange={contentHandler}/>
          <button onClick={addTodo}>추가하기</button>
        </div>
      </nav>

      <article className='article_top'>
        <h1>Working.. 🔥</h1>
        <div className='article_middle'>
          {todo.filter((t) => !t.isDone).map((item) => {
            return<Todo key={item.id} item={item} removeTodo={removeTodo} changeTodoState={changeTodoState} children={"완료"}></Todo>;
          })}
        </div>

        <h1>Done..! 🎉</h1>
        <div className='article_middle'>
          {todo.filter((t) => t.isDone).map((item) => {
            return <Todo key={item.id} item={item} removeTodo={removeTodo} changeTodoState={changeTodoState} children={"취소"}></Todo>;
          })}
        </div>
      </article>
    </div>
  )
}

export default App