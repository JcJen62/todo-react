import { useTodoContext } from "./Context"
import TodoItem from "./TodoItem"
import Box from "@mui/material/Box";

function DisplayTodos() {
    const context = useTodoContext()

    return (
        <Box>
            <h2 id="subHead">Todos:</h2>
            <ul id="todoList">
                {context.todos?.map((item) => {
                    return <TodoItem todo={item}/>
                })}
            </ul>
        </Box>
    )
}

export default DisplayTodos