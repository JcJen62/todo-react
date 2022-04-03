import { useState } from 'react'
import { useTodoContext } from './Context'

function EditTodo({item, switchEdit, changeEdit}) {
    const [editTodo, setEditTodo] = useState()
    const context = useTodoContext()

    const handleChange = (event) => {
        setEditTodo(event.target.value)
    }

    const handleSave = () => {
        let edit = {
            title: editTodo,
            id: item.id,
            complete: item.complete
        }

        context.edit(edit)
        changeEdit(!switchEdit)
    }

    return (
        <div>
            <input onChange={handleChange} type="text" className="addTodoText"></input>
            <button onClick={() => handleSave()}>Save Changes</button>
        </div>
    )
}

export default EditTodo;