import { useTodoContext } from './Context'
import { useState } from 'react'

function AddTodo() {
    const context = useTodoContext()
    const [newTodo, setNewTodo] = useState()

    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }

    return(
        <div>
            <input type='text' className="addTodoText" onChange={handleChange}></input>
            <button className="pageBtn" onClick={() =>context.add(newTodo)}>Submit Todo</button>
        </div>
    )
}

export default AddTodo;