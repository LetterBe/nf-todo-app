import React, {useEffect, useState} from 'react';
import './TodoItem'
import {Todo} from "./modelItem";
import './TodoForm';
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";



export default function TodoList() {
    const [todos, setTodos] = useState([] as Todo[]);
    const [errorMessage, setErrorMessage] = useState('')


    const fetchAll = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error("oopps, did not work !")
            })
            .then((todosFromBackend: Todo[]) => setTodos(todosFromBackend))
            .catch ((e: Error) => setErrorMessage(e.message))
    };
    const deleteChecked = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`,
            {method:'DELETE'})
            .then(response => response.json())
            .then((todosFromBackend : Todo[]) => setTodos(todosFromBackend));
    }


    useEffect(() => {
        fetchAll();
    }, []);


        return (

            <div>
                <div>
                    <TodoForm onTodoCreation={setTodos} />
                </div>
                <div>
                    <button onClick={deleteChecked}>done tasks erase!</button>
                </div>
                {todos.map(todo => <li key={todo.id}> <TodoItem todo={todo}
                                             onTodoDelete={fetchAll}
                                             onTodoChange={setTodos} />
                                    </li>)}
                <div>
                    <h2> {errorMessage}</h2>
                </div>
            </div>
        );
  };

