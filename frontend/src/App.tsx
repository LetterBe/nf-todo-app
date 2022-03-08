import React from 'react';
import TodoList from "./TodoList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoDescription from './TodoDescription'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='todos' element={<TodoList />} />
                <Route path='description/:id' element={<TodoDescription />} />
            </Routes>
        </BrowserRouter>


    );
}

export default App;