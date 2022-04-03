import { useTodoContext } from './Context'
import { useState } from 'react'
import EditTodo from './EditTodo'

function TodoItem({todo}) {
    const context = useTodoContext()
    const [isEdit, setEdit] = useState(false)

    const handleComplete = () => {
        let edit = {
            title: todo.title,
            id: todo.id,
            complete: !todo.complete
        }

        context.deleteTodo(edit)
    }

    const handleEdit = () => {
        setEdit(!isEdit)
    }

    return(
        <li key={todo.id}>
            {isEdit ? <EditTodo switchEdit={isEdit} changeEdit={setEdit} item={todo} /> : todo.title}
            <input type="checkbox" id="completeCheck" onClick={() => handleComplete()} />
            <button className="todoBtn" onClick={() => handleEdit()}>Edit Todo</button>
        </li>
    )
}

export default TodoItem;