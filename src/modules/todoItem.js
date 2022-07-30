import { format } from "date-fns";

class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    edit(newTitle, newDescription, newDueDate, newPriority) {
        if(newTitle === "") {
            return;
        }
        this.title = newTitle;
        this.description = newDescription;
        this.dueDate = newDueDate;
        this.priority = newPriority;
    }

    get formattedDueDate() {
        return format(this.dueDate, "MM-dd-yyyy");
    }

    get browserRequiredFormattedDueDate() {
        return format(this.dueDate, "yyyy-MM-dd");
    }

    get priorityInWords() {
        const prioritiesInWords = ["None", "Low", "Medium", "High"];
        return prioritiesInWords[this.priority];
    }

    get statusInWords() {
        if(this.completed) {
            return "Complete";
        }
        return "Incomplete";
    }
}

export default TodoItem;