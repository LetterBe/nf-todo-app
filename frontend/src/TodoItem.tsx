import {Status, Todo} from "./modelItem";
import './modelItem'
import './TodoItem.css'
import {useState} from "react";

export interface TodoItemProps {
    todo: Todo;
    onTodoDelete: () => void;
    onTodoChange: (todos: Todo[]) => void;
}

export default function TodoItem(props: TodoItemProps) {

    const [taskToEdit, setTasktoEdit] = useState(props.todo.task);
    const [editMode, setEditMode] = useState(false);
    const [descriptionToEdit, setDescriptionToEdit] = useState(props.todo.description);
    const [errorMessage, setErrorMessage] = useState('');

    const deleteTodo = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos/${props.todo.id}`,
            {method: 'DELETE'})
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error("did not work, sorry!")
            })
            .then(() => props.onTodoDelete())
            .catch((e: Error) => setErrorMessage(e.message))
    };

    const fetchToEdit = (todo: Todo) => {
        fetch(`{process.env.REACT_APP_BASE_URL}/todos/${props.todo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then((response => response.json()))
            .then((todosFromBackend: Todo[]) => {
                props.onTodoChange(todosFromBackend);
                setEditMode(false)
            })
    }

    const editTodo = () => {
        fetchToEdit({
            id: props.todo.id,
            task: props.todo.task,
            description: props.todo.description,
            status: props.todo.status
        });
    }

    const toggle = () => {
        const newStatus = props.todo.status === Status.Open ? Status.Done : Status.Open;

        fetchToEdit({
            id: props.todo.id,
            task: props.todo.task,
            description: props.todo.description,
            status: newStatus
        });

    };

    return (
        <div>
            {
                editMode
                    ?
                    <div>
                        <input type="text" value={taskToEdit}
                               onChange={ev => setTasktoEdit(ev.target.value)}
                               onKeyUp={ev => {
                                   if (ev.key === 'Enter') {
                                       editTodo();
                                   }
                               }}/>
                        <input type="text" value={descriptionToEdit}
                               onChange={ev => setDescriptionToEdit(ev.target.value)}
                               onKeyUp={ev => {
                                   if (ev.key === 'Enter') {
                                       editTodo();
                                   }
                               }}/>
                    </div>
                    :
                    <div>
                    <span className={props.todo.status === Status.Done ? 'selected' : ''}
                          onClick={toggle}>{props.todo.task} - {props.todo.description}
                    </span>
                        <button onClick={() => setEditMode(true)}>Edit</button>
                        <button onClick={deleteTodo}>Erase</button>
                    </div>
            }
            <div>
                <h3>{errorMessage}</h3>
            </div>
        </div>
    )
}