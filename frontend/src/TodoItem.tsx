import {Status, Todo} from "./modelItem";
import './modelItem'
import './TodoItem.css'

export interface TodoItemProps {
   todo : Todo;
   onTodoDelete: () => void;
   onTodoChange: (todos : Todo[]) => void
}

export default function TodoItem (props:TodoItemProps) {


    const deleteTodo = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos/${props.todo.id}`,
            {method: 'DELETE'})
            .then(() => props.onTodoDelete());
    };

    const toggle = () => {
        const newStatus  = props.todo.status === Status.Open ? Status.Done : Status.Open;

        fetch(`${process.env.REACT_APP_BASE_URL}/todos/${props.todo.id}`,
            {method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                    id : props.todo.id,
                    task: props.todo.task,
                    description: props.todo.description,
                    status: newStatus
                })
            })
            .then(response => response.json())
            .then((todosFromBackend: Todo []) => props.onTodoChange(todosFromBackend))
    }


    return (
        <div>
            <div className={props.todo.status === Status.Done ? 'selected': ''} onClick={toggle}>{props.todo.task} - {props.todo.description}
            </div><button  id='btn2' onClick={deleteTodo}>Löschen</button>
        </div>
    );
}



