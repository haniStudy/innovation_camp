import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import Nav from './components/Nav';

function App() {
    const [todo, setTodo] = useState([
        { id:1, title:"공부", content: "리액트 공부하기", isDone: false},
        { id:2, title:"운동", content: "런닝머신 뛰기", isDone: true},
        { id:3, title:"청소", content: "청소기 돌리기", isDone: true},
    ]);        // 할 일
    const [id, setId] = useState(1);             // id
    const [title, setTitle] = useState('');      // 제목
    const [content, setContent] = useState('');  // 내용

    const titleHandler = (e) => {setTitle(e.target.value)};
    const contentHandler = (e) => {setContent(e.target.value)};

    const addTodo = () => { // 새로운 할 일 추가
        if (title.length === 0 || content.length === 0) {
            alert("모두 입력해주세요");
            return false;
        }

        const newId = id + 1; // 마지막 id 값에서 +1
        setId(newId);         // id 상태 변경

        const newTodo = { // 새로운 할 일 정보를 담은 객체 생성
            id: newId,
            title,
            content,
            isDone: false
        };
        setTodo([...todo, newTodo]); // 할 일 목록에 업데이트

        // input 태그에 입력된 내용 초기화
        setTitle("");
        setContent("");
    };

    const removeTodo = (id) => { // 할 일 삭제
        setTodo(todo.filter((item) => { return item.id !== id}));
    };

    const changeState = (item) => { // 할 일 상태 변경
        item.isDone = !item.isDone; // 상태 변경
        setTodo([...todo]);
    };

    return (
        <div className='todo_box'>
            <Header />
            <Nav title={title} content={content} titleHandler={titleHandler} contentHandler={contentHandler} addTodo={addTodo}/>
            <Article todo={todo} removeTodo={removeTodo} changeState={changeState}/>
        </div>
    )
}

export default App
