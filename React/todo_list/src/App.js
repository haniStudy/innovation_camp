import React, { useState } from 'react'
import Todo from './components/Todo';

function App() {
  // 할 일 관리할 변수 생성
  const [todo, setTodo] = useState([
    {id: 1, title: "공부하기", content: "리액트 공부하기", state: false},
    {id: 2, title: "운동하기", content: "런닝머신 뛰기", state: false},
    {id: 3, title: "밥먹기", content: "김치찌개", state: true},
    {id: 4, title: "청소하기", content: "거실 청소", state: true}
  ]);  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleHandler = (event) => { setTitle(event.target.value) };
  const contentHandler = (event) => { setContent(event.target.value)};

  // 할 일 추가 함수
  const addTodo = () => {
    const newWork = {id: todo.length + 1, title, content, state: false}
    setTodo([...todo, newWork]);
  };

  // 할 일 제거 함수
  const removeTodo = (id) => { setTodo(todo.filter((w) => w.id !== id)); };

  // 할 일 상태 변경 함수
  const changeState = (t) => { 
    t.state=(!t.state);
    const newTodo =[...todo];
    setTodo(newTodo);
    // const findTodo = todo.findIndex(todo => todo.id === id)
    // todo.slice(findTodo,1,todo[findTodo].state = !todo[findTodo].state)
    // setTodo([...todo])
  };
  return (
    <div>
      <header>
        <div>My Todo List</div>
        <div>React</div>
      </header>
      <nav>
        제목 <input value={title} onChange={titleHandler} />
        내용 <input value={content} onChange={contentHandler} />
        <button onClick={addTodo}>추가하기</button>
      </nav>
      <article>
        <div>
          <h1>Working.. 🔥</h1>
          {
            todo.filter((item) => !item.state).map((i) => {
              return <Todo Todo key={i.id} todoInfo={i} removeTodo={removeTodo} children={"완료"} changeState={changeState}></Todo>
            })
          }
        </div>
        <div>
          <h1>Done..! 🎉</h1>
          {
            todo.filter((item) => item.state).map((i) => {
              return <Todo Todo key={i.id} todoInfo={i} removeTodo={removeTodo} children={"취소"} changeState={changeState}></Todo>
            })
          }
        </div>
      </article>
    </div>
  )
}

export default App