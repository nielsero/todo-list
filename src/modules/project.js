class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }

    addTodo(todo) {
        if(this.isTodoTitleValid(todo.title)) {
            this.todos.push(todo);
        }
    }

    deleteTodo(index) {
        if(index < 0 || index >= this.todos.length) {
            console.log("Can't delete todo. Invalid index");
            return;
        }
        this.todos.splice(index, 1);
    }

    isTodoTitleValid(todoTitle) {
        return todoTitle != "";
    }

    findTodo(index) {
        if(index < 0 || index >= this.todos.length) {
            console.log("Can't find todo. Invalid index");
            return null;
        }
        return this.todos[index];
    }
}

export default Project;