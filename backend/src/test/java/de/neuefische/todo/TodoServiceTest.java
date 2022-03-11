package de.neuefische.todo;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

public class TodoServiceTest {

    @Test
    void shouldAddNewTodo() {
        Todo todo1 = new Todo();
        todo1.setTask("Putzen");
        todo1.setStatus(TodoStatus.Open);

        TodoRepository repo = Mockito.mock(TodoRepository.class);
        TodoService todoService = new TodoService(repo);

        todoService.createTodo(todo1);

        Mockito.verify(repo).save(todo1);
    }

    @Test
    void shouldRetrieveAllTodos() {
        Todo todo1 = new Todo();
        todo1.setTask("Putzen");
        todo1.setStatus(TodoStatus.Open);

        Todo todo2 = new Todo();
        todo2.setTask("Putzen");
        todo2.setStatus(TodoStatus.Open);

        List<Todo> todoList = List.of(todo1, todo2);
        TodoRepository repo = Mockito.mock(TodoRepository.class);
        Mockito.when(repo.findAll()).thenReturn(todoList);

        TodoService todoService = new TodoService(repo);

        Collection<Todo> actual = todoService.getTodos();

        assertThat(actual).isEqualTo(todoList);
    }

    @Test
    void shouldRetrieveOneTodo() {
        Todo todo1 = new Todo();
        todo1.setTask("Putzen");
        todo1.setStatus(TodoStatus.Open);

        TodoRepository repo = Mockito.mock(TodoRepository.class);
        Mockito.when(repo.findById(todo1.getId())).thenReturn(Optional.of(todo1));

        TodoService todoService = new TodoService(repo);

        Todo actual = todoService.getTodo(todo1.getId());

        assertThat(actual).isEqualTo(todo1);
    }

    /*@Test // testet das Repo
    void shouldDeleteTodo() {
        Todo todo1 = new Todo();
        String id = "4711";

        TodoRepository repo = Mockito.mock(TodoRepository.class);
        TodoService todoService = new TodoService(repo);

        todoService.deleteTodo(id);

        Mockito.verify(repo).delete(todo1.getId());
    }*/

   /* @Test ich hole was leeres in Service in der methode. Ich habe ich das Repo gemockt, ich bekommen ein leeres id)
    void shouldChangeTodo() {
        Todo todo1 = new Todo();
        todo1.setId("2");
        todo1.setTask("blumen");
        todo1.setStatus(TodoStatus.Open);

        Todo savedTodo = new Todo();
        savedTodo.setId("2");
        savedTodo.setTask("blumen");
        savedTodo.setStatus(TodoStatus.Done);

        TodoRepository repo = Mockito.mock(TodoRepository.class);
        Mockito.when(repo.findById("2")).thenReturn(Optional.of(todo1));

        TodoService todoService = new TodoService(repo);

        todoService.changeTodo("2", savedTodo);

        Mockito.verify(repo).save(savedTodo);
    }*/


}
