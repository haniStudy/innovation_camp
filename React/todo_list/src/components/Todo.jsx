import '../App.css';

const Todo = ({todoInfo, removeTodo , children, changeState}) => {
    return (
      <div className="todo-style"> 
        <h1>{todoInfo.title}</h1>
        <span>{todoInfo.content}</span>
        <br />
        <div>
          <button onClick={() => removeTodo(todoInfo.id)}>삭제하기</button>
          <button onClick={() => changeState(todoInfo)}>{children}</button>
        </div>
      </div>
    )
  };
  export default Todo