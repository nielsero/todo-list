import { format } from "date-fns";

class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get formattedDueDate() {
        return format(this.dueDate, "dd-MM-yyyy");
    }
}

export default TodoItem;