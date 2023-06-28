const Todo = ({text, todo, condition, btnText, removeTodo, changeState}) => {
  return (
      <>
          <h1>{text}</h1>
          <div className='main_top'>
              {todo.filter((t) => {return t.isDone === condition}).map((item) => {
                  return (
                      <div className='main_middle'>
                          <div>
                              <h1>{item.title}</h1>
                              <span>{item.content}</span>
                          </div>
                          <div className='main_middle_btn'>
                              <button className='remove_btn' onClick={() => {removeTodo(item.id)}}>삭제하기</button>
                              <button className='done_btn' onClick={() => changeState(item)}>{btnText}</button>
                          </div>
                      </div>
                  )
              })}
          </div>
      </>
  )
};

<<<<<<< HEAD
=======
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

>>>>>>> origin
export default Todo