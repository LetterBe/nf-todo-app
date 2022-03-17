import React from 'react';
import TodoList from "./TodoList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoDescription from './TodoDescription'
import LoginPage from "./LoginPage";
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TodoList />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='description/:id' element={<TodoDescription />} />
            </Routes>
        </BrowserRouter>


    );
}

export default App;