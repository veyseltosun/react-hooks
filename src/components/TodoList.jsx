import React from "react";
import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {text: "Pay the bills", id: 1},
        {text: "Do your homework", id: 2},
        {text: "Feed the dog", id: 3},
    ])

    const addTodo = () => {
        
        setTodos([
            ...todos, 
            { text: "Learn hooks", id: Math.random() }
        ]);
    }

    return(
        <div>
            <ul>
                {todos.map((todo) => { 
                    const {id, text} = todo;
                    return(
                        <li key={id}>{text}</li>
                    )
                })}
            </ul>
            <button onClick={addTodo}> Add a todo </button>
        </div>
    )
}
export default TodoList;