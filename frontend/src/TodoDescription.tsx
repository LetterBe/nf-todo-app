import {useEffect, useState} from "react";
import {Todo} from "./modelItem";
import {Link, useParams} from "react-router-dom";

export default function TodoDescription() {
    const [todo, setTodo] = useState({} as Todo);
    const params = useParams()


    useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL+ "/todos/"+params.id)
        .then(response => response.json())
        .then((todo : Todo) => setTodo(todo))
}, [params.id]);


    return(
        <div>
            {todo.description &&
                <div>
                    <ul>
                        <li>Description: {todo.description}</li>
                    </ul>
                    <Link to='/TodoList'>BACK</Link>
                </div>
            }
        </div>
    )}