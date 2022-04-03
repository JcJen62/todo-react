import { useTodoContext } from "./Context"
import TodoItem from "./TodoItem"

function DisplayTodos() {
    const context = useTodoContext()

    return (
        <div id="todoContainer">
            <h2 id="subHead">Todos:</h2>
            <ul id="todoList">
                {context.todos?.map((item) => {
                    return <TodoItem todo={item}/>
                })}
            </ul>
        </div>
    )
}

export default DisplayTodos