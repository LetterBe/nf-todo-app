import {Todo} from "./modelItem";
import './modelItem'
import {useState} from "react";

export interface TodoItemProps {
   todo : Todo;
   onItemChange: (todos : Todo[]) => void
}

export default function TodoItem (props:TodoItemProps) {


    const deleteTodo = () => {
        fetch('http://localhost:8080/todos/$props.todo.id',
            {method: 'DELETE'})
            .then(response => response.json())
            .then(todos => props.onItemChange(todos));
    }

    return (
        <div>
            <span>{props.todo.task}</span>
            <button onClick={() => deleteTodo()}>Delete</button>
        </div>
    );
}



