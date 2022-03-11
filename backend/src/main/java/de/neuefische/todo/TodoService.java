package de.neuefische.todo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public void createTodo(Todo todo) {
        todoRepository.save(todo);
    }

    public Collection<Todo> getTodos() {
        return todoRepository.findAll();
    }

    public Todo getTodo(String id) {
        Optional<Todo> todo = todoRepository.findById(id);
        if (todo.isPresent()) {
            return todo.get();
        }

        return new Todo();
    }

    public void deleteTodo(String id) {
        Optional<Todo> todo = todoRepository.findById(id);
        if (todo.isPresent()) {
            Todo todo1 = todo.get();
            todoRepository.delete(todo1);
        }
    }

    public void changeTodo(String id, Todo changedTodo) {
        Optional<Todo> todo = todoRepository.findById(id);
        if (todo.isPresent()) {
            Todo todoUnwrappped = todo.get();
            todoUnwrappped.setTask(changedTodo.getTask());
            todoUnwrappped.setStatus(changedTodo.getStatus());
            todoUnwrappped.setDescription(changedTodo.getDescription());

            todoRepository.save(todoUnwrappped);
        }

    }
}
