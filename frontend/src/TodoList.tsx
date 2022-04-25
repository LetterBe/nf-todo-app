import React, {useEffect, useState} from 'react';
import './TodoItem'
import {Todo} from "./modelItem";
import './TodoForm';
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import './TodoList.css'


export default function TodoList() {
    const [todos, setTodos] = useState([] as Todo[]);
    const [errorMessage, setErrorMessage] = useState('')
    const [deleteErrorMessage, setDeleteErrorMessage] = useState('')


    const fetchAll = () => {
        const token = localStorage.getItem("token")
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`, {
            method:"GET",
            headers: {
            "Authorization": "Bearer" + token
            }
    })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error("ops, did not work !")
            })
            .then((todosFromBackend: Todo[]) => setTodos(todosFromBackend))
            .catch((e: Error) => setErrorMessage(e.message))
    };



    useEffect(() => {
        fetchAll();
    }, []);


    return (

        <div className='todolist'>
            <h4 id='titleTodoList'>Personal to do 🔖</h4>
            <TodoForm onTodoCreation={setTodos}/>


            <h4 > Take a look on your tasks 🫣 </h4>
            {todos.map(todo => <li key={todo.id}><TodoItem todo={todo}
                                                           onTodoDelete={fetchAll}
                                                           onTodoChange={setTodos}/>
            </li>)}
            <h2> {errorMessage}</h2> <h2>{deleteErrorMessage}</h2>
        </div>
    );
};

