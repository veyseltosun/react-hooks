import React from "react";
import { useState } from "react";

const TodoList = () => {
    cosnt [todos, setTodo] = useState()
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