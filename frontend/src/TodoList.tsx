import React, {useEffect, useState} from 'react';
import './TodoItem'
import {Todo} from "./modelItem";
import TodoItem from "./TodoItem";
import './TodoForm';
import TodoForm from "./TodoForm";


export default function TodoList() {
    const [todos, setTodos] = useState([] as Todo[]);


    const fetchAll = () => {
        fetch('http://localhost:8080/todos')
            .then(response => response.json())
            .then ((todosFromBackend: Todo[]) => setTodos(todosFromBackend));
    }

    useEffect(() => {
        fetchAll();
    }, []);


        return (

            <div>
                <TodoForm onTodoCreation={setTodos} />
                {todos.map(todo => <TodoItem key={todo.id} todo={todo}
                                             onTodoDelete={fetchAll}
                                             onTodoChange={setTodos} />)}
            </div>

        );
    }

