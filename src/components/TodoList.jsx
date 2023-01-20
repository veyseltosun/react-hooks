import React from "react";
import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {text: "Pay the bills", id: 1},
        {text: "Do your homework", id: 2},
        {text: "Feed the dog", id: 3},
    ])

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
        </div>
    )
}
export default TodoList;