import Todo from "./Todo";

const Article = ({todo, removeTodo, changeState}) => {
    return (
        <div className="main">
            <article>
                <Todo text={"Working.. 🔥"} todo={todo} condition={false} btnText={"완료"} removeTodo={removeTodo} changeState={changeState}/>
            </article>
            <article>
                <Todo text={"Done..! 🎉"} todo={todo} condition={true} btnText={"취소"} removeTodo={removeTodo} changeState={changeState}/>
            </article>
        </div>
    )
};

export default Article