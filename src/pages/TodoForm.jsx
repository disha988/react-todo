import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [val, setVal] = useState("")

    function handleTodo() {
        if (val.trim() === '') {
            setVal('')
            return false
        }
        addTodo(val)
        setVal('')
    }

    return (
        <div>
            <input type="text" placeholder="Enter Text" value={val} onChange={(e) => setVal(e.target.value)} />
            <button onClick={handleTodo} className='bg-gray-200 p-2'>Add</button>
        </div>
    )
}

export default TodoForm
