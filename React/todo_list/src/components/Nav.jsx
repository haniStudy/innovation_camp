const Nav = ({title, content, titleHandler, contentHandler, addTodo}) => {
    return (
        <nav className='todo_nav'>
            <div className='todo_nav_div'>
                <label>제목</label> <input type='text' value={title} onChange={titleHandler}/>
                <label>내용</label> <input type='password' value={content} onChange={contentHandler}/>
                <button onClick={addTodo}>추가하기</button>
            </div>
        </nav>
    )
};

export default Nav