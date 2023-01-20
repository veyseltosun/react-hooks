import React from "react";
import { useState } from "react";

const TodoList = () => {
    const [todos, setTodo] = useState([
        {text: "Pay the bills", id: 1},
        {text: "Do your homework", id: 2},
        {text: "Feed the dog", id: 3},
    ])

    return(
        <div>
            <ul>
                <li>Pay bills</li>
                <li>Do your home work</li>
                <li>Feed the dog</li>
            </ul>
        </div>
    )
}
export default TodoList;