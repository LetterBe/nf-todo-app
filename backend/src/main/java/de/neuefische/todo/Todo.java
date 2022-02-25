package de.neuefische.todo;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class Todo {

    private String id = UUID.randomUUID().toString();
    private String task = "";
    private String description = "";
    private TodoStatus status = TodoStatus.Open;

    public Todo(String task) {
        this.task = task;
    }
    
}
