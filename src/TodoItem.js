import { useTodoContext } from './Context'
import { useState } from 'react'
import EditTodo from './EditTodo'

function TodoItem({ todo }) {
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

    return (
        <div className='card'>
            <div className='container'>
                <li key={todo.id}>
                    {isEdit ? <EditTodo switchEdit={isEdit} changeEdit={setEdit} item={todo} /> : todo.title}
                    <button id='compDelete' className='todoBtn' onClick={() => handleComplete()}>Complete and Delete Todo</button>
                    <button className="todoBtn" onClick={() => handleEdit()}>Edit Todo</button>
                </li>
            </div>
        </div>
    )
}

export default TodoItem;