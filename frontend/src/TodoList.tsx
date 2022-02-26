import React, {useEffect, useState} from 'react';
import './TodoItem'
import {Todo} from "./modelItem";
import {log} from "util";


// @ts-ignore
export default function TodoList() {
    const [todos, setTodos] = useState([] as Todo[]);


    useEffect(() => {
        fetch('http://localhost:8080/todos')
            .then(response => response.json())
            .then(todos => setTodos(todos));
    }, []);


    const postToDo = () => {
        const jsonData = JSON.stringify({task: newTodo})


        fetch('http://localhost:8080/todos',
            {
                method: "POST",
                body: JSON.stringify({task: newTodo}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(e => e.json())
            .then(todos => setTodos(todos));
    };

    const [newTodo, setNewTodo] = useState('write your tasks here');

    fetch('http://localhost:8080/todos',
        {
            method: "PUT",
            body: JSON.stringify({task: newTodo}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(e => e.json())
        .then(todos => setTodos(todos));


        return (

            <div>
                {todos
                    .map(todo => <p key={todo.id}>{todo.task}</p>)}
                <input type="text" value={newTodo} onChange={event => setNewTodo((event.target.value))}/>
                <button onClick={postToDo}>Post</button>

            </div>

        );
    }

