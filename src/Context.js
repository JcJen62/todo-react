import _todos from './Todos'
import { useContext, useState, createContext, useEffect } from 'react'

export const TodoContext = createContext({
    todos: null
})

export const TodoContextProvider = (props) => {
    const [todo, setTodo] = useState([])

    const addTodo = (todo_) => {
        let new_ = {
            title: todo_,
            id: Math.random(0, 10000000),
            complete: false
        }
        setTodo([...todo, new_])
    }

    const handleEdit = (todo_) => {
        let index = 0;
        for (let item of todo) {
            if (item.id === todo_.id) {
                let array = todo
                array[index] = todo_
                setTodo([...array])
            } else {
                index++
            }
        }
    }

    const handleDelete = (todo_) => {
            let index = 0;
            for (let item of todo) {
                if (item.id === todo_.id) {
                    let array = todo
                    array.splice(index, 1)
                    setTodo([...array])
                } else {
                    index++
                }
        }
    }

    useEffect(() => {
        if (todo.length === 0) {
            setTodo(_todos)
        }
    }, [todo])

    return (
        <TodoContext.Provider value={{
            todos: todo,
            edit: handleEdit,
            deleteTodo: handleDelete,
            add: addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContext)