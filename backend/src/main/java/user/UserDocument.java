package user;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "usersTodo")
@Data
public class UserDocument {

    @Id
    private String id;
    private String email;
    private String password;
    private String role;
}
