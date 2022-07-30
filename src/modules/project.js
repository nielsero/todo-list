class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }

    addTodo(todo) {
        if(this.isTodoValid(todo)) {
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

    isTodoValid(todo) {
        return todo.title != "";
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