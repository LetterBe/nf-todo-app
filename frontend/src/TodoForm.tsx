import { useState } from "react";
import {Todo} from "./modelItem";
import './App.css'

interface TodoFormProps {
    onTodoCreation: (todos: Todo[]) => void;
}

    export default function TodoForm(props: TodoFormProps){

        const [task, setTask] = useState('');
        const [description, setDescription] = useState('');

        const addTask = () => {
            fetch('http://localhost:8080/todos', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task: task,
                    description: description
                })
            })
            .then(response => response.json())
            .then((todosFromBackend: Todo[]) => props.onTodoCreation(todosFromBackend))
}
        return (
            <div className="fields">
                <input type="text" placeholder="Task" value={task} onChange={ev => setTask(ev.target.value)} />
                <input type="text" placeholder="Description" value={description} onChange={ev => setDescription(ev.target.value)} />
                <button id='btn1' onClick={addTask}>Send</button>
            </div>
        )
    }


