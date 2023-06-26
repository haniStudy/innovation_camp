import '../App.css';

const Todo = ({item, removeTodo, changeTodoState, children}) => {
  return (
    <div className="todo_div">
      <h1>{item.title}</h1>
      <div>{item.content}</div>
      <br />
      <div className="todo_button">
        {console.log(item.id, item)
        }
        <button className="delete_button" onClick={() => removeTodo(item.id)}>삭제하기</button>
        <button className="complete_button" onClick={() => changeTodoState(item)}>{children}</button>
      </div>
    </div>
  )
};

export default Todo