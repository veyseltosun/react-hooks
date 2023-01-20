import React from "react";
import { useState } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {text: "Pay the bills", id: 1},
        {text: "Do your homework", id: 2},
        {text: "Feed the dog", id: 3},
    ])

    const addTodo = (text) => {
        
        setTodos([
            ...todos, 
            { text: text, id: Math.random() }
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
           <AddNewTodo addTodo={addTodo}/>
        </div>
    )
}
export default TodoList;