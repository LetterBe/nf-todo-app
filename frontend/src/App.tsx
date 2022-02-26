import React, { useState, useEffect } from 'react';
import TodoList from "./TodoList";

function App() {


/*
    console.log('insert your task')
    fetch('http://localhost:8080/todos', {
        method: 'POST',
        body: JSON.stringify(todoRepos),
        headers: {
            'Content-Type': 'application/json'
        }
    }
            .then(t =>{
                console.log('create task');
                return t.json();
                }
            )
    })
*/
    return (
        <div>

            <div>
                <TodoList />
            </div>
        </div>
    );
}

export default App;
